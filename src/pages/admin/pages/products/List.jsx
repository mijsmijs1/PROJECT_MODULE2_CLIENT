import React from 'react'
import { Table } from 'react-bootstrap';
import { randomId, convertToVND } from '@mieuteacher/meomeojs';
import { useSelector, useDispatch } from 'react-redux';
import ProductCreateForm from './components/ProductCreateForm';

export default function List() {
    const dispatch = useDispatch()
    const productStore = useSelector(store => store.productStore);

    return (
        <>
            {
                productStore.addModal && <ProductCreateForm dispatch={dispatch} />
            }
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Des</th>
                        <th>Avatar</th>
                        <th>Pictures</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productStore.data?.map((product, index) => {
                            return (
                                <tr key={randomId()}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category.title}</td>
                                    <td>{convertToVND(product.price)}</td>
                                    <td>
                                        <button className='btn btn-primary'>show</button>
                                    </td>
                                    <td>
                                        <img src={product.avatar}  style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                    </td>
                                    <td>
                                        <button className='btn btn-primary'>show</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}