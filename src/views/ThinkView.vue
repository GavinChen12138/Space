<template>
  <div class="blankdiv"></div>
  <div
    class="
      bg-slate-200
      justify-center justify-items-center
      items-center
      flex flex-col
      h-screen
    "
  >
    <div class="w-screen bg-slate-200" id="preview">
      <div class="flex justify-center items-center p-1">
        <div
          class="
            think-card
            w-4/5
            shadow-xl
            flex flex-col
            justify-start justify-items-start
            items-start
          "
          id="thinkCard"
        >
          <div
            class="
              avatar
              flex flex-row
              justify-center justify-items-center
              items-center
            "
          >
            <div class="w-24 rounded-full">
              <img id="imgUpload" src="@/assets/avatar.jpg" />
            </div>

            <p style="font-size: 2rem; margin-left: 1rem">{{ userName }}</p>
            <p style="font-size: 1rem; margin-left: 1rem; color: gray">
              {{ currentTime }}
            </p>
          </div>
          <p
            style="
              word-break: break-all;
              font-size: larger;
              margin-top: 1rem;
              text-align: start;
            "
          >
            {{ inputtext }}
          </p>
        </div>
      </div>
    </div>
    <p class="mt-3">Your name</p>
    <input type="text" class="input w-full max-w-xs" v-model="userName" />
    <p>Your text</p>
    <input type="text" class="input w-full max-w-xs" v-model="inputtext" />

    <p>Border redius</p>
    <input
      type="range"
      min="0"
      max="30"
      value="0"
      class="range w-9/12"
      id="rediusSelect"
    />
    <p>Card width size</p>
    <input
      type="range"
      min="20"
      max="60"
      value="50"
      class="range w-9/12"
      id="sizeSelect"
    />
    <input type="file" id="file" class="mt-2" />
    <div class="flex flex-row w-4/5">
      <div class="basis-1/2">
        <button class="btn btn-primary" @click="uploadTheImg">Upload</button>
      </div>
      <div class="basis-1/2">
        <button class="btn btn-primary basis-1/2" @click="downloadTheMock">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      inputtext: "",
      userName: "User",
      currentTime: "",
    };
  },
  methods: {
    //点击Save通过html2canvas将preview的子元素转换成图片，并下载,并更新currentTime
    downloadTheMock() {
      this.currentTime = new Date().toLocaleString();
      html2canvas(document.getElementById("preview")).then((canvas) => {
        let a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "mock.png";
        a.click();
      });
    },
    //file上传图片后更新到imgUpload内
    uploadTheImg() {
      let file = document.getElementById("file").files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        document.getElementById("imgUpload").src = e.target.result;
      };
    },
  },
  //监听id为numberSelect的value,更新selectNumber
  watch: {},
  mounted() {
    document.getElementById("rediusSelect").addEventListener("input", (e) => {
      //thinkCard的border-radius属性与rediusSelect的value绑定
      document.getElementById("thinkCard").style.borderRadius =
        e.target.value + "px";
    });
    document.getElementById("sizeSelect").addEventListener("input", (e) => {
      //thinkCard的width属性与sizeSelect的value绑定
      document.getElementById("thinkCard").style.width = e.target.value + "rem";
    });
    this.currentTime = new Date().toLocaleString();
  },
};
</script>

<style>
.blankdiv {
  height: 64px;
}
#preview {
  width: 100%;
}
.think-card {
  height: 30rem;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>