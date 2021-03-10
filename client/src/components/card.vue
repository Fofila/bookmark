<template>
  <div class="mdl-card mdl-shadow--2dp mdl-cell" :class="size">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">{{ title }}</h2>
    </div>
    <div v-if="description" class="mdl-card__supporting-text mdl-color-text--grey-600">
      {{ description }}
    </div>
    <div v-if="url" class="mdl-card__actions mdl-card--border">
      <a :href="url" class="mdl-button mdl-js-button mdl-js-ripple-effect">GO TO WEBSITE</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    size: String,
    description: String,
    url: String,
  },
};
</script>

<style>
</style>
