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
        img-top
      >
        {{paginatedCard.title}}
      </b-card>
    </b-card-group>
    <!-- <b-card-group deck style="margin: 100px 100px">
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional
          content.
        </b-card-text>
      </b-card>

      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck style="margin: 0px 100px">
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional
          content.
        </b-card-text>
      </b-card>

      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </b-card-text>
      </b-card>
    </b-card-group> -->
  </div>
</template>

<script>

import { mapMutations, mapState, mapActions } from "vuex";
import Constant from "../../store/constant/Constant";
export default {
  created() {
    this.$store.dispatch(
      "attractionStore/" + Constant.GET_PARTIAL_ATTRACTIONS, this.$route.query.offset
    );
    this.currentPage = this.$route.query.offset
  },
  data() {
    return {
      currentPage:1,
      perPage:6,
    };
  },
  computed: {
    ...mapState("attractionStore", ["attraction_list"]),
    
  },
  watch: {},
  methods: {
    ...mapActions("attractionStore", [
      Constant.GET_ATTRACTIONS,
      Constant.GET_PARTIAL_ATTRACTIONS,
    ]),
    ...mapMutations("attractionStore", [
      Constant.GET_ATTRACTIONS,
      Constant.GET_PARTIAL_ATTRACTIONS,
    ]),
    pageClick: function(button, page){
      this.$router.push({path:"/list", query:{offset:page}})
      this.$router.go(0);
    }
      
  },
};
</script>

<style></style>
