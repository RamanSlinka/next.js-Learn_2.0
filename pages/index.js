
import styles from '../styles/Home.module.css'
import MainContainer from "../components/MainContainer";

export default function Home() {
    return (
        <MainContainer keywords={"main page"}>
            <main className={styles.main}>
                <h1>Main page</h1>
                   <h2>
                    Hi everyone !
                   </h2>
            </main>


        </MainContainer>
    )
}
