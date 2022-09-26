<template>
    <div class="tasksList">
        <div class=" mb-3">
            <label> You have got {{completedTasks}} Tasks coming up in the next days.</label>
        </div>
        <div class="card col-md-8 col-sm-12">
            <h3 class="card-header">
             To-do List
            </h3>
            <ul v-for="task of tasks" :key="task.id" class="list-group list-group-flush card-body">
                <li class="list-group-item">
                    <div class="row task" >
                            <label class="col col-sm-8 task__text">{{task.description}}</label>
                            <div class="col col-sm-4 text-end ">
                                <button class="btn btn--check"><input class="btn__checkbox" type="checkbox" :disabled="task.completed" :value="task.id"
                                       v-model="task.completed" v-on:change="selectTask(task.id)">
                                <i class="form-icon"></i></button>
                                
                            <button class="btn btn--delete" v-on:click="deleteTask(task.id)"><i class=" btn__icon fa fa-trash"></i></button>
                            </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3001/tasks";
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [],
            completedTasks: 0,
        };
    },
    async created() {
        try {
            const res = await axios.get(baseURL);

            this.tasks = res.data;
            this.tasks.map(task => {
                if (!task.completed) {
                    this.completedTasks++
                }
            });

        } catch (e) {
            console.error(e);
        }
    },
    methods: {

        async selectTask(taskId) {
            await axios.patch(`${baseURL}/${taskId}`, {
                completed: true
            });
            this.completedTasks--
        },
        async deleteTask(id) {
            try {
                this.tasks.map(task => {
                    if (task.id == id) {
                        if (!task.completed)
                            this.completedTasks--
                    }
                })
                await axios.delete(`${baseURL}/${id}`)
                let deletetaskId = this.tasks.map(task => task.id).indexOf(id)
                this.tasks.splice(deletetaskId, 1)

            } catch (e) {
                console.error(e);
            }
        }
    }
}
</script>

<style>
.card-body{
    padding: 1%;
    }

.task__text{
    display: flex;
    align-items: center;
}
.btn:hover{
    border-color: transparent;
}
.btn--check{
    vertical-align: sub;
}
.btn__checkbox {
    width: 16px;
    height: 16px;
}
.btn--delete{
    color: red;
}
.btn__icon{
    font-size: larger;
}
</style>