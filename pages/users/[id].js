import {useRouter} from "next/router";

const user = () => {

    const {query} = useRouter();
    return (
        <div>
            <h2> User with id : {query.id}
            </h2>
        </div>
    );
};

export default user;