<script lang="ts" setup>
import { Menu, Search } from 'lucide-vue-next';
import { Sheet, SheetContent, SheetTrigger } from '@/views/components/ui/sheet';
import { Button } from '@/views/components/ui/button';
import { Badge } from '@/views/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/views/components/ui/card';
import { Input } from '@/views/components/ui/input';
import UserDropdownMenu from './UserDropdownMenu.vue';
import PerpuskuLogo from '@/views/components/PerpuskuLogo.vue';
import { menuItemsAdmin } from '@/lib/constants';
import { useRouter } from 'vue-router';
import { Separator } from 'radix-vue';
import ThemeToggle from '../../ThemeToggle.vue';

const { currentRoute } = useRouter();
</script>

<template>
  <header class="flex items-center gap-4 bg-muted/40 px-4 lg:px-6 border-b h-14 lg:h-[60px]">
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="md:hidden shrink-0">
          <Menu class="w-5 h-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="flex flex-col">
        <nav class="gap-2 grid font-medium">
          <PerpuskuLogo/>
          <Separator/>
          <Separator/>
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
        <div class="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" class="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
    <div class="flex-1 w-full">
      <form>
        <div class="relative">
          <Search class="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products..."
            class="bg-background shadow-none pl-8 w-full md:w-2/3 lg:w-1/3 appearance-none" />
        </div>
      </form>
    </div>
    <ThemeToggle/>
    <UserDropdownMenu/>
  </header>
</template>
