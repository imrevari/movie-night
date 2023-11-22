import { Pagination } from "@mui/material";
import { FC } from "react";



const Paginator: FC<any> = ({pages, setPage, curentPage}) => {

    return(
        <Pagination 
        count={pages} 
        sx={{ margin: '15px 0 30px 0'}} 
        page={curentPage} 
        onChange={(_, page) => setPage(page)}
        size="large"/>
    )
}

Paginator.displayName = 'Paginator';

export default Paginator;