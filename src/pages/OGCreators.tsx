import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OGCreators = () => {
  const teamMembers = [
    {
      name: "Karan Sirdesai",
      role: "Founder & Visionary",
      twitter: "@karansirdesai",
      pfp: "karan_pfp.png"
    },
    {
      name: "Stone Gettings",
      role: "Growth Leader",
      twitter: "@stone_gettings",
      pfp: "stone_pfp.png"
    },
    {
      name: "Shonik",
      role: "Operations Chief",
      twitter: "@Shonik14",
      pfp: "shonik_pfp.png"
    },
    {
      name: "Shlok",
      role: "Core Developer",
      twitter: "@shlokafc",
      pfp: "shlok_pfp.png"
    },
    {
      name: "HapChap",
      role: "Co-founder",
      twitter: "@hapchap88",
      pfp: "hapchap_pfp.png"
    }
  ];

  const communityLegends = [
    {
      name: "Prateek Tripathi",
      twitter: "@prateekhh",
      achievements: "Week 4 & 6 Winner, Onboarding Portal Creator",
      badge: "quest_champion.png",
      pfp: "prateekhh_pfp.png"
    },
    {
      name: "Shayne (0xForthright)",
      twitter: "@shayneRFRM",
      achievements: "Week 4 Champion, Case Study Master",
      badge: "case_study_master.png",
      pfp: "shayneRFRM_pfp.png"
    },
    {
      name: "MNSQ",
      twitter: "@MNSQu",
      achievements: "Week 4 Top 3, Consistent Creator",
      badge: "consistent_creator.png",
      pfp: "MNSQu_pfp.png"
    },
    {
      name: "Viva La Vida",
      twitter: "@vivalavida61ltc",
      achievements: "Week 6 Champion, 5-Year-Old Explainer",
      badge: "educator_badge.png",
      pfp: "vivalavida61ltc_pfp.png"
    },
    {
      name: "Vandyim1 (Web3Kevin)",
      twitter: "@Vandyim1",
      achievements: "Week 7 Top 3, Veri Meme Master",
      badge: "meme_master.png",
      pfp: "Vandyim1_pfp.png"
    },
    {
      name: "Evan",
      twitter: "@evancrypt",
      achievements: "Top 10 Yapper, Educational Content",
      badge: "yapper_legend.png",
      pfp: "evancrypt_pfp.png"
    },
    {
      name: "Ebubechi GMI",
      twitter: "@Ebubechi_GMI",
      achievements: "#52 Yapper Leaderboard",
      badge: "yapper_badge.png",
      pfp: "Ebubechi_GMI_pfp.png"
    },
    {
      name: "zzuuyy8188",
      twitter: "@zzuuyy8188",
      achievements: "Week 7 Winner, Veri Designs",
      badge: "design_winner.png",
      pfp: "zzuuyy8188_pfp.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Mira Legends</h1>
          <p className="text-muted-foreground text-lg">The visionaries and champions who built our realm</p>
        </div>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="mira-card text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <a 
                    href={`https://twitter.com/${member.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm"
                  >
                    {member.twitter}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Legends */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Community Legends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLegends.map((legend, index) => (
              <Card key={index} className="mira-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary mr-4">
                      {legend.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{legend.name}</h3>
                      <a 
                        href={`https://twitter.com/${legend.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex items-center"
                      >
                        {legend.twitter}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{legend.achievements}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">🏆</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OGCreators;