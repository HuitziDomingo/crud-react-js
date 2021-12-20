import { useState } from 'react'

const AddUserForm = ({ addUser }) => {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    //Obtener valores del formulario
    const handleInputChange = e => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    return (
        <div>
            <form className='form-control'>
                <div className="">
                    <label className="form-label">Nombre</label>
                    <input className="form-control" type="text" name="tel" value="" />
                </div>
                <div className="">
                    <label className="form-label">Telefono</label>
                    <input className="form-control" type="number" name="tel" value="" />
                </div>
                <div class="">
                    <label className="form-label">NSS</label>
                    <input className="form-control" type="number" name="nss" value="" />
                </div>
                <div class="">
                    <label className="form-label">RFC</label>
                    <input className="form-control" type="number" name="rfc" value="" />
                </div>
                <button className='btn btn-primary mt-3'>Agregar trabajador</button>
            </form>
        </div>
    )
}

export default AddUserForm
