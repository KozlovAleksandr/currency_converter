import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

type NavbarLinkProps = {
  title: string;
  link: To;
};

const NavbarLink = (props: NavbarLinkProps) => {
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
