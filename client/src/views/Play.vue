<template>
  <div id="play">
    <img id="top-border" src="../assets/top-border.svg" alt="Top right corner banner, red republican and blue democrate colors with white stars.">
    <Loader v-bind:loading="!fetched"/>
    <section v-if="fetched && !responded && count > current">
      <Card v-bind:quote="quote"/>
      <div class="btn-inline">
        <button class="btn-answer btn-outlined" @click="respond(false)">{{ noButton }}</button>
        <button class="btn-answer btn-blue" @click="respond(true)">{{ yesButton }}</button>
      </div>
    </section>
    <section v-else-if="fetched && responded && count > current">
      affichage de la reponse
      <button>sources</button>
      <button @click="next()">next</button>
    </section>
    <section v-else>
      affichage du score final
      <button @click="fetchQuestions(5)">5 more</button>
      <button @click="fetchQuestions(10)">10 more</button>
      <button @click="fetchQuestions(15)">15 more</button>
      
    {{ good }}
    {{ bad }}
    </section>
    <img id="bottom-border" src="../assets/bottom-border.svg" alt="">
  </div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { getQuestions } from "../utils/requests";
import Loader from "@/components/Loader.vue";
import Card from "@/components/Card.vue";

interface ComplexAnswer {
  good: number;
  bad: number;
}

interface ComplexQuote { 
  quote: string;
  prounonced: boolean;
  sources: Array<string>;
  answers: ComplexAnswer;
}

@Options({
  components: {
    Loader,
    Card
  },
})
export default class Play extends Vue {
  fetched = false;
  responded = false;
  quotes?: Array<ComplexQuote>;
  count = 0;
  current = 0;
  good = 0;
  bad = 0;
  noList = ["No he didn't", "Of course no", "Nope", "Not yet"];
  yesList = ["Surely", "Yes he did", "Yes of course"];

  /* COMPUTED */
  get quote(): string {
    return this.quotes![this.current].quote;
  }

  get noButton(): string {
    return this.noList[this.current % this.noList.length];
  }

  get yesButton(): string {
    return this.yesList[this.current % this.yesList.length];
  }

  /* METHODS */
  fetchQuestions(nb: number) {
    this.fetched = false;
    getQuestions(nb)
      .then((res) => {
        this.current = 0;
        this.count = res.data.length;
        this.quotes = res.data;
        this.fetched = true;
      })
      .catch((err) => {
        this.fetched = true;
        console.log(err);
        //this.$router.push('/')
      });
  }

  next() {
    this.responded = false;
    this.current += 1;
  }

  respond(res: boolean) {
    this.responded = true;
    /* Send response to server */
    this.good += 1;
    //this.bad +=1
  }

  /* LIFECYCLE */
  beforeMount() {
    this.fetchQuestions(5);
  }
}
</script>

<style scoped lang="scss">
.btn-outlined {
  background: transparent;
  color: var(--color-red);
  font-size: 1rem;
}

.btn-blue {
  background: var(--color-blue);
  border: solid 2px var(--color-blue);
  font-size: 1rem;
}

.btn-blue:hover {
  background: var(--color-blue-hover);
  color: white;
}

.btn-answer {
  padding: 0.6rem 1.6rem;
}

.btn-inline {
  padding: 2rem 1rem;
  display: flex;
  gap: 20px;
}

#play img {
  width: 250px;
  position: absolute;
}

#top-border {
  top: 0;
  right: 0;
}

#bottom-border {
  bottom: 0;
  left: 0;
}

section {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 780px) {
  #play img {
    width: 350px;
  }
  .btn-outlined, .btn-blue{
  font-size: 1.5rem;
}
}
</style>