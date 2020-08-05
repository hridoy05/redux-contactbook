import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

const Contact = ({ contact, selectAll }) => {
    const { name, phone, email, id, } = contact
    const dispatch = useDispatch()
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" checked={selectAll} className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </th>
            <td><Avatar className="mr-3" name={name} size={40} round={true} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2">edit</span>
                </Link>

                <span className="material-icons mr-2 text-danger" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>





            </td>
        </tr >
    );
};

export default Contact;