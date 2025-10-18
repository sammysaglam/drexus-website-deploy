import leadershipData from "../../data/leadership.json";

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  linkedin: string;
  bio: string;
  expertise: string[];
  education: string;
  order: number;
}

export function getAllLeaders(): LeadershipMember[] {
  return leadershipData.leadership.sort((a, b) => a.order - b.order) as LeadershipMember[];
}

export function getLeaderById(id: string): LeadershipMember | undefined {
  return leadershipData.leadership.find((leader) => leader.id === id) as
    | LeadershipMember
    | undefined;
}

export function getLeadersByTitle(titleKeyword: string): LeadershipMember[] {
  return leadershipData.leadership.filter((leader) =>
    leader.title.toLowerCase().includes(titleKeyword.toLowerCase())
  ) as LeadershipMember[];
}

export function getFounders(): LeadershipMember[] {
  return leadershipData.leadership.filter((leader) =>
    leader.title.toLowerCase().includes("founder")
  ) as LeadershipMember[];
}

export function getExecutiveTeam(): LeadershipMember[] {
  return leadershipData.leadership.filter(
    (leader) =>
      leader.title.toLowerCase().includes("ceo") ||
      leader.title.toLowerCase().includes("coo") ||
      leader.title.toLowerCase().includes("cto") ||
      leader.title.toLowerCase().includes("cfo")
  ) as LeadershipMember[];
}

export function getLeadershipSchema(leader: LeadershipMember, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: leader.name,
    jobTitle: leader.title,
    image: `${baseUrl}${leader.photo}`,
    url: leader.linkedin,
    description: leader.bio,
    alumniOf: {
      "@type": "Organization",
      name: leader.education.split(",")[1]?.trim() || leader.education,
    },
    memberOf: {
      "@type": "Organization",
      name: "Drexus",
      url: baseUrl,
    },
    knowsAbout: leader.expertise,
  };
}
