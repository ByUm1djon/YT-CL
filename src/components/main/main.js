import React, {useEffect, useState} from 'react';
import Category from "../category/category";
import {Box, Stack, Container, Typography} from "@mui/material";
import {colors} from "../constants";
import {ApiService} from "../api-services/api.servise";
import Videos from "../videos/videos";

const Main = () => {

    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([])

    const selectedCategory = category => setSelectCategory(category)

    useEffect(() => {
        try {
            ApiService.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items))
        } catch (e) {
            console.log(e)
        }
    }, [selectCategory])


    return (
        <Stack>
            <Category setSelectCategory={selectedCategory} selectCategory={selectCategory}/>
            <Box p={'2'} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} style={{fontWeight: 'bold', mb: '2', marginTop: '15px'}}>
                        {selectCategory} <span style={{color: colors.bgColor}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    );
}

export default Main;