<template>
<div class="newTaskForm container p-5">
    <div class="row">
        <h1 class="mb-3">
            Welcome to Task Board.
        </h1>
        <NewTaskForm />
        <TasksList />
    </div>   
</div>
</template>

<script>
import NewTaskForm from '../components/NewTaskForm.vue'
import TasksList from '../components/TasksList.vue'
    export default {
        name: 'App',
    components: {
        NewTaskForm,
        TasksList,
    }
    }
</script>

<style>

.newTaskForm {
    background: #f8f9fa;
    border-radius: 3%;
}
        

</style>