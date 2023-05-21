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
          <div class="mb-4 col-8 d-flex flex-wrap align-items-center ps-3" id="info">
            <div class="mt-2">
              <p class="text-start" style="color: black">
                <b-icon icon="telephone-fill"></b-icon> <b>Tel :</b> {{ attraction.tel ? attraction.tel : "-" }}<br />
                <b-icon icon="pin-map-fill"></b-icon> <b>Address :</b> {{ attraction.addr1 }}<br />
                <b-icon icon="lightbulb-fill"></b-icon> <b>Details</b><br />{{ attraction.title }}
              </p>
            </div>
          </div>
        </div>
        <kakao-map :attraction="attraction"></kakao-map>
      </div>
    </section>
</template>
  
<script>
  import KakaoMap from "@/components/attraction/KakaoMap.vue"
  import { mapState } from "vuex";
  export default {
    name: "AttractionDetail",
    components: {
      KakaoMap,
    },
    created(){
    },
    data() {
      return {};
    },
    
    computed: {
        ...mapState("attractionStore", ["attraction_list","attraction"]),
    },
    methods: {
        
    }
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
  