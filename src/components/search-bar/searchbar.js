import React from 'react';
import * as colors from "tailwindcss";
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const Searchbar=()=> {
    return (
        <Paper
            component={'form'}
            // onSubmit={searchHandler}
            sx={{
                border: `1px solid ${colors.purple}`,
                pl: 2,
                boxShadow: 'none',
                mr: 5,
            }}
        >
            <input
                type='text'
                placeholder='Search...'
                className='search-bar'
                // onChange={e => setValue(e.target.value)}
                // value={value}
            />
            <IconButton type='submit' sx={{ p: '10px', color: colors.purple }}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default Searchbar;