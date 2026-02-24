import { useState, useEffect } from 'react'
import axios from 'axios';

// Quote card: fetches random quote and supports like/unlike.
function QuoteBox({ likedQuotes, setLikedQuotes }) {
    const[quote, setQuote] = useState('');
    const[author, setAuthor] = useState('');
    const[quoteId, setQuoteId] = useState('');
    const[loading, setloading] = useState(true);

    // Fetch a random quote from API.
    async function fetchQuote()
    {
        try {
            setloading(true);
            const response = await axios.get('https://api.quotable.io/random');
            setQuote(response.data?.content || 'No quote found');
            setAuthor(response.data?.author || 'Unknown');
            setQuoteId(response.data?._id || '');
        } catch (error) {
            console.error('Error fetching quote:', error);
            setQuote('Failed to fetch quote. Try again.');
            setAuthor('System');
            setQuoteId('');
        } finally {
            setloading(false);
        }
    }

    // Load one quote when component mounts.
    useEffect(() => {
        fetchQuote();
    }, []);

    // Toggle current quote in liked list.
    function handleLikeToggle()
    {
        if (!quoteId) {
            return;
        }

        const alreadyLiked = likedQuotes.some(function (obj) {
            return obj._id === quoteId;
        });

        if (alreadyLiked) {
            const updatedLikes = likedQuotes.filter(function (obj) {
                return obj._id !== quoteId;
            });
            setLikedQuotes(updatedLikes);
        } else {
            const newLikedQuote = {
                _id: quoteId,
                content: quote,
                author: author
            };
            setLikedQuotes([...likedQuotes, newLikedQuote]);
        }
    }

    const isLiked = likedQuotes.some(function (obj) {
        return obj._id === quoteId;
    });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 border border-purple-100 dark:border-gray-700 transition-all duration-300">
        {loading ? (
            <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">Loading quote...</p>
            </div>
        ) : (
            <div className="text-center py-8">
                <svg className="w-12 h-12 text-purple-400 dark:text-purple-500 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl sm:text-3xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed mb-6 italic">
                    "{quote}"
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                    — {author}
                </p>
            </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
                onClick={fetchQuote} 
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {loading ? 'Fetching...' : '🔄 New Quote'}
            </button>

            <button 
                onClick={handleLikeToggle} 
                disabled={loading || !quoteId}
                className={`flex-1 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isLiked 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white' 
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500'
                }`}
            >
                {isLiked ? '❤️ Unlike' : '🤍 Like'}
            </button>
        </div>
    </div>
  )
}

export default QuoteBox