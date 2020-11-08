<template>
  <div class="box noselect">
    <i class="fas fa-quote-right fa2"></i>
    <div class="text">
      <i class="fas fa-quote-left fa1"></i>
      <div>
        <p id="quote">{{ quote }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    quote: String,
  },
})
export default class Card extends Vue {
  quote!: string;
}
</script>

<style scoped lang="scss">

.box {
  background-color: transparent;
  min-height: 240px;
  border-radius: 3px;
  color: #fff;
  position: relative;
  width: 75%;
  height: fit-content;
  transform-style: preserve-3d;
  perspective: 2000px;
  transition: 0.4s;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-top: 16px solid var(--color-red);
    border-left: 16px solid var(--color-red);
    box-sizing: border-box;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 16px solid var(--color-red);
    border-right: 16px solid var(--color-red);
    box-sizing: border-box;
  }
  .fas {
    font-size: 20px;
    height: 40px;
    width: 40px;
    line-height: 40px !important;
    background: var(--color-red);
    color: white;
  }
  .fa2 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .text {
    position: relative;
    top: 30px;
    left: -30px;    
    background-color: var(--color-blue);
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    padding: 2.5rem 3rem;
    width: -webkit-calc(100% + 60px);
    height: -webkit-calc(100% - 100px);
    width: -moz-calc(100% + 60px);
    height: -moz-calc(100% - 60px);
    width: calc(100% + 60px);
    height: calc(100% - 60px);
    .fa1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    .text {
      transform: rotateY(20deg) skewY(-3deg);
      -moz-transform: rotateY(20deg) skewY(-3deg);
      -webkit-transform: rotateY(20deg) skewY(-3deg);
      -o-transform: rotateY(20deg) skewY(-3deg);
    }
    transform: translate(-0%, -5%) rotateY(-20deg) skewY(2deg);
    -moz-transform: translate(-0%, -5%) rotateY(-20deg) skewY(2deg);
    -webkit-transform: translate(-0%, -5%) rotateY(-20deg) skewY(2deg);
    -o-transform: translate(-0%, -5%) rotateY(-20deg) skewY(2deg);
  }
}

#quote {
  margin: 0;
  font-size: 1.3rem;
}

@media screen and (min-width: 780px) {
  .box {
    width: 55%;
  }
  #quote {
    padding: 2rem 2rem;
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1000px) {
  .box {
    width: 40%;
  }
  #quote {
    padding: 2rem 1rem;
    font-size: 1.6rem;
  }
  .box {
    .fas {
      font-size: 25px;
      height: 50px;
      width: 50px;
      line-height: 50px !important;
      background: var(--color-red);
      color: white;
    }
    .text {
      padding: 4rem;
    }
  }
}
</style>
