<template>
    <div class="tasksList">
        <h2>List of Tasks</h2>
        <div class="row mb-3">
            <label> {{selected.length}} out of {{tasks.length}} Tasks are selected</label>
        </div>
        <table class="table table-responsive table-striped">
            <thead class="table-dark">
                <tr>
                    <th><label class="form-checkbox">
                            <input type="checkbox" v-model="selectAll" v-on:click="selectAllTask()">
                            <i class="form-icon"></i>
                        </label></th>
                    <th>Task Decription</th>
                    <th class="text-center ">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task of tasks" :key="task.id">
                    <td id="taskCheckbox"><label class="form-checkbox">
                            <input type="checkbox" :value="task.id" v-model="selected" v-on:change="selectTask()">
                            <i class="form-icon"></i>
                        </label></td>
                    <td class="description" for="taskCheckbox">{{task.description}}</td>
                    <td class="text-center"><button class="btn btn-danger"
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
            selected: [],
            selectAll: false
        };
    },
    async created() {
    try {
      const res = await axios.get(baseURL);

      this.tasks = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    selectAllTask() {
		this.selected = [];
		if (!this.selectAll) {

        for (let i in this.tasks) {
			this.selected.push(this.tasks[i].id);
			}
		}

	},
    selectTask() {
        if(this.selected.length !== this.tasks.length) {
            this.selectAll = false
        }
        else{
            this.selectAll = true
        }
    },
    async deleteTask(id) {
        try {
        await axios.delete(baseURL +"/" + id)
        let deletetaskId = this.tasks.map(task => task.id).indexOf(id)
        this.tasks.splice(deletetaskId,1)
        if(this.selected.indexOf(id) >= 0 ) this.selected.splice(this.selected.indexOf(id),1)
        } catch (e) {
            console.error(e); 
        }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>