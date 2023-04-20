import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const pages = [
    { title: 'Курсы', link: '/' },
    { title: 'Конвертер', link: '/converter' },
  ];

  return (
    <AppBar position="static" component="nav">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Конвертeр валют
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map(({ title, link }) => (
              <NavbarLink title={title} link={link} key={title} />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
