<script setup lang="ts">
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router'
import { Toaster } from './views/components/ui/toast';

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
  <Toaster/>
</template>

