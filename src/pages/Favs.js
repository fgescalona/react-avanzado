import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='Tus mascotas favoritas' subtitle='Aquí puedes encontrar tus mascotas favoritas' >
    <FavsWithQuery />
  </Layout>
)
