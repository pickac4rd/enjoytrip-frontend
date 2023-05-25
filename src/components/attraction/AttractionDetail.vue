<template>
  <section id="spot_detail" data-aos="zoom-in-up">
    <div v-if="attraction" class="container" style="min-height: 750px">
      <div class="section-header">
        <h2 id="spot_title">{{ attraction.title }}</h2>
      </div>

      <div class="row" id="spot_detail_info">
        <div class="col-4 d-flex">
          <b-img
            v-if="attraction.first_image"
            :src="attraction.first_image"
            fluid
            :alt="attraction.title"
            style="max-width: 100%; max-height: 100%; margin: auto"
          />
          <b-img
            v-else
            :src="require('@/assets/img/logo_color.png')"
            fluid
            :alt="attraction.title"
            style="max-width: 100%; max-height: 100%; margin: auto"
          />
        </div>
        <div
          class="mb-4 col-8 d-flex flex-wrap align-items-center ps-3"
          id="info"
        >
          <div class="mt-2">
            <p class="text-start" style="color: black">
              <b-icon icon="telephone-fill"></b-icon> <b>Tel :</b>
              {{ attraction.tel ? attraction.tel : "-" }}<br />
              <b-icon icon="pin-map-fill"></b-icon> <b>Address :</b>
              {{ attraction.addr1 }}<br />
              <b-icon icon="lightbulb-fill"></b-icon> <b>Details</b><br />{{
                attraction.title
              }}
            </p>
          </div>
        </div>
      </div>
      <kakao-map :attraction="attraction"></kakao-map>
      <br />
      <br />
      <br />
      <div>
        <hr />
        <br />
        <br />
        <br />
        <b-textarea placeholder="댓글을 입력하세요" v-model="text"></b-textarea>
        <b-button @click="createComment()">댓글달기</b-button>
      </div>
      <br />
      <div class="reviews" v-if="review_list.length">
        <div v-for="review in review_list" :key="review.review_id">
          <span>ID : {{ review.userId }}</span
          ><br />
          <span>내용 : {{ review.content }}</span>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KakaoMap from "@/components/attraction/KakaoMap.vue";
import Constant from "@/store/constant/Constant";
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "AttractionDetail",
  components: {
    KakaoMap,
  },
  mounted() {
    this.$store.dispatch(
      "attractionStore/" + Constant.GET_ATTRACTION,
      this.$route.params.content_id
    );
  },
  created() {
    this.$store.dispatch("attractionStore/" + Constant.GET_REVIEW, {
      content_id: this.$route.params.content_id,
    });
  },
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState("attractionStore", [
      "attraction_list",
      "attraction",
      "review_list",
    ]),
  },
  methods: {
    ...mapActions("attractionStore", [
      Constant.GET_REVIEW,
      Constant.POST_REVIEW,
    ]),
    ...mapMutations("attractionStore", [
      Constant.GET_REVIEW,
      Constant.POST_REVIEW,
    ]),
    createComment() {
      const newReview = {
        content_id: this.$route.params.content_id,
        userId: "testId",
        title: "testTitle",
        content: this.text,
        star: "1",
      };
      this.$store
        .dispatch("attractionStore/" + Constant.POST_REVIEW, {
          newReview: newReview,
          content_id: this.$route.params.content_id,
        })
        .then(() => {
          this.text = "";
        });
    },
  },

  watch: {},
};
</script>

<style scoped>
#map {
  margin-top: 50px;
  height: 400px;
  width: 100%;
}

.weather-widget {
  margin-bottom: 20px;
}
</style>
