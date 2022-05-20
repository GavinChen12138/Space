<template>
  <div class="navbar text-neutral-l">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">.Space</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-outline btn-sm" style="margin-left: 10px">
        <a href="#">👤 关于我</a>
      </button>
      <button
        class="btn btn-outline btn-sm"
        style="margin-left: 10px"
        v-bind:to="work"
      >
        🚀 我的作品
      </button>
      <button class="btn btn-outline btn-sm" style="margin-left: 10px">
        <a href="#/think">💡 想法</a>
      </button>
    </div>
  </div>
  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
