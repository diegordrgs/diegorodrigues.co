<template>
  <article class="home container">
    <section class="welcome">
      <i class="arrow down icon"></i>
      <div class="main-title">
        <h1>{{mainTitle}}</h1>
      </div>
    </section>
    <section class="projects">
      <h1 class="title">{{projectTitleLabel}}</h1>
      <template v-for="project in allProjects">
        <ProjectCard :project='project' :key="project.id"/>
      </template>
    </section>
  </article>
</template>

<script>
import ProjectCard from '@/_components/ProjectCard'
export default {
  components: {
    ProjectCard
  },
  computed: {
    allProjects() {
      return this.$store.state.allProjects;
    }
  },
  data() {
    return {
      mainTitle: "Product designer from Sao Paulo, Brazil",
      projectTitleLabel: "Selected projects"
    };
  }
};
</script>
<style scoped lang="scss">
.home {
  display: grid;
  justify-content: center;
  .welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 4rem;
    i {
      color: #8b8b8b;
    }
    .main-title {
      padding: 0.5em;
      border-bottom: 1px solid;
      h1 {
        text-align: center;
        font-size: 10rem;
        text-transform: uppercase;
        font-weight: bolder;
      }
    }
  }
  .projects {
    .title {
      text-transform: uppercase;
      font-size: 8rem;
    }
  }
}
</style>
