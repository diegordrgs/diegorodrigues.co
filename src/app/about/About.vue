<template>
  <article class="about container">
    <div class="main-title">
      <span>Hi, My</span>
      <br>
      <span>name is</span>
      <br>
      <span>
        <img class="arrow" src="@/assets/arrowdown.svg"> &nbsp; Diego
      </span>
    </div>
    <hr>
    <section class="biography">
      <p>I'm a UI and UX Design from Brazil and for the last 8 years, I have been working with Design. I started my career working with graphic design, branding and product development.</p>
      <p>Over the years, I changed the focus on my studies to Digital Design, UI and User Experience and their interaction through sites and applications.</p>
      <p>Now, my work consists in developing mobile interfaces, websites and systems from their conception, with research with users and the client, to the development of their screens, starting with sketches, wireframes, and finally, their visual interface.</p>
      <p>My main goal is to create memorable experiences for users. Translating business needs into intuitive digital products. I'm very passionate about UX and I believe that good design can only exist when hard work is involved.</p>
      <p>
        Feel free to get in touch at
        <strong>diegorodrigues@me.com</strong>
      </p>
    </section>​​​​​​
    <section class="skills">
      <span class="title">Skills</span>
      <template v-for="skill in skills">
        <div class="skill" :key="skill.id">
          <span class="title">{{skill.name}}</span>
          <p>{{skill.text}}</p>
        </div>
      </template>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: "Creating interfaces and Prototyping",
          text:
            "Low and high fidelity mockups with Sketch (most used tool), Figma, Adobe XD, Photoshop, Invision, MarvelApp and Zeplin."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  .main-title {
    padding-bottom: 0.3em;
    font-size: 10rem;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 0.83;
    letter-spacing: -4px;
    i {
      font-size: 4rem;
      color: #8b8b8b;
    }
  }
  hr {
    color: black;
    font-weight: 900;
    width: 70%;
    margin: 0 auto;
  }
  .biography {
    p {
      color: #87898b;
    }
    font-size: 1.5rem;
    width: 60%;
  }
  .skills {
    .title {
      text-transform: uppercase;
      font-size: 4.45rem;
      font-weight: bold;
    }
    .skill {
      margin: 1em 0;
      .title,
      p {
        font-size: 1.5rem;
      }
      p {
        color: #87898b;
        width: 60%;
      }
    }
  }
}
</style>
