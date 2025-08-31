export default function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
      <div className="bg-gray-200 h-6 rounded mb-2"></div>
      <div className="bg-gray-200 h-4 rounded w-2/3"></div>
    </div>
  );
}