<template>
  <div class="movies">
    <h3 class="movies__title">Фильмы</h3>
    <div class="sorting">
      <div class="sorting__from-title">
        <button
          v-on:click="sortByTitle"
          :class="[isActiveSortByTitleCheckbox ? notActive : activeClass]"
        >
          <img
            src="../assets/Path.svg"
            v-if="!isActiveSortByTitleCheckbox"
            class="sorting-button__img"
          />
        </button>
        <span class="sorting-description">Отсортировать по названию</span>
      </div>
      <div class="sorting__from-year">
        <button
          v-on:click="sortByYear"
          :class="[isActiveSortByYearBtnCheckbox ? notActive : activeClass]"
        >
          <img
            src="../assets/Path.svg"
            v-if="!isActiveSortByYearBtnCheckbox"
            class="sorting-button__img"
          />
        </button>
        <span class="sorting-description">Отсортировать по году</span>
      </div>
    </div>
    <Movie :item="movie" :showPreloader="showPreloader" />
    <Preloader :showPreloader="showPreloader" />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import axios from "axios";
import Movie from './Movie.vue';
import Preloader from "./Preloader.vue"
export default defineComponent({
  name: 'App',
  components: {
    Movie,
    Preloader
  },
  data() {
    return {
      movie: [],
      errors: [],
      selected: "",
      isActiveSortByTitleCheckbox: true,
      isActiveSortByYearBtnCheckbox: true,
      notActive: "sorting-button",
      activeClass: "sorting-button_active",
      showPreloader: true,
    }
  },
  created() {
    this.showPreloader = true;
    axios
      .get(" https://floating-sierra-20135.herokuapp.com/api/movies")
      .then((responce) => {
        this.movie = responce.data.data
        })
      .catch((event) => {
        this.errors.push(event)
        })
      .finally(() => {
        this.showPreloader = false
      })
  },
  methods: {
    sortByTitle() {
      const sortArray = this.movie.sort((prev, next) => {
            if (prev.title < next.title) return -1;
            if (prev.title < next.title) return 1;
          })
        this.isActiveSortByTitleCheckbox = !this.isActiveSortByTitleCheckbox;
        this.isActiveSortByYearBtnCheckbox = true;
        if (this.isActiveSortByTitleCheckbox === false) {
          return sortArray
        }
    },
    sortByYear() {
        this.isActiveSortByYearBtnCheckbox = !this.isActiveSortByYearBtnCheckbox;
        this.isActiveSortByTitleCheckbox = true;
        this.movie.sort((prev, next) => prev.year - next.year);
    },
}
})
</script>
