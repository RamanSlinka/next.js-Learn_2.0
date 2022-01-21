import { useRouter } from 'next/router'
import MainContainer from "../../components/MainContainer";


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}
    }
}

const user = ({user}) => {

    const {query} = useRouter();
    return (
        <MainContainer keywords={user.name}>
            <h2> User with id : {query.id}</h2>
            <div>User name - {user.name}</div>
        </MainContainer>
    );
};

export default user;