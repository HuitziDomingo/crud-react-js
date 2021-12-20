import { useState } from 'react'

const AddUserForm = ({ addUser }) => {

    const initialFormState = { id: null, name: '', tel: '', nss: '', rfc: '' }
    const [user, setUser] = useState(initialFormState)

    //Obtener valores del formulario
    const handleInputChange = e => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    //Guardar datos del formulario
    const formSubmit = e => {
        e.preventDefault()
        if (user.name || user.tel || user.nss || user.rfc)
            addUser(user)
        setUser(initialFormState)
    }

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
                <button className='btn btn-primary mt-3'>Agregar trabajador</button>
            </form>
        </div>
    )
}

export default AddUserForm
