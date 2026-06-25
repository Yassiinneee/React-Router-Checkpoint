# 🎬 React Router Movie Application

A modern React application built to demonstrate **React Router**, **state management with React Hooks**, dynamic movie filtering, movie creation, and navigation between pages. This project allows users to browse a collection of movies, filter them by title and rating, add new movies, and view detailed movie information including embedded trailers.

---

# 📋 Project Overview

This checkpoint focuses on implementing:

- React Functional Components
- React Hooks (`useState`)
- Dynamic State Management
- React Router DOM
- Navigation Between Pages
- URL Parameters
- Conditional Rendering
- Movie Filtering
- Add Movie Functionality
- Embedded YouTube Trailers

The application provides a simple yet effective movie catalog where users can explore movies and navigate to dedicated detail pages.

---

# 🚀 Features

## 🎥 Movie Catalog

Display a list of movies including:

- Movie Poster
- Movie Title
- Movie Rating

---

## 🔍 Filter Movies

Users can filter movies by:

### Title

Search movies dynamically using text input.

### Rating

Display only movies that meet or exceed the selected rating.

---

## ➕ Add New Movies

Users can add new movies by providing:

- Title
- Description
- Poster URL
- Rating
- Trailer URL

New movies are instantly added to the application state.

---

## 🛣️ React Router Navigation

The application uses React Router to navigate between:

### Home Page

```bash
/
```

Displays:

- Filters
- Add Movie Form
- Movie List

### Movie Details Page

```bash
/movie/:id
```

Displays:

- Movie Title
- Movie Description
- Embedded Trailer
- Back Navigation Button

---

## 🎬 Embedded Trailers

Each movie contains an embedded YouTube trailer that can be viewed directly within the application.

---

# 🏗️ Project Structure

```bash
React-Router-Checkpoint-main
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src
│   │
│   ├── components
│   │   ├── AddMovie.js
│   │   ├── Filter.js
│   │   ├── MovieCard.js
│   │   ├── MovieDescription.js
│   │   └── MovieList.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# 🧩 Component Architecture

## App.js

The root component responsible for:

- Managing movies state
- Managing filters state
- Configuring routes
- Filtering movies
- Adding new movies

### Main States

```javascript
movies
titleFilter
rateFilter
```

---

## MovieList.js

Responsible for rendering all available movie cards.

### Responsibilities

- Receives filtered movies as props
- Maps through movie collection
- Displays MovieCard components

---

## MovieCard.js

Displays a movie preview card.

### Includes

- Poster Image
- Movie Title
- Movie Rating

### Navigation

When clicked:

```javascript
navigate(`/movie/${movie.id}`)
```

Redirects the user to the movie details page.

---

## MovieDescription.js

Displays complete movie information.

### Features

- Reads movie ID from URL
- Finds movie in state
- Displays:
  - Title
  - Description
  - Trailer
- Back Navigation Button

Uses:

```javascript
useParams()
useNavigate()
```

---

## Filter.js

Provides filtering functionality.

### Filters

- Search by Title
- Minimum Rating

Updates state in real time.

---

## AddMovie.js

Handles movie creation.

### Inputs

- Title
- Description
- Poster URL
- Rating
- Trailer URL

### Validation

Prevents submission when:

```text
Title is empty
OR
Trailer URL is empty
```

---

# 🔄 Application Workflow

## Step 1

Application loads predefined movies.

↓

## Step 2

User can search by title.

↓

## Step 3

User can filter by rating.

↓

## Step 4

User can add a new movie.

↓

## Step 5

Movie list updates automatically.

↓

## Step 6

User clicks a movie card.

↓

## Step 7

React Router navigates to:

```bash
/movie/:id
```

↓

## Step 8

Movie details and trailer are displayed.

↓

## Step 9

User returns to Home page.

---

# ⚙️ Technologies Used

| Technology | Purpose |
|------------|----------|
| React | Frontend Framework |
| React Hooks | State Management |
| React Router DOM | Client-Side Routing |
| JavaScript ES6+ | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |

---

# 📦 Dependencies

Main project dependencies:

```json
{
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "react-router-dom": "^7.14.2",
  "react-scripts": "5.0.1"
}
```

---

# 🛠️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate to Project

```bash
cd React-Router-Checkpoint-main
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm start
```

Application will run on:

```bash
http://localhost:3000
```

---

# 🧪 Available Scripts

### Run Development Server

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Build Production Version

```bash
npm run build
```

### Eject Configuration

```bash
npm run eject
```

---

# 📚 React Router Concepts Demonstrated

### BrowserRouter

Provides routing capabilities for the entire application.

### Routes

Defines all available routes.

### Route

Maps URL paths to components.

### useNavigate()

Programmatic navigation between pages.

### useParams()

Access route parameters from URLs.

### Dynamic Routing

```bash
/movie/:id
```

Allows displaying unique content for each movie.

---

# 🎯 Learning Objectives Achieved

✔ Create a React application using functional components

✔ Manage application state using Hooks

✔ Implement movie filtering

✔ Dynamically add data to state

✔ Configure React Router

✔ Implement dynamic routes

✔ Use URL parameters

✔ Navigate programmatically

✔ Display detailed movie information

✔ Embed external media content

---

# 🔮 Possible Future Improvements

- Edit Existing Movies
- Delete Movies
- Local Storage Persistence
- Backend Integration
- User Authentication
- Favorites System
- Search Suggestions
- Responsive Design Improvements
- Dark Mode
- Pagination
- Movie Categories
- API Integration (TMDB)

---

# 👨‍💻 Author

Yassine Kalthoum

**React Router Checkpoint Project**

Developed as part of a React learning journey focused on:

- React Fundamentals
- Routing
- State Management
- Component Architecture
- Dynamic User Interfaces

---

# ⭐ Conclusion

This project successfully demonstrates how to combine **React Hooks** with **React Router DOM** to create a fully navigable single-page application. It showcases dynamic routing, state-driven UI updates, reusable components, and an intuitive movie browsing experience while following modern React development practices.
