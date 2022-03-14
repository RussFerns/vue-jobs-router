<template>
  <div class="" v-if="job">
    <h1>Job Details Page</h1>
    <p>for Job ID: {{ id }}</p> 
    <p>Job Title: {{ job.title }}</p> 
    <p>Details: {{ job.details }}</p> 
  </div>
</template>



<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    data() {
      return {
        job: {}
      }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id) 
            .then((res) => res.json())
            .then((data) => this.job = data)
            .catch((err) => console.log(err.message))
    }
}
</script>



<style>

</style>

