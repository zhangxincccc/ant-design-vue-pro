<template>
  <a-result status="403" title="403" :sub-title="$t('exception.403')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('exception.back.home') }}
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'ErrorPage403',
  methods: {
    toHome() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
