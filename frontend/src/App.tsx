import { Header } from './components/Header/Header'
import { HomeFirst } from './components/HomePage/Home-first'
import styles from './App.module.scss'
export function App() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeFirst />
      </main>
    </>
  )
}


