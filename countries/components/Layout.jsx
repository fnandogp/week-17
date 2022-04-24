import Link from 'next/link'

function MenuLink({ text, href }) {
  return (
    <Link href={href} passHref>
      <a className="px-8 py-2 hover:underline">{text}</a>
    </Link>
  )
}

export default function Layout({ children }) {
  return (
    <div className="font-mono">
      <header className="bg-sky-600 text-2xl text-sky-100 p-4">
        <div className="container mx-auto">
          <div className="flex justify-start">
            <MenuLink text="🌎" href="/" />
            <MenuLink text="About" href="/about" />
            <MenuLink text="Countries" href="/countries" />
            <MenuLink text="Contact" href="/contact" />
          </div>
        </div>
      </header>
      <main className="p-4 text-xl h-full">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  )
}
