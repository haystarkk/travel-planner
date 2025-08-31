export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-12">
      <div className="text-red-500 text-lg mb-4">⚠️ {message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}