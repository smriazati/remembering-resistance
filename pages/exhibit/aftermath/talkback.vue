<template>
  <div class="talkback-page">
    <ContentTalkback :promptId="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "aftermath",
    };
  },
};
</script>

