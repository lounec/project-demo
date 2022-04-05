import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, resetAuth } from "../../store/auth";
import { resetCart } from "../../store/products";
import {
    selectAuthenticated,
    selectUser,
    selectIsFetching
} from "../../store/auth/selectors";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import Loader from "../global/Loader";
import { LS_USER } from "../../constants";
import Cart from "../header/Cart";

const pages = ["Products", "Users", "Contact"];
const settings = ["Logout"];

const useStyles = makeStyles({
    root: {
        "&.MuiPaper-root": {
            backgroundColor: "#E7EBF0",
            boxShadow: "none"
        }
    },
    link: {
        textDecoration: "none",
        "& .MuiButton-root": {
            paddingTop: 0,
            paddingBottom: 0,
            color: "#0072E5"
        }
    },
    right: {
        display: "flex",
        alignItems: 'center'
    },
    username: {
        display: 'inline-block',
        marginRight: 15,
        color: "#0288d1"
    }
});

const Navbar = (): React.ReactElement => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const authenticated = useSelector(selectAuthenticated);
    const isFetching = useSelector(selectIsFetching);
    const user = useSelector(selectUser);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (): void => {
        setAnchorElUser(null);
    };

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        dispatch(getUser());
    };

    const handleLogout = (): void => {
        dispatch(resetAuth());
        dispatch(resetCart())
        handleCloseUserMenu();
        localStorage.removeItem(LS_USER)
    };

    return (
        <AppBar position="static" className={classes.root}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" className={classes.link}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            DEMO
                        </Typography>
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" }
                        }}
                    >
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
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page, idx) => (
                                <Link
                                    key={idx}
                                    to={`/${page.toLocaleLowerCase()}`}
                                    className={classes.link}
                                >
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" }
                        }}
                    >
                        DEMO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        {pages.map((page, idx) => (
                            <Link
                                to={`/${page.toLocaleLowerCase()}`}
                                key={idx}
                                className={classes.link}
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block"
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                   
                    <Box sx={{ flexGrow: 0 }} className={classes.right}>
                            <Cart />
                        {authenticated ? (
                            <>
                            
                                <span className={classes.username}>
                                    Hi {user?.username}!
                            </span>
                                
                                    
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                                >
                                <Avatar
                                    alt={user?.username}
                                    src={user?.picture}
                                />
                            </IconButton>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, idx) => (
                                    <div key={idx}>
                                        <MenuItem
                                            key={setting}
                                            onClick={handleLogout}
                                        >
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    </div>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <>
                            {isFetching ? (
                                <Loader />
                            ) : (
                                <Button
                                    onClick={(e) => handleLogin(e)}
                                    variant="contained"
                                    size="small"
                                >
                                    Login
                                </Button>
                            )}
                        </>
                    )}
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
