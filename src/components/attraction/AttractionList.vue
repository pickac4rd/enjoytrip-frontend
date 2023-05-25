<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="6"
      align="center"
      @page-click="pageClick"
    ></b-pagination>

    <b-card-group columns id="b-card-group">
      <b-card
        v-for="paginatedCard in attraction_list"
        :key="paginatedCard.content_id"
        :img-src="paginatedCard.first_image || img1"
        img-top
      >
        <a
          class="readmore stretched-link"
          @click="detail(paginatedCard.content_id)"
          >{{ paginatedCard.title }}</a
        >
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
import Constant from "../../store/constant/Constant";
import img1 from "@/assets/img/main/noimg.jpg";
import http from "@/api/http";

export default {
  created() {
    this.$store.state.attractionStore.page = this.$route.params.page;
    this.$store.state.attractionStore.sido_code = undefined;
    this.$store.state.attractionStore.gugun_code = undefined;
    this.$store.state.attractionStore.content_type_id = undefined;
    this.$store.state.attractionStore.title = undefined;
    this.currentPage = this.$route.params.page;
    this.$store.state.attractionStore.page = this.currentPage;
    http.get("attractions/partial/length").then((response) => {
      this.totalRows = response.data;
    });
    console.log("totalRows=" + this.totalRows);
    this.$store.dispatch("attractionStore/" + Constant.SEARCH, {
      offset: 1,
      limit: 6,
      sido_code: undefined,
      gugun_code: undefined,
      content_type_id: undefined,
      title: undefined,
    });
  },
  data() {
    return {
      totalRows: 0,
      perPage: 6,
      isDataLoaded: false,
      img1,
    };
  },
  props: {
    //attraction_list: Array
  },
  watch: {},
  computed: {
    ...mapState("attractionStore", ["attraction", "attraction_list"]),
  },
  methods: {
    ...mapActions("attractionStore", [
      Constant.GET_PARTIAL_ATTRACTIONS,
      Constant.GET_ATTRACTION,
      Constant.SEARCH,
    ]),
    ...mapMutations("attractionStore", [
      Constant.GET_PARTIAL_ATTRACTIONS,
      Constant.GET_ATTRACTION,
      Constant.SEARCH,
    ]),
    pageClick(button, page) {
      this.$store.state.attractionStore.page = page;

      this.$store.dispatch("attractionStore/" + Constant.SEARCH, {
        offset: this.$store.state.attractionStore.page,
        limit: 6,
        sido_code: this.$store.state.attractionStore.sido_code,
        gugun_code: this.$store.state.attractionStore.gugun_code,
        content_type_id: this.$store.state.attractionStore.content_type_id,
        title: this.$store.state.attractionStore.title,
      });
      this.$router.push({ name: "list", params: { page: page } });
      //this.$router.go(0);
    },
    detail(content_id) {
      this.$router
        .push({ name: "detail", params: { content_id: content_id } })
        .catch(() => {});
      this.$router.go(0);
    },
  },
};
</script>
<style></style>
