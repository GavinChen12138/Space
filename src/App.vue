<template>
  <div class="navbar text-neutral-l fixed bg-slate-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="#/about">.Space</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-outline btn-sm" style="margin-left: 10px">
        <a href="#">👤 关于我</a>
      </button>
      <button class="btn btn-outline btn-sm" style="margin-left: 10px">
        <a href="#/work">🚀 我的作品</a>
      </button>
      <button class="btn btn-outline btn-sm" style="margin-left: 10px">
        <a href="#/think">💡 想法</a>
      </button>
    </div>
  </div>
  <router-view></router-view>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  z-index: 99;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
