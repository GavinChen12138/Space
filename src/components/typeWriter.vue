<template>
  <div class="center-layout">
    <div class="text-card" style="padding-bottom: 1rem">
      <div id="top-bar">
        <div id="red-dot"></div>
        <div id="yellow-dot"></div>
        <div id="green-dot"></div>
        <div id="card-title">Space</div>
      </div>
      <h1 style="margin-left: 1rem">
        ><span class="bg-slate-600">Hi! I'm Gavin Chen.</span>
      </h1>
      <h1 style="margin-left: 1rem">
        >{{ animationText }}
        <span id="line"></span>
      </h1>
    </div>
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
  justify-content: flex-start;
  align-items: flex-start;
}
.text-card {
  min-width: 23rem;
  max-width: 34rem;
  border-radius: 10px;
  box-shadow: #3c3c3c5e 0px 0px 15px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 2rem;
  background-color: #1e1e1e;
  color: white;
}
#top-bar {
  width: 100%;
  height: 2rem;
  background-color: #3c3c3c;
  border: 1px transparent;
  align-self: flex-start;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}
#red-dot {
  width: 1rem;
  height: 1rem;
  background-color: #ff5f57;
  border-radius: 50%;
  margin-left: 1rem;
}
#yellow-dot {
  width: 1rem;
  height: 1rem;
  background-color: #fdbd5f;
  border-radius: 50%;
  margin-left: 0.7rem;
}
#green-dot {
  width: 1rem;
  height: 1rem;
  background-color: #28c840;
  border-radius: 50%;
  margin-left: 0.7rem;
}
#card-title {
  font-size: 1rem;
  font-weight: lighter;
  margin-left: 1rem;
  align-self: center;
  color: white;
}
#line {
  border-right: 0.07em solid rgb(255, 255, 255);
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>