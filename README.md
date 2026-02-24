# Daily Motivation Dashboard 🌞

A frontend React + Vite project that fetches motivational quotes, supports liking/unliking, saves liked quotes in localStorage, supports search/filter on liked quotes, and includes a persistent dark/light theme toggle.

## Live Project Scope

This project is intentionally frontend-only:

- React functional components
- useState + useEffect for UI/data state
- axios for API calls
- react-router-dom for routing
- localStorage for persistence
- Tailwind CSS for styling

No backend service is required.

## Features

- Fetch a random quote from `https://api.quotable.io/random`
- Show loading state while fetching
- Disable quote actions while loading
- Like / unlike the current quote
- Show total liked quotes count
- Liked Quotes page with search/filter
- Delete individual liked quotes from list
- Persist liked quotes to localStorage
- Dark/light mode toggle with saved preference
- Default theme is dark mode when no preference exists

## Tech Stack

- React 19
- Vite 7
- axios
- react-router-dom
- Tailwind CSS 4 (via `@tailwindcss/vite`)

## Project Structure

```
Daily-Motivation-Dashboard/
├─ README.md
├─ .gitignore
└─ daily-motivation-dashboard/
	 ├─ package.json
	 ├─ vite.config.js
	 ├─ .gitignore
	 ├─ src/
	 │  ├─ App.jsx
	 │  ├─ index.css
	 │  ├─ main.jsx
	 │  └─ components/
	 │     ├─ Navbar.jsx
	 │     ├─ Home.jsx
	 │     ├─ QuoteBox.jsx
	 │     ├─ LikedQuotes.jsx
	 │     ├─ SearchBox.jsx
	 │     └─ LikeCountFooter.jsx
	 └─ public/
```

## Component Responsibilities

- `App.jsx`
	- App-level state: `likedQuotes`, `darkMode`
	- localStorage sync for likes and theme preference
	- Routing setup (`/` and `/liked`)
- `Navbar.jsx`
	- Navigation links
	- Theme toggle button
- `Home.jsx`
	- Home page container
	- Renders `QuoteBox`
- `QuoteBox.jsx`
	- Fetches quote from API
	- Shows loading / quote content
	- New Quote and Like/Unlike actions
- `LikedQuotes.jsx`
	- Shows all liked quotes
	- Search filtering
	- Delete quote action
- `SearchBox.jsx`
	- Controlled search input
- `LikeCountFooter.jsx`
	- Total liked quotes count

## LocalStorage Keys Used

- `likedQuotes` → array of saved liked quote objects
- `themePreference` → boolean (`true` = dark mode, `false` = light mode)

## API Notes

- Endpoint used: `http://api.quotable.io/random`
- This is called directly from frontend using axios.
- No API key is currently required by this implementation.
- Because there is no private secret, `.env` is not needed for the current API usage.

## Getting Started (Local)

1. Open terminal in the app folder:

	 ```bash
	 cd daily-motivation-dashboard
	 ```

2. Install dependencies:

	 ```bash
	 npm install
	 ```

3. Start dev server:

	 ```bash
	 npm run dev
	 ```

4. Build production bundle:

	 ```bash
	 npm run build
	 ```

## Routing

- `/` → Home (quote fetch + like flow)
- `/liked` → Liked quotes list + search + delete

## Deployment (Vercel)

Since this is frontend-only, Vercel is sufficient.

### Recommended settings

- Framework Preset: `Vite`
- Root Directory: `daily-motivation-dashboard`
- Build Command: `npm run build`
- Output Directory: `dist`

### Deployment steps

1. Push repository to GitHub.
2. Import repository in Vercel.
3. Set root directory to `daily-motivation-dashboard`.
4. Deploy.

## Live Demo

Add your deployed Vercel URL here:

- Vercel Link: https://daily-motivation-dashboard.vercel.app/

## Current Completion Status

✅ Core functionality complete  
✅ UI complete  
✅ Theme persistence complete  
✅ Liked quote persistence complete  
✅ Delete from liked list complete  
✅ Build passes

## Future Improvements (Optional)

- Add toast feedback for like/unlike/delete actions
- Add quote categories/tags filtering
- Add copy/share quote action
- Add tests (component + integration)


