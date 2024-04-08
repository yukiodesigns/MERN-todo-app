# MERN Todo List Project

This is a simple Todo List web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can add, delete, and mark tasks as completed.

## Features

- **Add Task**: Users can add new tasks to the todo list by entering a task name and clicking the "Add" button.
- **Delete Task**: Users can delete tasks by clicking on the delete button next to each task.
- **Mark Task as Completed**: Users can mark tasks as completed by clicking on a checkbox next to each task.

## Technologies Used

- **MongoDB**: Database to store the todo tasks.
- **Express.js**: Backend framework to handle HTTP requests and responses.
- **React.js**: Frontend library to build the user interface.
- **Node.js**: JavaScript runtime environment to run server-side code.
- **Axios**: HTTP client for making requests to the backend API.
- **Bootstrap**: CSS framework for styling the application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/mern-todo-list.git
   ```

2. **Navigate to the project directory**:
   ```
   cd mern-todo-list
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Start the backend server**:
   ```
   npm start
   ```

5. **Navigate to the client directory**:
   ```
   cd client
   ```

6. **Install client dependencies**:
   ```
   npm install
   ```

7. **Start the React development server**:
   ```
   npm start
   ```

8. **Open your web browser** and go to `http://localhost:3000` to view the todo list application.

## API Endpoints

- **GET /todo**: Get all todo tasks.
- **POST /todo/new**: Add a new todo task.
- **DELETE /todo/delete/:id**: Delete a todo task by ID.
- **PUT /todo/update/:id**: Update a todo task (e.g., mark as completed) by ID.

## Project Structure

- **`server.js`**: Entry point for the backend server.
- **`routes/todo.js`**: Defines routes for handling todo tasks CRUD operations.
- **`models/Todo.js`**: Defines the MongoDB Todo schema.
- **`client/src/App.js`**: Main component for the React frontend.
- **`client/src/components/TodoItem.js`**: Component to render individual todo items.
- **`client/src/App.css`**: Styles for the React frontend.

## Contributors

- [Your Name](https://github.com/yourusername)
- [Contributor 1](https://github.com/contributor1)
- [Contributor 2](https://github.com/contributor2)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
