import Vue from 'vue'
import Vuex from 'vuex'
import ImageCollection from '../fixtures/lots_of_images'

Vue.use(Vuex)

const state = {
  count: 0,
  startPage: ImageCollection.startPage,
  thumbnail: ImageCollection.thumbnail,
  images: ImageCollection.images,
  selected: [],
  ogImages: ImageCollection.images,
  changeList: []
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  SELECT (state, imgArray) {
    state.selected = imgArray
  },
  SAVE_STATE (state) {
    state.ogImages = [ ...state.images ]
    state.changeList = [...[]]
    state.selected = [...[]]
  },
  SORT_IMAGES (state, value) {
    state.images = [ ...value ]
  },
  UPDATE_CHANGES (state, changeList) {
    state.changeList = [ ...changeList ]
  },
  UPDATE_IMAGES (state, images) {
    state.images = [ ...images ]
  },
  UPDATE_STARTPAGE (state, startPage) {
    state.startPage = startPage
  },
  UPDATE_THUMBNAIL (state, thumbnail) {
    state.thumbnail = thumbnail
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  handleSelect (context, imgArray) {
    context.commit('SELECT', imgArray)
  },
  saveState (context) {
    context.commit('SAVE_STATE')
  },
  sortImages (context, value) {
    context.commit('SORT_IMAGES', value)
  },
  updateChanges (context, changeList) {
    context.commit('UPDATE_CHANGES', changeList)
  },
  updateImages (context, images) {
    context.commit('UPDATE_IMAGES', images)
  },
  updateStartPage (context, startPage) {
    context.commit('UPDATE_STARTPAGE', startPage)
  },
  updateThumbnail (context, thumbnail) {
    context.commit('UPDATE_THUMBNAIL', thumbnail)
  }
}

// FIXME: These are used by components and mutators and should be global app vars/functions
// probably just stick them in the App data option and refer to them via this.$data

// function getImageById (id) {
//   var elementPos = this.getImageIndexById(id)
//   return this.$store.state.images[elementPos]
// }
//
// function getImageIndexById (id) {
//   return this.$store.state.images.map(function (image) {
//     return image.id
//   }).indexOf(id)
// }
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
