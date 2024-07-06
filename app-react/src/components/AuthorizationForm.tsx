import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import CrestIcon from "../assets/crest.svg";

export interface AuthorizationFormInput {
  email: string;
  password: string;
}

interface AuthorizationFormProps {
  title: string;
  onSubmit: SubmitHandler<AuthorizationFormInput>;
  children?: React.ReactNode;
}

const AuthorizationForm = ({ title, onSubmit, children }: AuthorizationFormProps) => {
  const { register, handleSubmit } = useForm<AuthorizationFormInput>({});

  return (
    <Box display="flex" height="100vh">
      <Paper
        sx={{
          p: 5,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img src={CrestIcon} height={200} />
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <TextField label="Email" {...register("email")} />
            </Grid>
            <Grid item>
              <TextField label="Password" type="password" {...register("password")} />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
            <Grid item>{children}</Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AuthorizationForm;
