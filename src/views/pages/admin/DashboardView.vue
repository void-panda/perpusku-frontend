<script setup lang="ts">
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-vue-next';
import { Button } from '@/views/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/views/components/ui/card';
import MainLayout from '@/views/layouts/MainLayout.vue';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/views/components/ui/table';
import { Badge } from '@/views/components/ui/badge';
</script>

<template>
  <MainLayout>
    <div class="gap-4 md:gap-8 grid md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader class="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle class="font-medium text-sm">
              Total Revenue
            </CardTitle>
            <DollarSign class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="font-bold text-2xl">
              $45,231.89
            </div>
            <p class="text-muted-foreground text-xs">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle class="font-medium text-sm">
              Subscriptions
            </CardTitle>
            <Users class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="font-bold text-2xl">
              +2350
            </div>
            <p class="text-muted-foreground text-xs">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle class="font-medium text-sm">
              Sales
            </CardTitle>
            <CreditCard class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="font-bold text-2xl">
              +12,234
            </div>
            <p class="text-muted-foreground text-xs">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle class="font-medium text-sm">
              Active Now
            </CardTitle>
            <Activity class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="font-bold text-2xl">
              +573
            </div>
            <p class="text-muted-foreground text-xs">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div class="gap-4 md:gap-8 grid md:grid-cols-5 xl:grid-cols-3">
        <Card class="md:col-span-3">
          <CardHeader class="flex flex-row items-center">
            <div class="gap-2 grid">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button as-child size="sm" class="gap-1 ml-auto">
              <a href="#">
                View All
                <ArrowUpRight class="w-4 h-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead class="hidden xl:table-column">
                    Type
                  </TableHead>
                  <TableHead class="hidden xl:table-column">
                    Status
                  </TableHead>
                  <TableHead class="hidden xl:table-column">
                    Date
                  </TableHead>
                  <TableHead class="text-right">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Liam Johnson
                    </div>
                    <div class="hidden md:inline text-muted-foreground text-sm">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-23
                  </TableCell>
                  <TableCell class="text-right">
                    $250.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Olivia Smith
                    </div>
                    <div class="hidden md:inline text-muted-foreground text-sm">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Refund
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-24
                  </TableCell>
                  <TableCell class="text-right">
                    $150.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Noah Williams
                    </div>
                    <div class="hidden md:inline text-muted-foreground text-sm">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Subscription
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-25
                  </TableCell>
                  <TableCell class="text-right">
                    $350.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Emma Brown
                    </div>
                    <div class="hidden md:inline text-muted-foreground text-sm">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-26
                  </TableCell>
                  <TableCell class="text-right">
                    $450.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Liam Johnson
                    </div>
                    <div class="hidden md:inline text-muted-foreground text-sm">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-27
                  </TableCell>
                  <TableCell class="text-right">
                    $550.00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  </MainLayout>
</template>
