import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import LikedQuotes from "./components/LikedQuotes"
import LikeCountFooter from "./components/LikeCountFooter"

function App() {
  const [likedQuotes, setLikedQuotes] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const themePreferenceKey = "themePreference"

  useEffect(function () {
    const savedLikes = localStorage.getItem("likedQuotes")
    if (savedLikes) {
      setLikedQuotes(JSON.parse(savedLikes))
    }
    const savedDarkMode = localStorage.getItem(themePreferenceKey)
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  useEffect(function () {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes))
  }, [likedQuotes])

  useEffect(function () {
    localStorage.setItem(themePreferenceKey, JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={<Home likedQuotes={likedQuotes} setLikedQuotes={setLikedQuotes} />}
            />
            <Route
              path="/liked"
              element={<LikedQuotes likedQuotes={likedQuotes} setLikedQuotes={setLikedQuotes} />}
            />
          </Routes>
          <LikeCountFooter likedCount={likedQuotes.length} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
