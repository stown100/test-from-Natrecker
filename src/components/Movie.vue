<template>
  <div v-if="!showPreloader && item.length === 0" class="plug">
    <p class="plug__text">
      {{ plug }}
    </p>
  </div>
  <div v-if="!showPreloader">
    <article class="movie" v-for="movie in item" :key="movie.id">
      <!-- Я не могу вытащить постер из массива данных. Выдаёт ошибку, там не полная ссылка -->
      <div class="movie__img-block">
        <img
          class="movie-img"
          :src="
            movie.frames
              ? movie.frames[0]
              : movie.screenshots && movie.screenshots[0]
          "
          :alt="movie.title"
        />
      </div>
      <div class="movie__info">
        <h2 class="title">
          <a
            href="#/film"
            v-on:click="() => routeToFilm(movie)"
            class="title__link"
            >{{ movie.title }}</a
          >
        </h2>
        <div :class="movie.collapse.duration ? 'duration' : 'duration_hidden'">
          <span class="duration__hours">{{
            movie.collapse.duration && movie.collapse.duration[0]
          }}</span>
          <img class="duration__img" src="../assets/Vector.svg" alt="" />
        </div>
        <span class="year movie-text-color">{{ movie.year }}, </span>
        <span class="genre movie-text-color">{{
          movie.genres.join(", ")
        }}</span>
        <p class="author movie-text-color">
          Режиссёр: {{ movie.directors && movie.directors[0] }}
        </p>
        <span class="actors"
          ><span class="movie-text-color">Актёры </span
          >{{ movie.actors && movie.actors.join(", ") }}</span
        >
        <p class="description">
          {{ movie.description && movie.description.replace("", "...") }}
        </p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Film from "./Film.vue";
export default {
  name: "Movie",
  components: {
    Film,
  },
  data() {
    return {
      upHere: false,
      plug: "К сожалению, по вашему запросу ничего не найдено...",
    };
  },
  props: {
    showPreloader: {
      type: Boolean,
      default() {
        return [];
      },
    },
    item: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    routeToFilm(elem) {
      // Очищаю локалсторадж до добавления туда новго фильма
      localStorage.removeItem("elem");
      window.scrollTo(0, 0);
      // Добавляю фильм в локалсторадж
      return localStorage.setItem("elem", JSON.stringify(elem));
    },
  },
};
</script>
