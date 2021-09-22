import { Helmet } from 'react-helmet';
import React from 'react';

const SEO = ({ title, description, keywords, image}) => {
      return (
  <Helmet htmlAttributes={{ lang: 'en' }} title={title} meta={[
          {
            name: 'description',
            content: description,
          },
          {
            name: 'keywords',
            content: keywords.join(),
          },
          {
            name: 'image',
            content: image,
          }
          ]}
      />
   );
  }
  export default SEO;