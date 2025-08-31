# 📝 Node.js To-Do List Server

A simple RESTful To-Do List backend built with Node.js native `http` module. This server supports basic CRUD operations on an in-memory to-do list using standard HTTP methods.

---

## 🚀 Features

- Handles `/todos` endpoint
- Supports three HTTP methods:
  - **GET**: Fetch current to-do list
  - **POST**: Add a new item
  - **DELETE**: Remove an existing item
- Proper HTTP status codes and error handling
- No external dependencies

---

## 📡 API Endpoints & Methods

### 1. GET `/todos`

- **Purpose:** Retrieve the full to-do list
- **Response:** Returns a comma-separated string of all to-do items
- **Status Code:** `200 OK`

---

### 2. POST `/todos`

- **Purpose:** Add a new to-do item
- **Request Body:** JSON object with an `item` string property  
  Example: `{ "item": "learn node" }`
- **Response:** Confirmation message and updated list as JSON
- **Status Code:** `201 Created`
- **Errors:**  
  - `400 Bad Request` if body is missing or invalid

---

### 3. DELETE `/todos`

- **Purpose:** Remove a to-do item from the list
- **Request Body:** JSON object with an `item` string property  
  Example: `{ "item": "web dev" }`
- **Response:** Confirmation message and updated list as JSON if item found
- **Status Codes:**  
  - `200 OK` if deleted  
  - `404 Not Found` if item doesn’t exist  
  - `400 Bad Request` if body is missing or invalid

---

## 🚦 Running the Server

1. Save the server code in a file (e.g., `server.js`)
2. Run the server:
   ```bash
   node server.js
