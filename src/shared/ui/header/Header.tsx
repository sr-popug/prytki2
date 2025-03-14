import headerConfig from '@/lib/headerConfig'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <header className='main-header fixed top-0 left-0 right-0 z-50 bg-opacity-70 bg-black h-16 box-border w-[100vw]'>
      <div className='mx-auto max-w-full  font-sans flex items-center mt-1 justify-between h-16'>
        <Link href='/' className='logo mr-16 block'>
          <Image
            src='/logo-head.png'
            alt='Логотип пряток'
            width={70}
            height={40}
          />
        </Link>
        <HeaderMenu />
        <nav className='ml-2 hidden xl:block xl:ml-0'>
          <ul className='list-none flex  gap-12 '>
            {headerConfig.navigation.links.map(
              link =>
                !link.hidden && (
                  <li key={link.title}>
                    <Link
                      className='transition-colors text-nowrap  hover:text-prytki block text-xl font-thin text-center'
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
        <article className='hidden right ml-24 xl:flex  items-center gap-4'>
          <a
            href={`tel:${headerConfig.contacts.phones[0][1]}`}
            className={`${styles.phone} font-serif text-nowrap text-4xl text-center hover:text-prytki transition-colors`}
          >
            {headerConfig.contacts.phones[0][0]}
          </a>

          <Link
            href={headerConfig.navigation.links[4].href}
            className='font-serif text-3xl text-center bg-prytki py-1 px-12 rounded-xl text-black hover:bg-yellow-600 text-nowrap  transition-colors block lg:mr-2'
          >
            {headerConfig.navigation.links[4].title}
          </Link>
        </article>
      </div>
    </header>
  )
}
