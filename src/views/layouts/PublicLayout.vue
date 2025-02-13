<script lang="ts" setup>
import NavigationBar from '@/views/components/partials/guest/NavigationBar.vue';


</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main class="mx-auto container">
    <slot/>
  </main>
</template>


