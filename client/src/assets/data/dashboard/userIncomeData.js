import moment from 'moment'

const incomeData = [
  {
    id: 'income-0',
    amount: '2000.00',
    date: moment().subtract(29, 'days').format('MMM Do'),
  },
  {
    id: 'income-1',
    amount: '500.00',
    date: moment().subtract(21, 'days').format('MMM Do'),
  },
  {
    id: 'income-2',
    amount: '1500.00',
    date: moment().subtract(16, 'days').format('MMM Do'),
  },
  {
    id: 'income-3',
    amount: '700.00',
    date: moment().subtract(11, 'days').format('MMM Do'),
  },
  {
    id: 'income-4',
    amount: '200.00',
    date: moment().subtract(8, 'days').format('MMM Do'),
  },
  {
    id: 'income-5',
    amount: '1200.00',
    date: moment().subtract(2, 'days').format('MMM Do'),
  },
]

export default incomeData
