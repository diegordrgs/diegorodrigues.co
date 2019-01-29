<template>
  <article class="work-detail container">
    <section class="presentation">
      <h1 class="title">{{project.name}}</h1>
      <div class="datas">
        <p>{{project.description}}</p>
        <div class="infos">
          <div class="info">
            <label>Live Project:</label>
            <span>{{project.liveProject}}</span>
          </div>
          <div class="info">
            <label>My Role:</label>
            <span>{{project.role}}</span>
          </div>
        </div>
      </div>
      <img :src="project.image">
    </section>
    <template v-for="section in project.sections">
      <section class="section" :key="section.id">
        <h1 class="title">{{section.title}}</h1>
        <p>{{section.description}}</p>
        <template v-for="img in section.images">
          <img :key="img.id" :src="img.url">
        </template>
      </section>
    </template>
  </article>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.state.selectedProject;
    }
  },
  created() {
    this.$store.dispatch("getProjectById", this.$route.params.id);
  }
};
</script>

<style scoped lang="scss">
.work-detail {
  h1.title {
    font-size: 8rem;
  }
  p {
    color: #87898b;
    font-size: 1.5rem;
  }
  .presentation {
    .datas {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 85%;
      }
      .infos {
        width: 100%;
        display: grid;
        justify-content: flex-end;
        grid-row-gap: 1.5em;
        .info {
          font-size: 1.5rem;
          label {
            color: #87898b;
          }
        }
      }
    }
  }
}
</style>