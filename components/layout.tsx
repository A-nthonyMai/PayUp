import Head from "next/head"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Pay Up!</title>
                <meta name="description" content="Split a bill with friends" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {children}
        </>
    )
}