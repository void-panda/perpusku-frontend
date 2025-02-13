<script lang="ts" setup>
import { CircleUser } from 'lucide-vue-next';
import { Avatar } from '@/views/components/ui/avatar';
import { Button } from '@/views/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/views/components/ui/dropdown-menu';
import { inject } from 'vue';
import { useRouter } from 'vue-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
const { setIsLoggedIn } = inject('isLoggedIn');
const {replace} = useRouter()

const handleLogout = () => {
  setIsLoggedIn();
  replace('/signin');
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Avatar>
        <Button variant="ghost" class="relative rounded-full w-8 h-8">
          <CircleUser />
        </Button>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <RouterLink class="w-full" to="/dashboard">Dashboard</RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RouterLink class="w-full" to="/profile">Profile</RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span @click="handleLogout" class="w-full">Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
