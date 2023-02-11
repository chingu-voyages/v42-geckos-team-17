// Icons
import {
  HomeIcon,
  AccountsIcon,
  TransactionIcon,
  StatsIcon,
} from '../icons/dashboardIcons'

const dashboardLinks = [
  { name: 'home', icon: <HomeIcon />, href: '/dashboard' },
  { name: 'account', icon: <AccountsIcon />, href: '/dashboard' },
  {
    name: 'transaction',
    icon: <TransactionIcon />,
    href: '/dashboard/transactions',
  },
  { name: 'stats', icon: <StatsIcon />, href: '/dashboard' },
]

export default dashboardLinks
