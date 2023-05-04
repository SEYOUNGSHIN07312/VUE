<template>
  <div>
    <button @click="getDogImage">멍멍아 이리온</button><br><br>
    <img v-if="imgSrc" :src="imgSrc" alt="#"><br>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'DogComponent',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods:{
    getDogImage() {
      const dogImageSearchURL = 'https://dog.ceo/api/breeds/image/random'
      
      axios({
        method: 'get',
        url: dogImageSearchURL
      })
        .then((response) => {
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  beforeCreate() {
    console.log('Dog beforeCreate!')
  },
  created() {
    this.getDogImage()
    console.log('Dog created!')
    // 오류남 -> 아직 준비단계이므로 HTML 요소에 접근 및 조작이 불가능
    // const button = document.querySelector('button')
    // button.innerText = '멍멍!'
  },
  beforeMount() {
    console.log('Dog beforeMount!')
  },
  mounted() {
    console.log('Dog mounted!')
    // 화면에 그리는 단계이므로 가능
    const button = document.querySelector('button')
    button.innerText = '멍멍!'
  },
  updated() {
    console.log('새로운 멍멍이!')
    console.log('Dog updated!')
  }
}
</script>

<style>

</style>
