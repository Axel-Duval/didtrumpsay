<template>
  <div class="my-loader" v-if="loading == true">
    <div class="loading-dots">
      <div class="bounce"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    loading: Boolean
  }
})
export default class Loader extends Vue {
    loading!: boolean;
}
</script>

<style scoped lang="scss">
.my-loader{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: white;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.loading-dots > div{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: inline-block;
    animation: 1.5s bounce infinite ease-in-out both;
    -o-animation: 1.5s bounce infinite ease-in-out both;
    -moz-animation: 1.5s bounce infinite ease-in-out both;
    -webkit-animation: 1.5s bounce infinite ease-in-out both;
    -ms-animation: 1.5s bounce infinite ease-in-out both;
    -khtml-animation: 1.5s bounce infinite ease-in-out both;
}

.loading-dots .bounce{
    -o-animation-delay: -0.30s;
    -moz-animation-delay: -0.30s;
    -webkit-animation-delay: -0.30s;
    -ms-animation-delay: -0.30s;
    animation-delay: -0.30s;
    background-color: var(--color-red);
    margin: 0 1rem;
}

.loading-dots .bounce2{
    -o-animation-delay: -0.15s;
    -moz-animation-delay: -0.15s;
    -webkit-animation-delay: -0.15s;
    -ms-animation-delay: -0.15s;
    animation-delay: -0.15s;
    background-color: var(--color-blue);
    margin: 0 1rem;
}

.loading-dots .bounce3{
    -o-animation-delay: -0.15s;
    -moz-animation-delay: -0.15s;
    -webkit-animation-delay: -0.15s;
    -ms-animation-delay: -0.15s;
    animation-delay: -0.15s;
    background-color: var(--color-red);
    margin: 0 1rem;
}

@keyframes bounce{
    0%,80%,100%{
        transform: scale(0);
    }
    40%{
        transform: scale(1);
    }
}
</style>
