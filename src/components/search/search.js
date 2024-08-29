import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiService} from "../api-services/api.servise";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Videos from "../videos/videos";
import {colors} from "../constants";

const Search = () => {

    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${id}`).then(data => setVideos(data.items))
    }, [id])


    return (
        <Box p={2} mt={'50px'} sx={{height: '120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>
                    Search for results <span style={{color: colors.bgColor}}>{id}</span> videos
                </Typography>
                <Videos videos={videos}/>
            </Container>
        </Box>

    );
}

export default Search;
