import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, TextShimmer, ScrollButton } from '../components/ui';

// Import game mode icons
const gameModeData = [
  {
    title: "Battle Mode",
    subtitle: "1v1 Strategic Duels",
    description: "Send prompts to break into each other's AI vaults, with custom system instructions to balance difficulty.",
    colorClass: "game-mode-battle",
    iconBg: "bg-[#0078D7]/10",
    textColor: "text-[#0078D7]",
    type: "battle",
    features: [
      "1v1 Format",
      "Custom AI Instructions",
      "Wallet Tracking",
      "Balanced Difficulty"
    ],
    playerCount: "2 Players"
  },
  {
    title: "Boss Battle Raid Mode",
    subtitle: "Players vs Creator Vault",
    description: "Challenge player-created vaults with increasing attempt fees and rewards. Creators earn from fees based on vault difficulty.",
    colorClass: "game-mode-raid",
    iconBg: "bg-[#FFB900]/10",
    textColor: "text-[#FFB900]",
    type: "raid",
    features: [
      "Unlimited Players",
      "Rising Stakes",
      "Creator Rewards",
      "Difficulty Balance"
    ],
    playerCount: "Unlimited"
  },
  {
    title: "Mystery Mode",
    subtitle: "Secret Protection",
    description: "Keep your AI vault's secret safe while trying to extract opponents' secrets. Last player with protected secret wins.",
    colorClass: "game-mode-mystery",
    iconBg: "bg-[#E74856]/10",
    textColor: "text-[#E74856]",
    type: "mystery",
    features: [
      "Pattern Recognition",
      "Secret Protection",
      "Custom AI Instructions",
      "Strategic Prompting"
    ],
    playerCount: "2+ Players"
  },
  {
    title: "Love Mode",
    subtitle: "AI Romance Competition",
    description: "Compete to make your opponent's AI say 'I love you' using creative prompts while protecting your own AI. Good Luck.",
    colorClass: "game-mode-love",
    iconBg: "bg-[#10893E]/10",
    textColor: "text-[#10893E]",
    type: "love",
    features: [
      "Sentiment Analysis",
      "Pattern Matching",
      "Creative Prompting",
      "Custom AI Defenses"
    ],
    playerCount: "2+ Players"
  }
];

const howToPlaySteps = [
  {
    title: "Connect Your Wallet",
    description: "Link your Sonic blockchain wallet to access the platform. Currently for testing purposes only, no tokens required yet."
  },
  {
    title: "Choose a Game Mode",
    description: "Select from one of our four AI challenge modes, each with different objectives and difficulty levels."
  },
  {
    title: "Test in Single-Player",
    description: "Currently all games are available in single-player mode where you can challenge the AI directly."
  },
  {
    title: "Try Different Approaches",
    description: "Experiment with different prompts and strategies to discover what works best against each AI security system."
  },
  {
    title: "Check Back For Updates",
    description: "Multiplayer functionality, token rewards, and prediction markets are coming soon. Follow our development progress."
  }
];

interface GameModeCardProps {
  mode: typeof gameModeData[0];
  index: number;
}

const GameModeCard: React.FC<GameModeCardProps> = ({ mode }) => {
  return (
    <Link to={`/game/${mode.type}`}>
      <Card className={`
        game-mode-card ${mode.colorClass}
        overflow-hidden border-2 p-6 h-full
        transform transition-all duration-300
        backdrop-blur-sm backdrop-filter
        hover:scale-105 hover:shadow-xl
        motion-safe:motion-scale-in-[0.96]
        motion-safe:motion-duration-[0.5s]
      `}>
        <div className="flex flex-col h-full relative">
          <div className="mb-6 relative">
            <div className={`
              w-16 h-16 rounded-xl ${mode.iconBg}
              flex items-center justify-center
              transform transition-transform duration-300
              group-hover:scale-110 relative z-10
            `}>
              {/* Icon placeholder - replace with actual icon component */}
              <div className="w-12 h-12 bg-current opacity-50" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className={`text-2xl font-bold font-mono relative z-10 ${mode.textColor}`}>
              {mode.title}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground">{mode.subtitle}</p>
            <p className="text-muted-foreground flex-grow font-mono relative z-10">
              {mode.description}
            </p>
            
            <div className="pt-4 border-t border-primary/10">
              <div className="text-sm font-semibold mb-2">{mode.playerCount}</div>
              <div className="grid grid-cols-2 gap-2">
                {mode.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-xs text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${mode.iconBg} mr-2`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm motion-safe:motion-opacity-in-[0%] motion-safe:motion-duration-[1s]">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        {/* Icon placeholder */}
        <div className="w-8 h-8 bg-current opacity-50" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const GameModesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col items-center justify-center z-10 motion-safe:motion-scale-in-[0.9] motion-safe:motion-duration-[1s]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Baultro
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-center">
            Let's break the AI.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 py-7 px-8 text-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all">
              Connect Wallet
            </Button>
            <Link to="/game">
              <Button size="lg" variant="outline" className="gap-2 py-7 px-8 text-lg border-2 hover:bg-slate-800/50 shadow-lg hover:shadow-xl transition-all">
                Game Modes
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center motion-safe:motion-opacity-in-[0%] motion-safe:motion-duration-[2s]">
          <ScrollButton />
        </div>
      </section>

      {/* Game Modes Section */}
      <section id="game-modes" className="py-16 bg-black/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TextShimmer className="text-4xl font-bold mb-4">
              Game Modes
            </TextShimmer>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Currently available in single-player mode, with multiplayer features coming soon. Test your skills against various AI security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {gameModeData.map((mode, index) => (
              <GameModeCard key={mode.type} mode={mode} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TextShimmer className="text-3xl md:text-4xl font-bold mb-4">
              How To Play
            </TextShimmer>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with Baultro in a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howToPlaySteps.slice(0, 3).map((step, index) => (
              <FeatureCard
                key={index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {howToPlaySteps.slice(3, 5).map((step, index) => (
              <FeatureCard
                key={index + 3}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Loading Baultro</h3>
            <p className="text-muted-foreground">Connecting to Sonic Blaze network...</p>
          </div>
        </div>
      )}
    </div>
  );
};