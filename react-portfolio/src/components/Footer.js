import { Box, Container, Link, Typography } from '@mui/material';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="#contact">
          Dusty Brigsby
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () => {
    return (
        <Box component='footer'
            sx={{
                py:3,
                px:2,
                mt:'auto',
                backgroundColor:(theme)=>
                theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            }}
        >
            <Container maxWidth='sm' 
                sx={{
                    display:'flex',
                    justifyContent:'space-evenly'
                }}
            >
                    <Link href="https://github.com/dustybrigsby" variant='body1'>GitHub</Link>
                    <Link href="https://www.linkedin.com/in/dustin-brigsby-349681225/" variant='body1'>LinkedIn</Link>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;