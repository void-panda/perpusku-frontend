<script setup lang="ts">
import SideBar from '@/views/components/partials/admin/SideBar.vue';
import TopBar from '@/views/components/partials/admin/TopBar.vue';
</script>

<template>
  <div class="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] w-full min-h-screen">
    <!-- sidebar -->
    <SideBar />
    <!-- end sidebar -->

    <div class="flex flex-col">
      <!-- Top bar -->
      <TopBar />
      <!-- End Top bar -->

      <!-- Main content -->
      <main class="flex flex-col flex-1 gap-4 lg:gap-6 p-4 lg:p-6">
        <slot name="header" />
        <slot />
      </main>
      <!-- End Main content -->
    </div>
  </div>
</template>
