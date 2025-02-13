<script setup lang="ts">
import { Button } from '@/views/components/ui/button'
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next';

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
</script>

<template>
  <Button variant="outline" size="icon" @click="mode == 'dark' ? mode = 'light' : mode = 'dark'">
    <Sun v-if="mode == 'dark'" />
    <Moon v-if="mode == 'light'" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
