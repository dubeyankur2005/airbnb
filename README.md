# Airbnb Clone

A modern Airbnb-inspired web application built using **React, Node.js, and Express.js**.

This project allows users to add rental properties and display them on the home page. It was built to practice React state management, form handling, API integration, and frontend-backend communication.

---

## Features

*  Modern Airbnb-inspired UI
*  Responsive Navbar
*  Hero Section
*  Add New Property Form
*  Display Property Cards
*  React State Management
*  Frontend ↔ Backend Integration
*  Send Data using POST API
*  Fetch Data using GET API

---

##  Tech Stack

### Frontend

* React.js
* Bootstrap 5
* CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* CORS

---

## 📂 Project Structure

```text
airbnb-clone/

backend/

 ├── server.js

 ├── package.json

frontend/

 └── airbnb/

      ├── src/

      │    ├── component/

      │    │    ├── Navbar.jsx

      │    │    ├── Hero.jsx

      │    │    ├── Home.jsx

      │    │    ├── HomeCard.jsx

      │    │    └── AddHome.jsx

      │    ├── App.jsx

      │    └── main.jsx

      └── package.json
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/your-username/airbnb-clone.git
```

Move into the project:

```bash
cd airbnb-clone
```

---

### Install Backend Dependencies

```bash
cd backend

npm install
```

Run backend:

```bash
node server.js
```

Backend runs on:

```text
http://localhost:3000
```

---

### Install Frontend Dependencies

```bash
cd frontend/airbnb

npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Get all homes

```http
GET /home
```

### Add a home

```http
POST /add-home
```

---

##  Concepts Practiced

* useState Hook
* useEffect Hook
* Controlled Components
* Form Handling
* Event Handling
* Fetch API
* Async/Await
* React Re-rendering
* Express Middleware
* GET Requests
* POST Requests
* Frontend ↔ Backend Communication

---

##  Future Improvements

* 🔍 Search Properties
* 🗑️ Delete Property
* ✏️ Edit Property
* 🖼️ Upload Images
* ❤️ Add Favorites
* 🗄️ MongoDB Integration
* 🔐 User Authentication

---

##  Author

**Ankur Dubey**

3rd Year B.Tech Computer Science Student

Built while learning the MERN stack.

```
```
