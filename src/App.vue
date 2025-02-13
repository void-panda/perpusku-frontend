<script setup lang="ts">
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router'

const isLoggedIn = ref(false)
function setIsLoggedIn(){
  isLoggedIn.value = !isLoggedIn.value
}
provide('isLoggedIn', {
  isLoggedIn,
  setIsLoggedIn
})
</script>

<template>
  <RouterView />
</template>

