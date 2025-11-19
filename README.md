# 🚀 MERN Bug Tracker – Deployment and DevOps Assignment

## 📚 Overview
This project is a MERN stack application (MongoDB, Express.js, React, Node.js) developed and deployed as part of the Week 7 Deployment & DevOps Essentials assignment. The goal was to prepare the application for production, deploy the backend and frontend, set up CI/CD pipelines, and provide documentation and screenshots of the deployment process.

---

## 🔹 Project Structure
deployment-and-devops-essentials-Arthur-7P-hub/
│
├─ backend/ # Express.js backend
│ ├─ routes/ # API routes
│ ├─ models/ # Mongoose models
│ ├─ server.js # Backend entry point
│ ├─ package.json
│ └─ .gitignore
│
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ App.js # Main React component
│ │ └─ ...
│ ├─ public/
│ ├─ package.json
│ └─ .gitignore
│
├─ submission/ # Screenshots for assignment submission
│ ├─ render_backend.png
│ ├─ netlify_frontend.png
│ └─ terminal_commands.png
│
└─ README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1. Backend Setup
1. Navigate to the backend folder:
```bash
cd backend
Install dependencies:

bash
Copy code
npm install
Start the server locally:

bash
Copy code
npm run dev
Environment variable needed:

MONGO_URI: MongoDB Atlas connection string (stored in .env or Render environment variable)

Example:

env
Copy code
MONGO_URI=mongodb+srv://ArthurUser:Arthur7@cluster0.fu4hr8d.mongodb.net/bugtracker?retryWrites=true&w=majority
2. Frontend Setup
Navigate to the client folder:

bash
Copy code
cd client
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
Build for production:

bash
Copy code
npm run build
3. Deployment
Backend
Platform: Render

URL: https://arthur-backend-deployment-file.onrender.com

Notes: Backend deployed to Render using Node.js environment with environment variables configured. (Local MongoDB connection needs correction for live deployment.)

Frontend
Platform: Netlify

URL: Frontend deployed via Netlify
(Replace this with your actual Netlify URL)

Notes: Frontend deployed from client folder. Build command: npm run build, publish directory: client/build.

4. CI/CD
Platform: GitHub Actions

Workflows:

Frontend tests and build: frontend-ci.yml

Backend tests: backend-ci.yml

Frontend deployment: frontend-cd.yml

Backend deployment: backend-cd.yml

Notes: Automatic deployments occur when changes are pushed to the main branch.

5. Screenshots
The submission/ folder includes screenshots demonstrating:

Backend deployment logs on Render

Frontend deployment on Netlify

Terminal commands and structure

6. Additional Notes
MongoDB connection issue is pending resolution; local testing works fine.

CI/CD pipelines are configured and ready for deployment verification.

All environment variables are configured via .env locally and Render/Netlify for production.

7. How to Run Locally
bash
Copy code
# Backend
cd backend
npm install
npm run dev

# Frontend
cd client
npm install
npm start
