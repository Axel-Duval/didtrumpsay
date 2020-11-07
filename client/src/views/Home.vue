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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          condimentum ex, eu tempor urna. Duis tincidunt, urna eu porta iaculis,
          orci odio luctus nisi, vitae cursus metus neque eu felis. Nam commodo
          consequat porttitor. Maecenas volutpat erat eget nulla tempor pretium.
          Etiam eleifend rhoncus molestie. Ut vestibulum tristique efficitur.
          Suspendisse dignissim velit eget nulla finibus molestie. Proin auctor
          feugiat tellus sit amet suscipit. Sed ultrices ligula vel elit posuere
          condimentum. Phasellus eu massa enim. Duis nec nisl id arcu sagittis
          sagittis. Fusce accumsan gravida orci, in auctor eros pretium a. Etiam
          a est vitae lacus pulvinar dapibus in ac libero.
        </p>
        <h2>Who we are?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          condimentum ex, eu tempor urna. Duis tincidunt, urna eu porta iaculis,
          orci odio luctus nisi, vitae cursus metus neque eu felis. Nam commodo
          consequat porttitor. Maecenas volutpat erat eget nulla tempor pretium.
          Etiam eleifend rhoncus molestie. Ut vestibulum tristique efficitur.
          Suspendisse dignissim velit eget nulla finibus molestie. Proin auctor
          feugiat tellus sit amet suscipit. Sed ultrices ligula vel elit posuere
          condimentum. Phasellus eu massa enim. Duis nec nisl id arcu sagittis
          sagittis. Fusce accumsan gravida orci, in auctor eros pretium a. Etiam
          a est <strong>vitae</strong> lacus pulvinar dapibus in ac libero.
        </p>
        <div>
          <button class="btn-nav" @click="scrollHome()">Back to the top</button>
        </div>
      </section>
      <button id="btn-info" class="btn-nav" @click="scrollInfos()">
        Infos
      </button>
    </main>
    <footer><p>&copy; 2020 DidTrumpSay | #DidTrumpSay | <i>Q</i></p></footer>
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
  height: 100vh;
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

  #hero-quotes {
    justify-content: center;
    align-items: flex-start;
  }

  #hero-quotes hr {
    width: 55%;
  }

  #infos {
    width: 60%;
    margin-left: 20%;
  }

  #infos h2 {
    font-size: 2.3rem;
  }
}
</style>
