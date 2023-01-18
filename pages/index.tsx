import Header from 'components/header'
import Layout from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <main className='flex flex-col h-screen'>
        <Header title="Pay Up!" />
      </main>
    </Layout>
  )
}
