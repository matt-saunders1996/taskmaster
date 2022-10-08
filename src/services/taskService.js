import axios from 'axios';

const TASKMASTER_URL = "http://localhost:3000/"

class TaskService {
    getTask() {
        return axios.get(TASKMASTER_URL);
    };

    getTaskById() {
        return axios.get(TASKMASTER_URL + '/' + taskId);
    };

    createTask(task) {
        return axios.get(TASKMASTER_URL, task)
    } 

    updateTask(task, taskId){
        return axios.put(TASKMASTER_URL + '/' + taskId, task);
    }

    deleteTask(taskId){
        return axios.delete(TASKMASTER_URL + '/' + taskId);
    }
}

export default new TaskService();