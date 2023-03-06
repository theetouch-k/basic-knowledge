import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            stock: 0
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get('http://localhost:4000/products/edit-product/' + this.props.match.params.id).then((res)=> {
            this.setState({
                name: res.data.name,
                price: res.data.price,
                stock: res.data.stock
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    onChangeProductName = (e) => {
        this.setState({ name: e.target.value})
    }

    onChangeProductPrice = (e) => {
        this.setState({ price: e.target.value})
    }

    onChangeProductStock = (e) => {
        this.setState({ stock: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefalt();

        const productObject = {
            name: this.state.name,
            price: this.state.price,
            stock: this.state.stock
        }
        
        axios.put('http://localhost:4000/products/update-product/' + this.props.match.params.id, productObject).then((res) => {
            console.log(res.data);
            console.log('Successfully Update');
        }).catch((err) => {
            console.log(err);
        })


        this.props.history.push('/product-list');
    };

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Update Product</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName} />
                    </Form.Group>

                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" value={this.state.price} onChange={this.onChangeProductPrice} />
                    </Form.Group>

                    <Form.Group controlId="Stock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number" value={this.state.stock} onChange={this.onChangeProductStock} />
                    </Form.Group>

                    <Button className="mt-3" variant="success" size="lg" block="block" type="submit">
                        Update Product
                    </Button>
                </Form>
            </div>
        )
    }
}
