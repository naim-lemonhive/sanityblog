/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */
// import schemas
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';
// import objects
import customImage from './objects/customImage';
import bodyText from './objects/bodyText';
import customCode from './objects/customCode';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    author,
    featured,
    category,
    customImage,
    bodyText,
    customCode,
  ]),
});
