export type PublicProfile = {
  handle: string;
  displayName: string;
  bio: string;
  avatar: {
    initials: string;
    from: string;
    to: string;
  };
  featuredCovers: Array<{
    title: string;
    caption: string;
    colors: {
      from: string;
      to: string;
    };
  }>;
};

const publicProfiles: PublicProfile[] = [
  {
    handle: "yoshiki",
    displayName: "Yoshiki",
    bio: "静かな夜に合うジャケットと、気分が変わる瞬間の一枚を集めています。",
    avatar: {
      initials: "YO",
      from: "#0f172a",
      to: "#fb7185",
    },
    featuredCovers: [
      {
        title: "Night Motion",
        caption: "late drive set",
        colors: {
          from: "#111827",
          to: "#f43f5e",
        },
      },
      {
        title: "Soft Light",
        caption: "morning repeat",
        colors: {
          from: "#0f766e",
          to: "#93c5fd",
        },
      },
      {
        title: "Slow Rain",
        caption: "rainy day loop",
        colors: {
          from: "#4c1d95",
          to: "#f59e0b",
        },
      },
    ],
  },
  {
    handle: "mio",
    displayName: "Mio",
    bio: "透明感のあるポップスと、余白のきれいなアートワークが好きです。",
    avatar: {
      initials: "MI",
      from: "#1d4ed8",
      to: "#2dd4bf",
    },
    featuredCovers: [
      {
        title: "Sky Room",
        caption: "city pop edits",
        colors: {
          from: "#2563eb",
          to: "#a5f3fc",
        },
      },
      {
        title: "Mint Echo",
        caption: "clear vocals",
        colors: {
          from: "#0f766e",
          to: "#86efac",
        },
      },
      {
        title: "Glass Hearts",
        caption: "clean synth lines",
        colors: {
          from: "#7c3aed",
          to: "#f9a8d4",
        },
      },
    ],
  },
  {
    handle: "ren",
    displayName: "Ren",
    bio: "インディー、ローファイ、曇りの日のプレイリストをプロフィールに並べています。",
    avatar: {
      initials: "RE",
      from: "#7c2d12",
      to: "#f59e0b",
    },
    featuredCovers: [
      {
        title: "Warm Tape",
        caption: "lo-fi stack",
        colors: {
          from: "#7c2d12",
          to: "#f59e0b",
        },
      },
      {
        title: "Cloud Signal",
        caption: "soft indie picks",
        colors: {
          from: "#334155",
          to: "#cbd5e1",
        },
      },
      {
        title: "Paper Window",
        caption: "weekend blend",
        colors: {
          from: "#14532d",
          to: "#bef264",
        },
      },
    ],
  },
];

export async function listPublicProfiles(): Promise<PublicProfile[]> {
  return publicProfiles;
}

export async function listPublicProfileHandles(): Promise<string[]> {
  return publicProfiles.map((profile) => profile.handle);
}

export async function getPublicProfileByHandle(
  handle: string
): Promise<PublicProfile | undefined> {
  return publicProfiles.find(
    (profile) => profile.handle.toLowerCase() === handle.toLowerCase()
  );
}
