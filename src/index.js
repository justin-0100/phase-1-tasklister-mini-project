 // your code here
 document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  console.log("Form Element:", form);
  console.log("Task List Element:", taskList);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted!");

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    console.log("Task Input Element:", taskInput);
    console.log("Task Input Value:", taskText);

    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);

      console.log("Task added:", taskText);
      console.log("Updated Task List:", taskList.innerHTML); // Logs the updated list

      taskInput.value = ""; // Clear input after adding
    } else {
      console.warn("Empty task input, no task added.");
    }
  });
});



