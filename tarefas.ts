class Task {
  constructor(public id: number, public title: string, public completed: boolean) {}
}


class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const task = new Task(this.tasks.length + 1, title, false);
    this.tasks.push(task);
  }

  completeTask(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = true;
    }
  }

  listTasks(): void {
    console.log("Lista de tarefas:");
    this.tasks.forEach((task) => {
      console.log(`#${task.id}: ${task.title} (Completa: ${task.completed ? 'Sim' : 'Não'})`);
    });
  }
}

const taskManager = new TaskManager();
taskManager.addTask("Fazer compras");
taskManager.addTask("Estudar TypeScript");
taskManager.listTasks();
taskManager.completeTask(1);
taskManager.listTasks();