<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { Package2 } from 'lucide-vue-next';

</script>

<template>
  <RouterLink to="/" class="flex items-center gap-2 font-semibold">
    <Package2 class="w-6 h-6" />
    <span class="">PerpusKu</span>
  </RouterLink>
</template>
