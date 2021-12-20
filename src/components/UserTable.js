
const UserTable = ({ users, deleteUser, editRow }) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Trabajador</th>
                        <th>Telefono</th>
                        <th>Nss</th>
                        <th>RFC</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(x => (
                            <tr key={x.id}>
                                <td>{x.name}</td>
                                <td>{x.tel}</td>
                                <td>{x.nss}</td>
                                <td>{x.rfc}</td>
                                <td>
                                    <button className="btn btn-secondary m-1" onClick={() => editRow(x)} >Actualizar</button>
                                    <button className="btn btn-secondary m-1" onClick={() => deleteUser(x.id)} >Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
