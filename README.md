
---

```markdown
# Book Review API

A RESTful API for managing books and reviews, built with Node.js, Express.js, MongoDB, and JWT authentication.

---

## 🚀 Features

- User signup and login with JWT authentication  
- Add new books (authenticated users only)  
- View all books with pagination and filters (author, genre)  
- Get book details with average rating and paginated reviews  
- Submit, update, and delete reviews (one review per user per book)  
- Search books by title or author (partial and case-insensitive)  

---

## 🛠️ Tech Stack

| Technology    | Purpose                     |
| ------------- | --------------------------- |
| Node.js       | Backend runtime             |
| Express.js    | Web framework               |
| MongoDB       | Database                   |
| Mongoose      | MongoDB ODM                 |
| JSON Web Token| Authentication              |
| bcrypt       | Password hashing            |
| dotenv       | Environment variable config |

---

## 📂 Project Structure

```

book-review-api/
├── mongodb/
├── models/
├── routes/
├── index.js
├── jwt.js
├── .env
└── README.md

```

---

## 🔑 Environment Variables

Create a `.env`:

```

PORT=3000
MONGO\_URL\_LOCAL=your\_mongodb\_connection\_string
JWT\_SECRET=your\_jwt\_secret\_key

````

---

## 💻 Setup & Run Locally

```bash
git clone https://github.com/pranavv04/bookSystemAssignment.git
cd book-review-api
npm install
cp  .env
# Edit .env file with your configuration
npm start
````

The server will run on `http://localhost:3000` (or your specified port).

---

## 📬 API Endpoints

### Authentication

| Method | Endpoint  | Description         |
| ------ | --------- | ------------------- |
| POST   | `/signup` | Register a new user |
| POST   | `/login`  | Login and get a JWT |

### Books

| Method | Endpoint     | Description                                 |
| ------ | ------------ | ------------------------------------------- |
| POST   | `/books`     | Add a new book (auth required)              |
| GET    | `/books`     | Get all books (pagination, filters)         |
| GET    | `/books/:id` | Get book details (average rating + reviews) |

### Reviews

| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| POST   | `/reviews/addreviews` | Submit a review (auth required) |
| PUT    | `/reviews/:id`       | Update your review              |
| DELETE | `/reviews/:id`       | Delete your review              |

### Search

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/search?query=` | Search books by title or author |

---

## 🧠 Design Decisions & Assumptions

* Passwords are hashed with bcrypt before storing
* JWT tokens expire after 1 hour for security


---

## 📋 Database Models (Summary)

**User**

```json
{
  "username": "String",
  "email": "String",
  "password": "Hashed String"
}
```

**Book**

```json
{
  "title": "String",
  "author": "String",
  "genre": "String",
  "description": "String",
}
```

**Review**

```json
{
  "userId": "ObjectId",
  "bookId": "ObjectId",
  "rating": "Number",
  "comment": "String"
}
```

---

## 🧪 Example API Request

```bash
curl -X POST http://localhost:3000/signup \
-H "Content-Type: application/json" \
-d '{"username":"tester","email":"tester@example.com","password":"tester123"}'
```

---

## 📁 Submission

* The `.env` file is excluded for security reasons. Please create your own `.env` file as per `.env.example`.
* [GitHub Repository Link](https://github.com/pranavv04/bookSystemAssignment)


