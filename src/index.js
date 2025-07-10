document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const taskText = input.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);
    form.reset();
  });
});
