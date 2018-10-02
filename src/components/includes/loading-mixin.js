export default {
  mounted() {
    if(this.activities === undefined){
      this.$root.isLoading = false
    }
  },
}