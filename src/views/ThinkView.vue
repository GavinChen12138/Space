<template>
  <div class="blankdiv"></div>
  <div class="bg-slate-200">
    <input type="text" v-model="inputtext" />
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1">
          <div style="border: 1px black solid">{{ inputtext }}</div>
        </div>
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
    };
  },
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