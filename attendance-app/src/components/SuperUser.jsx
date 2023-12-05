import React from "react";

export default function SuperUser(){
    const [users, setUsers] = React.useState([]);
    if (users.length<1) {
        return(
            <>
                <h1>Kosong...</h1>
                <button /*onClick={addUser}*/>add user +</button>
            </>
        );
    } else {
        const userList = users.map(user => {
            <tr>
                <td>{user.nik}</td>
                <td>{user.name}</td>
            </tr>
        })
        return(
            <table>
                <th>
                    <td>NIK</td>
                    <td>Nama</td>
                </th>
                {userList}
            </table>
        );
    }
}