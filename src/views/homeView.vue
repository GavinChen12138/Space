<template>
  <div class="center-layout" style="margin-top: 70px">
    <div class="typewriter-layout">
      <TypeWriter></TypeWriter>
    </div>
    <div class="card" style="width: 18rem">
      <img src="../assets/pic/Pic2.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img src="../assets/pic/Pic1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img src="../assets/pic/Pic3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
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
.typewriter-layout {
  width: 100vw;
}
</style>