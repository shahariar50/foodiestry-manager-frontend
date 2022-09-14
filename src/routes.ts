import DashboardPage from 'pages/DashboardPage'
import MembersPage from 'pages/MembersPage'

export const routes: { id: number; link: string; element: () => JSX.Element }[] = [
  { id: 1, link: '/', element: DashboardPage },
  { id: 2, link: '/members', element: MembersPage },
  { id: 3, link: '/roles', element: MembersPage },
  { id: 4, link: '/restaurants', element: MembersPage },
  { id: 5, link: '/invitations', element: MembersPage },
  { id: 6, link: '/profile', element: MembersPage },
  { id: 7, link: '/settings', element: MembersPage },
  { id: 8, link: '/posts', element: MembersPage },
]
