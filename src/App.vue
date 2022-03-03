<template>
    <div id="app">
        <div class="containter">
            <div class="row">
                <h1>Todo App</h1>
                <hr />
                <app-navbar></app-navbar>
                <router-link></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    components: {
        appNavbar: Navbar,
    },
};
</script>

