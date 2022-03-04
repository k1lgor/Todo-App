<template>
    <div class="list-group">
        <input
            type="text"
            placeholder="Add new task"
            @keydown.enter="addNewTask"
            v-model="inputText"
            class="text-center"
        />
        <draggable v-model="dragging">
            <button
                v-for="(task, index) in this.$store.state.allTasks"
                :key="index"
                type="button"
                @click="completeTask(index)"
                class="list-group-item list-group-item-action"
            >
                {{ task.task }}
            </button>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    data() {
        return {
            inputText: "",
        };
    },
    components: {
        draggable,
    },
    computed: {
        dragging: {
            get() {
                return this.$store.state.allTasks;
            },
            set(value) {
                return this.$store.commit("rearrangeAllTasks", value);
            },
        },
    },
    methods: {
        addNewTask() {
            this.$store.dispatch("addNewTask", this.inputText);
            this.inputText = "";
        },
        completeTask(index) {
            this.$store.dispatch("completeTask", index);
        },
    },
};
</script>
