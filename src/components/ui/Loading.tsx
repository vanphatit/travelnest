export const LoadingSpinner = ({ size = "md", className = "" }: {
    size?: "sm" | "md" | "lg";
    className?: string;
}) => {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12"
    };

    return (
        <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]} ${className}`} />
    );
};

export const FullPageLoader = ({ message = "Đang tải..." }: { message?: string }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-gray-600">{message}</p>
        </div>
    );
};