import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Zap, Users, Brain, Link, Globe, Smartphone, Car, MessageCircle, Calendar, Settings } from "lucide-react";

const PPTSlide2 = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <Badge className="section-badge mb-4">
            两大支柱详解
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            构建完整的AI生态体验
          </h1>
          <p className="text-lg text-muted-foreground">
            从车内守护到跨端生态，打造全链路智慧出行
          </p>
        </div>

        {/* Two Main Pillars */}
        <div className="space-y-12">
          
          {/* First Pillar: Guardian & Sanctuary */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <Shield className="w-7 h-7 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">第一支柱：极致的车内体验 (The Guardian & Sanctuary)</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Safety Foundation */}
              <Card className="feature-card">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">安全基石</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">主动守护</h4>
                    <p className="text-xs text-muted-foreground">Safety Agent预测性风险预警，DSMS 2.0状态监测</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">情景智能</h4>
                    <p className="text-xs text-muted-foreground">Task Gating机制，场景化AI控制，安全优先交互</p>
                  </div>
                </div>
              </Card>

              {/* Human-centric */}
              <Card className="feature-card">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-lg font-bold">人性内核</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">拟人语音人格</h4>
                    <p className="text-xs text-muted-foreground">声音复刻，AI角色陪伴，互动游戏</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">智能成员识别</h4>
                    <p className="text-xs text-muted-foreground">声纹/Face ID，专属体验，个性化关怀</p>
                  </div>
                </div>
              </Card>

              {/* Emotional Intelligence */}
              <Card className="feature-card">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">情感智能</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">记忆与关怀</h4>
                    <p className="text-xs text-muted-foreground">生日纪念日，维保历史，主动关怀提醒</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">AI生态服务</h4>
                    <p className="text-xs text-muted-foreground">系统AI入口，自然语音导航，多意图任务</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Second Pillar: Seamless Ecosystem */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <Globe className="w-7 h-7 text-accent mr-3" />
              <h2 className="text-2xl font-bold text-accent">第二支柱：无缝的跨端生态 (The Seamless Ecosystem)</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* One Agent */}
              <Card className="feature-card border-l-4 border-l-primary">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-primary">One Agent - 统一智能体</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  横跨多端的统一智能体，具有统一的品牌人格、对话逻辑、知识体系，可实现对话持续、任务跨端流转
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Smartphone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">远程人车对话</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        用户可在手机上直接与AI对话，询问车辆状态
                      </p>
                      <p className="text-xs text-primary italic">
                        "我的车停了几天了，电量还够吗？"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Link className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">跨端任务流转</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        车内创建的提醒，会自动同步到手机日历；手机上配置好的复杂场景模式，在车内一句话即可调用
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* One ID */}
              <Card className="feature-card border-l-4 border-l-accent">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-accent">One ID - 统一记忆体系</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  一套连贯共享的长期品牌记忆和知识体系，所有数据与Volvo ID绑定，形成统一的"车主数据库"
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">旅程无缝衔接</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        在手机上规划好的复杂路线，上车后AI会自动同步并询问是否出发；车上没听完的播客，下车后手机会提示继续收听
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">深度偏好同步</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        在App上、甚至对AI说过的话，都会成为车机AI决策的依据，实现真正个性化的智能服务
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">生态商业拓展</h4>
                      <p className="text-xs text-muted-foreground">
                        将AI Guardian打造成车内服务的统一、可信入口，连接第三方服务，创造新的商业价值
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex space-x-3">
            <div className="w-4 h-4 rounded-full bg-muted"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
          </div>
          <p className="text-sm text-muted-foreground ml-4">第 2 页，共 2 页</p>
        </div>
      </div>
    </div>
  );
};

export default PPTSlide2;