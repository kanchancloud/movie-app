import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import {useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {Container} from "@mui/material";
import Movie from "../Page/Movies/Movie";
import TvSeries from "../Page/TvSeries/TvSeries";
import Search from "../Page/Search/Search";


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    const history = useNavigate();

    useEffect(() => {
        if (value === 0) history('/');
        // window.location.href = "/";
        else if (value === 1) history("/Movie");
        else if (value === 2) history("TvSeries");
        else if (value === 3) history("/Search");
    }, [value])

    return (
        <Box sx={{width:"100%",position: 'fixed', bottom: 0, bgColor: '#2d313a', zIndex: 100,marginRight:"10%"}}>

            <BottomNavigation

                style={{backgroundColor: '#2d3360'}}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}

            >
                <BottomNavigationAction style={{color: "white"}} label="Trending"
                                        icon={<WhatshotIcon/>}/>
                <BottomNavigationAction style={{color: "white"}} label="Movie"
                                        icon={<MovieIcon/>}/>
                <BottomNavigationAction style={{color: "white"}} label="Tv series"
                                        icon={<TvIcon/>}/>
                <BottomNavigationAction style={{color: "white"}} label="search"
                                        icon={<SearchIcon/>}/>
            </BottomNavigation>
        </Box>
    );
}