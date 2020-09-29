const input = require(`readline-sync`);


const myToDos = [
    {
        task: "React Crud App",
        status: "Not Done",
    },
    {
        task: "Minecraft",
        status: "Done",
    },
    {
        task: "Memory Game",
        status: "Done",
    },
    {
        task: "Amazon website",
        status: "Done",
    },
    {
        task: "Personal website",
        status: "Not Done",
    }

]

function addTask(inputs) {
    const newTask = {
        task: inputs[0],
        status: inputs[1],
    }

    myToDos.push(newTask);
}

function addTaskInput() {
    const task = input.question("Enter your new task: ");
    const status = input.question("Enter status: (done/not done)" ,{limit: ['Done', 'Not Done']}).toLowerCase();
    const inputs = [task, status];

    return inputs;

}

// addTask(addTaskInput());
// console.log(myToDos);

function deleteTask(input) {
    for (let i=0; i< myToDos.length; i++) {
        if (myToDos[i].task.toLowerCase()===input.toLowerCase()) {
            myToDos.splice(i, 1);
            break;
        }
    }

}

function deleteTaskInput() {
    const taskToDelete = input.question("Enter task name to delete: ");
    return taskToDelete;
}
// deleteTask(deleteTaskInput());
// console.log(myToDos);

function markAsDone(input) {
    for (let i=0; i< myToDos.length; i++) {
        if (myToDos[i].task.toLowerCase()===input.toLowerCase()) {
            myToDos[i].status = "Done";
            break;
        }
    }
}

// markAsDone(doneOrUndoneInput());
// console.log(myToDos);

function unMarkAsDone(input) {
    for (let i=0; i< myToDos.length; i++) {
        if (myToDos[i].task.toLowerCase()===input.toLowerCase()) {
            myToDos[i].status = "Not Done";
            break;
        }
    }
}

function doneOrUndoneInput() {
    const taskToMark = input.question("Enter task name to mark: ");
    return taskToMark;
}

// unMarkAsDone(doneOrUndoneInput());
// console.log(myToDos);

function listByStatus() {
    myToDos.sort((a, b) => (a.status < b.status) ? 1 : -1)
}

// listByStatus();
// console.log(myToDos);
