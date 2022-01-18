
import styles from '../styles/Home.module.css'
import MainContainer from "../components/MainContainer";

export default function Home() {
    return (
        <MainContainer keywords={"main page"}>
            <h1>Main page</h1>

            <main className={styles.main}>
                Hi everyone !
            </main>


        </MainContainer>
    )
}
