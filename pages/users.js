import {useState} from "react";
import Link from "next/link";


const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Adam'},
        {id: 2, name: 'Marcin'},
        {id: 3, name: 'Robert'}
    ])
    return (
        <div>
            <p>Hey yo !</p>
            <h2> List users :</h2>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;