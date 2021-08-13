<template>
  <div>
    <div v-if="isExpanded || showModal" class="modal-wrapper">
      <div class="modal-container">
        <div class="text-wrapper" v-html="html"></div>
        <div class="call-to-action">
          <button @click="closeModal">
            <span>{{ closeText }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    html: String,
    closeText: String,
    showModal: Boolean,
  },
  data() {
    return {
      isExpanded: true,
    };
  },
  mounted() {
    this.isExpanded = this.showModal;
  },
  methods: {
    closeModal() {
      this.isExpanded = false;
      this.$emit("close-modal");
    },
  },
};
</script>
