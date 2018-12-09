<template>
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
    export default {
        name: "blog-post",
        prop: {
            post:{
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>