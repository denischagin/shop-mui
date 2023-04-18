import React from 'react'
import './index.css'
import { goods } from './data/goods'
import { useState } from 'react'
import Search from './components/Search'
import GoodsList from './components/GoodsList'
import BasketList from './components/BasketList'
import Header from './components/Header'
import { Container } from '@mui/system'
import { Drawer, Button } from '@mui/material'


const App = () => {
	const [products, setProducts] = useState(goods)
	const [search, setSearch] = useState('')
	const [order, setOrder] = useState([

	])
	const [isOpenDrawer, setIsOpenDrawer] = useState(false)



	const changeHandler = (e) => {
		console.log("on change")
		const value = e.target.value
		if (!value) {
			setProducts(goods)
			setSearch('')
			return
		}
		setSearch(value)

		const newProducts = products.filter((product, index) => {
			return product.name.toLowerCase().includes(value.toLowerCase())
		})
		setProducts(newProducts)
	}

	const removeFromOrder = (goodsItem) => {
		const newOrder = products.filter(product => {
			product.id !== goodsItem.id
		})
		setOrder(newOrder)
	}

	const addToOrder = (goodsItem) => {
		const findOrder = order.find(el => el.id == goodsItem.id)

		if (findOrder !== undefined) {
			goodsItem.count++;
		} else {
			goodsItem.count = 1;
			setOrder(prev => [...prev, goodsItem])
		}
	}


	return (
		<div className='App'>
			<Header shopClick={() => { setIsOpenDrawer(true) }} countBadge={order.length} />
			<Container >
				<Search
					onChange={changeHandler}
					value={search}
				/>
				<GoodsList
					goods={products}
					setOrder={addToOrder}

				/>

			</Container>
			<Drawer
				anchor='right'
				open={isOpenDrawer}
			>
				<BasketList
					order={order}
					setOrder={removeFromOrder}
				/>
				<Button variant='outlined' onClick={() => { setIsOpenDrawer(false) }}>Привет андрей</Button>

			</Drawer>
		</div>
	)
}

export default App