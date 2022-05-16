<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Space</a>
      <button
        class="navbar-toggler bg-light navbar-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">关于我</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/work">我的作品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/think">想法</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: #1a1a1a;
}
.navbar {
  background-color: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(10px);
  color: #2c3e50;
}
.nav-link {
  color: #2c3e50 !important;
}
</style>
<script>
</script>