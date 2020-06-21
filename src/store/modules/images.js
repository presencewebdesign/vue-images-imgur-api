import api from "../../api/imgur"
import { router } from "../../main"
const state = {
   images: [],
   favouriteimages: [],
}
const getters = {
   allImages: (state) => state.images,
   favouriteImages: (state) => state.favouriteimages,
}
const actions = {
   async fetchImages({ rootState, commit }) {
      const { token } = rootState.auth
      const response = await api.fetchImages(token)
      commit("setImages", response.data.data)
   },
   // async favouriteListImages({ rootState, commit }) {
   //    const { token } = rootState.auth
   //    const response = await api.favouriteListImages(token)
   //    console.log(response.data.data)
   //    commit("setFavImages", response.data.data)
   // },
   async uploadImages({ rootState }, images) {
      // Get the access token
      const { token } = rootState.auth
      // Call the API module to do the upload
      await api.uploadImages(images, token)
      // Redirect our user to ImageList component
      router.push("/")
   },
}
const mutations = {
   setImages: (state, images) => {
      state.images = images
   },
   setFavImages: (state, favouriteimages) => {
      state.favouriteimages = favouriteimages
   },
}

export default {
   state,
   getters,
   actions,
   mutations,
}
