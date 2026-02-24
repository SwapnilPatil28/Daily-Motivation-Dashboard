import { useState } from 'react'
import SearchBox from './SearchBox'

// Liked quotes page with search and delete support.
function LikedQuotes({ likedQuotes, setLikedQuotes }) {
  const [searchText, setSearchText] = useState('')

  // Remove one quote from liked list.
  function handleDeleteQuote(quoteId) {
    const updatedLikes = likedQuotes.filter(function (obj) {
      return obj._id !== quoteId
    })
    setLikedQuotes(updatedLikes)
  }

  // Filter by quote text or author.
  const filteredQuotes = likedQuotes.filter(function (obj) {
    const quoteText = obj.content.toLowerCase()
    const authorText = obj.author.toLowerCase()
    const search = searchText.toLowerCase()

    return quoteText.includes(search) || authorText.includes(search)
  })

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 dark:from-red-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
          ❤️ All Liked Quotes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Your collection of inspiration
        </p>
      </div>
      
      <div className="mb-8">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </div>

      {/* Empty + filtered empty states */}
      {likedQuotes.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">💔</div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">No liked quotes yet.</p>
          <p className="text-gray-500 dark:text-gray-500 mt-2">Start liking quotes to build your collection!</p>
        </div>
      ) : filteredQuotes.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">No quotes match your search.</p>
          <p className="text-gray-500 dark:text-gray-500 mt-2">Try a different search term.</p>
        </div>
      ) : (
        // Render liked quotes list
        <div className="grid gap-6">
          {filteredQuotes.map(function (obj) {
            return (
              <div 
                key={obj._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-6 sm:p-8 border border-pink-100 dark:border-gray-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                      ❤️
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed mb-3 italic">
                      "{obj.content}"
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                      — {obj.author}
                    </p>
                  </div>
                  <button
                    onClick={function () {
                      handleDeleteQuote(obj._id)
                    }}
                    className="self-end sm:self-auto h-9 w-9 rounded-full border border-red-200 text-red-500 hover:bg-red-50 dark:border-red-900/60 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors duration-200"
                    aria-label="Delete liked quote"
                    title="Delete quote"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 mx-auto"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4h8v2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 6l-1 14H6L5 6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 11v6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 11v6" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LikedQuotes