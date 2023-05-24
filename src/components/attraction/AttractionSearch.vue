<template>
  <div>
    <div class="search-container">
      <select v-model="sido_code" @change="sidoChange($event);">
        <option value="">시/도</option>
        <option v-for="sido in sido_list" :key="sido.sido_code" :value="sido.sido_code">
          {{ sido.sido_name }}
        </option>
        <option value="">선택하지 않음</option>
      </select>
      <select v-model="gugun_code">
        <option value="">구/군</option>
        <option v-for="gugun in gugun_list" :key="gugun.gugun_code">
          {{ gugun.gugun_name }}
        </option>
        <option value="">선택하지 않음</option> 
      </select>
      <select v-model="content_type_id">
        <option value="">종류</option>
        <option value="option7">Option 7</option>
        <option value="option8">Option 8</option>
        <option value="option9">Option 9</option>
        <option value="">선택하지 않음</option>
      </select>
      <input type="text" v-model="title" placeholder="검색어를 입력하세요" />
      <input type="submit" value="검색"/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import http from "@/api/http";
import Constant from "../../store/constant/Constant";
export default {
  created() {
    http.get("attractions/sido").then((response) => {
        this.$store.state.attractionStore.sido_list = response.data
      });
  },
  data(){
    return{
    }
  },
  watch: {
    
  },
  computed: {
    ...mapState("attractionStore", [
      "sido_list",
      "gugun_list",
      "sido_code",
      "gugun_code",
      "content_type_id",
      "title",
    ]),
  },
  methods: {
    ...mapActions("attractionStore", [Constant.GET_SIDOS, Constant.GET_GUGUNS]),
    ...mapMutations("attractionStore", [Constant.GET_SIDOS, Constant.GET_GUGUNS]),
    sidoChange(event){
      http.get("attractions/sido/" + `${event.target.value}`).then((response)=>{
        this.$store.state.attractionStore.gugun_list = response.data
      })
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
