import React from 'react';
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/search-bar";
import {colors, logo} from "../constants";

const Navbar = () => {
    return (
        <Stack direction={"row"}
               justifyContent={'space-between'}
               alignItems={'center'}
               p={'2'}
               sx={{position: "sticky", top: 0, zIndex: 999, backgroundColor: colors.bgColor, p: 1}}>

            <Link to={'/'}>
                <img  src={logo} alt="logo" height={60}/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
}

export default Navbar;