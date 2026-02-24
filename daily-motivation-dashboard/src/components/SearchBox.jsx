// Reusable search input for filtering liked quotes.
function SearchBox({ searchText, setSearchText }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {/* Controlled input */}
      <input
        type="text"
        placeholder="Search by quote or author..."
        value={searchText}
        onChange={function (e) {
          setSearchText(e.target.value)
        }}
        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm"
      />
    </div>
  )
}

export default SearchBox