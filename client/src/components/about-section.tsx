import { Calendar, Handshake, Trophy } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    {
      icon: Calendar,
      title: "2017년 설립",
      description: "어린이 급식 전문 서비스 시작",
      bgColor: "bg-primary-500"
    },
    {
      icon: Handshake,
      title: "7년 연속 파트너십",
      description: "성북어린이·사회복지급식지원센터와 장기 협력",
      bgColor: "bg-accent-500"
    },
    {
      icon: Trophy,
      title: "50+ 파트너 시설",
      description: "현재 강남어린이급식지원센터 포함 다수 기관과 협력",
      bgColor: "bg-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-korean">
              7년간의 신뢰와 경험으로 <br />
              <span className="text-primary-500">더 나은 급식 환경을 만듭니다</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-korean">
              iCooks는 2017년부터 어린이급식지원센터와 사회복지시설의 급식 품질 향상을 위해 
              전문적인 서비스를 제공해왔습니다. 우리의 경험과 노하우는 수많은 아이들의 
              건강한 성장에 기여하고 있습니다.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-korean">{achievement.title}</h4>
                    <p className="text-gray-600 font-korean">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="영양사가 급식 관련 상담을 하는 모습" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 font-inter">7</div>
                  <div className="text-xs text-gray-600 font-korean">년 경험</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 font-inter">50+</div>
                  <div className="text-xs text-gray-600 font-korean">파트너</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
