import { Grid, Link, Stack, Typography } from '@mui/material';

const Navigation = ({ currentSection, setCurrentSection }) => {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <Grid item xs='12' md='7'
            width='100%'
            alignItems={{xs:'center', md:'flex-end'}}
            justifyContent={{xs:'center', md:'space-evenly'}}
            sx={{
                display:'flex',
            }}
        >
            <Stack 
                direction={{xs:'column', md: 'row'}} 
                spacing={2}
                textAlign={{xs:'center',md:'flex-end'}}
            >
                {sections.map(section => (
                    <Typography variant='h5' key={section}>
                        <Link
                            variant='inherit'
                            underline={currentSection === section ? 'none':'hover'}
                            color={currentSection === section ? 'primary.light':'primary.dark'}
                            href={`#${section.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setCurrentSection(section)}
                            className={currentSection === section ? 'active' : ''}
                        >
                            {section}
                        </Link>
                    </Typography>
                ))}
            </Stack>
        </Grid>
    );
};

export default Navigation;