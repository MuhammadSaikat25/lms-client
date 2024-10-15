
# Coding Hero (LMS)

This project is a full-featured Learning Management System (LMS) developed using the MERN stack (MongoDB, Express, React, Node.js). It is designed to provide an efficient and intuitive platform for both administrators and users to interact with educational content. Administrators have the ability to manage courses, and oversee the platform's operation, while users can browse, purchase, and engage with various courses tailored to their learning needs.


## Demo
![Logo](../client/src/assets/WebImg.png)
### https://lmsclinet.vercel.app/
## Features

Here are the key features of the Learning Management System (LMS) built with the MERN stack:

## 1. Admin Features:
Course Management: Create, update, and delete courses, including setting prices, descriptions, and categories.
User Management: View and manage user and assign roles (admin or user).
Content Management: Upload and organize multimedia content (videos, PDFs, etc.) for courses.
Dashboard Analytics: View detailed statistics on course sales, user enrollments, and platform activity.


## 2. User Features:
Course Enrollment & Access: Enroll in and access courses after purchase.
Payment Gateway Integration: Secure payment processing via Stripe for course purchases.
Progress Tracking: Track progress within courses, including completed modules and quiz results.
Course Reviews & Ratings: Provide feedback through course ratings and reviews.
User Profile: Manage personal information, view enrolled courses, and track learning history.

## 3. Authentication & Security:
JWT Authentication: Secure login and session management using JSON Web Tokens.
Role-Based Access Control: Differentiated access levels for admins and users.
Secure Payment Handling: Stripe integration ensures encrypted transactions and payment security.


## 4. Additional Features:
Responsive Design: Mobile-friendly interface for easy access across devices.
Search & Filtering: Advanced search and filtering options to help users find relevant courses.
Interactive Content: Support for quizzes, assignments, and certificates of completion.
Email Notifications: Automated email alerts for enrollment, course progress, and updates.


## Tech Stack

**Client:** React, Redux, TailwindCSS, TypeScript

**Server:** Node, Express,  TypeScript, Nodemailer

**Database:** MongoDb


## Getting Started 🎯


git clone 

cd client
Install packages from the root directory
npm install
# or
yarn install
Then, run the development server:

npm run dev
# or
yarn dev
Open http://localhost:5174 with your browser to see the result.