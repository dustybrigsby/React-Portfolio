import {
  Grid,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

const Project = ({ project }) => {
  return (
    <Grid item key={project} xs="12" sm="6" md="4">
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Link href={project.deployedLink}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={project.image}
          />
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography>{project.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component="a" href={project.githubLink}>
            GitHub Repo
          </Button>
          {project.deployedLink && (
            <Button size="small" component="a" href={project.deployedLink}>
              Deployed App
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
