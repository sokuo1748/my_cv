import Head from "next/head";
import HomePage from "@/pages/home/index";

export default function Home() {
    return (
        <>
            <Head>
                <title>sokuo_resume</title>
                <link rel="icon" href="\favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                />
            </Head>
            <HomePage />
        </>
    )
}