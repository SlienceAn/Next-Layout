import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'

type post = {
    name: string
}
const Profile = (post: post) => {

    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <Head>
                <title>Next.js+SASS</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
            </Head>
            <h1>{post.name}</h1>
            <Link href="/" passHref>
                <a>返回</a>
            </Link>
        </div>
    )
}

//若使用者不需要最新一筆資料可使用此
// export const getStaticProps: GetStaticProps = async () => {
//     const res = await fetch('http://localhost:3000/api/Profile?slug=Text')
//     const post = await res.json()
//     return {
//         props: {
//             post
//         }
//     }
// }

// export const getStaticPaths: GetStaticPaths = () => {
//     return {
//         paths: [],
//         fallback: false
//     }
// }

//若使用者每次更新需要最新一筆使用此
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const url = "http://localhost:3000/api/Profile?slug=" + id
    const res = await fetch(url,
        {
            method: 'GET',
            headers: {
                authorization: 'Whisper your name again'
            }
        },
    )
    const data = await res.json()
    return {
        props: data
    }
}
export default Profile;