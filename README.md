# React To-Do List App

A fun, user-friendly, and elegantly designed application to manage your daily tasks with a splash of color!

## Description 

This application is a simple to-do list app built with ReactJS. It sports a minimal design with a touch of soft UI elements, which makes it as delightful to look at as it is to use. The color palette centers around a vibrant pink (#e26565), bringing an element of fun to your daily task management. With the To-Do List App, task management isn't just practical - it's also visually pleasing.

## Features

- [X] Add new tasks to your list
- [X] Update the details of a task
- [X] Delete tasks that are no longer needed
- [X] Mark tasks as completed or incomplete
- [X] Filter tasks by their status (all, completed, incomplete)
- [X] Persistent data storage, so your tasks are saved even if you refresh the page
- [ ] Stylish, fixed footer with author information

## How to Run

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Run `npm install` to install all dependencies
4. Run `npm start` to start the application
5. Open your browser and visit `http://localhost:3000`
6. Enjoy managing your tasks with style!

## Code Explanation

The app is primarily built with two components: `App` and `Task`. 

- `App` is the main component handling the logic for task creation, deletion, update, and filtering. It also saves the tasks in local storage to ensure data persistence.

- `Task` is a child component used to render individual tasks. It receives its props from the `App` component and also triggers the update and delete functionalities by invoking the corresponding functions passed down from the `App` component.

The styling of the app is managed via the `App.css` file. It follows a minimalistic soft UI approach with a lively color scheme centered around pink. 

## useEffect 

This is a use of the `useEffect` hook in React, which allows for performing side effects in function components. 

The `useEffect` hook accepts two arguments: a function and an array of dependencies. The function passed to `useEffect` will run after the render is committed to the screen (similar to `componentDidUpdate` and `componentDidMount` in class components).

In this particular snippet:

```javascript
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

The effect is setting an item in the local storage. The key of the item is 'todos', and the value is the stringified version of the `todos` state. The `JSON.stringify(todos)` is used because local storage can only store strings, and `todos` is an array.

The `[todos]` after the function is a dependency array. This tells React that the effect function should be called not on every render, but only when the `todos` state changes. In other words, whenever a new todo is added, or an existing todo is deleted or updated, this effect will run and update the 'todos' item in the local storage to match the new state of `todos`.

This way, the todos list is "persisted" in the local storage of the browser, and it will not be lost even if the page is refreshed. When the app is opened again, the `todos` state can be initialized with the data from local storage, and the user will see the same todos list as before.

## License

This project is licensed under the terms of the MIT license.

## About the Author

The Laughingly Efficient To-Do List App is created by @carobarreirov, an enthusiastic developer with a knack for creating practical and visually appealing web applications. With a background in teaching, she creates applications that are user-friendly, accessible, and educational. She believes that good software should not only be functional but also fun and pleasing to use. With her applications, you'll find a unique blend of functionality, usability, and design.
