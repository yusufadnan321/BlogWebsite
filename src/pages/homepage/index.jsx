import React from 'react'

import Banner from './components/Banner'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Layout from '../../layout'
import Posts from '../posts/Posts'


function Home() {
  return (
    <>
       
      <Layout>
      <Banner/>
      <Posts/>
      </Layout>


    </>
  )
}

export default Home