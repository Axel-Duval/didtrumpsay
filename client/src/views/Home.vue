<template>
  <div>
    <main>
      <section id="hero">
        <div id="hero-logo">
          <img
            src="../assets/logo.png"
            alt="Website logo, Did Trump Say is written on red republican and blue democrate background."
          />
        </div>
        <div id="hero-quotes">
          <ChangingQuotes />
          <hr />
          <button class="btn-play-home" @click="play()">Play now</button>
        </div>
      </section>
      <section id="infos">
        <h2>Challenge yourself on Trump quotes.</h2>
        <p>
          We have all wondered if <a href="https://en.wikipedia.org/wiki/Donald_Trump" target="_blank" rel="noopener noreferrer">Donald Trump</a> meant everything he said. This
          quiz is made to aware or remind you of what Trump really said. The
          sentences he said and tweeted during his tenure in the White House
          have already become cult. From statements on global warming to the
          <strong>COVID-19</strong> crisis or even the recent elections, you have probably passed
          <a href="https://en.wikipedia.org/wiki/Donald_Trump" target="_blank" rel="noopener noreferrer">Donald Trump</a> shocking and funniest statements. In this quiz you will
          see that this funny character has no limits.
        </p>
        <h2>Why Trump?</h2>
        <p>
          Our biggest question is whether Trump is mentally disabled or ill, but
          we try to unravel this mystery every day. Maybe he's ignorant, crazy,
          very smart, or delusional. Maybe he fights the deep state leading
          <strong>QAnon</strong>. Welcome to conspiracy theories. What if The Great Awakening was
          just a premise? What about <strong>Black Lives Matters</strong> ? What about <strong>Antifa</strong> ?
          Do you know pizzagate ? Are we Q ? Ok just kidding this is for a
          better SEO. Or not, we don't believe in coincidences...
        </p>
        <ul class="keywords">
          <li>Trump</li>
          <li><a href="https://en.wikipedia.org/wiki/Donald_Trump" target="_blank" rel="noopener noreferrer">Donald Trump</a></li>
          <li>climate change</li>
          <li>global warming</li>
          <li>elections 2020</li>
          <li>republicans</li>
          <li>democrats</li>
          <li>white house</li>
          <li>deep state</li>
          <li><a href="https://en.wikipedia.org/wiki/QAnon" target="_blank" rel="noopener noreferrer">QAnon</a></li>
          <li>pizzagate</li>
          <li><a href="https://en.wikipedia.org/wiki/Antifa_(États-Unis)" target="_blank" rel="noopener noreferrer">Antifa</a></li>
          <li>Black Lives Matters</li>
          <li>America first</li>
          <li>lies</li>
        </ul>
        <div>
          <button class="btn-nav" @click="scrollHome()">Back to the top</button>
        </div>
      </section>
      <button id="btn-info" class="btn-nav" @click="scrollInfos()">
        Infos
      </button>
    </main>
    <footer>
      <p>&copy; 2020 DidTrumpSay | #DidTrumpSay | <i>Q</i></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChangingQuotes from "@/components/ChangingQuotes.vue";

@Options({
  components: {
    ChangingQuotes,
  },
})
export default class Home extends Vue {
  scrollInfos() {
    document.getElementById("infos")!.scrollIntoView({ behavior: "smooth" });
  }
  scrollHome() {
    document.getElementById("hero")!.scrollIntoView({ behavior: "smooth" });
  }
  play() {
    this.$router.push("/play");
  }
}
</script>

<style scoped lang="scss">
main {
  overflow: hidden;
}

footer {
  background: var(--color-blue);
  color: white;
  padding: 2rem;
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    background: rgb(202, 202, 202);
    border-radius: 5px;
    padding: 0 0.4rem;
    margin: 0.2rem 0.2rem;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

#infos {
  width: 84%;
  margin-left: 8%;
}

#infos h2 {
  padding-top: 1.5rem;
  font-weight: 600;
}

#infos p {
  text-align: justify;
}

#infos div {
  display: flex;
  margin: 5rem 0;
}

#btn-info {
  position: absolute;
  top: 10px;
  right: 10px;
}

section {
  min-height: 100vh;
  width: 100vw;
}

#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#hero-logo {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

#hero-quotes {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#hero-quotes hr {
  border: solid 2px black;
  background: black;
  width: 70%;
}

#hero div {
  height: 50vh;
  width: 100vw;
}

#hero div img {
  height: 80%;
}

.btn-play-home {
  position: relative;
  margin-top: 2rem;
}

@media screen and (min-width: 780px) {
  #hero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #hero-logo {
    align-items: center;
  }

  #hero div {
    height: 100vh;
    width: 50vw;
  }

  #hero div img {
    height: 60%;
  }

  #hero-quotes {
    justify-content: center;
    align-items: flex-start;
  }

  #hero-quotes hr {
    width: 80%;
  }

  #infos {
    width: 60%;
    margin-left: 20%;
  }

  #infos h2 {
    font-size: 2.3rem;
  }
}

@media screen and (min-width: 1500px) {
  #hero-quotes hr {
    width: 50%;
  }

  #hero div img {
    height: 70%;
  }
}
</style>
