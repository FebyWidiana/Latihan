import Reseller from '@/assets/img/sidebar/ic_reseller.svg';
import Search from '@/assets/img/search.svg'
import React, { useState, useEffect } from 'react';
import apiClient from '../../../helper/apiClient';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const User = () => {
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [APIData, setAPIData] = useState([])



    useEffect(() => {
        // fetchData();
        hehe()
    }, []);

    async function hehe() {
        const response = await apiClient().get("/users")
        console.log(response)

    }

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEdit = (id) => {
        setEditingUserId(id);
    };

    const handleSave = async (id, updatedData) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                fetchData();
                setEditingUserId(null);
            } else {
                console.error('Error updating user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUsers(users.filter(user => user.id !== id));
            } else {
                console.error('Error deleting user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }

    };



    return (
        <div className="w-full py-5 px-8">
            <div className="flex items-center mb-4">
                <Reseller className="w-6 h-6 mr-2" />
                <div className="text-center font-bold">User</div>
            </div>

            <div>
                <div>
                    <h1 className="text-xl font-bold mb-2">Daftar Pengguna</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-center">
                            <thead>
                                <tr className='[&>th]:px-4 [&>th]:py-2 [&>th]:border [&>th]:border-slate-900 [&>th]:bg-slate-500'>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Alamat</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className='[&>td]:px-4 [&>td]:py-2 [&>td]:border [&>td]:border-slate-900'>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}, {user.address.street}, {user.address.suite}</td>
                                        <td>
                                            <button
                                                onClick={() => handleEdit(user.id)}
                                                className="mr-2 text-blue-500">
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="text-red-500">
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div>
                    <div style={{ padding: 20 }}>
                        <Search />
                        placeholder='Search...'
                        /
                        <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                            {APIData.map((item) => {
                                return (
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Description>
                                                {item.email}
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                )
                            })}
                        </Card.Group>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default User;
