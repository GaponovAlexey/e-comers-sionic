import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sionic</title>
        <link rel='icon' href='#!' />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className='h-screen'>
          <h1>vision</h1>
        </div>
      </Layout>
    </div>
  )
}

export default Home
