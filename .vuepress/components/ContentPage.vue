<template>
  <div class="layout-page" :id="uid">
    <div v-for="link in superlink" :key="link.uuid">
      <div class="itemBox">
        <img class="logo" :src="link.icon" />
        <div class="itemBoxRight">
          <a :href="link.href" target="_blank" rel="noopener noreferrer"
            ><strong>{{ link.title }}</strong></a
          >
          <span class="describe">
            {{ link.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentPage",
  props: {
    uid: {
      type: String,
      default: "",
    },
    superlink: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.layout-page {
  display: flex;
  flex-wrap: wrap;
}
.logo {
  width: 40px;
  height: 40px;
  margin-top: 4px;
}
.describe {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #555;
  font-size: 12px;
}
.itemBox {
  width: 200px;
  min-width: 150px;
  height: 55px;
  margin: 10px;
  padding: 10px;
  display: flex;
  border: 1px #ccc solid;
  border-radius: 5px;
}
.itemBoxRight {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>