
import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">
                Home
            </Link>
        </li>
        <li>
            <Link to="/about">
                about
            </Link>
        </li>
      </ul>
    </div>
  );
};
