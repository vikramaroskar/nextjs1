import Image from 'next/image'
import profilePic from '../../public/me.png'
import { Greet } from './components/greet'
import { Counter } from './components/counter'

export default function Home() {
  return (
    <>
      <Greet />
      <Counter />
      <Image
        src={profilePic}
        alt="Picture of the author" />
    </>

  )
}