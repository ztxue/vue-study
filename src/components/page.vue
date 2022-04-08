<template>
  <div>
    <a-pagination show-quick-jumper :default-current="1" :total="500" @change="onChange" />
  </div>
</template>
<script>
export default {
  name:"Page",
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>
