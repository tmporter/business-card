import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import TextScroller from '../components/TextScroller';
import Portrait from '../components/Portrait';
import SocialLinks, { SocialLink } from '../components/SocialLinks';
import { Mail, Twitter, Github } from 'react-feather';

const IndexPage = () => (
  <IndexPageStyle>
    <h1>Timothy Porter</h1>
    
    <SocialLinks>
      <SocialLink href='mailto:tmporter42@gmail.com'>
        <Mail />
      </SocialLink>
      <SocialLink href='https://github.com/tmporter'>
        <Github />
      </SocialLink>
      <SocialLink href='https://twitter.com/timothy_porter_'>
        <Twitter />
      </SocialLink>
    </SocialLinks>

    <Portrait
      src='https://pbs.twimg.com/profile_images/911278245693333506/sN0ajzgR_400x400.jpg'
      alt='Timothy Porter'
      size='70vw'
      style={{ margin: '20px 0', maxWidth: '400px', maxHeight: '400px' }}
    />

    <TextScroller
      scrollSpeed={2000}
      height={24}
      items={[
        'developer',
        'la croix fanboy',
        'planeswalker',
        'hylian'
      ]}
    />
  </IndexPageStyle>
)

const IndexPageStyle = styled.div`
  text-align: center;
`;

export default IndexPage
