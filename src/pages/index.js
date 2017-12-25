import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import TextScroller from "../components/TextScroller";
import Portrait from "../components/Portrait";
import Title, { Subtitle } from "../components/Title";
import SocialLinks, { SocialLink } from "../components/SocialLinks";
import { Mail, Twitter, Github, Linkedin } from "react-feather";

const IndexPage = () => (
  <IndexPageStyle>
    <Title>Timothy Porter</Title>

    <TextScroller speed={2000}>
      <span>Developer</span>
      <span>La Croix fan</span>
      <span>Open source advocate</span>
      <span>Planeswalker</span>
      <span>Dungeon Master</span>
    </TextScroller>

    <Portrait
      src="https://pbs.twimg.com/profile_images/911278245693333506/sN0ajzgR_400x400.jpg"
      alt="Timothy Porter"
      size="70vw"
      style={{ margin: "20px 0", maxWidth: "400px", maxHeight: "400px" }}
    />

    <SocialLinks>
      <SocialLink href="mailto:tmporter42@gmail.com" title="tmporter42@gmail.com">
        <Mail />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/timothy-porter/" title="LinkedIn">
        <Linkedin />
      </SocialLink>
      <SocialLink href="https://github.com/tmporter" title="GitHub">
        <Github />
      </SocialLink>
      <SocialLink href="https://twitter.com/timothy_porter_" title="Twitter">
        <Twitter />
      </SocialLink>
    </SocialLinks>

    <p>
      <em>"Insert inspirational quote here."</em>
    </p>

    <p>I'm web developer making cool things for the internet.</p>
  </IndexPageStyle>
);

const IndexPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default IndexPage;
