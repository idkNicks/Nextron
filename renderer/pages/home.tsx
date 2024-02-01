import React from 'react'
import Head from 'next/head'

export default function HomePage() {
    return (
        <React.Fragment>
            <Head>
                <title>Home</title>
            </Head>
            <div className="text-center">
                <p>Hello</p>
            </div>
        </React.Fragment>
    )
}