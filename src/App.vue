<template>
    <div id="app">
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    methods: {
    }
};
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
