<script>
export default {
  name: 'Parallax',
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <header class="main-header">
        <div class="layers">
          <div class="layer__header">
            <div class="layers__caption">Welcome to Parallax</div>
            <div class="layers__title">Dev Alphaspace</div>
          </div>
          <div class="layer layers__base" style="background-image: url(img/layer-base.png)"></div>
          <div
            class="layer layers__middle"
            style="background-image: url(img/layer-middle.png)"
          ></div>
          <div class="layer layers__front" style="background-image: url(img/layer-front.png)"></div>
        </div>
      </header>

      <article class="main-article" style="background-image: url(img/dungeon.jpg)">
        <div class="main-article__content">
          <h2 class="main-article__header">Follow For More</h2>
          <p class="main-article__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sed obcaecati maxime
            labore. Reprehenderit culpa consequatur dolore est a debitis!
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.main-header {
  position: relative;
}
.main-header::after {
  content: '';
  position: absolute;
  z-index: 100;
  width: 100%;
  height: calc(var(--index) * 10);
  background-image: url(../img/ground.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  bottom: calc(var(--index) * -4.5);
}
.layers {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.layer {
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: 2;
  transition: var(--transition);
}
.layers__base {
  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
  z-index: 0;
}
.layers__middle {
  transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);
}
.layers__front {
  transform: translate3d(0, calc(var(--scrollTop) / 5.7), 0);
}
.layer__header {
  z-index: 1;
  transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
  transition: var(--transition);
  will-change: transform;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--text);
  text-shadow: 0 0 15px #9d822b;
  margin-top: -3rem;
}
.layers__title {
  font-size: calc(var(--index) * 2.65);
  letter-spacing: calc(var(--index) / 2.25);
  margin-top: -1rem;
}
.layers__caption {
  font-size: calc(var(--index) / 1.175);
  letter-spacing: calc(var(--index) / 3.5);
  margin-top: calc(var(--index) * -0.75);
}
.main-article {
  --main-article-transform: translate3d(0, calc(var(--scrollTop) / -7.5), 0);
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  /* Update: */
  top: -1px;
  z-index: 10;
}
.main-article__header {
  text-transform: uppercase;
  font-size: calc(var(--index) * 1.8);
  letter-spacing: calc(var(--index) / 7.5);
  transform: var(--main-article-transform);
  transition: var(--transition);
  will-change: transform;
}
.main-article__paragraph {
  max-width: calc(var(--index) * 30);
  font-size: calc(var(--index) * 0.9);
  margin-top: calc(var(--index) / 1.25);
  transform: var(--main-article-transform);
  transition: var(--transition);
  will-change: transform;
}
.content {
  will-change: transform;
}
.copy {
  position: absolute;
  bottom: calc(var(--index) * 2.5);
  opacity: 0.45;
  font-size: calc(var(--index) * 0.75);
  letter-spacing: calc(var(--index) / 37.5);
}
</style>
