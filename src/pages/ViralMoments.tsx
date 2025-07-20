import { ArrowLeft, Eye, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ViralMoments = () => {
  const viralTweets = [
    {
      id: 1,
      text: "Learn the truth. Spread lore. Rise in the Realm. $15,000 prize pool",
      image: "viral_launch_tweet.png",
      stats: {
        views: "180,889",
        likes: "433",
        comments: "127"
      },
      type: "Campaign Launch",
      date: "May 8, 2025"
    },
    {
      id: 2,
      text: "we've seen it, now it's time for you to be on it. iykyk",
      image: "viral_iykyk_tweet.png",
      stats: {
        views: "72,564",
        likes: "1,660",
        comments: "301"
      },
      type: "IYKYK Teaser",
      date: "June 11, 2025"
    },
    {
      id: 3,
      text: "What would be your last words? | GMIRA |",
      image: "viral_gmira_meme.png",
      stats: {
        views: "64,395",
        likes: "1,685",
        comments: "442"
      },
      type: "GMIRA Meme",
      date: "June 15, 2025"
    },
    {
      id: 4,
      text: "Take Veri around the world!",
      image: "viral_veri_tour.png",
      stats: {
        views: "42,547",
        likes: "614",
        comments: "189"
      },
      type: "Veri World Tour",
      date: "June 29, 2025"
    }
  ];

  const communityCelebrations = [
    {
      id: 5,
      title: "Sherman's Awards Thread",
      creator: "@shermansensei",
      description: "Personal awards given to outstanding creators",
      image: "sherman_awards_thread.png",
      type: "Community Awards"
    },
    {
      id: 6,
      title: "Yapper Leaderboard Launch",
      description: "0.5% token allocation announcement",
      image: "yapper_leaderboard_launch.png",
      type: "Major Announcement",
      engagement: "Massive community engagement"
    }
  ];

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Viral Moments</h1>
          <p className="text-muted-foreground text-lg">The tweets that took the realm by storm</p>
        </div>

        {/* Viral Tweets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {viralTweets.map((tweet) => (
            <Card key={tweet.id} className="mira-card overflow-hidden">
              <CardContent className="p-0">
                {/* Tweet Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                
                {/* Tweet Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {tweet.type}
                      </span>
                      {tweet.date && (
                        <span className="text-xs text-muted-foreground">{tweet.date}</span>
                      )}
                    </div>
                    <p className="text-lg font-medium leading-relaxed">{tweet.text}</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{formatNumber(tweet.stats.views)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{formatNumber(tweet.stats.likes)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{formatNumber(tweet.stats.comments)}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-primary border-primary/20 hover:bg-primary/10">
                      View Tweet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Celebrations */}
        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Community Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityCelebrations.map((celebration) => (
              <Card key={celebration.id} className="mira-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Celebration Image */}
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🎉</div>
                  </div>
                  
                  {/* Celebration Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                        {celebration.type}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{celebration.title}</h3>
                      {celebration.creator && (
                        <p className="text-primary text-sm font-medium mb-2">by {celebration.creator}</p>
                      )}
                      <p className="text-muted-foreground">{celebration.description}</p>
                      {celebration.engagement && (
                        <p className="text-sm text-green-600 mt-2 font-medium">{celebration.engagement}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Highlights */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-semibold text-lg mb-2">Engagement Boost</h3>
                <p className="text-muted-foreground text-sm">4x higher engagement than typical posts</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">50+ countries worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="font-semibold text-lg mb-2">Viral Impact</h3>
                <p className="text-muted-foreground text-sm">500K+ total impressions</p>
              </CardContent>
            </Card>

            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-lg mb-2">Peak Performance</h3>
                <p className="text-muted-foreground text-sm">1.68K likes on single post</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViralMoments;