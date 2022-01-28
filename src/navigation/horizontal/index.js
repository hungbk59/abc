import { Home, Search } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'searchNews',
    title: 'Search News',
    icon: <Search size={20} />,
    navLink: '/search'
  }
]
