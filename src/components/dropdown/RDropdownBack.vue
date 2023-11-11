<script setup lang="ts">
import './assets/dropdown.scss'
import arrowIcon from './assets/arrow.svg'
</script>

<template>
  <div class="r-dropdown__back">
    <div class="r-dropdown__slot">Назад</div>

    <div class="r-dropdown__arrow" v-html="arrowIcon"></div>
  </div>
</template>
