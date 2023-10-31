import logo from '@/data/logo.png'
import Image from './Image'
const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" width={45} height={35} />
    </div>
  )
}

export default Logo
