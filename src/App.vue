<template>
  <div
    class="
      navbar
      text-neutral-l
      fixed
      bg-slate-100
      flex flex-wrap
      justify-center
    "
  >
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="#/about">.Space</a>
    </div>
    <div class="hidden sm:flex basis-8/12 items-center justify-end">
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
    <div class="sm:hidden basis-8/12 flex items-end justify-end">
      <label class="btn btn-circle swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" v-model="checkVal" />

        <!-- hamburger icon -->
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          fill="none"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
          />
        </svg>

        <!-- close icon -->
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
    </div>
    <ul
      class="
        basis-full
        sm:hidden
        menu
        w-64
        bg-slate-100
        justify-items-center
        items-center
        flex flex-wrap
        p-2
        rounded-box
      "
      v-show="checkVal"
    >
      <li style="width: 90vw"><a href="#">👤 关于我</a></li>
      <li style="width: 90vw">
        <a href="#/work">🚀 我的作品</a>
      </li>
      <li style="width: 90vw">
        <a href="#/think">💡 想法</a>
      </li>
    </ul>
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
</style>
<script>
export default {
  data() {
    return {
      checkVal: false,
    };
  },
};
</script>
