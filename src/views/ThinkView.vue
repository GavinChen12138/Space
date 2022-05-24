<template>
  <div class="blankdiv"></div>
  <div class="bg-slate-200">
    <div class="stats shadow">
      <div class="stat hover:bg-fuchsia-100">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Total Likes</div>
        <div class="stat-value text-primary">41.8K</div>
        <div class="stat-desc">在即刻社交平台的点赞量</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Followers</div>
        <div class="stat-value text-secondary">1.7k</div>
        <div class="stat-desc">在即刻社交平台的被关注者</div>
      </div>
    </div>
  </div>
  <div>享受探索、表达和创造</div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  mounted() {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  },
};
</script>

<style>
.blankdiv {
  height: 64px;
}
</style>