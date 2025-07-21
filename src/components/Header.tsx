
export default function Header() {
  return (
    <header className="container flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
        </ul>
      </nav>
    </header>
  )
}
