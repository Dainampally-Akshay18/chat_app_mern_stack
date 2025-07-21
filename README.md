# Real-Time Chat Application
This is a modern, real-time chat application designed to facilitate seamless communication between users. Built with the powerful MERN (MongoDB, Express.js, React, Node.js) stack, it leverages the speed and efficiency of WebSockets via Socket.IO for instant message delivery. User authentication is handled securely, and the user interface is crafted with Tailwind CSS for a clean, responsive, and highly customizable design. Zustand is employed for efficient and performant client-side state management.

## About The Project

This is a modern, real-time chat application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It leverages Socket.IO for instant message delivery and Tailwind CSS for a sleek, responsive UI. Client-side state is efficiently managed with Zustand.

### Built With

* **Frontend:** React.js, Zustand, Axios, Tailwind CSS, React Router DOM
* **Backend:** Node.js, Express.js, Socket.IO, MongoDB, Mongoose, bcryptjs, jsonwebtoken, CORS

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js (LTS recommended) & npm/Yarn
* MongoDB (local or Atlas)

### Installation

1.  **Clone the repository:**

    git clone [https://github.com/your_username/your_chat_app.git](https://github.com/your_username/your_chat_app.git)
    cd your_chat_app


#### Backend Setup

1.  **Navigate to backend directory:**
    ```bash
    cd backend # or server
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Create a `.env` file** with:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string_here
    JWT_SECRET=your_strong_jwt_secret_key
    ```
4.  **Start the backend server:**
    ```bash
    npm start # or yarn start
    ```
    (Runs on `http://localhost:5000`)

#### Frontend Setup

1.  **Navigate to frontend directory:**
    ```bash
    cd ../frontend # or client
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Create a `.env` file** with:
    ```env
    REACT_APP_API_BASE_URL=http://localhost:5000
    ```
4.  **Start the frontend development server:**
    ```bash
    npm start # or yarn start
    ```
    (Opens in browser, usually `http://localhost:3000`)

## Usage

* Register or Log in to your account.
* Search for users and start real-time conversations.

## Project Structure



your\_chat\_app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js (main entry)
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── stores/ (Zustand)
│   │   ├── services/ (Axios, Socket.IO client)
│   │   ├── App.js
│   │   └── ...
│   ├── tailwind.config.js
│   └── ...
└── README.md



## Contributing

Fork the repo, create a feature branch, commit your changes, push, and open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more details.
