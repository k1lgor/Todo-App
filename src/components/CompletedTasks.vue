<template>
    <div class="list-group">
        <draggable v-model="dragging">
            <button
                v-for="(task, index) in this.$store.state.completedTasks"
                :key="index"
                type="button"
                @click="moveToAllTasks(index)"
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
    components: {
        draggable,
    },
    computed: {
        dragging: {
            get() {
                return this.$store.state.completedTasks;
            },
            set(value) {
                return this.$store.commit("rearrangeCompletedTasks", value);
            },
        },
    },
    methods: {
        moveToAllTasks(index) {
            this.$store.dispatch("moveToAllTasks", index);
        },
    },
};
</script>