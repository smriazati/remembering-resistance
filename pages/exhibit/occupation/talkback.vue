<template>
  <div>
    <div>
      <ContentTalkback :promptId="name" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "occupation",
    };
  },
};
</script>

