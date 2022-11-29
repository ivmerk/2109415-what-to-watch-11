import {Link} from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type LogoProps = {
  name?: string;
}
function Logo({name}:LogoProps): JSX.Element {
 
  return (
    <div className="logo">
      <Link
        className={(name) ?
          `logo__link ${name}` :
          'logo__link'}
        to="/"
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
