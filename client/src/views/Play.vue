<template>
  <div id="play">
    <img
      id="top-logo"
      src="../assets/logo.png"
      alt="Website logo, Did Trump Say is written on red republican and blue democrate background."
      @click="$router.push('/')"
    />
    <img
      id="top-border"
      src="../assets/top-border.svg"
      alt="Top right corner banner, red republican and blue democrate colors with white stars."
    />
    <Loader v-bind:loading="!fetched" />
    <section v-if="fetched && !responded && count > current">
      <Card v-bind:quote="quote" />
      <div class="btn-inline">
        <button class="btn-answer btn-outlined" @click="respond(false)">
          {{ noButton }}
        </button>
        <button class="btn-answer btn-blue" @click="respond(true)">
          {{ yesButton }}
        </button>
      </div>
    </section>
    <section v-else-if="fetched && responded && count > current">
      <Canvas v-bind:yesCount="question.pronounced === true ? question.answers.correct : question.answers.incorrect"
              v-bind:noCount="question.pronounced === false ? question.answers.correct : question.answers.incorrect"
              v-bind:answered="question.pronounced === response"
              v-bind:answer="question.pronounced"
      />
      <div class="btn-inline">
        <button class="btn-answer btn-outlined">
          Sources
        </button>
        <button class="btn-answer btn-blue" @click="next()">
          Next
        </button>
      </div>
    </section>
    <section v-else>
      <img id="trump-face" src="../assets/trump-face.jpg" alt="Trump face" />
      <h1>
        <span class="text-red">{{ good }}</span
        >/<span class="text-blue">{{ good + bad }}</span>
      </h1>
      <p>{{finalSentence}}</p>
      <div class="tiles-wrapper">
        <Tile
          v-bind:title="'5'"
          v-bind:subtitle="'more quotes'"
          @click="fetchQuestions(5)"
        />
        <Tile
          v-bind:title="'10'"
          v-bind:subtitle="'more quotes'"
          @click="fetchQuestions(10)"
        />
        <Tile
          v-bind:title="'15'"
          v-bind:subtitle="'more quotes'"
          @click="fetchQuestions(15)"
        />
      </div>
    </section>
    <img
      id="bottom-border"
      src="../assets/bottom-border.svg"
      alt="Bottom left corner banner, red republican and blue democrate colors with white stars."
    />
  </div>
</template>

<script lang="ts">
import * as api from "@/api";
import { Options, Vue } from "vue-class-component";
import { getQuestions, postAnswer} from "../utils/requests";
import Loader from "@/components/Loader.vue";
import Card from "@/components/Card.vue";
import Tile from "@/components/Tile.vue";
import Canvas from "@/components/Canvas.vue";



@Options({
  components: {
    Loader,
    Card,
    Tile,
    Canvas
  },
})
export default class Play extends Vue {
  fetched = false;
  responded = false;
  response = false;
  quotes?: api.endpoints.GET_RANDOM_QUOTES.Response;
  count = 0;
  current = 0;
  good = 0;
  bad = 0;
  noList = [
    "No he didn't",
    "Of course no",
    "Nope",
    "Not yet",
    "Definitely not",
    "Not at all",
  ];
  yesList = ["Surely", "Yes he did", "Of course"];



  /* COMPUTED */
  get quote(): string {
    return this.quotes![this.current].quote;
  }

  get question() {
    return this.quotes![this.current]
  }

  get currentId(): string {
    return this.quotes![this.current]._id
  }

  get noButton(): string {
    return this.noList[this.current % this.noList.length];
  }

  get yesButton(): string {
    return this.yesList[this.current % this.yesList.length];
  }

  get finalSentence(): string {
    if(this.good >= this.bad) {
      return ("Congratulations!")
    }
    return ("May be next time...")
  }

  /* METHODS */
  fetchQuestions(nb: number) {
    this.fetched = false;
    getQuestions(nb)
      .then((res) => {
        console.log(res)
        this.current = 0;
        this.count = res.data.length;
        this.quotes = res.data;
        this.fetched = true;
      })
      .catch(() => {
        this.$router.push('/')
      });
  }

  next() {
    this.responded = false;
    this.current += 1;
  }

  respond(response: boolean) {
    this.response = response
    if(this.question.pronounced === response) {
      this.good += 1
      response = true;
    }
    else {
      this.bad += 1
      response = false;
    }
    this.responded = true;

    /* chart */

    postAnswer(this.currentId, response)
      .then((res) => {
        console.log(res)
      })
      .catch(() => {
        this.$router.push('/')
      });
  }

  /* LIFECYCLE */
  beforeMount() {
    this.fetchQuestions(5);
  }
}
</script>

<style scoped lang="scss">
#trump-face {
  display: none;
}

.text-red {
  color: var(--color-red);
  font-weight: 700;
}

.text-blue {
  color: var(--color-blue);
  font-weight: 700;
}

h1 {
  font-size: 3.6rem;
  font-weight: 500;
  padding: 1rem;
  margin: 0;
}

p {
  font-size: 2rem;
  padding: 1rem;
  margin: 0;
}

.tiles-wrapper {
  margin-top: 1.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

#top-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  cursor: pointer;
}

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
  padding: 2rem 0;
  display: flex;
  gap: 30px;
}

#top-border,
#bottom-border {
  width: 250px;
  position: absolute;
  z-index: -2;
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
  h1 {
  font-size: 5.6rem;
  font-weight: 600;
  padding: 1rem;
}

  #trump-face {
    display: block;
    border-radius: 50%;
    width: 200px;
    border: solid 10px var(--color-red);
    padding: 0.6rem;
    margin: 1rem;
  }

  #top-border,
  #bottom-border {
    width: 350px;
  }
  .btn-outlined,
  .btn-blue {
    font-size: 1.5rem;
  }
  #top-logo {
    width: 150px;
  }
  .tiles-wrapper {
    flex-direction: row;
    gap: 30px;
  }
}
</style>