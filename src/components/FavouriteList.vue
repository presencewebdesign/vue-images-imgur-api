<template>
   <div>
      <div v-if="isLoggedIn" class="image-container">
         <div class="container">
            <div class="col">
               <h2>Albums</h2>
               <div :key="favouriteimages.id" v-for="favouriteimages in favouriteImages">
                  <div v-if="favouriteimages.is_album">
                     <img :key="favouriteimages.id" :src="favouriteimages.images['link']" />
                  </div>
               </div>
            </div>
            <div class="col">
               <div :key="favouriteimages.id" v-for="favouriteimages in favouriteImages">
                  <div v-if="!favouriteimages.is_album">
                     <img :key="favouriteimages.id" :src="favouriteimages.link" />
                  </div>
               </div>
            </div>
         </div>
      </div>
      <h2 v-else>You have no favourites</h2>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   name: "FavouriteList",
   computed: mapGetters(["favouriteImages", "isLoggedIn"]),
   methods: mapActions(["favouriteListImages"]),
   created() {
      this.favouriteListImages();
   }
};
</script>

<style scoped>
.image-container {
   column-count: 3;
   column-gap: 0;
}

img {
   max-width: 100%;
   padding: 5px;
}
</style>
