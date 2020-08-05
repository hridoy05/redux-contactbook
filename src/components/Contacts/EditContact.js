import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';
import shortid from 'shortid';
import { useHistory, useParams } from 'react-router-dom';


const EditContact = () => {
    const { id } = useParams()
    let history = useHistory()
    const dispatch = useDispatch()
    const contact = useSelector(state => state.contact.contact)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (contact != null) {
            setName(contact.name)
            setEmail(contact.phone)
            setPhone(contact.email)
        }
        dispatch(getContact(id))
    }, [contact])

    const onUpdateConatact = (e) => {
        e.preventDefault()
        const update_Conatact = Object.assign(contact, {
            name, phone, email
        })
        dispatch(updateContact(update_Conatact))
        history.push('/')
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Edit a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateConatact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <button className="btn btn-warning" type="submit">
                        Update Contact
          </button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;