import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiCarHero from "@/assets/ai-car-hero.jpg";

const PPTSlide1 = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aiCarHero})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-16 min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="section-badge mb-6">
            沃尔沃 AI 语音助理
          </Badge>
          <h1 className="slide-title mb-8">
            One Agent, One ID
          </h1>
          <p className="slide-subtitle max-w-4xl mx-auto">
            融合前沿AI技术与生态服务，将沃尔沃"安全与关怀"的品牌基因注入其中，
            <br />
            打造一个有记忆、可成长、有情感、会关怀的AI语音助理
          </p>
        </div>

        {/* Core Concept */}
        <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Foundation */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="feature-card">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-accent mb-6">
                  <span className="text-3xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">基石</h3>
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Foundational Intelligence
                </h4>
                <h5 className="text-lg font-medium text-primary mb-3">统一智能大脑</h5>
                <p className="text-muted-foreground leading-relaxed">
                  基于混合式大模型架构和多模态感知能力，融合longchain等能力，
                  为AI Guardian提供了强大的理解、推理和执行能力。
                </p>
              </div>
            </Card>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Card className="feature-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-foreground">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">大支柱</h3>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    第一支柱：极致的车内体验
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    The Guardian & Sanctuary
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    将车内空间打造成一个极致安全、智慧并充满情感连接的移动堡垒，
                    深度融合沃尔沃的品牌DNA。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="feature-card border-dashed border-primary/30">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-muted flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground">+</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-3 text-muted-foreground">
                    第二支柱：即将揭晓
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    更多创新功能将在下一页详细展示...
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation Indicator */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex space-x-3">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="w-4 h-4 rounded-full bg-muted"></div>
          </div>
          <p className="text-sm text-muted-foreground ml-4">第 1 页，共 2 页</p>
        </div>
      </div>
    </div>
  );
};

export default PPTSlide1;