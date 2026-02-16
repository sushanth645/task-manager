# Task Manager - MERN Stack Application

## Project Overview
A simple Task Management application demonstrating secure authentication, protected APIs, and frontend-backend integration. Built as part of a Frontend Developer Intern assignment focusing on responsive design, form validation, and API integration.

## Technology Stack

### Backend
- Node.js & Express.js - Server and API framework
- MongoDB with Mongoose - Database and ODM
- JWT & bcryptjs - Authentication and password security

### Frontend
- React.js - User interface
- Axios - API communication
- React Router DOM - Navigation
- CSS3 - Styling

## Core Features
- User registration and login system
- JWT-based secure authentication
- Protected routes on both frontend and backend
- Create new tasks with title and description
- View all user's tasks
- Delete tasks
- Responsive design for all devices
- Comprehensive error handling and form validation

## API Endpoints

### Authentication (Public)
- **POST /auth/register** - Create new user account
- **POST /auth/login** - Login and receive JWT token

### Tasks (Protected - Requires Token)
- **POST /tasks** - Create a new task
- **GET /tasks** - Retrieve all tasks for logged-in user
- **DELETE /tasks/:id** - Delete a specific task

## Project Structure
- **Server folder** - Backend with controllers, models, middleware, routes, and config
- **Client folder** - Frontend with pages (Login, Register, Dashboard), API configuration, and styling

## Setup Process
1. Clone repository from GitHub
2. Install backend dependencies and configure MongoDB connection
3. Install frontend dependencies and set API URL
4. Run backend server on port 5000
5. Run frontend on port 3000

## Security Implementation
- Passwords hashed using bcryptjs before storage
- JWT tokens for session management (24-hour expiration)
- Protected routes redirect unauthorized users
- API middleware validates tokens on every request
- CORS configured for frontend-backend communication

## Database Design
- **User Model** - Stores name, email, hashed password, timestamps
- **Task Model** - Stores title, description, user reference, timestamps

## Testing Coverage
- Backend APIs tested using Postman
- Manual frontend testing for all user flows
- Authentication and authorization verified
- All CRUD operations validated
- Form validation tested
- Protected routes access tested
