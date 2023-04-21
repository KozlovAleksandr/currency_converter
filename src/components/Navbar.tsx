import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { BsCurrencyExchange } from 'react-icons/bs';
import NavbarLink from './NavbarLink';
import styles from './index.module.scss';

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
            <BsCurrencyExchange className={styles.currencyIcon} />
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
