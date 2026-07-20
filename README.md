# 📚 BookStore MERN Application

A full-stack BookStore Management System built using the MERN Stack. The application supports three roles: User, Seller, and Admin. Users can browse and order books, sellers can manage their books, and admins can manage users, sellers, and books.

---
### Frontend
https://book-store-mern-fnchc67jy-roshinianupoju5-gmailcoms-projects.vercel.app

### Backend API
https://bookstore-mern-38rd.onrender.com/

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- Multer (Image Upload)

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

# Features

## 👤 User

- User Registration
- User Login
- Browse Books
- View Book Details
- Place Orders
- View My Orders

---

## 🛒 Seller

- Seller Registration
- Seller Login
- Add New Books
- Upload Book Images
- Edit Books
- Delete Books
- View Seller Orders

---

## 👨‍💼 Admin

- Admin Registration
- Admin Login
- View All Users
- View All Sellers
- View All Books
- Manage Platform

---

# 📂 Project Structure

```
BookStore/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/bookstore-mern.git
```

Move into project

```bash
cd bookstore-mern
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the server folder.

```
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

# 📡 API Routes

## User

```
POST /user/register

POST /user/login
```

---

## Seller

```
POST /seller/register

POST /seller/login
```

---

## Admin

```
POST /admin/register

POST /admin/login
```

---

## Books

```
GET /seller/books

POST /seller/add-book

PUT /seller/edit-book/:id

DELETE /seller/delete-book/:id
```

---

## Orders

```
POST /user/order

GET /user/orders

GET /seller/orders
```

---

# 📸 Screenshots

- Home Page
- User Dashboard
- Seller Dashboard
- Admin Dashboard
- Add Book
- My Orders

<img width="1918" height="965" alt="image" src="https://github.com/user-attachments/assets/dcd9c04e-1ff1-4b9d-8865-f0edf27e684f" />


---

# 👨‍💻 Author

**Roshini Anupoju**
LinkedIn:https://www.linkedin.com/in/roshini-anupoju-05b729326/


