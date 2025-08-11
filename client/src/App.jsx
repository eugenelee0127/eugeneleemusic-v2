import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AlbumCard from './components/AlbumCard'
import PerformanceCard from './components/PerformanceCard'
import { FaInstagram, FaYoutube, FaSpotify, FaApple, FaLinkedin, FaAmazon } from 'react-icons/fa'

// New Carousel component
function Carousel({ images, interval = 15000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images, interval])
  
  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <img 
          key={index}
          src={src}
          alt={`Carousel ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 bg-bone">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {title && <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

function FillerBlock({ className='' }) {
  return <div className={`bg-neutral-100 text-neutral-300 text-xs p-4 leading-4 ${className}`}>{"filler ".repeat(80)}</div>
}

function Resume() {
  return (
    <div className="space-y-12">
      {/* Albums Section */}
      <section>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Albums</h3>
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">
              Going Solo: 20th Century Virtuosities for Solo Flute
            </span>
            <span className="text-neutral-500">October 14, 2024</span>
          </div>
          <div className="text-sm text-neutral-600 mt-1">
            Available on All Platforms
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Awards</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                Massachusetts Governor’s Citation in Recognition
              </span>
              <span className="text-neutral-500">November 25, 2024</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by Maura T. Healey, Governor of Massachusetts
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                Finalist for From the Top's Learning and Media Lab Fellowship
              </span>
              <span className="text-neutral-500">December 4, 2024</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by the National Public Radio
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                2025 National YoungArts Award Winner (Classical Music/Flute)
              </span>
              <span className="text-neutral-500">November 26, 2024</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by YoungArts - The National Foundation for the Advancement of Artists
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                2024 National YoungArts Award Winner (Classical Music/Flute)
              </span>
              <span className="text-neutral-500">November 30, 2023</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by YoungArts - The National Foundation for the Advancement of Artists
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                1st Place in Woodwinds & Brass - UMASS Amherst Young Artist Awards 2023
              </span>
              <span className="text-neutral-500">June 10, 2023</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by UMASS Amherst College of Humanities & Fine Arts Department of Music and Dance
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                2nd Place - 21st National Student Music Scholarship Competition of Seoul
              </span>
              <span className="text-neutral-500">March 3, 2021</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by the Venusto Musicians Association
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                1st Place - 20th National Student Music Scholarship Competition of Seoul
              </span>
              <span className="text-neutral-500">September 13, 2020</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by the Venusto Musicians Association
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                1st Place - 39th Haneum Music Competition
              </span>
              <span className="text-neutral-500">December 28, 2019</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by Haneum Music Competition
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                1st place in Flute & Overall 2nd place in Winds - 19th Music Education News Competition
              </span>
              <span className="text-neutral-500">October 28, 2019</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by the president of the Music Education News
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                3rd place - 23rd National Wind Instrument Competition
              </span>
              <span className="text-neutral-500">August 17, 2019</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by the Wind Music Alumni Association at Seoul National University College of Music
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                1st Place - 2019 Semester 1 Hanye Music Competition
              </span>
              <span className="text-neutral-500">June 8, 2019</span>
            </div>
            <div className="text-sm text-neutral-600">
              Awarded by the president of the Korea Arts Evaluation Committee
            </div>
          </div>
        </div>
      </section>

      {/* Performing Experiences Section */}
      <section>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Performing Experiences</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <span className="font-medium">Boston Ballet Next Generation Orchestra</span>
              <span className="text-neutral-500">February - May 2025</span>
            </div>
            <div className="text-sm text-neutral-600">Flute/Piccolo</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">Boston City Showcase Sponsored Solo Recital</span>
              <span className="text-neutral-500">September 25, 2024</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">Continuo Music Goddard House Recital for Senior Citizens</span>
              <span className="text-neutral-500">November 10, 2024</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                2024 Greece Tour: Youth Symphony Orchestra New England Conservatory Preparatory School
              </span>
              <span className="text-neutral-500">June 2024</span>
            </div>
            <div className="text-sm text-neutral-600">Principal Flute/Piccolo</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                Youth Philharmonic Orchestra - New England Conservatory Preparatory School
              </span>
              <span className="text-neutral-500">September 2024 - May 2025</span>
            </div>
            <div className="text-sm text-neutral-600">Principal Flute/Piccolo</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                Youth Symphony - New England Conservatory Preparatory School
              </span>
              <span className="text-neutral-500">September 2023 - June 2024</span>
            </div>
            <div className="text-sm text-neutral-600">Principal Flute/Piccolo</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                Honors Woodwind Quintet - New England Conservatory Preparatory School
              </span>
              <span className="text-neutral-500">September 2023 - May 2024</span>
            </div>
            <div className="text-sm text-neutral-600">Flute</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                Junior Repertory Orchestra - New England Conservatory Preparatory School
              </span>
              <span className="text-neutral-500">September 2022 - April 2023</span>
            </div>
            <div className="text-sm text-neutral-600">Principal Flute</div>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">
                59th Music Education News Competition Winners’ Concert
              </span>
              <span className="text-neutral-500">January 19, 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Education Section */}
      <section>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Musical Education</h3>
        <div className="space-y-2">
          <div>
            <span className="font-medium">
              New England Conservatory of Music, Preparatory School, Boston, MA
            </span>
            <span className="text-neutral-500 block">April 2022 - May 2025</span>
          </div>
          <div>
            <span className="font-medium">
              Yewon School (예원학교), Seoul, South Korea
            </span>
            <span className="text-neutral-500 block">March 2020 - December 2021</span>
            <div className="text-sm text-neutral-600">
              Classical Flute Performance Major
            </div>
          </div>
        </div>
      </section>

      {/* Repertoire Section */}
      <section>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Repertoire</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Concertos</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 mt-2">
              <li><span className="font-medium">Franz Benda:</span> Flute Concerto in E minor</li>
              <li><span className="font-medium">Michel Blavet:</span> Flute Concerto in A minor</li>
              <li><span className="font-medium">François Devienne:</span> Flute Concerto No. 4 in G major; Flute Concerto No. 7 in E minor</li>
              <li><span className="font-medium">Jacques Ibert:</span> Flute Concerto</li>
              <li><span className="font-medium">Saverio Mercadante:</span> Flute Concerto in E minor</li>
              <li><span className="font-medium">Carl Nielsen:</span> Flute Concerto, CNW. 42</li>
              <li><span className="font-medium">Carl Reinecke:</span> Flute Concerto in D major, Op. 283</li>
              <li><span className="font-medium">Carl Stamitz:</span> Flute Concerto in G major, Op. 29</li>
              <li><span className="font-medium">Wolfgang Amadeus Mozart:</span> Flute Concerto No. 1 in G major, KV. 313; Flute Concerto No. 2 in D major, KV. 314</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Flute with Accompaniment</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 mt-2">
              <li><span className="font-medium">Johann Sebastian Bach:</span> Flute Sonata in E♭ major, BWV 1031; Flute Sonata in C major, BWV 1033</li>
              <li><span className="font-medium">Carl Philipp Emanuel Bach:</span> Hamburger Sonata for Flute and Basso Continuo in G major</li>
              <li><span className="font-medium">Eldon Burton:</span> Sonatina for Flute and Piano</li>
              <li><span className="font-medium">Cécile Chaminade:</span> Flute Concertino, Op. 107</li>
              <li><span className="font-medium">Albert Franz Doppler:</span> Andante and Rondo, Op. 25 for Two Flutes and Piano</li>
              <li><span className="font-medium">Gabriel Fauré:</span> Fantaisie, Op. 79</li>
              <li><span className="font-medium">Philippe Gaubert:</span> Fantaisie; Nocturne et Allegro Scherzando</li>
              <li><span className="font-medium">Paul Agricol Genin:</span> Carnaval de Venice, Op. 14</li>
              <li><span className="font-medium">Howard Hanson:</span> Serenade for Solo Flute, Harp, and String Orchestra</li>
              <li><span className="font-medium">Paul Hindemith:</span> Sonata for Flute and Keyboard</li>
              <li><span className="font-medium">Wolfgang Amadeus Mozart:</span> Flute Sonata No. 4 in F major, KV. 13</li>
              <li><span className="font-medium">Robert Muczynski:</span> Sonata for Flute and Piano</li>
              <li><span className="font-medium">Otar Taktakishvili:</span> Sonata in G major for Flute and Piano</li>
              <li><span className="font-medium">Georg Philipp Telemann:</span> Sonata in F minor for Flute and Piano</li>
              <li><span className="font-medium">Paul Taffanel:</span> Andante Pastoral and Scherzettino</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Solo Flute Without Accompaniment</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 mt-2">
              <li><span className="font-medium">Johann Sebastian Bach:</span> Partita in A minor, BWV 1013</li>
              <li><span className="font-medium">Ian Clarke:</span> The Great Train Race</li>
              <li><span className="font-medium">Valerie Coleman:</span> Danza de la Mariposa</li>
              <li><span className="font-medium">Claude Debussy:</span> Syrinx</li>
              <li><span className="font-medium">Gabriel Fauré:</span> Morceau de Concours</li>
              <li><span className="font-medium">Paul Hindemith:</span> Acht Stücke für Flöte Allein</li>
              <li><span className="font-medium">Sigfrid Karg-Elert:</span> Sonata Appassionata, Op. 140</li>
              <li><span className="font-medium">Robert Muczynski:</span> Three Preludes for Solo Flute</li>
              <li><span className="font-medium">Georg Philipp Telemann:</span> Twelve Fantasias for Flute Without Bass</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Chamber Ensembles</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 mt-2">
              <li><span className="font-medium">Jenni Brandon:</span> Five Frogs for Woodwind Quintet</li>
              <li><span className="font-medium">Modest Mussorgsky:</span> Pictures at an Exhibition (Arr. Joachim Linckelmann for Woodwind Quintet)</li>
              <li><span className="font-medium">Anton Reicha:</span> Quintette for Flute, Oboe, Clarinet, Horn, and Bassoon in E minor</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Flute Parts of Orchestral Pieces</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 mt-2">
              <li><span className="font-medium">Adolphe Adam:</span> Excerpts from Giselle</li>
              <li><span className="font-medium">Ludwig van Beethoven:</span> The Creatures of Prometheus Overture</li>
              <li><span className="font-medium">Luigi Cherubini:</span> Overture to Eliza</li>
              <li><span className="font-medium">Aaron Copland:</span> John Henry</li>
              <li><span className="font-medium">Claude Debussy:</span> La Mer</li>
              <li><span className="font-medium">Antonín Dvořák:</span> Symphony No. 8</li>
              <li><span className="font-medium">George Gershwin:</span> An American in Paris</li>
              <li><span className="font-medium">Mikhail Glinka:</span> Ruslan and Ludmila – Overture</li>
              <li><span className="font-medium">Camargo Guarnieri:</span> Abertura Concertante</li>
              <li><span className="font-medium">James P. Johnson:</span> Victory Stride</li>
              <li><span className="font-medium">Aleksandr Krein:</span> Laurencia</li>
              <li><span className="font-medium">Steven Karidoyanes:</span> Yerakina</li>
              <li><span className="font-medium">Quinn Mason:</span> Toast of the Town Overture</li>
              <li><span className="font-medium">Wolfgang Amadeus Mozart:</span> Symphony No. 31 in D major, “Paris”</li>
              <li><span className="font-medium">Sergei Prokofiev:</span> Piano Concerto No. 3</li>
              <li><span className="font-medium">Giacomo Puccini:</span> Nessun Dorma (from Turandot)</li>
              <li><span className="font-medium">Sergei Rachmaninoff:</span> Piano Concerto No. 2</li>
              <li><span className="font-medium">Nikolai Rimsky-Korsakov:</span> The Snow Maiden: Dance of the Tumblers</li>
              <li><span className="font-medium">Gioachino Rossini:</span> La Cenerentola Overture</li>
              <li><span className="font-medium">Camille Saint-Saëns:</span> Rigaudon</li>
              <li><span className="font-medium">Robert Schumann:</span> Symphony No. 1</li>
              <li><span className="font-medium">Jean Sibelius:</span> Violin Concerto in D minor, Op. 47</li>
              <li><span className="font-medium">Bedřich Smetana:</span> Ma Vlast No. 2: The Moldau</li>
              <li><span className="font-medium">William Grant Still:</span> Threnody in Memory of Jan Sibelius</li>
              <li><span className="font-medium">Johan Svendsen:</span> Andante Funèbre</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
function VideoGallery() {
  return (
    <div className="grid gap-8">
      <div className="flex justify-center">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/YskuS02cvYo?si=mVDKhEAqe75gphLz" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/GRLJ8DWT-IU?si=lTS5O491hxz1kk-L" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/t-SRyJskQ4o?si=1QSxIei9_5XayZx2" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/WVuYRpQ_BDI?si=bvJ9xr4te3lpZNyU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default function App() {
  const [albums, setAlbums] = useState([])
  const [performances, setPerformances] = useState([])

  useEffect(() => {
    fetch('/api/discography').then(r => r.json()).then(d => setAlbums(d.albums || []))
    fetch('/api/performances').then(r => r.json()).then(d => setPerformances(d.performances || []))
  }, [])

  return (
    <div className="font-sans">
      <Navbar />

      /* HOME / HERO with rotating images */
      <Section id="home">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Eugene Lee</h1>
            <p className="mt-4 text-lg text-neutral-700">
              Music isn’t a hobby.<br/>
              Collecting coins is a hobby.<br/>
              Being a musician is a way of life.<br/>
              It’s who you are, not merely<br/>
              something you do.
            </p>
            <div className="mt-6 flex justify-center md:justify-start items-center gap-3">
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
            <Carousel images={[
              "/eugenelee1.JPG",
              "/eugenelee2.JPG",
              "/eugenelee3.JPG"
            ]} interval={3000} />
          </div>
        </div>
      </Section>

      {/* BIO */}
      <Section id="bio" title="Bio">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="leading-7 text-neutral-800 text-justify">
              Eugene Lee is a Boston-based flutist and freshman at Yale University who began his classical flute studies at Korea’s Yewon School (예원학교) before moving to Cambridge in 2022. A recent graduate of Cambridge Rindge and Latin School, Eugene served as principal flutist of the New England Conservatory Preparatory School’s Youth Philharmonic Orchestra under Juliano Aniceto and also played in the Honors Woodwind Quintet with coach Gregory Newton. During his time at NEC Prep, he studied privately with Nina Barwell and credits Steven Karidoyanes (YS), Adam Grossman (JRO), and Peter Jarvis (YSO) for his orchestral studies during his underclassmen years.
            </p>
            <p className="leading-7 text-neutral-800 text-justify">
              Recent projects include his debut album Going Solo: 20th-Century Virtuosities for Solo Flute and appearances at the First Church of Cambridge as a soloist of the Boston City Showcase. His honors range from a Massachusetts Governor’s Citation in 2024 to being selected as a National YoungArts Winner in both 2024 and 2025, first prize in the 2023 UMass Amherst Young Artist Awards, and a finalist spot in NPR’s From the Top Learning & Media Lab Fellowship.
            </p>
            <p className="leading-7 text-neutral-800 text-justify">
              Professionally, Eugene has worked at the Center for Astrophysics | Harvard & Smithsonian, as part of its Minor Planet Center's “Planetary Defenders” team, where he spent two semesters and a summer helping refine a mathematical equation to predict asteroid locations and developing a Python program that verified the coordinates of more than 2,500 observatories around the world. Currently, he is independently contracted to Ringle, where he teaches English as a Second Language to students in various professional occupations. He is credited by his high school as the founder of the Rubik's Cube Club, where he led an initiative with his school's chapter of the National Honors Society to start Rubik’s Cube workshops for K–12 students at local youth centers. In the winter of 2025, the club successfully hosted a competition certified by the World Cube Association (WCA), in partnership with Cube New England, gathering over 150 cubers from New England.
            </p>
            <p className="leading-7 text-neutral-800 text-justify">
              At Yale, Eugene is exploring his interests in Computational Linguistics, Architecture, Economics & Math, and Patent Law while continuing to pursue music at the highest level. He hopes to make a profound impact in whichever career path he decides to pursue.
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-white shadow-soft border border-black/5 p-4">
              <h4 className="font-semibold">Highlights</h4>
              <ul className="text-sm mt-2 list-disc pl-5 text-neutral-700">
                <li>Boston-based flutist, Yale '29</li>
                <li>Former principal flutist, NEC Prep Youth Philharmonic Orchestra</li>
                <li>Debut album: Going Solo: 20th-Century Virtuosities for Solo Flute</li>
                <li>National YoungArts Winner (2024 & 2025), MA Governor’s Citation (2024)</li>
                <li>Former Intern and Observatory Coordinate Manager at Center for Astrophysics | Harvard & Smithsonian</li>
                <li>Founder of CRLS Rubik’s Cube Club & WCA-certified competition host</li>
                <li>Exploring Computational Linguistics, Architecture, Economics & Math, and Patent Law at Yale</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white shadow-soft border border-black/5 p-4">
              <h4 className="font-semibold">Press</h4>
              <p className="text-sm text-neutral-700 mt-2">
                Featured by the National Public Radio<br/> "Wartime Flute"&nbsp;
                <a
                  href="https://www.daily-joy.org/video/wartime-flute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 underline"
                >
                  [Click to listen]
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* DISCOGRAPHY */}
      <Section id="discography" title="Discography">
        <div className="space-y-8">
          {/* Static block for the Going Solo album */}
          <div className="flex flex-col items-center mb-6">
            <img 
              src="/Going_Solo_Album_Cover.PNG" 
              alt="Going Solo Album Cover" 
              className="rounded-2xl shadow-lg max-w-xs"
            />
            <h2 className="mt-4 text-xl font-semibold">
              Going Solo: 20th Century Virtuosities for Solo Flute
            </h2>
            <div className="mt-2 text-sm text-neutral-500">
              October 14, 2024
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm font-medium">Available on</span>
              <a 
                href="https://open.spotify.com/album/6RwizD13N0X1XNJVCyE791" 
                target="_blank" rel="noopener noreferrer"
              >
                <FaSpotify className="w-6 h-6 text-green-500" />
              </a>
              <a 
                href="https://www.youtube.com/playlist?list=OLAK5uy_lUG6lmj8KOKkDQjsvs8VwLl8vBetI8rT0" 
                target="_blank" rel="noopener noreferrer"
              >
                <FaYoutube className="w-6 h-6 text-red-500" />
              </a>
              <a 
                href="https://music.amazon.com/albums/B0DK2H8VXD" 
                target="_blank" rel="noopener noreferrer"
              >
                <FaAmazon className="w-6 h-6 text-orange-500" />
              </a>
            </div>
          </div>
          {/* Sorted dynamic albums (if more than one album exists) */}
          {albums && albums.length > 1 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums
                .sort((a, b) => new Date(b.released) - new Date(a.released))
                .map((a, idx) => <AlbumCard key={idx} album={a} />)
              }
            </div>
          )}
        </div>
      </Section>

{/* PERFORMANCES */}
<Section id="performances" title="Performance Highlights">
  <div className="space-y-12">
    {/* Solo Performances */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Solo</h3>
      <div className="space-y-8">
        {/* Performance 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2">
            <iframe 
              width="100%" 
              height="240" 
              src="https://www.youtube.com/embed/YskuS02cvYo?si=mVDKhEAqe75gphLz" 
              title="Sigfrid Karg-Elert: Sonata Appassionata, Op. 140" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium">
              Sigfrid Karg-Elert: Sonata Appassionata, Op. 140
            </p>
              <p className="text-sm text-neutral-600">
              Performed as a guest soloist of the Boston City Showcase<br/>
              September 25, 2024<br/>
              First Church of Cambridge
            </p>
          </div>
        </div>
        {/* Performance 2 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2">
            <iframe 
              width="100%" 
              height="240" 
              src="https://www.youtube.com/embed/GRLJ8DWT-IU?si=lTS5O491hxz1kk-L" 
              title="Carl Nielsen: Flute Concerto, CNW. 42" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium">
              Carl Nielsen: Flute Concerto, CNW. 42
            </p>
          </div>
        </div>
        {/* Performance 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2">
            <iframe 
              width="100%" 
              height="240" 
              src="https://www.youtube.com/embed/t-SRyJskQ4o?si=1QSxIei9_5XayZx2" 
              title="Paul Hindemith: Sonata for Flute and Keyboard" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium">
              Paul Hindemith: Sonata for Flute and Keyboard
            </p>
          </div>
        </div>
        {/* Performance 4 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2">
            <iframe 
              width="100%" 
              height="240" 
              src="https://www.youtube.com/embed/WVuYRpQ_BDI?si=bvJ9xr4te3lpZNyU" 
              title="Ian Clarke: The Great Train Race" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium">
              Ian Clarke: The Great Train Race
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Chamber Performances */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Chamber</h3>
      <div className="space-y-8">
        {/* Chamber Performance 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2">
            <iframe 
              width="100%" 
              height="240" 
              src="https://www.youtube.com/embed/w1NgcwAcpn4" 
              title="Modest Mussorgsky: Pictures at an Exhibition" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium">
              Modest Mussorgsky: Pictures at an Exhibition <br/>
              (arr. for Woodwind Quintet by Joachim Linckelmann)
            </p>
            <p className="text-sm text-neutral-600">
              Performed by the NEC Prep Honors Woodwind Quintet<br/>
              NEC Prep Chamber Music Showcase<br/>
              May 22, 2024<br/>
              Jordan Hall, Boston
            </p>
          </div>
        </div>
        {/* Chamber Performance 2 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2">
            <iframe 
              width="100%" 
              height="240" 
              src="https://www.youtube.com/embed/a9sRL40ADUc" 
              title="François René Gebauer: QUATUOR CONCERTANT" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium">
              François René Gebauer: QUATUOR CONCERTANT<br/>
              für Flöte, Klarinette (Oboe), Fagott und Horn. Opus 27, 2
            </p>
            <p className="text-sm text-neutral-600">
              Performed by the NEC Prep Honors Woodwind Quintet<br/>
              NEC Prep Chamber Music Showcase<br/>
              May 23, 2025<br/>
              Jordan Hall, Boston
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

        {/* RESUME */}
        <Section id="resume" title="Resume">
          <Resume />
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4 rounded-xl bg-white border border-black/5 shadow-soft flex flex-col items-center">
          <h4 className="font-semibold flex items-center mb-2">
            The &nbsp;
            <a 
              href="https://www.instagram.com/promptdiary/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-700 hover:text-neutral-900 flex items-center gap-2"
            >
              <span>@promptdiary</span>
              <span>Project</span>
              <FaInstagram className="w-5 h-5" />
            </a>
          </h4>
          <img 
            src="/logo_prompt_diary.png" 
            alt="PromptDiary Logo" 
            className="h-40 w-auto mx-auto my-4"
          />
          <p className="text-sm text-neutral-700 text-center">
            30 days of prompt engineering
          </p>
            </div>
          </div>
        </Section>

        {/* Footer */}
      <footer className="py-3 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Eugene Lee 
        <img 
          src="/FluteClearImageArtistWebsite.PNG" 
          alt="Flute Logo" 
          className="h-8 w-auto inline" 
        />
      </footer>
    </div>
  )
}