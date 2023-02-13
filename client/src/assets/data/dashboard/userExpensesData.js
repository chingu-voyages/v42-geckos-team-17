import moment from 'moment'

export const userExpenses = [
  {
    id: 'expense-0',
    categoryId: 'transport',
    amount: '3.99',
  },
  {
    id: 'expense-1',
    categoryId: 'shopping',
    amount: '15.99',
  },
  {
    id: 'expense-2',
    categoryId: 'goingOut',
    amount: '25.00',
  },
  {
    id: 'expense-3',
    categoryId: 'courses',
    amount: '15.17',
  },
  {
    id: 'expense-4',
    categoryId: 'groceries',
    amount: '65.89',
  },
  {
    id: 'expense-5',
    categoryId: 'courses',
    amount: '99.99',
  },
  {
    id: 'expense-6',
    categoryId: 'goingOut',
    amount: '9.99',
  },
  {
    id: 'expense-7',
    categoryId: 'transport',
    amount: '3.99',
  },
  {
    id: 'expense-8',
    categoryId: 'shopping',
    amount: '15.99',
  },
  {
    id: 'expense-9',
    categoryId: 'transport',
    amount: '3.99',
  },
  {
    id: 'expense-10',
    categoryId: 'travel',
    amount: '259.00',
  },
  {
    id: 'expense-11',
    categoryId: 'shopping',
    amount: '15.17',
  },
  {
    id: 'expense-12',
    categoryId: 'groceries',
    amount: '54.99',
  },
  {
    id: 'expense-13',
    categoryId: 'other',
    amount: '15.17',
  },
  {
    id: 'expense-14',
    categoryId: 'decor',
    amount: '154.99',
  },
  {
    id: 'expense-15',
    categoryId: 'shopping',
    amount: '25.00',
  },
  {
    id: 'expense-16',
    categoryId: 'shopping',
    amount: '15.17',
  },
  {
    id: 'expense-17',
    categoryId: 'groceries',
    amount: '65.89',
  },
  {
    id: 'expense-18',
    categoryId: 'beauty',
    amount: '39.89',
  },
  {
    id: 'expense-19',
    categoryId: 'transport',
    amount: '3.99',
  },
  {
    id: 'expense-20',
    categoryId: 'shopping',
    amount: '15.99',
  },
  {
    id: 'expense-21',
    categoryId: 'shopping',
    amount: '15.17',
  },
  {
    id: 'expense-22',
    categoryId: 'groceries',
    amount: '54.99',
  },
  {
    id: 'expense-23',
    categoryId: 'transport',
    amount: '3.99',
  },
  {
    id: 'expense-24',
    categoryId: 'beauty',
    amount: '39.89',
  },
  {
    id: 'expense-25',
    categoryId: 'transport',
    amount: '3.99',
  },
  {
    id: 'expense-26',
    categoryId: 'courses',
    amount: '99.99',
  },
  {
    id: 'expense-27',
    categoryId: 'goingOut',
    amount: '9.99',
  },
]

export const userTopExpenses = [
  {
    id: 'topExpense-0',
    categoryId: 'groceries',
    amount: '768.78',
    percent: '20',
  },
  {
    id: 'topExpense-1',
    categoryId: 'transport',
    amount: '561.05',
    percent: '18',
  },
  {
    id: 'topExpense-2',
    categoryId: 'shopping',
    amount: '455.75',
    percent: '13',
  },
  {
    id: 'topExpense-3',
    categoryId: 'going out',
    amount: '200.00',
    percent: '7',
  },
  {
    id: 'topExpense-4',
    categoryId: 'courses',
    amount: '99.00',
    percent: '3',
  },
]

export const familyMembersExpenses = {
  categories: [
    'Groceries',
    'Shopping',
    'Beauty',
    'Going out',
    'Courses',
    'Other',
  ],
  members: [
    {
      name: 'Me',
      totals: [768.78, 455.75, 555.99, 750, 99, 356],
      color: '#74c69d',
    },
    {
      name: 'Éliott',
      totals: [368, 755.12, 65.99, 945, 599, 124],
      color: '#a2d2ff',
    },
    {
      name: 'Shyla',
      totals: [100.99, 155, 275.99, 260, 759.99, 454],
      color: '#fec89a',
    },
  ],
}

export const totalExpensesByDay = [
  { date: moment().subtract(29, 'days').format('MMM Do'), total: '120' },
  { date: moment().subtract(28, 'days').format('MMM Do'), total: '340' },
  { date: moment().subtract(27, 'days').format('MMM Do'), total: '25' },
  { date: moment().subtract(26, 'days').format('MMM Do'), total: '65.99' },
  { date: moment().subtract(25, 'days').format('MMM Do'), total: '95.99' },
  { date: moment().subtract(23, 'days').format('MMM Do'), total: '20' },
  { date: moment().subtract(22, 'days').format('MMM Do'), total: '39.99' },
  { date: moment().subtract(21, 'days').format('MMM Do'), total: '345.87' },
  { date: moment().subtract(20, 'days').format('MMM Do'), total: '120' },
  { date: moment().subtract(19, 'days').format('MMM Do'), total: '28.99' },
  { date: moment().subtract(17, 'days').format('MMM Do'), total: '87.99' },
  { date: moment().subtract(16, 'days').format('MMM Do'), total: '65.99' },
  { date: moment().subtract(14, 'days').format('MMM Do'), total: '69.99' },
  { date: moment().subtract(13, 'days').format('MMM Do'), total: '90' },
  { date: moment().subtract(12, 'days').format('MMM Do'), total: '245.99' },
  { date: moment().subtract(11, 'days').format('MMM Do'), total: '156.87' },
  { date: moment().subtract(9, 'days').format('MMM Do'), total: '25.99' },
  { date: moment().subtract(8, 'days').format('MMM Do'), total: '45.99' },
  { date: moment().subtract(7, 'days').format('MMM Do'), total: '54' },
  { date: moment().subtract(6, 'days').format('MMM Do'), total: '12' },
  { date: moment().subtract(4, 'days').format('MMM Do'), total: '145' },
  { date: moment().subtract(3, 'days').format('MMM Do'), total: '12' },
  { date: moment().subtract(2, 'days').format('MMM Do'), total: '220' },
  { date: moment().subtract(1, 'days').format('MMM Do'), total: '78.99' },
]
