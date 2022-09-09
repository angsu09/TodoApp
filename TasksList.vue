<template>
    <div class="tasksList">
        <h2>List of Tasks</h2>
        <div class="row mb-3">
            <label> You have got {{completedTasks}} Tasks coming up in the next days.</label>
        </div>
        <table class="table table-responsive table-striped">
            <thead class="table-dark">
                <tr>

                    <th>Task Decription</th>
                    <th class="text-center ">Task Done</th>
                    <th class="text-center ">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task of tasks" :key="task.id">

                    <td for="taskCheckbox">{{task.description}}</td>
                    <td id="taskCheckbox" class="text-center"><label class="form-checkbox">
                            <input class="checkbox" type="checkbox" :disabled="task.completed" :value="task.id" v-model="task.completed"
                                v-on:change="selectTask(task.id)">
                            <i class="form-icon"></i>
                        </label></td>
                    <td class="text-center"><button class="btn btn-sm btn-danger"
                            v-on:click="deleteTask(task.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>

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
            this.tasks.map(task =>{
            if(task.id == id){
                if(!task.completed)
                this.completedTasks--
            }
        })
        await axios.delete(`${baseURL}/${id}`)
        let deletetaskId = this.tasks.map(task => task.id).indexOf(id)
        this.tasks.splice(deletetaskId,1)
     
        } catch (e) {
            console.error(e); 
        }
    }
  }
}
</script>

<style>
    .checkbox{
        width: 20px;
        height: 20px;
    }
</style>