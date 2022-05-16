<template>
  <div class="center-layout">
    <div class="blank-zone"></div>
    <div class="typewriter-layout">
      <TypeWriter></TypeWriter>
    </div>
  </div>
</template>

<script>
import TypeWriter from "../components/typeWriter.vue";
export default {
  components: { TypeWriter },
};
</script>
<style scoped>
.center-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.blank-zone {
  width: 100%;
  height: 70px;
}
.typewriter-layout {
  width: 100vw;
}
</style>