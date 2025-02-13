<script lang="ts" setup>
import { Bell } from 'lucide-vue-next';
import { Button } from '@/views/components/ui/button';
import { Badge } from '@/views/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader } from '@/views/components/ui/card';
import { RouterLink, useRouter } from 'vue-router';
import PerpuskuLogo from '@/views/components/PerpuskuLogo.vue';
import { menuItemsAdmin } from '@/lib/constants';

const { currentRoute } = useRouter()
</script>

<template>
  <div class="hidden md:block bg-muted/40 border-r">
    <div class="flex flex-col gap-2 h-full max-h-screen">
      <div class="flex items-center px-4 lg:px-6 border-b h-14 lg:h-[60px]">
        <PerpuskuLogo/>
        <Button variant="outline" size="icon" class="ml-auto w-8 h-8">
          <Bell class="w-4 h-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div class="flex-1">
        <nav class="items-start grid px-2 lg:px-4 font-medium text-sm">
          <RouterLink v-for="menuItem in menuItemsAdmin" :key="menuItem.name" :to="menuItem.href"
            class="flex items-center gap-3 hover:bg-muted px-3 py-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
            :class="{ 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground': currentRoute.path === menuItem.href }">
            <component :is="menuItem.icon" class="w-4 h-4" />
            {{ menuItem.name }}
            <Badge v-if="menuItem.badge" class="flex justify-center items-center ml-auto rounded-full w-6 h-6 shrink-0">
              {{ menuItem.badge }}
            </Badge>
          </RouterLink>
        </nav>
      </div>
      <div class="mt-auto p-4">
        <Card>
          <CardHeader class="p-2 md:p-4 pt-0">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support
              team.
            </CardDescription>
          </CardHeader>
          <CardContent class="p-2 md:p-4 pt-0 md:pt-0">
            <Button size="sm" class="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
