import React from 'react'
import Header from '../components/layout/Header'
import { MainWidthHeaderSiderBar } from '../components/layout/Main'
import SideBar from '../components/layout/SideBar'

const TestRoute = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <MainWidthHeaderSiderBar>
        <p>TestRoute</p>
      </MainWidthHeaderSiderBar>
    </div>
  )
}

export default TestRoute