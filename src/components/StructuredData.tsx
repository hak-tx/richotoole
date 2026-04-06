export function ArtistJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Rich O'Toole",
    url: "https://richotoole.com",
    image: "https://richotoole.com/images/rich_bkgrd_image.webp",
    logo: "https://richotoole.com/images/rich-logo-dark-transparent.png",
    description:
      "Rich O'Toole is a household name in the Texas Country genre. With 75 Million streams and half a million albums sold, he is a Red Dirt country singer with a flair for gleaming arena rock from Houston, Texas.",
    genre: ["Texas Country", "Red Dirt Country", "Country Rock"],
    foundingLocation: {
      "@type": "Place",
      name: "Houston, Texas",
    },
    sameAs: [
      "https://www.facebook.com/RichOTooleMusic",
      "https://www.instagram.com/richotoole",
      "https://x.com/RichOToole",
      "https://www.tiktok.com/@therichotoole",
      "https://www.youtube.com/@RichOTooleMusic",
      "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0",
      "https://music.apple.com/us/artist/rich-otoole/191054733",
      "https://en.wikipedia.org/wiki/Rich_O%27Toole",
      "https://soundcloud.com/richotoole17",
    ],
    member: {
      "@type": "Person",
      name: "Rich O'Toole",
      birthDate: "1983-08-06",
      birthPlace: {
        "@type": "Place",
        name: "Houston, Texas",
      },
    },
    album: [
      {
        "@type": "MusicAlbum",
        name: "God Is a Gentleman",
        datePublished: "2024",
        url: "https://music.apple.com/us/album/god-is-a-gentleman/1846851468",
        image: "https://richotoole.com/images/God_is_a_Gentleman_Album_Cover.webp",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        numTracks: 12,
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "Ghost",
        datePublished: "2024",
        url: "https://music.apple.com/us/album/ghost/1747221673",
        image: "https://richotoole.com/images/GHOST-3000x3000-FINAL.webp",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "New York",
        datePublished: "2020",
        url: "https://music.apple.com/us/album/new-york/1508714327",
        image: "https://richotoole.com/images/RT_New_York.webp",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "American Kid",
        datePublished: "2017",
        url: "https://music.apple.com/us/album/american-kid/1198717567",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "Jaded",
        datePublished: "2014",
        url: "https://music.apple.com/us/album/jaded/883297855",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "In a Minute or 2",
        datePublished: "2008",
        url: "https://music.apple.com/us/album/in-a-minute-or-2/675377522",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "Brightwork",
        datePublished: "2013",
        url: "https://music.apple.com/us/album/brightwork/721230683",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "Kiss of a Liar",
        datePublished: "2010",
        url: "https://music.apple.com/us/album/kiss-of-a-liar/400294152",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
      {
        "@type": "MusicAlbum",
        name: "Seventeen",
        datePublished: "2006",
        url: "https://music.apple.com/us/album/seventeen/191057293",
        byArtist: { "@type": "MusicGroup", name: "Rich O'Toole" },
        albumProductionType: "https://schema.org/StudioAlbum",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rich O'Toole | Official Site",
    url: "https://richotoole.com",
    description:
      "Official website of Rich O'Toole - Texas Country Music Artist from Houston, TX. Tour dates, music, discography, merch, and the Taco Setlist app.",
    publisher: {
      "@type": "MusicGroup",
      name: "Rich O'Toole",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareAppJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Taco Setlist",
    operatingSystem: "iOS",
    applicationCategory: "FoodEstablishmentReservation",
    description:
      "The 1st Taco Review App in Texas. Rate & review tacos everywhere you go. Discover the best tacos in every city — plus get Rich O'Toole's latest tour dates, stream his music, and shop exclusive merch.",
    url: "https://tacosetlist.com",
    downloadUrl:
      "https://apps.apple.com/us/app/taco-setlist/id6760601913",
    author: {
      "@type": "Person",
      name: "Rich O'Toole",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
