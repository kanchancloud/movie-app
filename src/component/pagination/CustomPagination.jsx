import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});
function CustomPagination({setPage, numberOfPage=10}) {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    return (
        <div style={{width:"100%", display:"flex", justifyContent:"center", margin:10,}}>
            <ThemeProvider theme={darkTheme}>
            <Pagination count={numberOfPage} Change={(e) => handlePageChange(e.target.textContent)} 
                            count={numberOfPage}
                        color="primary"
                        hideNextButton
                        hidePrevButton />
            </ThemeProvider>
        </div>
    );
}

export default CustomPagination;