<template>
  <h1 class="changing-quote">
    {{ quote }}
  </h1>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ChangingQuotes extends Vue {
  quote = "";
  count = 0;
  quotes = [
    "Stop the count!",
    "I am very smart",
    "You're fired!",
    "Fake news",
    "I'd be dating her",
    "I am very rich",
    "Cofveve"
  ];

  beforeCreate() {
    this.quote = "I'd be dating her";
    this.count = 0;
    setInterval(() => {
      this.quote = this.quotes[this.count];
      this.count === this.quotes.length - 1 ? (this.count = 0) : this.count++;
    }, 500);
  }
}
</script>

<style scoped lang="scss">
.changing-quote {
  font-size: 2em;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0;
  padding-bottom: 0;
}

@media screen and (min-width: 780px) {
  .changing-quote {
    font-size: 3.3em;
  }
}
</style>
