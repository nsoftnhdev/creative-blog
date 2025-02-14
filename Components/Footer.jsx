import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @creativeblog</p>
      <div className='flex cursor-pointer'>
        <Link href="https://www.facebook.com/">
          <Image src={assets.facebook_icon} alt='' width={32} className='mr-3' />
        </Link>
        <Link href="https://x.com/?lang=en&mx=2">
          <Image src={assets.twitter_icon} alt='' width={32} className='mr-3' />
        </Link>
        <Link href="https://support.google.com/answer/2451065?hl=en">
          <Image src={assets.googleplus_icon} alt='' width={32} />
        </Link>
      </div>
    </div>
  )
}

export default Footer