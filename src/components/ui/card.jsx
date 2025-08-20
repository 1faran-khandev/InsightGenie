
const Card = ({ 
  title, 
  value, 
  icon: Icon, 
  className = "",
  onClick,
  loading = false 
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Add subtle animation and loading state */}
      {loading ? (
        <div className="animate-pulse">...</div>
      ) : (
        <>
          {Icon && (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-3 shadow-lg">
              <Icon size={24} />
            </div>
          )}
          {/* Rest of component */}
        </>
      )}
    </div>
  );
};