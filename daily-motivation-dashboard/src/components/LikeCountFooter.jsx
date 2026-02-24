// Footer showing total number of liked quotes.
function LikeCountFooter({ likedCount }) {
  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-t border-purple-200 dark:border-gray-700 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full">
            <span className="text-white text-xl">❤️</span>
          </div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {/* Live liked quotes count */}
            Total Liked Quotes: 
            <span className="ml-2 text-2xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {likedCount}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default LikeCountFooter