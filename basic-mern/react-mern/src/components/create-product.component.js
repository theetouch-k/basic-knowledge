import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: 0,
            stock: 0,
        }
    }

    onChangeProductName = (e) => {
        this.setState({name: e.target.value})
    }

    onChangeProductPrice = (e) => {
        this.setState({price: e.target.value})
    }

    onChangeProductStock = (e) => {
        this.setState({stock: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            stock: this.state.stock
        }

        axios.post('http://localhost:4000/products/create-product', newProduct).then(
            res => {
                console.log(res.data);
            }
        )

        alert(`${this.state.name} price:${this.state.price} stock:${this.state.stock}`)

        this.setState({
            name: '',
            price: 0,
            stock: 0
        })
    }

    render() {
        return (
            <div>
                <div className="form-wrapper mt-5">
                    <h1>Create New Product</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={this.state.price} onChange={this.onChangeProductPrice}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" value={this.state.stock} onChange={this.onChangeProductStock}></Form.Control>
                        </Form.Group>

                        <Button className="mt-3" variant="success" size="lg" block="block" type="submit">New Product</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
