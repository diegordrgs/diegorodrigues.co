<template>
  <router-link :to="{path: `work/${project.id}`}">
    <div class="project-card">
      <img :src="project.thumb">
      <span class="title">{{project.name}}</span>
      <p>{{project.shortDescription}}</p>
      <span class="more">
        more
        <i class="arrow right icon"></i>
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style scoped lang="scss">
.project-card {
  height: 400px;
  width: 90%;
  padding: 3em 5em;
  transition: 1s;
  position: relative;
  margin: 5em 0;
  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
  }
  span.title {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 900;
    display: none;
    color: white;
  }
  p {
    font-size: 1.5rem;
    display: none;
    width: 50%;
    color: #87898b;
    margin-top: 3em;
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
    span.title,
    p,
    span.more {
      display: block;
    }
    img {
      display: none;
    }
  }
}
</style>
