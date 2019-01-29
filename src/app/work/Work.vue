<template>
  <article class="work container">
    <template v-for="project in allProjects">
      <ProjectCard :project="project" :key="project.id"/>
    </template>
  </article>
</template>

<script>
import ProjectCard from "@/_components/ProjectCard";
export default {
  components: {
    ProjectCard
  },
  computed: {
    allProjects() {
      return this.$store.state.allProjects;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
