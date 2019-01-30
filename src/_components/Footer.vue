<template>
  <footer class="footer container">
    <div class="footer-top">
      <span class="title">Let's Talk</span>
      <p style="margin-top: 1em">Get in touch, send an email:</p>
      <p>
        <strong>hi@diegorodrigues.co</strong>
      </p>
    </div>
    <div class="footer-bottom">
      <div class="left-footer">
        <div class="item">
          <p>Send me an Email</p>
          <strong>hi@diegorodrigues.co</strong>
        </div>
        <div class="item">
          <p>Feel free to talking</p>
          <strong>+55 24 99944-7493</strong>
        </div>
      </div>
      <div class="right-footer">
        <img src="@/assets/1-medium.svg">
        <img src="@/assets/2-linkedin.svg">
        <img src="@/assets/3-dribbble.svg">
        <img src="@/assets/4-instagram.svg">
      </div>
    </div>
  </footer>
</template>

<script>
</script>
<style lang="scss" scoped>
.footer {
  margin-top: 10em;
  strong,
  p {
    font-size: 1.5em;
  }
  p {
    color: #87898b;
    margin: 0;
  }
  .footer-top {
    .title {
      line-height: 0.8;
      letter-spacing: -2.2px;
      font-weight: bold;
      font-size: 5em;
      text-transform: uppercase;
    }
  }
  .footer-bottom {
    margin-top: 5em;
    display: flex;
    justify-content: space-between;
    .left-footer {
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
    .right-footer {
      display: flex;
      justify-content: space-around;
      width: 20%;
      img {
        width: 10%;
        cursor: pointer;
      }
    }
  }
}
</style>
