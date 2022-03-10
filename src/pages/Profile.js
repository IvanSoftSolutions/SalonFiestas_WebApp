import React, { useState } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';
import Payment from '../components/Payment';

export default function Profile({ onIsLoggedInChange }) {
    const navigate = useNavigate();
    const [status, setStatus] = useState('Apartado')
    const [modalIsOpen, setIsOpen] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));
    var nombre = userData.nombre + ' ' + userData.apellido;

    function getDates() {

    }

    const data = React.useMemo(
        () => [
            {
                date: 'Hello',
                status: 'World',
            },
            {
                date: 'react-table',
                status: 'rocks',
            },
            {
                date: 'whatever',
                status: 'you want',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date', // accessor is the "key" in the data
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: row => (
                    <div>
                        <button onClick={openModal}>Pay</button>
                        <button>Cancel</button>
                    </div>
                ),
            }
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    function logout() {
        localStorage.setItem('isLoggedIn', false);
        onIsLoggedInChange(false);
        navigate('/');
    }

    function openModal() {
        setIsOpen(true);
    }

    console.log(userData);

    return (
        <>
            <Hero>
                <div>
                    <Banner title='Events' subtitle={nombre}>
                        <h6>{userData.correo}</h6>
                    </Banner>
                    <div className='btn-container'>
                        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th
                                                {...column.getHeaderProps()}
                                                style={{
                                                    borderBottom: 'solid 3px red',
                                                    background: 'aliceblue',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        style={{
                                                            padding: '10px',
                                                            border: 'solid 1px gray',
                                                            background: 'papayawhip',
                                                        }}
                                                    >
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                    <div className='btn-container'>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </Hero>
            <Payment openModal={modalIsOpen} onModalChange={setIsOpen} status={status} onStatusChange={setStatus} />
        </>


    )
}
