# Full-Stack Contact Form
This project is a complete, full-stack web application for handling and storing form submissions. The frontend is built using standard web technologies, while the backend leverages the popular Node.js, Express, and MongoDB stack.

## ✨ Features
*   **Complete Full-Stack Implementation:** A robust solution covering both frontend and backend development.
*   **Interactive Frontend:** A clean, responsive form created with HTML and styled with CSS.
*   **Client-Side Validation:** The form uses vanilla JavaScript to provide instant feedback and ensure data integrity before submission.
*   **RESTful API:** An Express.js backend provides a RESTful API to handle form submissions and interact with the database.
*   **Persistent Storage:** Data is saved to a MongoDB database, ensuring no submissions are lost.
*   **Scalable Backend:** The Node.js and Express architecture is a modern, efficient, and scalable foundation for web applications.

## 🚀 Technologies Used
**Frontend**
*   **HTML5:** For the form's structure.
*   **CSS3:** For styling and a responsive layout.
*   **Vanilla JavaScript:** For client-side validation and form handling.

**Backend**
*   **Node.js:** The JavaScript runtime environment for building the server.
*   **Express.js:** A minimal and flexible Node.js framework used to build the server-side application.
*   **MongoDB:** A NoSQL database for storing form data.
*   **Mongoose.js:** An Object Data Modeling (ODM) library for MongoDB and Node.js to manage relationships between data.

## 💻 How to Run Locally

### Prerequisites
*   Node.js installed on your machine.
*   MongoDB installed or a cloud-hosted MongoDB Atlas account.

### Steps
1.  **Clone the repository**
    ```sh
    git clone https://github.com/Chemistry2i/Animated-Form.git
    cd your-repo-name
    ```

2.  **Set up the backend**
    *   Navigate to the backend directory.
    *   Create a `.env` file with your MongoDB connection string:
        ```env
        MONGO_URI="your_mongodb_connection_string"
        ```
    *   Install dependencies and start the server:
        ```sh
        npm install
        npm start
        ```

3.  **Launch the frontend**
    *   Open the `index.html` file in your web browser to view the form.
    *   Fill out the form and submit it. The data will be sent to your running Node.js server and saved to the MongoDB database.

## 🤝 Contribution
Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.

## 📄 License
This project is licensed under the MIT License.
