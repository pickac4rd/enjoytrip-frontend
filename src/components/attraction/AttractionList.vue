<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="60"
        @page-click="pageClick"
      ></b-pagination>
    </div>
    <b-card-group columns>
      <b-card
        v-for="paginatedCard in attraction_list"
        :key="paginatedCard.content_id"
        :img-src="paginatedCard.first_image"
        img-top
      >
        test
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
      "attractionStore/" + Constant.GET_PARTIAL_ATTRACTIONS,
      1
    );
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6,
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
    pageClick(button, page) {
      alert(page);
      this.currentPage = page;
      this.$store.dispatch(
        "attractionStore/" + Constant.GET_PARTIAL_ATTRACTIONS,
        page
      );
      this.redi;
    },
  },
};
</script>

<style></style>
