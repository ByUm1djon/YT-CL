import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import {Search} from "@mui/icons-material";
import {colors} from "../constants";
import {useNavigate} from "react-router";

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const searchHandler = e => {
        e.preventDefault();
        if (value) {
            // console.log(value)
            navigate(`/search/${value}`)
            setValue('')

        }

    }

    return (
        <Paper
            component={'form'}
            onSubmit={searchHandler}
            sx={{
                border: `1px solid ${colors.bgColor}`,
                pl: 2,
                boxShadow: 'none',
                mr: 5,


            }}
        >
            <input type='text'
                   placeholder='Search...'
                   className='search-bar'
                   onChange={e => setValue(e.target.value)}
                   value={value}

            />
            <IconButton type='submit' sx={{p: '10px', color: colors.bgColor}}>
                <Search/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;