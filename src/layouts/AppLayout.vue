<template>
  <div class="app-layout">
    <component :is="layout">
      <slot></slot>
    </component>
    <div class="stars-bg">
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div id="stars-group-4"></div>
      <div id="stars-group-5"></div>
      <div id="stars-group-6"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import BaseLayout from './BaseLayout.vue';

const route = useRoute();
const layout = shallowRef(BaseLayout);

watch(
  () => route.meta,
  async (meta) => {
    try {
      if (meta.layout) {
        const component = await import(`./${meta.layout}.vue`);
        layout.value = component?.default || BaseLayout;
      } else {
        layout.value = BaseLayout;
      }
    } catch (e) {
      console.error('Динамический шаблон не найден. Установлен шаблон по-умолчанию.', e);
      layout.value = BaseLayout;
    }
  },
);
</script>

<style lang="scss">
@function generate-random-stars($screen-width, $color, $density) {
  $h-shadow: random($screen-width);
  $v-shadow: random($screen-width);

  $stars: '#{$h-shadow}px #{$v-shadow}px #{$color}';
  @for $i from 2 through $density {
    $h-shadow: random($screen-width);
    $v-shadow: random($screen-width);

    $stars: '#{$stars}, #{$h-shadow}px #{$v-shadow}px #{$color}';
  }
  @return unquote($stars);
}

@mixin stars-content($screen-width, $color, $density, $speed, $delay) {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: generate-random-stars($screen-width, $color, $density);
  animation-name: glowing-stars;
  animation-duration: $speed + s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: $delay + s;
}

.app-layout {
  position: relative;
}

//Change colors for multi-colors star groups

.stars-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  color: #ffffff;
  background: #000;
}

#stars-group-1 {
  @include stars-content(1960, #ffffff, 200, 5, 0);
}

#stars-group-2 {
  @include stars-content(1960, #fff, 200, 5, 1);
}

#stars-group-3 {
  @include stars-content(1960, #fff, 200, 5, 2);
}

#stars-group-4 {
  @include stars-content(1960, #fff, 200, 5, 3);
}

#stars-group-5 {
  @include stars-content(1960, #fff, 200, 5, 4);
}

#stars-group-6 {
  @include stars-content(1960, #fff, 200, 5, 5);
}

@keyframes glowing-stars {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
