import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

// type HeaderProps = {
//   children: JSX.Element;
// };

// function Header(props: HeaderProps) {
//   return <div>{props.children}</div>;
// }

function PageHeader():JSX.Element{
  return (
    <header className="page-header film-card__head">
      <Logo/>
      <UserBlock/>
    </header>
  );
}
export default PageHeader;
