import Mockup from '../../../../public/images/app_preview.png';
import Spending from '../../../../public/images/spending.png';
import Notification from '../../../../public/images/notification.png';

export const steps = [
  {
    idx: '01',
    title: 'Add your expenses',
    desc: 'List rent, utilities, insurance, and subscriptions in seconds.',
    image: Mockup,
    accent: '#FF7966',
  },
  {
    idx: '02',
    title: 'Categorize',
    desc: 'Organize by category and keep a clear view of where your money goes.',
    image: Spending,
    accent: '#A07EFF',
  },
  {
    idx: '03',
    title: 'Be reminded',
    desc: 'Automatic reminders 2 days before due dates — never miss a payment.',
    image: Notification,
    accent: '#5E00F5',
  },
] as const;
