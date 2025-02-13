<script setup lang="ts">
import { buttonVariants } from '@/views/components/ui/button';
import PublicLayout from '@/views/layouts/PublicLayout.vue';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const handleGetStarted = () => {
  // Add your logic for the "Get Started" action here
  console.log('Get Started clicked')
}
</script>

<template>
  <PublicLayout>
    <div class="py-20">
      <div class="bg-background text-foreground">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 py-16 container">
          <div class="gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
              <h1 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Streamline Your Library Management
              </h1>
              <p class="mt-4 text-muted-foreground text-xl">
                Effortlessly organize, track, and manage your library's resources with our powerful and intuitive
                system.
              </p>
              <div class="mt-8">
                <RouterLink to="/signin" :class="clsx(buttonVariants({size: 'lg'}))" @click="handleGetStarted">
                  Get Started
                  <ArrowRight class="ml-2 w-5 h-5" />
                </RouterLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="w-full max-w-md overflow-hidden">
                <img src="@/assets/library2.svg" alt="Library Management Illustration"
                  class="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>
