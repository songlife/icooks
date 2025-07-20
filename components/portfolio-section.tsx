import Image from "next/image";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "디지털 식단 관리",
      description: "효율적인 식단 작성 및 관리 시스템"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "현장 감수 서비스",
      description: "정기적인 현장 방문 및 품질 점검"
    },
    {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "영양 교육 프로그램",
      description: "아이들을 위한 맞춤형 영양 교육"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "전문 컨설팅",
      description: "시설 운영 개선 및 맞춤 솔루션"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-korean">서비스 포트폴리오</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-korean">
            다양한 현장에서의 경험과 성과를 통해 검증된 전문 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image 
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2 font-korean">{item.title}</h4>
                <p className="text-sm text-gray-600 font-korean">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}