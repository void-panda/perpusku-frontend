<script lang="ts" setup>
import type { Payment } from '@/types/payment';
import { columns } from '@/views/components/payments/columns';
import DataTable from '@/views/components/payments/data-table.vue';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/views/components/ui/breadcrumb';
import MainLayout from '@/views/layouts/MainLayout.vue';
import { onMounted, ref } from 'vue';

const data = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <MainLayout>
    <template #header>
      <div class="space-y-1">
        <h1 class="font-semibold text-lg md:text-2xl">Books</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="/">
                  Home
                </a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="/docs/components/accordion.html">
                  Components
                </a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </template>


    <DataTable :columns="columns" :data="data" />

  </MainLayout>
</template>
