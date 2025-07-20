import { ArrowLeft, Eye, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ViralMoments = () => {
  const viralTweets = [
    {
      id: 1,
      text: "Learn the truth. Spread lore. Rise in the Realm.",
      image: "viral_launch.png",
      stats: {
        views: "180,889",
        likes: "433",
        comments: "127"
      },
      type: "Campaign Launch"
    },
    {
      id: 2,
      text: "we've seen it, now it's time for you to be on it. iykyk",
      image: "viral_teaser.png",
      stats: {
        views: "72,564",
        likes: "1,660",
        comments: "301"
      },
      type: "Mysterious Teaser"
    },
    {
      id: 3,
      text: "What would be your last words? | GMIRA |",
      image: "viral_gmira.png",
      stats: {
        views: "64,395",
        likes: "1,685",
        comments: "442"
      },
      type: "GMIRA Meme"
    },
    {
      id: 4,
      text: "Take Veri around the world!",
      image: "viral_veri.png",
      stats: {
        views: "42,547",
        likes: "614",
        comments: "189"
      },
      type: "Veri World Tour"
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
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {tweet.type}
                    </span>
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

        {/* Community Highlights */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Community Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-semibold text-lg mb-2">Engagement Boost</h3>
                <p className="text-muted-foreground text-sm">Campaign tweets averaged 4x higher engagement than typical posts</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">Content reached users across 50+ countries worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="font-semibold text-lg mb-2">Viral Impact</h3>
                <p className="text-muted-foreground text-sm">Generated 500K+ total impressions during campaign period</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViralMoments;