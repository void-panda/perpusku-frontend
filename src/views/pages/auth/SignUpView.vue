<script lang="ts" setup>
import { Label } from 'radix-vue';
import AuthLayout from '@/views/layouts/AuthLayout.vue';
import PublicLayout from '@/views/layouts/PublicLayout.vue';
import { Input } from '@/views/components/ui/input';
import { Button } from '@/views/components/ui/button';
import { GithubLogoIcon } from '@radix-icons/vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
const { setIsLoggedIn } = inject('isLoggedIn');
const { replace } = useRouter()
function handleSignUp() {
  setIsLoggedIn();
  replace('/dashboard')
}
</script>

<template>
  <PublicLayout>
    <AuthLayout title="Sign Up" description="Enter your information to create an account" isReversed>
      <form @submit.prevent="handleSignUp" class="gap-4 grid">
        <div class="gap-4 grid md:grid-cols-2">
          <div class="gap-2 grid">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div class="gap-2 grid">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div class="gap-2 grid">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="gap-2 grid">
          <Label for="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" class="w-full">
          Create an account
        </Button>
        <Button variant="secondary" class="w-full">
          <GithubLogoIcon />
          Sign up with Github
        </Button>
      </form>
      <template #footDescription>
        Already have an account?
        <RouterLink to="/signin" class="underline">
          Sign in
        </RouterLink>
      </template>
    </AuthLayout>
  </PublicLayout>
</template>
