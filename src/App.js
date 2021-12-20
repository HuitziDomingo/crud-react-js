import { UserTable, AddUserForm } from './components'

import { useState } from 'react'

const App = () => {

  //Logica para guardar un usuario
  // const initialData = [
  //   { id: 1, name: 'Mey', tel: 5465464, nss: 465456, rfc: 464646 },
  //   { id: 2, name: 'Mey2', tel: 54654642, nss: 4654562, rfc: 4646462 },
  //   { id: 3, name: 'Mey3', tel: 54654643, nss: 4654563, rfc: 4646463 },
  // ]

  const [users, setUsers] = useState([])

  //Generar ID para cada elemento del formulario
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  //Eliminar un usuario
  const deleteUser = id => setUsers(users.filter((user) => user.id !== id))




  return (
    <div className="container">
      <h1 className="text-center mb-5">Sistema CRUD para trabajadores</h1>
      <div className="row">
        <div className="col-md-5">
          <h2 className="mb-4">Agregar nuevo usuario</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="col-md-7">
          <h2 className="text-center mb-4">Ver lista de trabajadores</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
