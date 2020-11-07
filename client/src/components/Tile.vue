<template>
  <div class="tile noselect">
    <h2>{{title}}</h2>
    <p>{{subtitle}}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    subtitle: String,
  },
})
export default class Tile extends Vue {
  title!: string;
  subtitle!: string;

  mounted() {
    console.log(this.title, this.subtitle);
  }
}
</script>

<style scoped lang="scss">
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.tile {
    background: white;
    border-radius: 16px;
    box-shadow: 0 7px 30px -10px rgba(0, 59, 115,0.5);
    padding: 1.6rem;
    z-index: 1;
    min-width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    
    h2 {
        margin: 0;
        padding: 0;
        font-size: 3rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-blue);
    }
}

.tile:hover {
    transform: translate(0%, -5%);
    -moz-transform: translate(0%, -5%);
    -webkit-transform: translate(0%, -5%);
    -o-transform: translate(0%, -5%);
}
</style>
