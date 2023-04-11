<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      this.$emit("update:showModal", this.showModal);
      console.log(this.showModal);
      console.log("hi");
    },
  },
};
</script>
