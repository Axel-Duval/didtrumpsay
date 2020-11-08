<template>
  <div class="canvas-wrapper tile">
    <h1 v-bind:class="answered === answer ? 'good-answer' : 'wrong-answer'">
      {{ answer === true ? "Yes" : "No" }}
    </h1>
    <p class="sub-answer">{{ answer === true ? "he did" : "he didn't" }}</p>
    <div class="data-wrapper">
      <div class="column-wrapper">
        <div class="column" v-bind:style="noStyle">
          {{ noCount }}
        </div>
        <p>No</p>
      </div>
      <div class="column-wrapper">
        <div class="column" v-bind:style="yesStyle">
          {{ yesCount }}
        </div>
        <p>Yes</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    yesCount: Number,
    noCount: Number,
    answered: Boolean,
    answer: Boolean,
  },
})
export default class Canvas extends Vue {
  yesCount!: number;
  noCount!: number;
  answered!: boolean;
  answer!: boolean;

  get noStyle(): string {
    const height = (100 * this.noCount) / (this.noCount + this.yesCount);
    if (this.answer === false) {
      return `background: var(--color-blue);height: ${height}%;`;
    }
    return `background: var(--color-red);height: ${height}%;`;
  }

  get yesStyle(): string {
    const height = (100 * this.yesCount) / (this.noCount + this.yesCount);
    if (this.answer === false) {
      return `background: var(--color-red);height: ${height}%;`;
    }
    return `background: var(--color-blue);height: ${height}%;`;
  }
}
</script>

<style scoped lang="scss">
.data-wrapper {
    display: inline-flex;
    height: 100%;
    widows: 100%;
}
h1 {
  font-size: 3.6rem;
  font-weight: 500;
  padding: 1rem;
  margin: 0;
}
.sub-answer {
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0;
  margin-top: -1rem;
}

.good-answer {
  color: var(--color-green);
}

.wrong-answer {
  color: var(--color-red);
}

.tile {
  background: white;
  border-radius: 16px;
  box-shadow: 0 7px 30px -10px rgba(0, 59, 115, 0.5);
  padding: 1.6rem;
  z-index: 1;
  min-width: fit-content;
  transition: 0.2s;
}

.canvas-wrapper {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: space-evenly;
  padding: 0 1rem;
}

.column-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: 0 2rem;

  p {
    margin: 0;
    padding: 0 0 0.7rem 0;
    font-size: 1.3rem;
    font-weight: 500;
  }
}

.column {
  width: 4rem;
  min-height: 1px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 780px) {
  h1 {
    font-size: 5.6rem;
    font-weight: 600;
    padding: 1rem;
  }
  .sub-answer {
    font-size: 2rem;
  }
  .canvas-wrapper {
    height: 450px;
  }

  .column-wrapper {
    margin: 0 4rem;

    p {
      font-size: 1.8rem;
      font-weight: 500;
      padding: 1rem;
    }
  }

  .column {
    width: 7rem;
  }
}
</style>
