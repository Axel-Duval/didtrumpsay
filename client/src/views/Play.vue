<template>
  <div id="play">
    <h1>This the play page</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { getQuestions } from "../utils/requests";

export default class Play extends Vue {
  fetched = false

  beforeCreate(){
    this.fetchQuestions(5)
  }

  fetchQuestions(nb: number){
    this.fetched = false
    getQuestions(5)
    .then((res)=>{
      this.fetched = true
      console.log(res)
    })
    .catch((err)=> {
      this.fetched = true
      console.log(err)
      //this.$router.push('/')
    })
  }
}
</script>