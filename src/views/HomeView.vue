<template>
  <div class="home">
    <div
      class="
        bg-black
        justify-center justify-items-center
        items-center
        flex flex-wrap
      "
      style="height: 100vh; position: relative"
    >
      <div style="position: absolute">
        <TypeWriter></TypeWriter>
        <button class="btn btn-primary mt-2" @click="moveToPic1PositionSmooth">
          ⬇️Start⬇️
        </button>
      </div>
      <div style="width: 100%; height: 100%">
        <canvas id="canvas3d"></canvas>
      </div>
    </div>
    <div
      class="activebg fisrtbg"
      id="pic1"
      v-bind:style="{
        'background-position-x': positionX,
        'background-position-y': positionY1 + 'px',
      }"
    ></div>
    <div class="content-item">由vue和TailwindCSS构建。</div>
    <div
      class="activebg secondbg"
      id="pic2"
      v-bind:style="{
        'background-position-x': positionX,
        'background-position-y': positionY2 + 'px',
      }"
    ></div>
    <div class="content-item">使用DaisyUI组件库。</div>

    <footer class="footer p-10 bg-base-300 text-base-content">
      <div>
        <span class="footer-title">Dependences</span>
        <a class="link link-hover">html2canvas</a>
        <a class="link link-hover">tailwindcss</a>
        <a class="link link-hover">daisyui</a>
        <a class="link link-hover">splinetool/runtime</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Social</span>
        <div class="grid grid-flow-col gap-4">
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path></svg
          ></a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path></svg
          ></a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path></svg
          ></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import TypeWriter from "@/components/typeWriter.vue";
import { Application } from "@splinetool/runtime";
export default {
  name: "HomeView",
  components: {
    TypeWriter,
  },
  data() {
    return {
      ratio: 0.05,
      positionX: "50%",
      positionY1: 30,
      positionY2: 100,
      positionY3: 150,
      Y1: 0,
      Y2: 0,
      Y3: 0,
      titlePositon: "static",
      titleColor: "transparent",
      titleBorder: "0",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.onload = () => {
      let pic1 = document.getElementById("pic1");
      let pic2 = document.getElementById("pic2");

      this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
      this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio;
      let canvas = document.getElementById("canvas3d");
      let app = new Application(canvas);
      app.load("https://prod.spline.design/6mT0eKj5jZVOp9Bp/scene.splinecode");
    };
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.positionY1 = this.Y1 - scrollTop * this.ratio;
      this.positionY2 = this.Y2 - scrollTop * this.ratio;
      this.positionY3 = this.Y3 - scrollTop * this.ratio;

      if (scrollTop > 900) {
        this.titlePositon = "fixed";
        this.titleColor = "#fff";
        this.titleBorder = "1px solid #e5e5e5";
      } else {
        this.titlePositon = "static";
        this.titleColor = "transparent";
        this.titleBorder = "0";
      }
    },
    moveToPic1PositionSmooth() {
      let pic1 = document.getElementById("pic1");

      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let target = pic1.offsetTop;
      let step = (target - scrollTop) / 100;
      let timer = setInterval(() => {
        scrollTop += step;
        window.scrollTo(0, scrollTop);
        if (scrollTop >= target) {
          clearInterval(timer);
        }
      }, 10);
    },
  },
};
</script>
<style scoped>
.home {
  height: 100%;
}
.title {
  width: 100%;
  height: 75px;
  position: static;
  background-color: transparent;
  z-index: 10;
  top: 0px;
  left: 0px;
  font-size: 0;
}
.title ul,
li {
  float: left;
  list-style: none;
}
.title .item {
  height: 75px;
  line-height: 75px;
  width: 75px;
  text-align: center;
  font-size: 20px;
}
.title .logoLink {
  width: 106px;
  height: 75px;
  overflow: hidden;
  font-size: 0;
  background: transparent
    url(//sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png) no-repeat
    left 15px;
  margin-left: 300px;
}
.title .item:hover {
  background-color: #12b7f5;
}
.circle {
  position: absolute;
  width: 100%;
  height: 52px;
  margin-top: -52px;
  background: transparent
    url(https://sqimg.qq.com/qq_product_operations/im/2018/linearbot.png)
    repeat-x left top;
  text-align: center;
  z-index: 5;
  bottom: 0;
}
.content-item {
  background-color: #fff;
  width: 100%;
  line-height: 400px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.tim-content {
  position: relative;
  width: 100%;
  max-width: 1900px;
  min-width: 960px;
  margin: 0 auto;
  height: 100%;
}
.activebg {
  position: relative;
  width: 100%;
  height: 600px;
  background: #fff;
  background-attachment: fixed;
  background-position: center 0;
  background-repeat: no-repeat;
}
.fisrtbg {
  background-image: url(https://i.postimg.cc/X7JdcLvc/DSCF5013.jpg);
  background-size: cover;
}
.secondbg {
  background-image: url(https://i.postimg.cc/8zY2PZ7y/DSCF3629.jpg);
  background-size: cover;
}
.thirdbg {
  background-image: url(https://sqimg.qq.com/qq_product_operations/im/2015/blog.jpg);
  background-size: cover;
}
.foot {
  background-color: black;
  line-height: 500px;
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
}
.blankdiv {
  height: 64px;
}
.center-layout {
  display: flex;
  justify-content: flex-center;
  align-items: flex-center;
}
</style>