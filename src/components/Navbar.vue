<template>
    <div class="home-container">
        <router-link
            class="btn btn-primary"
            tag="li"
            :to="{ name: 'all' }"
            active-class="active"
            exact
            >Todo Tasks
        </router-link>
        <router-link
            class="btn btn-primary"
            tag="li"
            :to="{ name: 'completed' }"
            active-class="active"
            >Completed Tasks
        </router-link>
        <br /><br />
        <router-view></router-view>
    </div>
</template>