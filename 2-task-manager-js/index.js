// Gestionnaire de tâches simple
const tasks = [];

function addTask(task) {
    if (!task || typeof task !== "string") {
        console.log("Invalid task");
        return;
    }
    tasks.push({
        id: tasks.length + 1,
        name: task,
        completed: false,
    });
    console.log("Task added:", task);
}

function completeTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            console.log("Task completed:", tasks[i].name);
            return;
        }
    }
    console.log("Task not found");
}

function deleteTask(id) {
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        console.log("Task deleted:", tasks[index].name);
        tasks.splice(index, 1);
    } else {
        console.log("Task not found");
    }
}

function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available");
        return;
    }

    tasks.forEach(task => {
        console.log(`${task.id}. ${task.name} - ${task.completed ? "Completed" : "Pending"}`);
    });
}

// Exemple d'utilisation
addTask("Learn JavaScript");
addTask("Refactor code");
completeTask(1);
deleteTask(2);
listTasks();
