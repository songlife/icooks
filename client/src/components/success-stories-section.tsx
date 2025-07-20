import { Star, Building, Users } from "lucide-react";

export default function SuccessStoriesSection() {
  const testimonials = [
    {
      content: "iCooks와의 7년간 파트너십을 통해 우리 센터의 급식 품질이 현저히 향상되었습니다. 전문적인 식단 관리와 정기적인 현장 점검으로 아이들이 더욱 건강하게 성장하고 있어요.",
      name: "김영희 센터장",
      organization: "성북어린이·사회복지급식지원센터"
    },
    {
      content: "체계적인 급식 감수와 영양 교육 프로그램 덕분에 우리 시설 아이들의 식습관이 많이 개선되었습니다. iCooks의 전문성에 깊은 신뢰를 보냅니다.",
      name: "박민수 원장",
      organization: "강남어린이급식지원센터"
    }
  ];

  const partnerships = [
    {
      icon: Building,
      title: "강남어린이급식지원센터",
      description: "강남구 소재 어린이급식시설의 위생 및 영양관리 업무를 담당하며, 체계적인 급식 운영 시스템을 구축하고 있습니다.",
      period: "2020년 ~ 현재",
      bgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    },
    {
      icon: Users,
      title: "사회복지시설 네트워크",
      description: "다양한 사회복지시설과 연계하여 취약계층 어린이들의 영양 상태 개선 및 식습관 교육을 진행하고 있습니다.",
      period: "30+ 기관",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-korean">성공사례</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-korean">
            오랜 경험과 전문성으로 다양한 기관과 성공적인 파트너십을 구축하고 있습니다.
          </p>
        </div>

        {/* Main Partnership Showcase */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-accent-500 mr-2" />
                <span className="text-primary-100 font-medium font-korean">대표 성공사례</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-korean">성북어린이·사회복지급식지원센터</h3>
              <p className="text-primary-100 mb-6 leading-relaxed font-korean">
                2017년부터 7년 연속 신뢰받는 파트너로서, 성북구 내 150여개 어린이급식시설의 
                급식 품질 향상과 영양 관리에 기여하고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold font-inter">7</div>
                  <div className="text-primary-200 text-sm font-korean">년 연속 파트너십</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-inter">150+</div>
                  <div className="text-primary-200 text-sm font-korean">관리 급식시설</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="사회복지시설 외관" 
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Partnership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {partnerships.map((partnership, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${partnership.bgColor} rounded-full flex items-center justify-center mr-3`}>
                  <partnership.icon className={`h-5 w-5 ${partnership.iconColor}`} />
                </div>
                <h4 className="font-bold text-gray-900 font-korean">{partnership.title}</h4>
              </div>
              <p className="text-gray-600 mb-4 font-korean">
                {partnership.description}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-korean">서비스 기간</span>
                <span className="font-medium text-gray-900 font-inter">{partnership.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic font-korean">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900 font-korean">{testimonial.name}</div>
                <div className="text-sm text-gray-500 font-korean">{testimonial.organization}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
