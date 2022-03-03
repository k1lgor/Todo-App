<template>
    <div class="list-group">
        <button
            v-for="(task, index) in this.$store.state.completedTasks"
            :key="index"
            type="button"
            @click="moveToAllTasks(index)"
            class="list-group-item list-group-item-action"
        >
            {{ task.task }}
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        moveToAllTasks(index) {
            this.$store.dispatch('moveToAllTasks', index)
        }
    },
}
</script>