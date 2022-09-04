<template>
    <div class="col">
        <h2>Create New Task</h2>
        <form  class="row g-3">
            <div class="mb-3">
                <label for="newTaskDesp" class="form-label"> Task Description</label>
                <input type="text" class="form-control" v-model='description'
                    placeholder="Add new task decription" required>
            </div>
            <div class="mb-3">
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