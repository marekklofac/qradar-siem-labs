import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    IBM Security&nbsp;<span>QRadar SIEM</span>
  </Header>
);

export default CustomHeader;
