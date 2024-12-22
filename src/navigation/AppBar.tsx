import MUIAppBar from '@mui/material/AppBar';
import {Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";

export const AppBar = ({title, routes, onChange}:{title: string; routes: string[], onChange: (route: string) => void}) => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return <MUIAppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography variant="h6" component="div" paddingRight={4} fontWeight={700}>{title}</Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {routes.map((route) => (
                            <MenuItem key={route} onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}>{route}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {routes.map((route) => (
                        <Button
                            key={route}
                            onClick={() => {
                                onChange(route)
                                handleCloseNavMenu()}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {route}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </MUIAppBar>
}