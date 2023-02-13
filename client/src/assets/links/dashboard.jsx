// Icons
import {
  HomeIcon,
  AccountsIcon,
  TransactionIcon,
  StatsIcon,
} from '../icons/dashboardIcons'

const dashboardLinks = [
  { name: 'home', icon: <HomeIcon />, href: '/dashboard/home' },
  { name: 'account', icon: <AccountsIcon />, href: '/dashboard/accounts' },
  {
    name: 'transaction',
    icon: <TransactionIcon />,
    href: '/dashboard/transactions',
  },
  { name: 'stats', icon: <StatsIcon />, href: '/dashboard/stats' },
]

export default dashboardLinks
