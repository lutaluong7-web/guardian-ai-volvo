import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Brain, Gamepad2, Users, Mic, Eye } from "lucide-react";

const PPTSlide2 = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="section-badge mb-4">
            第一支柱详解
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            极致的车内体验
          </h1>
          <h2 className="text-xl font-semibold text-accent mb-4">The Guardian & Sanctuary</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            将车内空间打造成一个极致安全、智慧并充满情感连接的移动堡垒，深度融合沃尔沃的品牌DNA
          </p>
        </div>

        {/* Three Core Components */}
        <div className="space-y-10">
          
          {/* 1. Safety Foundation */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-primary">1. 以『安全』为基石，重定义车载AI的底层逻辑</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Active Protection */}
              <Card className="feature-card">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    主动守护：从被动响应到主动预测
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Safety Agent（车级安全代理）是拥有最高权限的本地常驻模块，深度集成车辆感知与控制系统，真正防患于未然。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                    <h4 className="font-semibold text-sm mb-2">预测性风险预警</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      融合ADAS、高精地图与V2X数据，在驾驶员视觉盲区外发现风险
                    </p>
                    <p className="text-xs text-primary italic">
                      "检测到前方两公里处有事故，建议您提前变道"
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                    <h4 className="font-semibold text-sm mb-2">驾驶员状态监测 (DSMS 2.0)</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      情感识别与生物特征监测，提前发现疲劳、分心或情绪波动
                    </p>
                    <p className="text-xs text-primary italic">
                      "您看起来有些疲惫，需要来点提神的音乐或导航到最近的休息区吗？"
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contextual Intelligence */}
              <Card className="feature-card">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Brain className="w-6 h-6 text-accent mr-3" />
                    情景智能：让每一次交互都服务于安全
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    超越"指令执行"，深刻理解驾驶场景、环境和用户意图，做出最合理的安全判断。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-l-accent">
                    <h4 className="font-semibold text-sm mb-2">AI场景化控制</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      同一指令在不同场景下触发不同的、以安全为先的操作
                    </p>
                    <p className="text-xs text-accent italic">
                      "我热了" → 高速行驶时仅降低空调温度；停车时建议开窗
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-l-accent">
                    <h4 className="font-semibold text-sm mb-2">任务门控 (Task Gating)</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      基于车速和DMS数据，自动对高风险指令进行降级或拒绝
                    </p>
                    <p className="text-xs text-accent italic">
                      "当前行驶条件不适合执行该操作，建议安全停车后完成"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* 2. Human-centric Core */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-accent mr-4" />
              <h2 className="text-2xl font-bold text-accent">2. 以『人性』为内核，打造超拟人的智慧情感助手</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Voice & Personality */}
              <Card className="feature-card">
                <div className="text-center mb-4">
                  <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold">超拟人语音交互</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">品牌化语音人格</h4>
                    <p className="text-xs text-muted-foreground">语速平和、专业、充满关怀，营造安心信赖的交流氛围</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">声音复刻技术</h4>
                    <p className="text-xs text-muted-foreground">家人可录制专属TTS音色，让提醒导航充满爱意</p>
                  </div>
                </div>
              </Card>

              {/* AI Companions */}
              <Card className="feature-card">
                <div className="text-center mb-4">
                  <Gamepad2 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold">AI角色陪伴</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">多重身份切换</h4>
                    <p className="text-xs text-muted-foreground">旅行伙伴、故事大王、历史学家等不同角色陪伴</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">AI互动游戏</h4>
                    <p className="text-xs text-muted-foreground">成语接龙、知识问答，将车内变为移动亲子娱乐空间</p>
                  </div>
                </div>
              </Card>

              {/* Member Recognition */}
              <Card className="feature-card">
                <div className="text-center mb-4">
                  <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold">智能成员识别</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">声纹/Face ID认证</h4>
                    <p className="text-xs text-muted-foreground">识别不同成员，提供专属个性化体验</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">个性化记忆关怀</h4>
                    <p className="text-xs text-muted-foreground">记住生日纪念日，维保历史，主动关怀提醒</p>
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
            <div className="w-4 h-4 rounded-full bg-muted"></div>
          </div>
          <p className="text-sm text-muted-foreground ml-4">第 2 页，共 3 页</p>
        </div>
      </div>
    </div>
  );
};

export default PPTSlide2;