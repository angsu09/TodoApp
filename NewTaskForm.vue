<template>
    <div class="col mb-3">
        <h3>Create New Task</h3>
        <form class="row g-3">
            <div class="col col-sm-8">
                <input type="text" class="form-control" v-model='description'
                    placeholder="Add new task decription" required>
            </div>
            <div class="col col-sm-4">
                <button type="submit" v-on:click="addTask" class="btn btn-success">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3001/tasks";

export default {
    data() {
    return {
      tasks: [],
      description: ""
    };
  },
    methods:{
    async addTask() {
      try {
        const newTask = {
            description: this.description,
            completed: false
        }
        const res = await axios.post(baseURL, newTask);

        this.tasks = [...this.tasks, res.data];

        this.description = "";
      } catch (e) {
        console.error(e);
      }
    }
  }
    
    }
</script>

<style lang="scss" scoped>
</style>