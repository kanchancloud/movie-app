import './App.css';
import Header from "./component/Header/Header";
import SimpleBottomNavigation from "./component/MainNav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Movie from "./Page/Movies/Movie";
import Trending from "./Page/Trending/Trending";
import TvSeries from "./Page/TvSeries/TvSeries";
import Search from "./Page/Search/Search";
// import {Search} from "@mui/icons-material";
import {Container} from "@mui/material";
import * as React from "react";

function App() {
    return (
        <>
            <Header/>
            <div className="App">
                <BrowserRouter>
                    <SimpleBottomNavigation/>
                    <Container>
                        <Routes>
                            <Route path="/" exact element={<Trending/>}/>
                            <Route path="/Movie" element={<Movie/>}/>
                            <Route path="/TvSeries" element={<TvSeries/>}/>
                            <Route path="/Search" element={<Search/>}/>
                        </Routes>
                    </Container>
                </BrowserRouter>
            </div>
        </>
    );
}

// function bottomRop

export default App;
