<template>
<div id="app">
    <router-view />
</div>
</template>

<style lang="less">
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.cursor--pointer {
    cursor: pointer;
}

.mt-1 {
    margin-top: 1em;
}

.text-align--left{
  text-align: left;
}
</style>
