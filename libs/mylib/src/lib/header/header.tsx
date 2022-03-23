import { MarkGithubIcon } from '@primer/octicons-react';
import { Avatar, Header as HeaderBase, StyledOcticon } from '@primer/react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <HeaderBase>
      <HeaderBase.Item>
        <HeaderBase.Link href="#">
          <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
          <span>GitHub</span>
        </HeaderBase.Link>
      </HeaderBase.Item>
      <HeaderBase.Item full>Menu</HeaderBase.Item>
      <HeaderBase.Item sx={{ mr: 0 }}>
        <Avatar
          src="https://github.com/octocat.png"
          size={20}
          square
          alt="@octocat"
        />
      </HeaderBase.Item>
    </HeaderBase>
  );
}

export default Header;
