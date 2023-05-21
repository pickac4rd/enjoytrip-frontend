<template>
<section
    id="hero-animated"
    class="hero-animated d-flex align-items-center mt-5"
  >
    <div
      class="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
      data-aos="zoom-out"
    >
    <div class="section-header">
        <h2>여행 가고 싶죠?</h2>
        <p>지금 다른 사람들은 이렇게 여행을 떠나요, 같이 떠나 보실까요?</p>
      </div>
  <div class="w-120">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="2048"
      img-height="960"
      style="text-shadow: 1px 1px 2px #333;"
>
      <b-carousel-slide :img-src=img1>
        
        <h1>푸른 푸꾸옥
          <br>
          <a href="/list">
          <!-- <b-img :src="banner" style="text-align:right"></b-img> -->
          국내여행 ->
        </a>
        </h1>
        
      </b-carousel-slide>
      <b-carousel-slide :img-src=img2>
        <h1>화려한 빛으로 물들다
          <br>
          <a href="#" style="">
          <!-- <b-img :src="banner" style="text-align:right"></b-img> -->
          국내여행
        </a>
        </h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src=img3>
        <h1>라벤더 향 가득
          <br>
          <a href="#">
          <b-img :src="banner" style="text-align:right"></b-img>
        </a>
        </h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src=img4>
        <h1>언덕 위 마을 프로방스
          <br>
          <a href="#">
          <b-img :src="banner" style="text-align:right"></b-img>
        </a>
        </h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src=img5>
        <h1>자유로운 미국
          <br>
          <a href="#">
          <b-img :src="banner" style="text-align:right"></b-img>
        </a>
        </h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src=img6>
        <h1>대만의 도심
          <br>
          <a href="#">
          <b-img :src="banner" style="text-align:right"></b-img>
        </a>
        </h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src=img7>
        <h1>이번 여름엔</h1>
        <h1>멀리 다녀오세요
          <br>
          <a href="#">
          <b-img :src="banner" style="text-align:right"></b-img>
        </a>
        </h1>

      </b-carousel-slide>
    </b-carousel>
  </div>
  </div>
  </section>
</template>

<script>
  import img1 from "@/assets/img/portfolio/spot-1.jpg"
  import img2 from "@/assets/img/portfolio/spot-2.jpg"
  import img3 from "@/assets/img/portfolio/spot-3.jpg"
  import img4 from "@/assets/img/portfolio/spot-4.jpg"
  import img5 from "@/assets/img/portfolio/spot-5.jpg"
  import img6 from "@/assets/img/portfolio/spot-6.jpg"
  import img7 from "@/assets/img/portfolio/spot-7.jpg"
  import banner from "@/assets/img/banner.png"
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        banner
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
h1{
text-align: right;
text-decoration-style: solid;
font-family: var(--font-third);
}
a{
  text-align: right;
  position: relative;
width: 133px;
height: 30px;
color: #FFFFFF;
font-size: 24px
/* text-decoration-color: #000000; */
/* text-emphasis-color: #000000; */
/* background: #D9D9D9; */
}

b-img{
  text-align: right;
}

</style>