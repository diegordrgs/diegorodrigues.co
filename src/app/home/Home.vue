<template>
  <article class="home container">
    <section class="welcome">
      <img class='arrow' src="@/assets/arrowdown.svg">
      <div class="main-title">
        <span>Product designer </span><span style="margin: 0 1em">from</span><br/><span>Sao Paulo,</span><br/><span style="margin: 0 1em">Brazil</span>
      </div>
    </section>
    <section class="projects">
      <span class="title">Selected projects</span>
      <template v-for="project in allProjects">
        <ProjectCard :project="project" :key="project.id"/>
      </template>
    </section>
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
<style scoped lang="scss">
.home {
  .welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 4rem;
    .main-title {
      padding: 0.5em;
      border-bottom: 1px solid;
      span {
        text-align: center;
        font-size: 10rem;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 0.83;
        letter-spacing: -4px;
      }
    }
  }
  .projects {
    .title {
      text-transform: uppercase;
      font-size: 8rem;
      line-height: 0.8;
      letter-spacing: -2.2px;
      font-weight: bold;
    }
  }
}
</style>
