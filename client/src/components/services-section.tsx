import { ClipboardList, UserCheck, GraduationCap, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ClipboardList,
      title: "식단 작성 및 계획",
      description: "영양학적으로 균형잡힌 식단을 연령별, 시설별 특성에 맞게 작성하고 계절별 식재료를 활용한 다양한 메뉴를 제공합니다.",
      features: ["연령별 맞춤 영양 설계", "계절별 식재료 활용", "알레르기 대응 메뉴"],
      bgColor: "bg-primary-100",
      iconColor: "text-primary-500"
    },
    {
      icon: UserCheck,
      title: "급식 감수 업무",
      description: "전문 영양사가 직접 현장을 방문하여 급식 품질을 점검하고 위생 관리 및 조리 과정을 철저히 감독합니다.",
      features: ["현장 방문 점검", "위생 관리 감독", "품질 개선 컨설팅"],
      bgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    },
    {
      icon: GraduationCap,
      title: "영양 교육 및 컨설팅",
      description: "아이들의 올바른 식습관 형성을 위한 영양 교육과 시설 운영진을 대상으로 한 전문 컨설팅을 제공합니다.",
      features: ["어린이 영양 교육", "운영진 교육 프로그램", "급식 운영 개선안"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-korean">전문 서비스</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-korean">
            어린이와 사회복지시설의 특별한 요구사항을 충족하는 맞춤형 급식관리 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className={`${service.iconColor} h-6 w-6`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-korean">{service.title}</h3>
              <p className="text-gray-600 mb-4 font-korean">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-korean">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
