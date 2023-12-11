import axios from 'axios';

export const postUser = async (values) => {
    const addUser = await axios.post('http://localhost:5004/user/signup', { ...values });
}

export const updateUser = async (id, values) => {
    const updatedUser = await axios.put(`http://localhost:5004/user/updateUser/${id}`, { ...values });
}

export const fetchaccount = async () => {
    const token = localStorage.getItem('token');
    // console.log('This is the token you looking for:', token);
    const { data } = await axios.get('http://localhost:5004/user/myaccount', { headers: { Authorization: token } })
    return data;
}