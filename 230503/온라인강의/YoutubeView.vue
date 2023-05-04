<template>
  <div>
    <div class="container">
      <div>
        <h1 class="text-primary">SSAFY TUBE</h1>
      </div>

      <section v-if="isSelecedVideo" class="mt-4">
        <div class="ratio ratio-16x9">
          <iframe :src="videoSrc" frameborder="0"></iframe>
        </div>
        <div class="video-title shadow p-3 mb-5 bg-body rounded">
          <h4>{{ selectedVideo.snippet.title }}</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import _ from 'lodash'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default {
  name: 'YoutubeView',
  created() {
    axios.get(API_URL, {
      params: {
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        q: '백현'
      }
    }).then((response) => {
      this.videos = response.data.items
      this.selectedVideo = this.videos[0]
    }).catch((error) => {
      console.error(error)
    })
  },
  data() {
    return {
      videos: [],
      selectedVideo: {}
    }
  },
  computed: {
    videoSrc() {
      // return `http://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
      const url = 'http://www.youtube.com/embed/'
      return url + this.selectedVideo.id.videoId
    },
    isSelecedVideo() {
      // 길이가 1 이상이면 True
      return !!Object.keys(this.selectedVideo).length
    }
  }
}
</script>

<style>

* {
  font-family: 'Noto Sans KR', sans-serif;
}

.video-title {
  border: 1px solid gray;
}

</style>