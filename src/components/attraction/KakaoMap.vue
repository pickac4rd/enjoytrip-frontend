<template>
  <div id="map"></div>
</template>
<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  props: {
    attraction: Object,
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(
          this.attraction ? this.attraction.latitude : 37.5559,
          this.attraction ? this.attraction.longitude : 126.9723
        ),
        level: 3,
      };

      this.map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(
        this.attraction.latitude,
        this.attraction.longitude
      );

      this.marker = new kakao.maps.Marker({
        map: this.map,
        position: markerPosition,
      });
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const mapScript = document.createElement("script");
      /* global kakao */

      mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=bf6e75981d6225aa22adc5b8c08f1818&autoload=false`;
      mapScript.onload = () => kakao.maps.load(this.initMap);
      document.head.appendChild(mapScript);
    }
  },
};
</script>
