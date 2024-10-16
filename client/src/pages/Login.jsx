import React,{useState} from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from "6pp"
import { usernameValidator } from '../utils/validators';

const Login = () => {
  const  [isLogin, setLogin] = useState(true);
  const toggleLogin = () =>{
    setLogin(((prev) => !prev));
  }
  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("",usernameValidator)
  const password = useStrongPassword()
  const avatar = useFileHandler("single")
  const handleLogIn = (e) => {
    e.preventDefault();
  }
  const handleSignUp = (e) => {
    e.preventDefault();
  }
  return (
    <div style={{backgroundImage:"linear-gradient(rgba(255,225,209),rgba(240,159,159))"}}>
      <Container component={"main"} maxWidth="xs" sx={{
        height:"100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Paper elevation={3} sx={{padding:4,display:'flex',flexDirection:'column',alignItems:'center'}}>
          {
            isLogin ? 
            <>
              <Typography  variant="h5">Login</Typography>
              <form style={{
                width:"100%",
                marginTop:"1rem"
              }} onSubmit={handleLogIn}>
                <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler}/>{username.error && (<Typography color='error' variant='caption'>{username.error}</Typography>)}
                <TextField required fullWidth label="Password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler}/>{password.error && (<Typography color='error' variant='caption'>{password.error}</Typography>)}
                <Button sx={{marginTop:'1rem'}} variant='contained' color='primary' type='submit' fullWidth>Login</Button>
                <Typography textAlign={'center'} m={'1rem'}>OR</Typography>
                <Button sx={{marginTop:'1rem'}} variant='text' onClick={toggleLogin} fullWidth>Sign up instead</Button>
              </form>
            </> : 
            <>
              <Typography  variant="h5">Sign up</Typography>
              <form style={{
                width:"100%",
                marginTop:"1rem"
              }} onSubmit={handleSignUp}>
                <Stack position={"relative"} width={'10rem'} margin={"auto"}>
                  <Avatar sx={{width:"10rem",height:"10rem",objectFit:"cover"}} src='avatar.preview'/>
                  <IconButton sx={{position:'absolute',bottom:'0',right:'0',color:"white",bgcolor:"rgba(0,0,0,0.5)",":hover":{bgcolor:"rgba(0,0,0,0.7)"}}} component="label">
                    <>
                      <CameraAltIcon/>
                      <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (<Typography  m={"1rem"} color='error' variant='caption'>{avatar.error}</Typography>)}
                <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler}/>
                <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler}/>
                <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler}/>
                <TextField required fullWidth label="Password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler}/>
                <Button sx={{marginTop:'1rem'}} variant='contained' color='primary' type='submit' fullWidth>Sign up</Button>
                <Typography textAlign={'center'} m={'1rem'}>OR</Typography>
                <Button sx={{marginTop:'1rem'}} variant='text' onClick={toggleLogin} fullWidth>Log in instead</Button>
              </form>
            </>
          }
        </Paper>
      </Container>
    </div>
  )
}

export default Login