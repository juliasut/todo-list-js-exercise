function newTask (title, description) {
  const task = {
    title,
    description,
    complete: false,


    logState: function () {
    console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`);
    },

    markCompleted: function () {
    this.complete = true;
    }
  };
  return task;
}



// DRIVER CODE BELOW
const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do laundry', '😨');
const tasks = [task1, task2];
task1.title;
task1.markCompleted();
console.log(tasks);
