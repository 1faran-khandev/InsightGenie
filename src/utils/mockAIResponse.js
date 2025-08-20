export const mockAIResponse = (query, data) => {
  if (!data || data.length === 0) return " Please upload a dataset first.";

  const lowerQuery = query.toLowerCase();

  // Normalize dataset keys once for safe access
  const normalizedData = data.map(item => {
    const obj = {};
    Object.keys(item).forEach(k => {
      obj[k.toLowerCase()] = item[k];
    });
    return obj;
  });

  // Helpers
  const parseNumber = (val) => {
    const num = parseFloat(val?.toString().replace(/,/g, ""));
    return isNaN(num) ? 0 : num;
  };
  const formatNumber = (num) =>
    num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // ---------- Query Handlers ----------

  // Total revenue
  if (lowerQuery.includes("sales") || lowerQuery.includes("revenue") || lowerQuery.includes("total sales")) {
    const totalRevenue = normalizedData.reduce((acc, item) => acc + parseNumber(item.revenue), 0);
    return totalRevenue > 0
      ? ` Total revenue is **$${formatNumber(totalRevenue)}**.`
      : " No revenue data found in dataset.";
  }

  // Average revenue
  if (lowerQuery.includes("average revenue") || lowerQuery.includes("mean revenue") || lowerQuery.includes("avg sales")) {
    const totalRevenue = normalizedData.reduce((acc, item) => acc + parseNumber(item.revenue), 0);
    const avgRevenue = totalRevenue / normalizedData.length;
    return totalRevenue > 0
      ? ` The average revenue per entry is **$${formatNumber(avgRevenue)}**.`
      : " No revenue data found in dataset.";
  }

  // Top product
  if (lowerQuery.includes("top product") || lowerQuery.includes("highest revenue product")) {
    const topProduct = normalizedData.reduce(
      (prev, curr) => (parseNumber(curr.revenue) > parseNumber(prev.revenue) ? curr : prev)
    );
    return topProduct?.product
      ? ` Top-selling product is **${topProduct.product}** with **$${formatNumber(parseNumber(topProduct.revenue))}** in revenue.`
      : " No product data found.";
  }

  // Top N products
  if (lowerQuery.match(/top \d+/) && lowerQuery.includes("product")) {
    const n = parseInt(lowerQuery.match(/top (\d+)/)?.[1] || "3", 10);
    const sortedProducts = [...normalizedData].sort(
      (a, b) => parseNumber(b.revenue) - parseNumber(a.revenue)
    );
    const topProducts = sortedProducts
      .slice(0, n)
      .map(p => `${p.product} ($${formatNumber(parseNumber(p.revenue))})`);
    return topProducts.length
      ? ` Top ${n} products: ${topProducts.join(", ")}.`
      : " No product data found.";
  }

  // Most profitable region
  if (lowerQuery.includes("region") || lowerQuery.includes("location") || lowerQuery.includes("country")) {
    const regionRevenue = {};
    normalizedData.forEach(item => {
      const region = item.region || "Unknown";
      regionRevenue[region] = (regionRevenue[region] || 0) + parseNumber(item.revenue);
    });
    if (Object.keys(regionRevenue).length === 0) return " No region data found.";
    const [region, revenue] = Object.entries(regionRevenue).sort((a, b) => b[1] - a[1])[0];
    return ` The most profitable region is **${region}** with **$${formatNumber(revenue)}** in revenue.`;
  }

  // Customer count
  if (lowerQuery.includes("customers") || lowerQuery.includes("users") || lowerQuery.includes("clients")) {
    const uniqueCustomers = new Set(normalizedData.map(d => d.customer || d.user)).size;
    return ` There are **${uniqueCustomers}** unique customers in your dataset.`;
  }

  // Number of sales (row count)
  if (lowerQuery.includes("number of sales") || lowerQuery.includes("how many sales") || lowerQuery.includes("entries")) {
    return ` Your dataset contains **${normalizedData.length}** sales records.`;
  }

  // Default fallback
  return " I'm analyzing your data. Try asking: `Total sales`, `Top product`, `Average revenue`, or `Most profitable region`.";
};
