
import Link from "next/link";


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
        props: {users}
    }
}

const Users = ({users}) => {


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