
let tasks = [
   // Exemplo de lista de tarefas inicial
   { id: '1', title: 'Tarefa 1', description: 'Descrição da Tarefa 1', dueDate: '01/01/2024' },
   { id: '2', title: 'Tarefa 2', description: 'Descrição da Tarefa 2', dueDate: '02/01/2024' },
   { id: '3', title: 'Tarefa 3', description: 'Descrição da Tarefa 3', dueDate: '03/01/2024' },
 ];
 
 export const getAllTasks = () => {
   return tasks;
 };
 
 export const addTask = (newTask) => {
   tasks = [...tasks, newTask];
 };
 
 export const deleteTask = (taskId) => {
   tasks = tasks.filter(task => task.id !== taskId);
 };
 
 export const updateTask = (updatedTask) => {
   tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
 };
 