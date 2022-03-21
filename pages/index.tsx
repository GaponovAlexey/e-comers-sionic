import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sionic</title>
        <link rel='icon' href='#!' />
      </Head>
      <Layout>
        <div className='h-screen'>
          hiss
          <h1>vision</h1>
        </div>
      </Layout>
    </div>
  )
}

export default Home
