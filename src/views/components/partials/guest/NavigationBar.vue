<script setup lang="ts">
import { inject, ref } from 'vue'
import { Menu } from 'lucide-vue-next';
import { Input } from '@/views/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/views/components/ui/sheet'
import { Button, buttonVariants } from '@/views/components/ui/button'
import PerpuskuLogo from '@/views/components/PerpuskuLogo.vue';
import { menuItems } from '@/lib/constants';
import { RouterLink } from 'vue-router';
import clsx from 'clsx';
import UserDropdownMenu from '../admin/UserDropdownMenu.vue';
import ThemeToggle from '../../ThemeToggle.vue';

const isMobileMenuOpen = ref(false)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
const { isLoggedIn } = inject('isLoggedIn')
</script>

<template>
  <nav class="top-0 fixed bg-background/80 backdrop-blur-md border-b w-screen">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 container">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <PerpuskuLogo />
        </div>

        <!-- Desktop Menu (center) -->
        <div class="hidden md:flex flex-1 items-center md:ps-20">
          <RouterLink v-for="item in menuItems" :key="item.name" :to="item.href"
            class="px-3 py-2 font-medium hover:text-primary text-sm">
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Right section: Search, Actions, User Menu -->
        <div class="flex items-center">
          <!-- Search -->
          <div class="hidden sm:block mr-4">
            <Input placeholder="Search..." class="w-64" />
          </div>

          <!-- Action Buttons -->
          <ThemeToggle/>

          <div v-if="!isLoggedIn" class="hidden sm:flex items-center space-x-2 mr-4 ml-2">
            <RouterLink to="/signin" :class="clsx(buttonVariants({ variant: 'secondary' }))">
              Sign In
            </RouterLink>
            <RouterLink to="/signup" :class="clsx(buttonVariants())">Sign Up</RouterLink>
          </div>

          <!-- User Menu (if logged in) -->
          <UserDropdownMenu v-else />

          <!-- Mobile menu button -->
          <Button variant="ghost" class="md:hidden" @click="isMobileMenuOpen = true">
            <Menu class="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Sheet v-model:open="isMobileMenuOpen" side="left">
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav class="flex flex-col space-y-4 mt-4">
          <RouterLink v-for="item in menuItems" :key="item.name" :to="item.href"
            class="px-3 py-2 font-medium hover:text-primary text-sm" @click="isMobileMenuOpen = false">
            {{ item.name }}
          </RouterLink>
        </nav>
        <div class="mt-4">
          <Input placeholder="Search..." class="mb-4 w-full" />
          <div class="space-y-2" v-if="!isLoggedIn">
            <RouterLink to="/signin" :class="clsx('w-full', buttonVariants({ variant: 'secondary' }))">
              Sign In
            </RouterLink>
            <RouterLink to="/signup" :class="clsx('w-full', buttonVariants())">Sign Up</RouterLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </nav>
</template>
