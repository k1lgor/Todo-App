<template>
    <div class="list-group">
        <input
            type="text"
            placeholder="Add new task"
            @keydown.enter="addNewTask"
            v-model="inputText"
            class="text-center"
        />
        <button
            v-for="(task, index) in this.$store.state.allTasks"
            :key="index"
            type="button"
            @click="completeTask(index)"
            class="list-group-item list-group-item-action"
        >
            {{ task.task }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: "",
        };
    },
    methods: {
        addNewTask() {
            this.$store.dispatch("addNewTask", this.inputText);
            this.inputText = "";
        },
        completeTask(index) {
            console.log(this.$store.state.allTasks[index]);
            this.$store.dispatch("completeTask", index);
        },
    },
};
</script>