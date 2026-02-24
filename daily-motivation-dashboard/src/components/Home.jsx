import QuoteBox from './QuoteBox'

function Home({ likedQuotes, setLikedQuotes }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
          Daily Motivation Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get inspired with powerful quotes every day ✨
        </p>
      </div>
      <QuoteBox likedQuotes={likedQuotes} setLikedQuotes={setLikedQuotes} />
    </div>
  )
}

export default Home