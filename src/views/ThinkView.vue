<template>
  <div class="blankdiv"></div>
  <div
    class="
      bg-slate-200
      justify-center justify-items-center
      items-center
      flex flex-col
    "
  >
    <div class="w-screen" id="shot">
      <div id="preview" class="flex justify-center items-center">
        <div class="think-card w-3/5 shadow-xl" id="thinkCard">
          <div class="avatar">
            <div
              class="
                w-24
                rounded-full
                ring ring-primary ring-offset-base-100 ring-offset-2
              "
            >
              <img
                id="imgUpload"
                src="https://cdn.lorem.space/images/face/.cache/500x0/sam-burriss-jTSf1xnsoCs-unsplash.jpg"
              />
            </div>
          </div>
          <p style="word-break: break-all">{{ inputtext }}</p>
        </div>
      </div>
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
    </div>
    <input type="file" id="file" />
    <button class="btn btn-primary" @click="uploadTheImg">Upload</button>
    <button class="btn btn-primary" @click="downloadTheMock">Save</button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      inputtext: "",
    };
  },
  methods: {
    //点击Save通过html2canvas将preview的子元素转换成图片，并下载
    downloadTheMock() {
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
  mounted() {
    document.getElementById("rediusSelect").addEventListener("input", (e) => {
      //thinkCard的border-radius属性与rediusSelect的value绑定
      document.getElementById("thinkCard").style.borderRadius =
        e.target.value + "px";
    });
  },
};
</script>

<style>
.blankdiv {
  height: 64px;
}
#preview {
  height: 30rem;
  width: 100%;
  padding: 1rem;
}
.think-card {
  height: 30rem;
  padding: 1rem;
  border: 2px solid #000;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 20px 25px -5px rgb(35, 35, 35), 0 8px 10px -6px rgb(35, 35, 35);
}
</style>