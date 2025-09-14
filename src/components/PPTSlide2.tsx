import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Zap, Users, Brain, Link } from "lucide-react";

const PPTSlide2 = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="section-badge mb-4">
            第一支柱详解
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            极致的车内体验
          </h1>
          <p className="text-lg text-muted-foreground">
            The Guardian & Sanctuary - 移动堡垒中的智慧守护者
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="space-y-16">
          
          {/* Section 1: Safety Foundation */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 text-primary mr-4" />
              <h2 className="pillar-header">以『安全』为基石，重定义车载AI的底层逻辑</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="feature-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">主动守护：从被动响应到主动预测</h3>
                    <p className="text-sm text-primary mb-3">Safety Agent（车级安全代理）</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">预测性风险预警</h4>
                    <p className="text-sm text-muted-foreground">
                      融合ADAS、高精地图与V2X数据，在驾驶员视觉盲区外发现风险时，主动发出自然语音警报
                    </p>
                    <p className="text-xs text-primary mt-2 italic">
                      "检测到前方两公里处有事故，建议您提前变道"
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">驾驶员状态监测 (DSMS 2.0)</h4>
                    <p className="text-sm text-muted-foreground">
                      通过情感识别与生物特征监测，能提前发现驾驶员的疲劳、分心甚至情绪波动
                    </p>
                    <p className="text-xs text-primary mt-2 italic">
                      "您看起来有些疲惫，需要来点提神的音乐或导航到最近的休息区吗？"
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="feature-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">情景智能：让每一次交互都服务于安全</h3>
                    <p className="text-sm text-accent mb-3">Task Gating 任务门控机制</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">AI场景化控制</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      用户的同一指令在不同场景下会触发不同的、以安全为先的操作
                    </p>
                    <div className="text-xs space-y-1">
                      <p className="text-accent">"我热了" 高速行驶时 → 仅降低空调温度</p>
                      <p className="text-accent">"我热了" 停车等待时 → 建议开窗通风</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">安全交互设计</h4>
                    <p className="text-sm text-muted-foreground">
                      高速行驶时，若用户想查看长文本信息，AI会智能拒绝并提供替代方案
                    </p>
                    <p className="text-xs text-accent mt-2 italic">
                      "为保证安全，建议您在安全停车后查看"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 2: Human-centric Design */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-8">
              <Heart className="w-8 h-8 text-accent mr-4" />
              <h2 className="pillar-header text-accent">以『人性』为内核，打造超拟人的智慧情感助手</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="feature-card">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-3">品牌化语音人格</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  AI拥有明确的人格设定——语速平和、专业、充满关怀，营造安心、信赖的交流氛围
                </p>
                <div className="space-y-2 text-xs">
                  <p>• 声音复刻：家人专属TTS音色</p>
                  <p>• AI角色陪伴：旅行伙伴、故事大王</p>
                  <p>• AI绘画与游戏：互动娱乐空间</p>
                </div>
              </Card>

              <Card className="feature-card">
                <Brain className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-3">智能成员识别</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  基于声纹/Face ID进行身份认证，为不同成员提供专属体验
                </p>
                <div className="space-y-2 text-xs">
                  <p>• 驾驶员：简洁交互，聚焦安全</p>
                  <p>• 副驾女主人：丰富娱乐生活信息</p>
                  <p>• 后排儿童：故事与益智游戏</p>
                </div>
              </Card>

              <Card className="feature-card">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-3">个性化记忆关怀</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  基于长期记忆，提供超越工具属性的主动关怀
                </p>
                <div className="space-y-2 text-xs">
                  <p>• 记住车主生日或纪念日</p>
                  <p>• 维保历史与驾驶行为分析</p>
                  <p>• 主动节能建议与保养提醒</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 3: Seamless Experience */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-8">
              <Link className="w-8 h-8 text-primary mr-4" />
              <h2 className="pillar-header">以『无缝』为体验，构建覆盖全场景的统一服务生态</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="feature-card border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">One Agent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  一个横跨多端的统一智能体，具有统一的品牌人格、对话逻辑、知识体系
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm">远程人车对话</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      手机直接与AI对话，询问车辆状态
                    </p>
                    <p className="text-xs text-primary mt-2 italic">
                      "我的车停了几天了，电量还够吗？"
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm">跨端任务流转</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      车内创建的提醒，自动同步到手机日历
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="feature-card border-l-4 border-l-accent">
                <h3 className="text-xl font-bold mb-4 text-accent">One ID</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  一套连贯共享的长期品牌记忆和知识体系，与Volvo ID绑定
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm">旅程无缝衔接</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      手机规划的路线，上车后AI自动同步询问
                    </p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm">深度偏好同步</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      App上的设置，成为车机AI决策的依据
                    </p>
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