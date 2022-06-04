import type { GetStaticPropsContext, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const t = useTranslations('home')
  const { locales, asPath } = useRouter()
  return (
    <div>
      <Head>
        <title>Sionic</title>
      </Head>
      <Layout>
        <div className='h-screen'>
          <h1 className='text-2xl text-center'>{t('title')}</h1>
          <ul>
            {locales?.map((locale) => {
              return (
                <li key={locale}>
                  <Link href={asPath} locale={locale}>
                    <a>{locale}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Home

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  }
}
