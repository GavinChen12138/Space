<template>
  <div
    class="bg-slate-200 flex justify-center items-center"
    style="height: 100vh"
  >
    <TypeWriter></TypeWriter>
  </div>
</template>

<script>
import TypeWriter from "@/components/typeWriter.vue";
export default {
  name: "HomeView",
  components: {
    TypeWriter,
  },
};
</script>
