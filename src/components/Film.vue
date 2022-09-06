<template>
  <div class="movies">
    <a class="back" href="#/">
      <div class="back">
        <img class="back__img" src="../assets/Back.svg" alt="arrow" />
      </div>
      <button class="back__btn">Назад к списку</button>
    </a>
    <div class="sorting"></div>
    <article class="film" :key="movie.id">
      <!-- Я не могу вытащить постер из массива данных. Выдаёт ошибку, там не полная ссылка -->
      <div class="movie__img-block">
        <img
          class="movie-img"
          :src="
            movie.frames
              ? movie.frames[0]
              : movie.screenshots
              ? movie.screenshots[0]
              : 'Постер отвутствует'
          "
          :alt="movie.title"
        />
      </div>
      <div class="movie__info">
        <h2 class="title">{{ movie.title }}</h2>
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
        <p class="description description-visible">
          {{ movie.description && movie.description.replace("", "...") }}
        </p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Film",
  data() {
    return {
      movie: JSON.parse(localStorage.getItem("elem")),
    };
  },
});
</script>
