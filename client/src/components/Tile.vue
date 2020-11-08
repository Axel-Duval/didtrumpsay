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
}
</script>

<style scoped lang="scss">

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
    h2 {
        color: var(--color-red);
    }
}
</style>
