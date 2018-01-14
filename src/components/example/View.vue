<template>
<div v-loading="loading">
<h2>{{model.title}}</h2>
{{model.body}}
</div>
</template>

<script>
export default {
  name: "ExampleView",
  data() {
    return {
      loading: false,
      model: {}
    };
  },
  created() {
    let self = this;
    self.get(self.$route.params.id);
  },
  methods: {
    get(id) {
      let self = this;
      self.loading = true;

      self.$store.state.services.exampleService
        .get(id)
        .then(r => {
          self.loading = false;
          self.model = r.data;
        })
        .catch(r => {});
    }
  }
};
</script>