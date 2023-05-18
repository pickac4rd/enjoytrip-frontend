<template>
  <div class="w-50">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="2048"
      img-height="960"
      style="text-shadow: 1px 1px 2px #333;"

    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide -->
        <!-- caption="First slide" -->
        <!-- text="Nulla vitae elit libero, a pharetra augue mollis interdum." -->
        <!-- img-src="@/assets/img/portfolio/spot-1.jpg" -->
      <!-- ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <b-carousel-slide img-src-lazy="@/assets/img/portfolio/spot-1.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="@/assets/img/portfolio/spot-1.jpg"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-50"
            width="456"
            height="240"
            src="@/assets/img/portfolio/spot-1.jpg"
            alt="image slot"
          >
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
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