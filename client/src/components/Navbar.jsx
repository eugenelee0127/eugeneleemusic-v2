const sections = [
  { id: 'home', label: 'Home' },
  { id: 'bio', label: 'Bio' },
  { id: 'discography', label: 'Discography' },
  { id: 'performances', label: 'Performances' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="font-semibold tracking-wide">
            EUGENE LEE
          </a>
          <img 
            src="/FluteClearImageArtistWebsite.PNG" 
            alt="Logo" 
            className="h-8 w-auto" 
          />
        </div>
        <ul className="flex gap-4 text-sm">
          {sections.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="px-2 py-1 rounded-full hover:bg-black/10">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}