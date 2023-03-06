import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class ProductsTableRow extends Component {

    deleteProduct = () => {
        axios.delete('http://localhost:4000/products/delete-product/' + this.props.obj._id)
            .then((res) => {
                console.log('Product successfully deleted!');
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.stock}</td>
                <td>
                    <Link className="edit-link btn btn-primary" to={"/edit-product/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteProduct} variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}
