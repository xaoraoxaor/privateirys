import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuestWinners = () => {
  const weeklyWinners = [
    {
      week: 1,
      title: "Visualize the Future",
      winner: {
        name: "WEB3KING10",
        twitter: "@WEB3KING10",
        submission: "Mira Mission Infographic",
        prize: "$150 USDC",
        pfp: "WEB3KING10_pfp.png"
      }
    },
    {
      week: 4,
      title: "Hallucination Showdown",
      winners: [
        { place: "1st", name: "Shayne", twitter: "@shayneRFRM", pfp: "shayneRFRM_pfp.png" },
        { place: "2nd", name: "Prateek Tripathi", twitter: "@prateekhh", pfp: "prateekhh_pfp.png" },
        { place: "3rd", name: "MNSQ", twitter: "@MNSQu", pfp: "MNSQu_pfp.png" }
      ],
      runnersUp: [
        "onchaingodson", "greenhandwe", "LamChanThong", "TheAvatarHQ", 
        "Jennychuks7_71", "vishleshak89", "long43442", "ponzenomic", 
        "hgkim5055"
      ]
    },
    {
      week: 6,
      title: "Consensus for 5-Year-Olds",
      winners: [
        { place: "1st", name: "Viva La Vida", twitter: "@vivalavida61ltc", pfp: "vivalavida61ltc_pfp.png" },
        { place: "2nd", name: "Paola", twitter: "@Paola1371385", pfp: "Paola1371385_pfp.png" },
        { place: "3rd", name: "Prateek Tripathi", twitter: "@prateekhh", pfp: "prateekhh_pfp.png" }
      ]
    },
    {
      week: 7,
      title: "Veri Mascot Designs",
      winners: [
        { place: "1st", name: "zzuuyy8188", twitter: "@zzuuyy8188", pfp: "zzuuyy8188_pfp.png" },
        { place: "2nd", name: "718crncy", twitter: "@718crncy", pfp: "718crncy_pfp.png" },
        { place: "3rd", name: "Vandyim1", twitter: "@Vandyim1", pfp: "Vandyim1_pfp.png" }
      ]
    }
  ];

  const getPlaceIcon = (place: string) => {
    switch(place) {
      case "1st": return <Trophy className="h-5 w-5 text-yellow-500" />;
      case "2nd": return <Medal className="h-5 w-5 text-gray-400" />;
      case "3rd": return <Award className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
  };

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
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Quest Champions</h1>
          <p className="text-muted-foreground text-lg">Celebrating the heroes of each weekly challenge</p>
        </div>

        {/* Weekly Breakdown */}
        <div className="space-y-8">
          {weeklyWinners.map((week) => (
            <Card key={week.week} className="mira-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-primary font-space-mono">WEEK {week.week}</span>
                  <span className="text-foreground">{week.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {week.winner ? (
                  // Single winner format (Week 1)
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary">
                      {week.winner.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <h3 className="font-semibold text-lg">{week.winner.name}</h3>
                        <span className="text-primary text-sm">{week.winner.twitter}</span>
                      </div>
                      <p className="text-muted-foreground mb-1">{week.winner.submission}</p>
                      <span className="text-sm font-semibold text-primary">{week.winner.prize}</span>
                    </div>
                  </div>
                ) : (
                  // Multiple winners format
                  <div className="space-y-4">
                    {week.winners && (
                      <div className="space-y-3">
                        {week.winners.map((winner, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary">
                              {winner.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="flex-1 flex items-center gap-3">
                              {getPlaceIcon(winner.place)}
                              <span className="font-semibold">{winner.name}</span>
                              <span className="text-primary text-sm">{winner.twitter}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {week.runnersUp && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Runners-up:</h4>
                        <div className="flex flex-wrap gap-2">
                          {week.runnersUp.map((runner, index) => (
                            <span key={index} className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                              @{runner}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestWinners;