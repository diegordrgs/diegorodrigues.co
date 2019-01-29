<template>
  <article class="home">
    <section class="welcome">
      <i class="arrow down icon"></i>
      <div class="main-title">
        <h1>{{mainTitle}}</h1>
      </div>
    </section>
    <section class="projects">
      <h1 class="title">{{projectTitle}}</h1>
      <template>
        <div class="project">
          <img
            src="https://res.cloudinary.com/dknhwkfxm/image/upload/v1548727292/easyvet/img01.jpg"
          >
          <h1>Project name</h1>
          <p>A multi disciplinary designer with a strong entrepreneurial background, I have more than 10 years of experience.</p>
          <span>
            more
            <i class="arrow right icon"></i>
          </span>
        </div>
        <div class="project">
          <img
            src="https://res.cloudinary.com/dknhwkfxm/image/upload/v1548727292/easyvet/img01.jpg"
          >
          <h1>Project name</h1>
          <p>A multi disciplinary designer with a strong entrepreneurial background, I have more than 10 years of experience.</p>
          <span>
            more
            <i class="arrow right icon"></i>
          </span>
        </div>
      </template>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: "Product designer from Sao Paulo, Brazil",
      projectTitle: "Selected projects"
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
      width: 100%;
      padding: 3em 5em;
      transition: 0.3s;
      position: relative;
      height: 400px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: 0;
        left: 0;
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
      span {
        display: none;
        font-size: 1.4rem;
        color: white;
        position: relative;
        bottom: -3em;
        cursor: pointer;
        i {
          color: #8b8b8b;
        }
      }
      &:hover {
        background: black;
        h1,
        p,
        span {
          display: block;
        }
      }
    }
  }
}
</style>
