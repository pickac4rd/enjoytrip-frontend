<template>
  <b-container class="bv-example-row mt-3 text-center">
    <section id="listSchedule" class="pb-0" data-aos="zoom-in-up">
    <div class="container" style="min-height: 750px">
      <div class="section-header">
        <h2>여행정보 공유 게시판</h2>
      </div>
    <router-view></router-view>
    </div>
    </section>
  </b-container>
</template>
<script>
export default {
  name: "AppBoard",
};
</script>
<style scoped>
.underline-hotpink {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(231, 27, 139, 0.3) 30%);
}
</style>
