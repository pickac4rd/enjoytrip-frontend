<template>
  <div>
    <div class="search-container">
      <select v-model="sido_code" @change="sidoChange($event);">
        <option selected="selected" value="undefined">시/도</option>
        <option v-for="sido in sido_list" :key="sido.sido_code" :value="sido.sido_code">
          {{ sido.sido_name }}
        </option>
      </select>
      <select v-model="gugun_code" @change="gugunChange($event);">
        <option selected value="undefined">구/군</option>
        <option v-for="gugun in gugun_list" :key="gugun.gugun_code" :value="gugun.gugun_code">
          {{ gugun.gugun_name }}
        </option>
      </select>
      <select v-model="content_type_id" @change="contentChange($event);">
        <option selected value="undefined">종류</option>
        <option v-for="content in content_list" :key="content.id" :value="content.id">
          {{ content.name }}
        </option>
      </select>
      <input type="text" v-model="title" placeholder="검색어를 입력하세요" />
      <input type="submit" value="검색" @click="search"/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import http from "@/api/http";
import Constant from "../../store/constant/Constant";
export default {
  created() {
    http.get("attractions/sido").then((response) => {
        this.sido_list = response.data
      });
  },
  data(){
    return{
      sido_code: undefined,
      sido_list: [],
      gugun_code: undefined,
      gugun_list: [],
      content_list:[
        {id: 12,
        name: "관광지"},
        {id: 14,
        name: "문화시설"},
        {id: 15,
        name: "축제/공연"},
        {id: 25,
        name: "여행코스"},
        {id: 28,
        name: "레포츠"},
        {id: 32,
        name: "숙박"},
        {id: 38,
        name: "쇼핑"},
        {id: 39,
        name: "음식점"},
      ],
      title: undefined,
      content_type_id: undefined,
    };
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    ...mapActions("attractionStore", [Constant.SEARCH, Constant.CHANGE_SEARCH_PARAMS]),
    ...mapMutations("attractionStore", [Constant.SEARCH, Constant.CHANGE_SEARCH_PARAMS]),
    sidoChange(event){
      this.sido_code = event.target.value;
      http.get("attractions/sido/" + `${event.target.value}`).then((response)=>{
        this.gugun_list = response.data
      })
    },
    gugunChange(event){
      this.gugun_code = event.target.value;
    },
    contentChange(event){
      this.content_type_id = event.target.value;
      console.log(this.content_type_id)
    },
    search(){
      console.log(this.sido_code);
      this.$store.dispatch("attractionStore/"+Constant.CHANGE_SEARCH_PARAMS,{sido_code:this.sido_code,gugun_code:this.gugun_code,content_type_id:this.content_type_id,title:this.title});
      this.$store.state.attractionStore.cur_page = 1;
      this.$store.dispatch("attractionStore/"+Constant.SEARCH,{offset: 1, limit: 6, sido_code: this.$store.state.attractionStore.sido_code, gugun_code: this.$store.state.attractionStore.gugun_code, content_type_id: this.$store.state.attractionStore.content_type_id, title: this.$store.state.attractionStore.title});
      
    }
  },
};
</script>

<style>
.search-container {
  display: flex;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
}

.search-container select,
.search-container input[type="text"] {
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
}

.search-container input[type="submit"] {
  padding: 5px 10px;
  font-size: 16px;
}
</style>
