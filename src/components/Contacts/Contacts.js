import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import { selectAllContact, clearAllContact, deleteAllContact } from '../../actions/contactActions';

const Contacts = () => {
    const dispatch = useDispatch()
    const [selectAll, setSelectAll] = useState(false)
    const contacts = useSelector(state => state.contact.contacts)
    const selectedContacts = useSelector(state => state.contact.selectedContacts)

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        }
        else {
            dispatch(clearAllContact())
        }
    }, [selectAll])
    return (
        <div>
            {
                selectedContacts.length > 0 ?
                    (<button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())}>Delete all</button>)
                    : null
            }
            <table className="table ">
                <thead>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    id="selectAll"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => setSelectAll(!selectAll)}
                                />
                                <label className="custom-control-label" for="selectAll"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => (
                            <Contact contact={contact} key={contact.id} selectAll={selectAll} />

                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Contacts;