import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AlbumCard from './components/AlbumCard'
import PerformanceCard from './components/PerformanceCard'
import { FaInstagram, FaYoutube, FaSpotify, FaApple, FaLinkedin } from 'react-icons/fa';

function Section({ id, title, subdued=false, children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${subdued ? 'bg-bone' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-20">
        {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
function FillerBlock({ className='' }) {
  return <div className={`bg-neutral-100 text-neutral-300 text-xs p-4 leading-4 ${className}`}>{"filler ".repeat(80)}</div>
}
function Resume() {
  const [data, setData] = useState(null)
  useEffect(()=>{ fetch('/api/resume').then(r=>r.json()).then(setData) },[])
  
  // Add loading state
  if(!data) return <div className="text-center">Loading...</div>

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-8">
        <section>
          <h3 className="text-lg font-semibold">Albums</h3>
          <ul className="mt-3 space-y-2">
            {data.albums?.map((a,i)=>(
              <li key={i} className="flex items-start justify-between gap-4">
                <span className="font-medium">{a.title}</span>
                <span className="text-neutral-500 text-sm shrink-0">{a.released}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Awards</h3>
          <ul className="mt-3 space-y-3">
            {data.awards?.map((a,i)=>(
              <li key={i} className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1.5fr] gap-2">
                <span className="font-medium">{a.title}</span>
                <span className="text-neutral-500">{a.date}</span>
                <span className="text-neutral-500">{a.by}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Performing Experience</h3>
          <ul className="mt-3 space-y-3">
            {data.performing?.map((p,i)=>(
              <li key={i} className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-2">
                <span className="font-medium">{p.org}</span>
                <span className="text-neutral-500">{p.dates}</span>
                <span className="text-neutral-500">{p.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="mt-3 space-y-3">
            {data.education?.map((e,i)=>(
              <li key={i} className="flex items-start justify-between gap-4">
                <span className="font-medium">{e.school}</span>
                <span className="text-neutral-500 shrink-0">{e.dates}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside className="space-y-4">
        <div className="p-4 rounded-xl bg-white shadow-soft border border-black/5">
          <h4 className="font-semibold">Summary</h4>
          <p className="text-sm text-neutral-700 mt-2">{data.summary}</p>
        </div>
        <div className="p-4 rounded-xl bg-white shadow-soft border border-black/5">
          <h4 className="font-semibold">Repertoire</h4>
          <p className="text-sm text-neutral-700 mt-2">{data.repertoireNotes}</p>
          {data.rawAppendix && (
            <p className="text-xs text-neutral-500 mt-2">{data.rawAppendix}</p>
          )}
        </div>
      </aside>
    </div>
  )
}

export default function App() {
  const [albums, setAlbums] = useState([])
  const [performances, setPerformances] = useState([])
  useEffect(()=>{
    fetch('/api/discography').then(r=>r.json()).then(d=>setAlbums(d.albums||[]))
    fetch('/api/performances').then(r=>r.json()).then(d=>setPerformances(d.performances||[]))
  },[])
  return (
    <div className="font-body">
      <Navbar />

      {/* HOME / HERO */}
      <Section id="home">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Eugene Lee</h1>
            <p className="mt-4 text-lg text-neutral-700">Flute & Piccolo — classical precision, modern imagination.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com/eugene.__lee" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@CubingFlutist" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://open.spotify.com/artist/37tG8lF6Kh3cpf6tfvEHsA" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900">
                <FaSpotify className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/eugene-lee-0965952b5/" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <img 
              src="/eugenelee1.JPG" 
              alt="Eugene Lee" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" subdued={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img src="/eugenelee1.JPG" alt="Eugene Lee" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img src="/eugenelee2.JPG" alt="Eugene Lee" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img src="/eugenelee3.JPG" alt="Eugene Lee" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </Section>

      {/* BIO */}
      <Section id="bio" title="Bio" subdued>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="leading-7 text-neutral-800">{"filler ".repeat(150)}</p>
            <p className="leading-7 text-neutral-800">{"filler ".repeat(120)}</p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-white shadow-soft border border-black/5 p-4">
              <h4 className="font-semibold">Highlights</h4>
              <ul className="text-sm mt-2 list-disc pl-5 text-neutral-700">
                <li>Classical foundation, modernist edge.</li>
                <li>Curates programs bridging eras and genres.</li>
                <li>{"filler ".repeat(10)}</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white shadow-soft border border-black/5 p-4">
              <h4 className="font-semibold">Press</h4>
              <p className="text-sm text-neutral-700">{"filler ".repeat(20)}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* DISCOGRAPHY */}
      <Section id="discography" title="Discography">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((a, idx) => <AlbumCard key={idx} album={a} />)}
          {albums.length === 0 ? Array.from({length: 3}).map((_,i)=>(
            <div key={i} className="rounded-2xl bg-neutral-100 p-4 text-neutral-300">{"filler ".repeat(80)}</div>
          )): null}
        </div>
      </Section>

      {/* PERFORMANCES */}
      <Section id="performances" title="Performances" subdued>
        <div className="grid md:grid-cols-2 gap-6">
          {performances.map((p, idx) => <PerformanceCard key={idx} item={p} />)}
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" title="Resume">
        <Resume />
      </Section>

      {/* OTHER PROJECTS */}
      <Section id="projects" title="Other Projects" subdued>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 rounded-xl bg-white border border-black/5 shadow-soft">
            <h4 className="font-semibold">filler</h4>
            <p className="text-sm text-neutral-700">{"filler ".repeat(20)}</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/5 shadow-soft">
            <h4 className="font-semibold">filler</h4>
            <p className="text-sm text-neutral-700">{"filler ".repeat(20)}</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-black/5 shadow-soft">
            <h4 className="font-semibold">filler</h4>
            <p className="text-sm text-neutral-700">{"filler ".repeat(20)}</p>
          </div>
        </div>
      </Section>
      <div className="max-w-6xl mx-auto px-4 -mt-8 mb-6 opacity-80">
        <img src="/assets/FluteClearImageArtistWebsite.PNG" alt="Flute drawing" className="h-16 w-auto" />
      </div>
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Eugene Lee — All rights reserved.
      </footer>
    </div>
  )
}