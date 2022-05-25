<template>
  <div class="blankdiv">1</div>
  <div
    class="flex justify-center items-center flex-wrap p-3"
    style="min-height: 90vh"
  >
    <div class="card w-96 bg-base-100 shadow-xl m-1">
      <figure>
        <img src="https://s1.328888.xyz/2022/05/25/l01Oy.jpg" alt="Pic" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">辑课生涯品牌设计</h2>
        <p>为辑课生涯交付一套符合调性的品牌设计，并在公众号和线下使用</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">点击了解</button>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl m-1">
      <figure>
        <img src="https://s1.328888.xyz/2022/05/25/l0Vhd.jpg" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">辑课生涯SVG交互推文</h2>
        <p>采用SVG，使微信推文实现图文交互，用作企业宣传活动使用</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">点击了解</button>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl m-1">
      <figure>
        <img src="https://s1.328888.xyz/2022/05/25/l0bPk.jpg" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">TechX互动小程序</h2>
        <p>使用微信开发者工具开发，使用Vue框架构建前端，云函数处理请求</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">点击了解</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.blankdiv {
  height: 200px;
  border: 1px solid red;
}
.card {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.card:hover {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  z-index: 10;
}
</style>