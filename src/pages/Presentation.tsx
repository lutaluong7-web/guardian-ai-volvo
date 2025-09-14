import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import PPTSlide1 from "@/components/PPTSlide1";
import PPTSlide2 from "@/components/PPTSlide2";
import PPTSlide3 from "@/components/PPTSlide3";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const slides = [PPTSlide1, PPTSlide2, PPTSlide3];
  const SlideComponent = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          if (currentSlide < slides.length - 1) {
            nextSlide();
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (currentSlide > 0) {
            prevSlide();
          }
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative min-h-screen">
      <SlideComponent />
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-card/90 backdrop-blur-md rounded-full px-6 py-3 shadow-medium border border-border/50">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="hover:bg-primary/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="hover:bg-primary/20"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          <div className="w-px h-6 bg-border/50 mx-2" />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="hover:bg-accent/20"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-card/90 backdrop-blur-md rounded-full px-4 py-2 shadow-soft border border-border/50">
          <span className="text-sm font-medium text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-card/90 backdrop-blur-md rounded-lg px-4 py-3 shadow-soft border border-border/50">
          <p className="text-xs text-muted-foreground">
            使用 ← → 键或点击控件切换页面
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;