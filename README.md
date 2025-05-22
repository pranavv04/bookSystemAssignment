
---

```markdown
# 📚 Book Review API

A RESTful API for managing books and reviews, built using **Node.js**, **Express.js**, **MongoDB**, and **JWT authentication**.

---

## 🚀 Features

- JWT-based user signup and login  
- Add new books (authenticated users only)  
- View books with pagination and filter support (author, genre)  
- Get detailed book view with average ratings and paginated reviews  
- Submit, update, and delete reviews (one per user per book)  
- Search books by title or author (case-insensitive & partial match)

---

## 🛠️ Tech Stack

| Technology      | Purpose                       |
|----------------|-------------------------------|
| Node.js         | Backend runtime               |
| Express.js      | Server framework              |
| MongoDB         | Database                      |
| Mongoose        | MongoDB ODM                   |
| JWT             | Authentication                |
| bcrypt          | Password hashing              |
| dotenv          | Environment variable config   |

---

## 📁 Folder Structure

```bash
book-review-api/
├── db/                   # MongoDB connection logic
│   └── mongodb.js
│
├── models/               # Mongoose models
│   ├── Book.js
│   ├── User.js
│   └── Review.js
│
├── routes/               # API route handlers
│   ├── book.js
│   ├── user.js
│   └── review.js
│
├── index.js              # Main entry point
├── jwt.js                # JWT token creation logic
├── .env                  # Environment variables (not committed)
├── .gitignore            # Ignore node_modules, .env, etc.
└── README.md             # Project documentation


---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
PORT=3000
MONGO_URL_LOCAL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
````

---

## 💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/pranavv04/bookSystemAssignment.git

# Navigate to the project directory
cd bookSystemAssignment

# Install dependencies
npm install

# Start the server
npm start
```

Server runs at: `http://localhost:3000`

---

## 📬 API Endpoints

### 🧑 Authentication

| Method | Endpoint  | Description         |
| ------ | --------- | ------------------- |
| POST   | `/signup` | Register a new user |
| POST   | `/login`  | Login and get a JWT |

### 📘 Books

| Method | Endpoint     | Description                                 |
| ------ | ------------ | ------------------------------------------- |
| POST   | `/books`     | Add a new book (auth required)              |
| GET    | `/books`     | Get all books (supports pagination/filters) |
| GET    | `/books/:id` | Get book details including reviews & rating |

### 📝 Reviews

| Method | Endpoint              | Description                     |
| ------ | --------------------- | ------------------------------- |
| POST   | `/reviews/addreviews` | Submit a review (auth required) |
| PUT    | `/reviews/:id`        | Update your review              |
| DELETE | `/reviews/:id`        | Delete your review              |

### 🔍 Search

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| GET    | `/search?query=` | Search by title or author (partial) |

---

## 📐 Design Decisions & Assumptions

* Passwords are hashed using `bcrypt`
* JWT tokens expire in 1 hour
* One review per user per book
* All data is validated before storing

---

## 🧾 Data Models

### 👤 User

```json
{
  "username": "String",
  "email": "String",
  "password": "Hashed String"
}
```

### 📖 Book

```json
{
  "title": "String",
  "author": "String",
  "genre": "String",
  "description": "String"
}
```

### ⭐ Review

```json
{
  "userId": "ObjectId",
  "bookId": "ObjectId",
  "rating": "Number",
  "comment": "String"
}
```

---

## 🧪 Example Request (Signup)

```bash
curl -X POST http://localhost:3000/signup \
-H "Content-Type: application/json" \
-d '{"username":"tester","email":"tester@example.com","password":"tester123"}'
```

---

## 📤 Submission

* The `.env` file is excluded via `.gitignore` for security.
* Clone and configure `.env` manually using the example above.
* 📎 [GitHub Repository](https://github.com/pranavv04/bookSystemAssignment)

---

> ✅ All endpoints tested via Postman
> 📌 Code is modular, readable, and documented

```



