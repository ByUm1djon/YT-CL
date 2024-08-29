import React from 'react';
import Stack from "@mui/material/Stack";
import {category, colors} from "../constants";

const Category = ({setSelectCategory, selectCategory}) => {
    return (
        <Stack direction={'row'} style={{overflowX: 'scroll'}}>
            {category.map(item =>
                <button
                    type='button' className='category-btn' key={item.name}
                    style={{
                        backgroundColor: selectCategory === item.name ? 'white' : colors.bgColor,
                        color: selectCategory === item.name ? colors.bgColor : 'white'
                    }}
                    onClick={() => setSelectCategory(item.name)}

                >
                    <span>{item.icon}</span>
                    <span style={{marginLeft: '10px'}}>{item.name}</span>
                </button>
            )}
        </Stack>);
}

export default Category;