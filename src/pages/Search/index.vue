<template>
  <div>
    <!-- 是 route!!! 不是router-->
    我是搜索
    <h1>params参数：{{ $route.params.keyword }}----======={{ keyword }}</h1>
    <h1>qurey参数：{{ $route.query.k }}========{{ k }}</h1>
  </div>
</template>

<script>
export default {
  props: ["keyword", "k"],
};
</script>

<style lang="less" scoped>
</style>