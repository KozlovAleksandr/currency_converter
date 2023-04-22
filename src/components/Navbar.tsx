import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { BsCurrencyExchange } from 'react-icons/bs';
import NavbarLink from './NavbarLink';
import { PageNavigation } from '../types/types';

const Navbar: React.FC = (): JSX.Element => {
  const pages: PageNavigation[] = [
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
            <BsCurrencyExchange
              style={{
                fontSize: '28px',
                marginRight: '12px',
                marginBottom: '-5px',
              }}
            />
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
