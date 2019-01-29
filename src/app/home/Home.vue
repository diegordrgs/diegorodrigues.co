<template>
  <article class="home">
    <section class="welcome">
      <i class="arrow down icon"></i>
      <div class="main-title">
        <h1>{{mainTitle}}</h1>
      </div>
    </section>
    <section class="projects">
      <h1 class="title">{{projectTitleLabel}}</h1>
      <template v-for="project in allProjects">
        <div class="project" :key="project.id">
          <img :src="project.thumb">
          <h1>{{project.name}}</h1>
          <p>{{project.shortDescription}}</p>
          <router-link :to='{path: `work/${project.id}`}'>
            <span class="more">
              more
              <i class="arrow right icon"></i>
            </span>
          </router-link>
        </div>
      </template>
    </section>
  </article>
</template>

<script>
export default {
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
<style lang="scss">
.home {
  display: grid;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
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
    .project {
      height: 400px;
      width: 100%;
      padding: 3em 5em;
      transition: 1s;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        transition: 1s;
      }
      h1 {
        text-transform: uppercase;
        font-size: 3rem;
        font-weight: bolder;
        display: none;
        color: white;
      }
      p {
        font-size: 1.715rem;
        display: none;
        width: 50%;
        color: #87898b;
      }
      span.more {
        display: none;
        font-size: 1.4rem;
        color: white;
        position: absolute;
        bottom: 1em;
        cursor: pointer;
        i {
          color: #8b8b8b;
        }
      }
      &:hover {
        background: black;
        h1,
        p,
        span.more {
          display: block;
        }
        img {
          display: none;
        }
      }
    }
  }
}
</style>
