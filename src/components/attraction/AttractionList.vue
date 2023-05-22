<template>
  <div>
    <b-pagination
    v-model="currentPage"
    :total-rows="120"
    :per-page="6"
    align="center"
    @page-click="pageClick"></b-pagination>
    
    <b-card-group columns id="b-card-group">
      <b-card
        v-for="paginatedCard in attraction_list"
        :key="paginatedCard.content_id"
        :img-src="paginatedCard.first_image"
        :img-alt="Image"
        img-top
      >
        <a class="readmore stretched-link" @click="detail(paginatedCard.content_id)">{{paginatedCard.title}}</a>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
import Constant from "../../store/constant/Constant";
//import http from "@/api/http"

export default {
  mounted() {
    this.currentPage = this.$route.params.page;
    this.$store.dispatch("attractionStore/" + Constant.GET_PARTIAL_ATTRACTIONS, 1);
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      isDataLoaded: false,
    };
  },
  computed: {
    ...mapState("attractionStore", ["attraction_list", "attraction"]),
  },
  watch:{
    attraction_list: function(value){
      console.log(value)
    }
  },
  methods: {
    ...mapActions("attractionStore", [
      Constant.GET_PARTIAL_ATTRACTIONS,
      Constant.GET_ATTRACTION,
    ]),
    ...mapMutations("attractionStore", [
      Constant.GET_PARTIAL_ATTRACTIONS,
      Constant.GET_ATTRACTION,
    ]),
    async loadPartialAttractions(offset) {
      await this.$store.dispatch(
        "attractionStore/" + Constant.GET_PARTIAL_ATTRACTIONS,
        offset
      );
      this.isDataLoaded = true;
    },
    async pageClick(button, page) {
      this.$router.push({name: "list", params:{page: page}});
      this.$store.dispatch("attractionStore/" + Constant.GET_PARTIAL_ATTRACTIONS, page);
      //this.loadPartialAttractions(this.$route.params.page);
      this.currentPage = page;
      if (this.isDataLoaded) {
        //this.$router.go(0);
      }
    },
    detail(content_id) {
      this.$store.dispatch(
        "attractionStore/" + Constant.GET_ATTRACTION,
        content_id
      );
      console.log(this.$store.state.attractionStore.attraction);
      this.$router.push({ name: "detail", params: { content_id } }).catch(() => {});
      this.$router.go(0);
    },
  },
};
</script>
<style></style>
