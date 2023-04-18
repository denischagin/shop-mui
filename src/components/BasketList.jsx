import React from 'react'
import { Typography } from '@mui/material';

const BasketList = ({ order, setOrder }) => {
    return (
        <div>
            {order.map(product =>
                <div key={product.id}>
                    <Typography variant='h6' component="p">{product.name}</Typography>
                    <Typography variant='body1' component="p">{product.category}</Typography>
                    <Typography variant='body1' component="p">Количество: {product.count}</Typography>
                    <Typography variant="body2">Цена: {product.price*product.count}</Typography>
                </div>
            )}
        </div>
    )
}

export default BasketList