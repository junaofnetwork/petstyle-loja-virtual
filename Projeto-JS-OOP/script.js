// Classe que representa uma tarefa
class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
        this.id = Task.generateId();
    }

    // Alterna o estado de conclusão da tarefa
    toggleCompleted() {
        this.completed = !this.completed;
    }

    // Gera um ID único para cada tarefa
    static generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Classe que gerencia a lista de tarefas
class TaskManager {
    constructor() {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    // Adiciona uma nova tarefa
    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
        this.saveToLocalStorage();
        return task;
    }

    // Remove uma tarefa pelo ID
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveToLocalStorage();
    }

    // Alterna o estado de conclusão da tarefa pelo ID
    toggleTaskCompleted(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleCompleted();
            this.saveToLocalStorage();
        }
    }

    // Salva a lista de tarefas no localStorage
    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Carrega a lista de tarefas do localStorage
    loadFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            this.tasks = tasks.map(taskData => {
                const task = new Task(taskData.description);
                task.completed = taskData.completed;
                task.id = taskData.id;
                return task;
            });
        }
    }
}

// Classe que controla a interface do usuário
class UI {
    constructor(taskManager) {
        this.taskManager = taskManager;
        this.taskListElement = document.getElementById('task-list');
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');

        this.taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });

        this.renderTasks();
    }

    // Adiciona uma tarefa nova
    addTask() {
        const description = this.taskInput.value.trim();
        if (description) {
            const task = this.taskManager.addTask(description);
            this.taskInput.value = '';
            this.renderTask(task);
        }
    }

    // Cria o elemento HTML para uma tarefa
    createTaskElement(task) {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.dataset.id = task.id;

        const taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.textContent = task.description;

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? 'Desmarcar' : 'Concluir';
        toggleButton.addEventListener('click', () => {
            this.taskManager.toggleTaskCompleted(task.id);
            this.updateTaskElement(taskItem, task);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            this.taskManager.removeTask(task.id);
            this.taskListElement.removeChild(taskItem);
        });

        actions.appendChild(toggleButton);
        actions.appendChild(deleteButton);

        taskItem.appendChild(taskText);
        taskItem.appendChild(actions);

        return taskItem;
    }

    // Atualiza o elemento da tarefa após alteração
    updateTaskElement(taskItem, task) {
        if (task.completed) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
        const toggleButton = taskItem.querySelector('.task-actions button:first-child');
        toggleButton.textContent = task.completed ? 'Desmarcar' : 'Concluir';
    }

    // Renderiza uma única tarefa na lista
    renderTask(task) {
        const taskElement = this.createTaskElement(task);
        this.taskListElement.appendChild(taskElement);
    }

    // Renderiza todas as tarefas
    renderTasks() {
        this.taskListElement.innerHTML = '';
        this.taskManager.tasks.forEach(task => this.renderTask(task));
    }
}

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    new UI(taskManager);
});
