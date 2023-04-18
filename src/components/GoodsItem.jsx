import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material'

const GoodsItem = ({ product, setOrder }) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card 
                sx={{
                    height: "100%",
                }}
            >
                <CardMedia
                    sx={{ height: 200 }}
                    image={product.poster}
                    alt="card image"
                />

                <CardContent>
                    <Typography
                        variant='h6'
                        component="p"
                    >
                        {product.name}
                    </Typography>

                    <Typography variant='body1'>Категория: {product.category}</Typography>
                </CardContent>

                <CardActions>
                    <Button onClick={() => setOrder(product)}>Купить</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GoodsItem