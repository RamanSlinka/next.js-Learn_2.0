import Image from "next/image"
import image from "../public/vercel.svg"
import styles from "../styles/Home.module.css";
import MainContainer from "../components/MainContainer";

const Error = () => {
    return (
        <MainContainer>
            <h1 className={styles.main}>
                <h2>error 404 :(</h2>
                <p> WTF...</p>
                <Image src={image}></Image>
            </h1>
            </MainContainer>
            );
            };

            export default Error;