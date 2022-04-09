import { MdImage as icon } from 'react-icons/md';

export default {
  title: 'Image',
  name: 'customImage',
  type: 'image',
  icon,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt text',
      name: 'altText',
      type: 'string',
      validation: (Rule) =>
        Rule.error('Alter text can not be empty').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
