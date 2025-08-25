// src/components/ui/Button.jsx
import React from "react";
import { cn } from "@/lib/utils"; 

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
  fullWidth = false,        // ✅ new: full width
  leadingIcon: LeadingIcon, // ✅ new: icon before text
  trailingIcon: TrailingIcon, // ✅ new: icon after text
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition shadow-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-800 focus:ring-gray-300",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full", // ✅ new: fullWidth support
        className
      )}
      {...props}
    >
      {LeadingIcon && <LeadingIcon className="mr-2 h-5 w-5" />}
      {children}
      {TrailingIcon && <TrailingIcon className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default Button;
