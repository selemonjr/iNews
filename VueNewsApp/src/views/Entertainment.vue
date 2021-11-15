<template>
<main v-if="!loading">
    <div class="NewsContent">
        <div v-for="(post,index) in posts" :key="index">
            <div class="NewsContainer">
              <div class="ImageContainer">
                <a :href="post.url" target="_blank">
                <img :src="post.image" class="NewsImage"/>
            </a>
              </div>
              <div class="NewsDescription">
                       <a :href="post.url" target="_blank">
                <h3 class="NewsHeadline">{{post.title}}</h3>
                 </a>
              </div>
            </div>
        </div>
    </div>
</main>
<main v-else>
               <div className="loader">
                    <div class="spinner-box">
  <div class="leo-border-1">
    <div class="leo-core-1"></div>
  </div> 
  <div class="leo-border-2">
    <div class="leo-core-2"></div>
  </div> 
</div>
                </div>
</main>
</template>
<script>
export default {
    name:"Technology",
    data() {
        return {
            posts:[],
            loading:true,
        }
    },
     async created() {
        this.loading = true;
        const data = await this.fetchNewsContent();
        const result = data.articles;
        this.posts = result.map(post => ({
            title:post.title,
            url:post.url,
            image:post.urlToImage,
        }))
        this.loading = false;
    },
    methods: {
        async fetchNewsContent() {
                             const API_KEY = "14779e6724cb4d29b72138730af57196";
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=entertainment&apiKey=${API_KEY}`
        const response = await fetch(url);
        const data = response.json();
        return data;
        }
    },
}
</script>
<style scoped>
.NewsContent {
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
}
.NewsImage {
    width:280px;
    height:200px;
    margin:10px;
}
a {
  text-decoration:none;
  color:#000;
}
.loader {
  margin-left: 44%;
  margin-top: 13%;
}
.leo-border-1 {
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin3D 1.8s linear 0s infinite;
}

.leo-core-1 {
  width: 100%;
  height: 100%;
  background-color: #37474faa;
  border-radius: 50%;
}

.leo-border-2 {
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(251, 91, 83);
  background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, rgba(251, 91, 83, 1) 100%);
  animation: spin3D 2.2s linear 0s infinite;
}
@keyframes spin3D {
  from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
}

.leo-core-2 {
  width: 100%;
  height: 100%;
  background-color: #1d2630aa;
  border-radius: 50%;
}
.NewsContainer {
  width:300px;
  max-height:700px;
  background:#eee;
  margin:10px;
  transition:0.5s;
}
.NewsContainer:hover {
      transform:scale(1.05);
}
.NewsDescription {
  margin-left:3%;
}
.NewsHeadline {
  font-family: 'Roboto', sans-serif;
  font-weight:900;
}
.NewsBrief {
  margin-top:3%;
}
@media(max-width:768px) {
  .NewsContainer {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    overflow:hidden;
    margin:10px 10px 5px 0;
    background:#fff;
  }
  .NewsImage {
    width:110px;
    height:110px;
    margin:5px;
  }
  .NewsContent {
    font-size:14px;
    font-family:sans-serif;
  }
  .NewsContainer:hover {
      transform:none;
}
  .loader {
  margin-left: 35%;
  margin-top: 20%;
}
.leo-border-1 {
  position: absolute;
  width: 130px;
  height: 130px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin3D 1.8s linear 0s infinite;
}

.leo-core-1 {
  width: 100%;
  height: 100%;
  background-color: #37474faa;
  border-radius: 50%;
}

.leo-border-2 {
  position: absolute;
  width: 130px;
  height: 130px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(251, 91, 83);
  background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, rgba(251, 91, 83, 1) 100%);
  animation: spin3D 2.2s linear 0s infinite;
}

@keyframes spin3D {
  from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
}

.leo-core-2 {
  width: 100%;
  height: 100%;
  background-color: #1d2630aa;
  border-radius: 50%;
}
}
@media (min-width:950px) and (orientation:landscape) {
  .NewsContainer {
    width:280px;
  }
  .NewsImage {
    height:250px;
    width:250px;
  }
}
</style>