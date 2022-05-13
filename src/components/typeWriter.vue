<template>
  <div class="center-layout">
    <h1>
      {{ animationText }}
      <span id="line"></span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationText: "",
    };
  },
  methods: {
    typeWriter() {
      this.animationText = "";
      var fixedtext = "I'm a ",
        replaceText = ["web developer.", "crypto explorer.", "web3 creator."],
        i = 0,
        j = 0,
        isDeleting = false;
      var type = () => {
        var text = fixedtext + replaceText[j];
        if (j == 3) {
          j = 0;
        }
        if (isDeleting) {
          this.animationText = text.substring(0, i);
          i--;
        } else {
          this.animationText = text.substring(0, i + 1);
          i++;
        }
        if (i == text.length) {
          isDeleting = true;
        } else if (i == 5) {
          isDeleting = false;
          j++;
        }
        setTimeout(type, 120);
      };
      type();
    },
  },
  mounted() {
    this.typeWriter();
  },
};
</script>

<style>
.center-layout {
  display: flex;
  justify-content: center;
  align-items: center;
}
#line {
  border-right: 0.07em solid black;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>