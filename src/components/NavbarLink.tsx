import { Button, Typography } from '@mui/material';
import { NavLink, To } from 'react-router-dom';

type NavbarLinkProps = {
  title: string;
  link: To;
};

const NavbarLink: React.FC<NavbarLinkProps> = (props): JSX.Element => {
  const { title, link } = props;
  return (
    <Button sx={{ color: '#fff' }}>
      <NavLink to={link}>
        <Typography textAlign="center">{title}</Typography>
      </NavLink>
    </Button>
  );
};

export default NavbarLink;
