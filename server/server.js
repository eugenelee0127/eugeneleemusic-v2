import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import sirv from "sirv";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// -------- Sample data (edit anytime) --------
const discography = [
  {
    title: "Going Solo: 20th Century Virtuosities for Solo Flute",
    releaseDate: "Available on All Platforms October 14, 2024",
    cover: "/Going_Solo_Album_Cover.PNG",
    links: {
      spotify: "https://open.spotify.com/album/6RwizD13N0X1XNJVCyE791",
      amazon: "https://www.amazon.com/Arthur-Honegger-Danse-Ch%C3%A8vre-H-39/dp/B0DK2H6J4X"
    }
  }
];

const performances = [
  { youtubeId: "YskuS02cvYo", caption: "filler filler filler — performance cut 1." },
  { youtubeId: "GRLJ8DWT-IU", caption: "filler filler filler — performance cut 2." },
  { youtubeId: "t-SRyJskQ4o", caption: "filler filler filler — performance cut 3." },
  { youtubeId: "WVuYRpQ_BDI", caption: "filler filler filler — performance cut 4." },
  { youtubeId: "w1NgcwAcpn4", caption: "filler filler filler — performance cut 5." },
  { youtubeId: "a9sRL40ADUc", caption: "filler filler filler — performance cut 6." }
];

const resume = {
  summary: "filler filler filler filler filler filler filler filler filler filler filler filler filler filler",
  albums: [
    { title: "Going Solo: 20th Century Virtuosities for Solo Flute", released: "Available on All Platforms October 14, 2024" }
  ],
  awards: [
    { title: "Massachusetts Governor's Citation in Recognition", date: "November 25, 2024", by: "Maura T. Healey, Governor of Massachusetts" },
    { title: "Finalist for From the Top's Learning and Media Lab Fellowship", date: "December 4, 2024", by: "National Public Radio" },
    { title: "2025 National YoungArts Award Winner (Classical Music/Flute)", date: "November 26, 2024", by: "YoungArts - The National Foundation for the Advancement of Artists" },
    { title: "2024 National YoungArts Award Winner (Classical Music/Flute)", date: "November 30, 2023", by: "YoungArts - The National Foundation for the Advancement of Artists" },
    { title: "1st Place in Woodwinds & Brass - UMASS Amherst Young Artist Awards 2023", date: "June 10, 2023", by: "UMASS Amherst College of Humanities & Fine Arts Department of Music and Dance" },
    { title: "2nd Place - 21st National Student Music Scholarship Competition of Seoul", date: "March 3, 2021", by: "Venusto Musicians Association" },
    { title: "1st Place - 20th National Student Music Scholarship Competition of Seoul", date: "September 13, 2020", by: "Venusto Musicians Association" },
    { title: "1st Place - 39th Haneum Music Competition", date: "December 28, 2019", by: "Haneum Music Competition" },
    { title: "1st place in Flute & Overall 2nd place in Winds - 19th Music Education News Competition", date: "October 28, 2019", by: "Music Education News" },
    { title: "3rd place - 23rd National Wind Instrument Competition", date: "August 17, 2019", by: "Wind Music Alumni Association at Seoul National University College of Music" },
    { title: "1st Place - 2019 Semester 1 Hanye Music Competition", date: "June 8, 2019", by: "Korea Arts Evaluation Committee" }
  ],
  performing: [
    { role: "Flute/Piccolo", org: "Boston Ballet Next Generation Orchestra", dates: "February - May 2025" },
    { role: "—", org: "Boston City Showcase Sponsored Solo Recital", dates: "September 25, 2024" },
    { role: "—", org: "Continuo Music Goddard House Recital for Senior Citizens", dates: "November 10, 2024" },
    { role: "Principal Flute/Piccolo", org: "2024 Greece Tour: Youth Symphony Orchestra, NEC Prep", dates: "June 2024" },
    { role: "Principal Flute/Piccolo", org: "Youth Philharmonic Orchestra - NEC Prep", dates: "September 2024 - May 2025" },
    { role: "Principal Flute/Piccolo", org: "Youth Symphony - NEC Prep", dates: "September 2023 - June 2024" },
    { role: "Flute", org: "Honors Woodwind Quintet - NEC Prep", dates: "September 2023 - May 2024" },
    { role: "Principal Flute", org: "Junior Repertory Orchestra - NEC Prep", dates: "September 2022 - April 2023" },
    { role: "—", org: "59th Music Education News Competition Winners' Concert", dates: "January 19, 2020" }
  ],
  education: [
    { school: "New England Conservatory of Music, Preparatory School, Boston, MA", dates: "April 2022 - May 2025" },
    { school: "Yewon Arts School, Seoul, South Korea — Classical Flute Performance Major", dates: "March 2020 - December 2021" }
  ],
  repertoireNotes: "See site for detailed lists across Concertos, Flute with Accompaniment, Solo Flute, Chamber, and Orchestral excerpts.",
  rawAppendix: "filler filler filler filler filler filler filler filler filler filler filler filler"
};

// -------- API --------
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.get("/api/discography", (req, res) => res.json({ albums: discography }));
app.get("/api/performances", (req, res) => res.json({ performances }));
app.get("/api/resume", (req, res) => {
  try {
    res.json(resume);
  } catch (err) {
    console.error("Error sending resume:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// -------- Serve production client build if present --------
const clientDist = path.join(__dirname, "../client/dist");
app.use(sirv(clientDist, { single: true, dev: false }));

const port = process.env.PORT || 5173;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));