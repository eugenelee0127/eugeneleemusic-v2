import { IconSpotify, IconAppleMusic, IconYouTube } from './SocialIcons'
export default function AlbumCard({ album }) {
  const { title, releaseDate, cover, links } = album
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5">
      <div className="aspect-square bg-neutral-200 flex items-center justify-center relative">
        {cover ? <img src={cover} alt={title} className="absolute inset-0 w-full h-full object-cover" onError={(e)=>{e.currentTarget.remove()}}/> : null}
        <div className="text-neutral-400 text-xs p-6 text-center leading-4 select-none">filler filler filler filler filler filler filler</div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-neutral-600 mt-1">{releaseDate}</p>
        <div className="flex items-center gap-2 mt-3 text-sm">
          <span className="text-neutral-500">Listen on</span>
          <a href={links?.spotify || '#'} target="_blank" className="p-2 rounded-full hover:bg-neutral-100" aria-label="Spotify"><IconSpotify className="w-5 h-5"/></a>
          <a href={links?.apple || '#'} target="_blank" className="p-2 rounded-full hover:bg-neutral-100" aria-label="Apple Music"><IconAppleMusic className="w-5 h-5"/></a>
          <a href={links?.ytmusic || '#'} target="_blank" className="p-2 rounded-full hover:bg-neutral-100" aria-label="YouTube Music"><IconYouTube className="w-5 h-5"/></a>
        </div>
      </div>
    </div>
  )
}