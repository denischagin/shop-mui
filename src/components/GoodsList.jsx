import { Grid } from '@mui/material';
import React from 'react'
import GoodsItem from './GoodsItem';

const GoodsList = ({ goods, setOrder }) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{justifyContent: "center"}}
        >
            {goods.map(product =>
                <GoodsItem
                    key={product.id}
                    product={product}
                    setOrder={setOrder}
                />
            )}
        </Grid>
    )
}

export default GoodsList