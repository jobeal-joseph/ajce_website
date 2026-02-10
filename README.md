# AJCE - Modern Youth-Centric Website

A sleek, high-performance, and visually stunning website for Amal Jyothi College of Engineering (AJCE), designed with the modern youth in mind. This project leverages the MERN stack to deliver a dynamic user experience with "insane" animations and a premium aesthetic.

## 🚀 Project Overview

This repository contains the source code for a reimagined college website that prioritizes user engagement through modern design principles, fluid animations, and intuitive navigation.

### Key Features

*   **Modern & Sleek UI**: A dark-mode first, glassmorphism-inspired design with vibrant gradients and typography.
*   **Dynamic Animations**: Smooth transitions and meaningful micro-interactions to wow the user.
*   **Comprehensive Academic Info**: Detailed sections for all major departments and courses.
*   **Responsive**: Fully optimized for all devices, ensuring a seamless experience on mobile and desktop.

## 🎓 Departments & Courses

This platform features comprehensive information on the wide array of programs offered by AJCE, including:

### B.Tech Programs
*   Artificial Intelligence and Data Science
*   Computer Science and Engineering (General, AI, Cyber Security)
*   Electronics and Communication Engineering
*   Electrical and Electronics Engineering
*   Civil Engineering
*   Mechanical Engineering (General, Automobile)
*   Chemical Engineering
*   Food Technology
*   Metallurgical and Materials Engineering

### Postgraduate & Other Programs
*   Master of Computer Applications (MCA)
*   Integrated MCA (5-Year Program)
*   Bachelor of Computer Applications (BCA)
*   Basic Sciences & Humanities

## 🛠️ Tech Stack

This project is built using the **MERN** stack:

*   **M**ongoDB: Database for storing course data, user info, and content.
*   **E**xpress.js: Backend framework for handling API requests.
*   **R**eact.js: Frontend library for building the interactive user interface (likely using Vite).
*   **N**ode.js: Runtime environment for the server.

**Styling & Animation:**
*   CSS3 (Custom properties, Flexbox/Grid)
*   Framer Motion / GSAP (Recommended for high-end animations)

## 📦 Installation & Setup

Follow these instructions to set up the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or higher)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Local or AtlasURI)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ajce-website.git
cd ajce-website
```

### 2. Backend Setup

Navigate to the server directory (or root if monolithic) and install dependencies.

```bash
# Example if backend is in a 'server' folder
cd server
npm install
```

**Configuration:**
Create a `.env` file in the `server` directory and add your environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3. Frontend Setup

Navigate to the client directory and install dependencies.

```bash
# Example if frontend is in a 'client' folder
cd ../client
npm install
```

### 4. Running the Application

**Start the Backend Server:**

```bash
# Inside 'server' directory
npm start
# OR for development with nodemon
npm run dev
```

**Start the Frontend Client:**

```bash
# Inside 'client' directory
npm run dev
```

The application should now be running. Typically:
*   Frontend: `http://localhost:5173` (if using Vite) or `http://localhost:3000` (CRA)
*   Backend API: `http://localhost:5000`

## 🤝 Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---
*Inspired by [Amal Jyothi College of Engineering](https://www.ajce.in/)*
