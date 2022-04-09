import { MdCode as icon } from 'react-icons/md';

export default {
  name: 'customCode',
  title: 'Code',
  type: 'object',
  icon,
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code',
    },
  ],
  preview: {
    select: {
      title: 'code.code',
    },
  },
};
