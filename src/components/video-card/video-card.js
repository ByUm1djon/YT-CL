import React from 'react';
import {Card, CardMedia, CardContent, Typography, Avatar, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {colors} from "../constants";
import moment from "moment";
import {Link} from "react-router-dom";

const VideoCard = ({video}) => {
    // console.log(video)
    return (
        <Card
            sx={{width: {xs: '100%', sm: '270px', md: '290px', lg: '310px'}, height:'auto', boxShadow: 'none', borderRadius: 0}}
        >

            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{width: {xs: '100%', sm: '270px', md: '290px', lg: '310px'}, height: '180px'}}
                />
            </Link>

            <CardContent
                sx={{
                    backgroundColor: colors.bgColor,
                    height: '200px',
                    position: 'relative'
                }}>

                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{opacity: '.4'}}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{opacity: '.6'}}>
                        {video?.snippet?.description.slice(0, 70)}
                    </Typography>
                </Link>

                <Link to={`/channel/${video.snippet.channelId}`}>
                    <Stack
                        direction="row"
                        marginTop='10px'
                        position="absolute"
                        alignItems="center"
                        gap="10px"
                        bottom="1px"
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                        <Typography variant="subtitle2" color="gray">
                            {video?.snippet?.channelTitle}
                        </Typography>
                        <CheckCircle sx={{fontSize: '12px', color: 'gray'}}/>
                    </Stack>
                </Link>






            </CardContent>
        </Card>
    )

}

export default VideoCard;