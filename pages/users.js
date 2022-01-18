
import Link from "next/link";
import MainContainer from "../components/MainContainer";


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
        props: {users}
    }
}

const Users = ({users}) => {


    return (
        <MainContainer keywords={"users next js"}>
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
        </MainContainer>
    );
};




export default Users;