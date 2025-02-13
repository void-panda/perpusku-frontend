<script setup lang="ts">
import { Label } from 'radix-vue';
import { Button } from '@/views/components/ui/button';
import { Input } from '@/views/components/ui/input';
import PublicLayout from '@/views/layouts/PublicLayout.vue';
import AuthLayout from '@/views/layouts/AuthLayout.vue';
import { RouterLink, useRouter } from 'vue-router';
import { GithubLogoIcon } from '@radix-icons/vue';
import { inject } from 'vue';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
const { setIsLoggedIn } = inject('isLoggedIn');
const { replace } = useRouter()
function handleSignIn() {
  setIsLoggedIn();
  replace('/dashboard')
}
</script>

<template>
  <PublicLayout>
    <AuthLayout title="Sign In" description="Enter your email below to login to your account">
      <form @submit.prevent="handleSignIn" class="gap-4 grid">
          <div class="gap-2 grid">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="gap-2 grid">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a
                href="/forgot-password"
                class="inline-block ml-auto text-sm underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full">
            Login
          </Button>
          <Button variant="secondary" class="w-full">
            <GithubLogoIcon/>
            Login with Github
          </Button>
        </form>

        <template #footDescription>
          Don't have an account?
          <RouterLink to="/signup" class="underline">
            Sign up
          </RouterLink>
        </template>
    </AuthLayout>
  </PublicLayout>
</template>
