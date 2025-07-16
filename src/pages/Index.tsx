import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Nouira Mariem
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
          Passionate Web Developer
        </p>
        
        <Button 
          variant="hero" 
          size="lg" 
          className="animate-fade-in-delay"
        >
          View My Projects
        </Button>
      </div>
    </div>
  );
};

export default Index;
