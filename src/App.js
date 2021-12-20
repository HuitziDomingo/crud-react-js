import { useState } from 'react'

import { UserTable, AddUserForm, EditUserForm } from './components'

import { Link } from 'react-router-dom'


const App = () => {

  //Logica para guardar un usuario
  const initialData = [
    { id: null, name: '', tel: '', nss: '', rfc: '' },

  ]

  const [users, setUsers] = useState([])

  //Generar ID para cada elemento del formulario
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  //Eliminar un usuario
  const deleteUser = id => setUsers(users.filter((x) => x.id !== id))

  //Actualizar usuario
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialData)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, tel: user.tel, nss: user.nss, rfc: user.rfc })
  }

  // const editRow = () => console.log("funciona")

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => user.id === id ? updatedUser : user))
  }


  return (
    <div className="container">
      <h1 className="text-center mb-5">Sistema CRUD para trabajadores</h1>
      <div className="row">
        {
          editing ? (
            <div className="col-md-5">
              <h2 className="mb-4">Editar trabajador.</h2>
              <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}  />
            </div>
          ): (
              <div className="col-md-5">
                <h2 className="mb-4">Agregar nuevo trabajador.</h2>
                <AddUserForm addUser={addUser} />
              </div>
          )
        }
        <div className="col-md-7">
          <h2 className="text-center mb-4">Ver lista de trabajadores</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
      {/* Ir a ver pokemones */}
      <div className="container text-center mt-5 mb-5">
        <Link className='btn btn-primary' to="/pokemon">Ver pokemones</Link>
      </div>
    </div>
  )
}

export default App
