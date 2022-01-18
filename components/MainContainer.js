import CustomLink from "./CustomLink";
import Head from "next/head";
import styles from "../styles/Home.module.css";


const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <title>Main</title>
                <meta keywords={"create next app" + keywords}/>
                <link rel="icon" href="/favicon.ico"/>

            </Head>

            <div className="navbar">
            <CustomLink href={"/"} text={"Main"} />
            <CustomLink href={"/users"} text={"Users"}/>
            </div>
            <style jsx>
                {`
                      .navbar {
                        background: darkorange;
                        padding: 15px;
                      }                   
                    `}
            </style>
            <div>
                {children}
            </div>


            <footer className={styles.footer}>
created by Raman Slinka
            </footer>
        </>
    );
};

export default MainContainer;