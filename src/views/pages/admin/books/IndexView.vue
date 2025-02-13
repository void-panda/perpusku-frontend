<script lang="ts" setup>
import AddBookModal from '@/views/components/partials/admin/books/AddBookModal.vue';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/views/components/ui/table';
import MainLayout from '@/views/layouts/MainLayout.vue';

// const invoices = [
//   {
//     invoice: 'INV001',
//     paymentStatus: 'Paid',
//     totalAmount: '$250.00',
//     paymentMethod: 'Credit Card',
//   },
//   {
//     invoice: 'INV002',
//     paymentStatus: 'Pending',
//     totalAmount: '$150.00',
//     paymentMethod: 'PayPal',
//   },
//   {
//     invoice: 'INV003',
//     paymentStatus: 'Unpaid',
//     totalAmount: '$350.00',
//     paymentMethod: 'Bank Transfer',
//   },
//   {
//     invoice: 'INV004',
//     paymentStatus: 'Paid',
//     totalAmount: '$450.00',
//     paymentMethod: 'Credit Card',
//   },
//   {
//     invoice: 'INV005',
//     paymentStatus: 'Paid',
//     totalAmount: '$550.00',
//     paymentMethod: 'PayPal',
//   },
//   {
//     invoice: 'INV006',
//     paymentStatus: 'Pending',
//     totalAmount: '$200.00',
//     paymentMethod: 'Bank Transfer',
//   },
//   {
//     invoice: 'INV007',
//     paymentStatus: 'Unpaid',
//     totalAmount: '$300.00',
//     paymentMethod: 'Credit Card',
//   },
// ]
</script>

<template>
  <MainLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="font-semibold text-lg md:text-2xl">Books</h1>
        <AddBookModal />
      </div>
    </template>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="hidden sm:table-cell w-[100px]">
            <span class="sr-only">img</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead class="hidden md:table-cell">
            Price
          </TableHead>
          <TableHead class="hidden md:table-cell">
            Total Sales
          </TableHead>
          <TableHead class="hidden md:table-cell">
            Created at
          </TableHead>
          <TableHead>
            <span class="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell class="hidden sm:table-cell">
            <img alt="Product image" class="rounded-md object-cover aspect-square" height="64" src="@/assets/logo.svg"
              width="64">
          </TableCell>
          <TableCell class="font-medium">
            Laser Lemonade Machine
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              Draft
            </Badge>
          </TableCell>
          <TableCell class="hidden md:table-cell">
            $499.99
          </TableCell>
          <TableCell class="hidden md:table-cell">
            25
          </TableCell>
          <TableCell class="hidden md:table-cell">
            2023-07-12 10:42 AM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="w-4 h-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="hidden sm:table-cell">
            <img alt="Product image" class="rounded-md object-cover aspect-square" height="64" src="@/assets/logo.svg"
              width="64">
          </TableCell>
          <TableCell class="font-medium">
            Hypernova Headphones
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              Active
            </Badge>
          </TableCell>
          <TableCell class="hidden md:table-cell">
            $129.99
          </TableCell>
          <TableCell class="hidden md:table-cell">
            100
          </TableCell>
          <TableCell class="hidden md:table-cell">
            2023-10-18 03:21 PM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="w-4 h-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="hidden sm:table-cell">
            <img alt="Product image" class="rounded-md object-cover aspect-square" height="64" src="@/assets/logo.svg"
              width="64">
          </TableCell>
          <TableCell class="font-medium">
            AeroGlow Desk Lamp
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              Active
            </Badge>
          </TableCell>
          <TableCell class="hidden md:table-cell">
            $39.99
          </TableCell>
          <TableCell class="hidden md:table-cell">
            50
          </TableCell>
          <TableCell class="hidden md:table-cell">
            2023-11-29 08:15 AM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="w-4 h-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="hidden sm:table-cell">
            <img alt="Product image" class="rounded-md object-cover aspect-square" height="64" src="@/assets/logo.svg"
              width="64">
          </TableCell>
          <TableCell class="font-medium">
            TechTonic Energy Drink
          </TableCell>
          <TableCell>
            <Badge variant="secondary">
              Draft
            </Badge>
          </TableCell>
          <TableCell class="hidden md:table-cell">
            $2.99
          </TableCell>
          <TableCell class="hidden md:table-cell">
            0
          </TableCell>
          <TableCell class="hidden md:table-cell">
            2023-12-25 11:59 PM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="w-4 h-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="hidden sm:table-cell">
            <img alt="Product image" class="rounded-md object-cover aspect-square" height="64" src="@/assets/logo.svg"
              width="64">
          </TableCell>
          <TableCell class="font-medium">
            Gamer Gear Pro Controller
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              Active
            </Badge>
          </TableCell>
          <TableCell class="hidden md:table-cell">
            $59.99
          </TableCell>
          <TableCell class="hidden md:table-cell">
            75
          </TableCell>
          <TableCell class="hidden md:table-cell">
            2024-01-01 12:00 AM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="w-4 h-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="hidden sm:table-cell">
            <img alt="Product image" class="rounded-md object-cover aspect-square" height="64" src="@/assets/logo.svg"
              width="64">
          </TableCell>
          <TableCell class="font-medium">
            Luminous VR Headset
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              Active
            </Badge>
          </TableCell>
          <TableCell class="hidden md:table-cell">
            $199.99
          </TableCell>
          <TableCell class="hidden md:table-cell">
            30
          </TableCell>
          <TableCell class="hidden md:table-cell">
            2024-02-14 02:14 PM
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="w-4 h-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </MainLayout>
</template>
