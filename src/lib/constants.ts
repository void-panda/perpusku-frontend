import { BookOpenCheck, Grid2X2, Home, NotepadText, ScrollText, Users } from 'lucide-vue-next'

export const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/pages/guest/HomeView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/pages/admin/DashboardView.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/pages/auth/SignInView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/pages/auth/SignUpView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/pages/guest/AboutView.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('@/views/pages/admin/books/IndexView.vue'),
  },
]

export const menuItemsAdmin = [
  {
    name: 'Dashboard',
    icon: Home,
    href: '/dashboard',
  },
  {
    name: 'Books',
    icon: Users,
    href: '/books',
    badge: 12,
  },
  {
    name: 'Members',
    icon: Users,
    href: '/members',
    badge: 4,
  },
  {
    name: 'Categories',
    icon: Grid2X2,
    href: '/categories',
    badge: 23,
  },
  {
    name: 'Book Loans',
    icon: NotepadText,
    href: '/loans',
    badge: 14,
  },
  {
    name: 'Book Return',
    icon: BookOpenCheck,
    href: '/book-return',
    badge: 5,
  },
  {
    name: 'Reports',
    icon: ScrollText,
    href: '/reports',
  },
]

export const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]
