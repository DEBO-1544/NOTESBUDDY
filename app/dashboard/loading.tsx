export default function Loading() {
  return (
      <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        {/* Animated Spinner */}
        <div className="relative mb-6">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600"></div>
        </div>

        {/* Loading Text */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Loading Notes...</h3>
          <p className="text-sm text-gray-400">Please wait while we fetch your notes</p>
        </div>
      </div>
    </div>
  );
}

