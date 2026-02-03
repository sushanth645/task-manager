Task Manager:
A simple Task Management application built using the MERN stack that demonstrates secure authentication, protected APIs, and basic frontend integration.
This project was developed as part of a Backend Developer Intern assignment with a focus on API design, authentication, and scalability.

Backend:
Node.js
Express.js
MongoDB (Atlas)
Mongoose
JWT (jsonwebtoken)
bcryptjs

Frontend:
React.js
Axios
React Router DOM

API Documentation:
base url-http://localhost:5000/api

Auth APIs:
POST /auth/register
POST /auth/login

Task APIs (Protected):
POST /tasks
GET /tasks
DELETE /tasks/:id

How to Run the Project:

1)Clone the Repository
git clone https://github.com/<your-username>/task-manager.git
cd task-manager

2)Backend Setup
cd server
npm install
Run backend:
npm run dev

3)Frontend Setup
cd ../client
npm install
npm start

Testing:
APIs tested using browser and Postman
Manual frontend integration testing
Authentication and authorization validated
