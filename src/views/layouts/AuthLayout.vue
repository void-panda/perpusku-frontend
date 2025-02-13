<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  isReversed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 md:mt-0 w-full">
    <div class="flex justify-center items-center py-24">
      <div class="gap-6 grid mx-auto w-[350px]">
        <div class="gap-2 grid text-center">
          <h1 class="font-bold text-3xl">
            {{ title }}
          </h1>
          <p class="text-muted-foreground text-balance">
            {{ description }}
          </p>
        </div>
        <slot />
        <div class="mt-4 text-sm text-center">
          <slot name="footDescription" />
        </div>
      </div>
    </div>
    <div class="hidden lg:block bg-muted" :class="{ 'order-first': isReversed }">
      <img v-if="!isReversed" src="../../assets/signin.svg" alt="Image">
      <img v-else src="../../assets/signup.svg" alt="Image">
    </div>
  </div>
</template>
