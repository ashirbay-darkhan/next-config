import React from 'react'
import Head from 'next/dist/shared/lib/head'
import A from './A'

const MainContainer = ({children, keywords}) => {
  return (
    <>
        <Head>
            <meta keywords={"ulbi tv nextjs" + keywords}></meta>
        </Head>

        <div className="navbar d-flex">
            <A href={'/'} text={"Главная"} />
            <A href={'/users'} text={"Пользователи"} />
        </div>

        <div>
            {children}
        </div>
    </>
  )
}

export default MainContainer