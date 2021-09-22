import { Helmet } from 'react-helmet';
import React from 'react';

const SEO = ({ title, description, keywords, image}) => {
      return (
  <Helmet htmlAttributes={{ lang: 'en' }}>
    <meta name="description" property="og:description" content="Personal Website for Kaustubh Sonawane"/>
    <meta name="keywords" content="Kaustubh Sonawane, entrepreneur, computer science, student"/>
    <meta name="title" property="og:title" content="Kaustubh Sonawane is a driven student with a passion for computer science and entrepreneurship"/>
    <meta property="og:type" content="Website"/>
    <meta name="image" property="og:image" content="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/410/949/datas/profile.png"/>
    <meta name="author" content="Kaustubh Sonawane"/>
  </Helmet>
   );
  }
  export default SEO;