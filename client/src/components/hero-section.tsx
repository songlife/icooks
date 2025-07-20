import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                7년 이상의 신뢰
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-korean">
              어린이와 사회복지시설을 위한
              <span className="text-primary-500 block">전문 급식관리 서비스</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-korean">
              7년 이상의 경험과 노하우로 어린이급식지원센터와 사회복지시설에 
              최적화된 식단 작성 및 감수 업무를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                서비스 문의하기
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                variant="outline"
                className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                포트폴리오 보기
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 font-inter">7+</div>
                <div className="text-sm text-gray-600 font-korean">년 경험</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 font-inter">50+</div>
                <div className="text-sm text-gray-600 font-korean">파트너 시설</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 font-inter">10,000+</div>
                <div className="text-sm text-gray-600 font-korean">아이들 지원</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="어린이들이 건강한 급식을 먹는 모습" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="font-semibold text-gray-900 font-korean">건강한 식단 보장</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
