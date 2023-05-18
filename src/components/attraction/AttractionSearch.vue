<template>
  <div>
    <div class="search-container">
      <select v-model="sido_code">
        <option value="">시/도</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="">선택하지 않음</option>
      </select>
      <select v-model="gugun_code">
        <option value="">구/군</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
        <option value="option6">Option 6</option>
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
      <input type="submit" value="검색" @click="search" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sido_code: "",
      gugun_code: "",
      content_type_id: "",
      title: "",
    };
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
