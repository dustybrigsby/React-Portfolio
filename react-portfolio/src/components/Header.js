import Navigation from './Navigation';
import { Grid, Typography } from '@mui/material';

const Header = ({ currentSection, setCurrentSection }) => {
    return (
        <Grid container 
            sx={{
                display:"flex",
                alignItems:'center',
                backgroundColor:(theme)=>
                theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            }}
        >
            <Grid item xs='12' md='5'
                sx={{
                    paddingY:'15px',
                }}
            >
                <Typography 
                    variant='h2' 
                    textAlign={{xs:'center'}}
                >
                    Dusty Brigsby
                </Typography>
            </Grid>
            <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection}  />
        </Grid>
    );
};

export default Header;