import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MessageCircle, Settings, Smartphone, Car, Calendar, Users, Link, Database, Zap } from "lucide-react";

const PPTSlide3 = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="section-badge mb-4">
            第二支柱详解
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            无缝的跨端生态
          </h1>
          <h2 className="text-xl font-semibold text-accent mb-4">The Seamless Ecosystem</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            构建覆盖全场景的统一服务生态，通过"One Agent / One ID"架构，彻底打破手机与车机的壁垒
          </p>
        </div>

        {/* Core Architecture */}
        <div className="space-y-12">
          
          {/* One Agent Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-8">
              <MessageCircle className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-primary">One Agent - 统一智能体</h2>
            </div>
            
            <div className="mb-6">
              <Card className="feature-card border-l-4 border-l-primary">
                <div className="p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    横跨多端的统一智能体，具有统一的品牌人格、对话逻辑、知识体系，可实现对话持续、任务跨端流转
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Remote Communication */}
              <Card className="feature-card">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">远程人车对话</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    用户可在手机上直接与AI对话，询问车辆状态，实现真正的远程交互
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                    <h4 className="font-semibold text-sm mb-2">车辆状态查询</h4>
                    <p className="text-xs text-muted-foreground mb-2">随时随地了解车辆信息</p>
                    <p className="text-xs text-primary italic">"我的车停了几天了，电量还够吗？"</p>
                  </div>
                  
                  <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                    <h4 className="font-semibold text-sm mb-2">远程控制功能</h4>
                    <p className="text-xs text-muted-foreground mb-2">通过语音实现远程车辆控制</p>
                    <p className="text-xs text-primary italic">"帮我开启空调，十分钟后我就到车上"</p>
                  </div>
                </div>
              </Card>

              {/* Cross-platform Task Flow */}
              <Card className="feature-card">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Link className="w-6 h-6 text-accent mr-3" />
                    <h3 className="text-xl font-bold">跨端任务流转</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    任务在不同设备间无缝衔接，真正实现一体化体验
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-l-accent">
                    <h4 className="font-semibold text-sm mb-2">提醒同步</h4>
                    <p className="text-xs text-muted-foreground">车内创建的提醒，自动同步到手机日历</p>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-l-accent">
                    <h4 className="font-semibold text-sm mb-2">场景模式调用</h4>
                    <p className="text-xs text-muted-foreground">手机配置的复杂场景，车内一句话即可调用</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* One ID Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-8">
              <Database className="w-8 h-8 text-accent mr-4" />
              <h2 className="text-2xl font-bold text-accent">One ID - 统一记忆体系</h2>
            </div>
            
            <div className="mb-6">
              <Card className="feature-card border-l-4 border-l-accent">
                <div className="p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    一套连贯共享的长期品牌记忆和知识体系，所有数据与Volvo ID绑定，形成统一的"车主数据库"
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Seamless Journey */}
              <Card className="feature-card">
                <div className="text-center mb-4">
                  <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold">旅程无缝衔接</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">路线同步</h4>
                    <p className="text-xs text-muted-foreground">手机规划的复杂路线，上车后AI自动同步询问</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">媒体续播</h4>
                    <p className="text-xs text-muted-foreground">车上未听完的播客，下车后手机提示继续</p>
                  </div>
                </div>
              </Card>

              {/* Deep Preference Sync */}
              <Card className="feature-card">
                <div className="text-center mb-4">
                  <Settings className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold">深度偏好同步</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">智能决策依据</h4>
                    <p className="text-xs text-muted-foreground">App上的交互历史成为车机AI个性化决策基础</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">全场景偏好</h4>
                    <p className="text-xs text-muted-foreground">座椅温度、路线、娱乐偏好跨端同步</p>
                  </div>
                </div>
              </Card>

              {/* Ecosystem Expansion */}
              <Card className="feature-card">
                <div className="text-center mb-4">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold">生态商业拓展</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">统一服务入口</h4>
                    <p className="text-xs text-muted-foreground">AI Guardian成为车内服务的统一可信入口</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">第三方生态</h4>
                    <p className="text-xs text-muted-foreground">连接第三方服务，创造新的商业价值和用户粘性</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Integration Benefits */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Card className="feature-card bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
              <div className="text-center p-8">
                <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  构建完整的AI生态体验
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  通过One Agent + One ID的创新架构，AI Guardian不仅是车内助手，更是贯穿用户出行生活全链路的个人AI守护者，
                  将沃尔沃的安全与关怀基因延伸到每一个触点，创造前所未有的品牌价值和用户体验。
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex space-x-3">
            <div className="w-4 h-4 rounded-full bg-muted"></div>
            <div className="w-4 h-4 rounded-full bg-muted"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
          </div>
          <p className="text-sm text-muted-foreground ml-4">第 3 页，共 3 页</p>
        </div>
      </div>
    </div>
  );
};

export default PPTSlide3;