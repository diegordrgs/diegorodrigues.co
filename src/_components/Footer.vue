<template>
  <footer class="footer container">
    <div class="footer-top">
      <span class="title">Let's Talk</span>
    </div>
    <div class="footer-bottom">
      <div class="left-footer">
        <div class="item">
          <p>Send me an Email</p>
          <a href="mailto:hi@diegorodrigues.co"><strong>hi@diegorodrigues.co</strong></a>
        </div>
        <div class="item">
          <p>Feel free to talking</p>
          <a href="tel:+5524999447493"><strong>+55 24 99944-7493</strong></a>
        </div>
      </div>
      <div class="right-footer">
        <a target="_blank" href="https://medium.com/@dirdrgs"> <img src="@/assets/1-medium.svg"> </a>
        <a target="_blank" href="https://www.linkedin.com/in/diegordrgs/"> <img src="@/assets/2-linkedin.svg"> </a>
        <a target="_blank" href="https://dribbble.com/diegorodrigues"> <img src="@/assets/3-dribbble.svg"> </a>
        <a target="_blank" href="https://www.instagram.com/diegorodrigues.co/"> <img src="@/assets/4-instagram.svg"> </a>
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
        cursor: pointer;
      }
    }
  }
}
</style>
