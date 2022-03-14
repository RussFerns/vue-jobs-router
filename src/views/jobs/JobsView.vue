<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div class="job" v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'jobs-details', params: { id: job.id } }" >
            <h3>{{ job.title }}</h3>
            <h5>{{ job.details }}</h5>
        </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading jobs...</p>
    </div>
</template>



<script>
export default {
    data() {
        return {
            jobs: []
            // jobs: [
            //     { id: 1, title: "Web Developer", details: "Lorem  consectetur adipisicing elit." },
            //     { id: 2, title: "Web Designer", details: "corporis perferendis voluptatibus magni" },
            //     { id: 3, title: "Technical Manager", details: "delectus dicta  ratione? Perferendis." },
            //     { id: 4, title: "Technical Director", details: "ipsum dolor sit amet" },
            //     { id: 5, title: "CIO", details: "Possimus veniam quaeratillo" },
            // ]
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs') 
            .then((res) => res.json())
            .then((data) => this.jobs = data)
            .catch((err) => console.log(err.message))
    }
}
</script>



<style>
.job h3 {
    background-color: rgb(247, 244, 244);
    color: #444;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
}
.job h3:hover {
    background-color: #ddd;
}
.job a {
    text-decoration: none;
}
.job h5 {
    font-weight: normal;
    font-style: italic;
    margin: -30px 10px 20px 10px;
}
</style>
