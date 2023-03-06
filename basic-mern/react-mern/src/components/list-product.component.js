import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import ProductsTableRow from './products-table-row'

export default class ListProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products').then( res=> {
            this.setState({
                products: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    DataTable = () => {
        return this.state.products.map((res, i) => {
            return <ProductsTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div>
                <div className="table-wrapper mt-5">
                    <h1>Product List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
