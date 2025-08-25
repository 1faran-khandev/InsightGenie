// utils/mockAIResponse.js

export const mockAIResponse = (query, data) => {
  if (!data || data.length === 0) return " Please upload a dataset first.";

  const lowerQuery = query.toLowerCase();

  // ✅ Normalize dataset keys (case-insensitive access)
  const normalizedData = data.map((item) => {
    const obj = {};
    Object.keys(item).forEach((k) => {
      obj[k.toLowerCase()] = item[k];
    });
    return obj;
  });

  // ---------- Helpers ----------
  const parseNumber = (val) => {
    if (val === null || val === undefined) return 0;
    const cleaned = val.toString().replace(/[^0-9.-]/g, ""); // remove $ , %
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  };

  const formatNumber = (num) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // ---------- Query Handlers ----------
  const handlers = [
    {
      keywords: ["sales", "revenue", "total sales"],
      response: () => {
        const totalRevenue = normalizedData.reduce(
          (acc, item) => acc + parseNumber(item.revenue),
          0
        );
        return totalRevenue > 0
          ? `📊 Total revenue is **$${formatNumber(totalRevenue)}**.`
          : "⚠️ No revenue data found in dataset.";
      },
    },
    {
      keywords: ["average revenue", "mean revenue", "avg sales"],
      response: () => {
        const totalRevenue = normalizedData.reduce(
          (acc, item) => acc + parseNumber(item.revenue),
          0
        );
        const avgRevenue = totalRevenue / normalizedData.length;
        return totalRevenue > 0
          ? `📈 The average revenue per entry is **$${formatNumber(
              avgRevenue
            )}**.`
          : "⚠️ No revenue data found in dataset.";
      },
    },
    {
      keywords: ["top product", "highest revenue product"],
      response: () => {
        const topProduct = normalizedData.reduce((prev, curr) =>
          parseNumber(curr.revenue) > parseNumber(prev.revenue) ? curr : prev
        );
        return topProduct?.product
          ? `🏆 Top-selling product is **${topProduct.product}** with **$${formatNumber(
              parseNumber(topProduct.revenue)
            )}** in revenue.`
          : "⚠️ No product data found.";
      },
    },
    {
      keywords: ["top ", "products"], // detects "top 3 products"
      response: () => {
        const n = parseInt(lowerQuery.match(/top (\d+)/)?.[1] || "3", 10);
        const sorted = [...normalizedData].sort(
          (a, b) => parseNumber(b.revenue) - parseNumber(a.revenue)
        );
        const topN = sorted
          .slice(0, n)
          .map(
            (p, i) =>
              `${i + 1}. ${p.product} ($${formatNumber(parseNumber(p.revenue))})`
          );
        return topN.length
          ? `🏆 Top ${n} products:\n${topN.join("\n")}`
          : "⚠️ No product data found.";
      },
    },
    {
      keywords: ["region", "location", "country"],
      response: () => {
        const regionRevenue = {};
        normalizedData.forEach((item) => {
          const region = item.region || "Unknown";
          regionRevenue[region] =
            (regionRevenue[region] || 0) + parseNumber(item.revenue);
        });
        if (Object.keys(regionRevenue).length === 0)
          return "🌍 No region data found.";
        const [region, revenue] = Object.entries(regionRevenue).sort(
          (a, b) => b[1] - a[1]
        )[0];
        return `🌍 The most profitable region is **${region}** with **$${formatNumber(
          revenue
        )}** in revenue.`;
      },
    },
    {
      keywords: ["customers", "users", "clients"],
      response: () => {
        const uniqueCustomers = new Set(
          normalizedData.map((d) => d.customer || d.user)
        ).size;
        return `👥 There are **${uniqueCustomers}** unique customers in your dataset.`;
      },
    },
    {
      keywords: ["number of sales", "how many sales", "entries", "records"],
      response: () =>
        `🗂️ Your dataset contains **${normalizedData.length}** sales records.`,
    },
  ];

  // ---------- Match Queries ----------
  for (const handler of handlers) {
    if (handler.keywords.some((kw) => lowerQuery.includes(kw))) {
      return handler.response();
    }
  }

  // ---------- Default Fallback ----------
  return `🤔 I'm analyzing your data but couldn't match that query.

💡 Try asking:
- "Total revenue"
- "Average revenue"
- "Top 3 products"
- "Most profitable region"
- "Number of customers"
- "How many sales records"`;
};
