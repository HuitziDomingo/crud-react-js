import { useState, useEffect } from 'react'

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {

    const [user, setUser] = useState(currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const formSubmit = e => {
        e.preventDefault()
        updateUser(user.id, user)
    }
    
    useEffect(() => {
        console.log('NO paso')
        setUser(currentUser)
        console.log('paso')
    }, [currentUser])

    return (
        <div>
            <form className='form-control' onSubmit={formSubmit}>
                <div className="">
                    <label className="form-label">Nombre</label>
                    <input className="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} />
                </div>
                <div className="">
                    <label className="form-label">Telefono</label>
                    <input className="form-control" type="number" name="tel" value={user.tel} onChange={handleInputChange} />
                </div>
                <div className="">
                    <label className="form-label">NSS</label>
                    <input className="form-control" type="number" name="nss" value={user.nss} onChange={handleInputChange} />
                </div>
                <div className="">
                    <label className="form-label">RFC</label>
                    <input className="form-control" type="text" name="rfc" value={user.rfc} onChange={handleInputChange} />
                </div>
                <button className='btn btn-primary mt-3' onClick={() => setEditing(false)}>Editar trabajador</button>
            </form>
        </div>
    )
}

export default EditUserForm
