import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@mui/material";

const LoginButton = () => {
    const { loginWithRedirect, user } = useAuth0();
    return user?.nickname ? <>Hello, {user.nickname}!</> : <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;