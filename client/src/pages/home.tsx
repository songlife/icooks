import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Shield, 
  Award, 
  ChefHat, 
  Heart, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-900">
      {/* SEO Meta Tags - simulated for Vite */}
      <div className="hidden">
        <title>iCooks 아이쿡스 - 전문 급식관리 서비스 | 7년 이상의 신뢰받는 어린이 급식지원센터</title>
        <meta name="description" content="iCooks는 성북어린이·사회복지급식지원센터, 강남어린이급식지원센터와 함께 7년 이상 어린이 급식 관리 서비스를 제공하는 전문 업체입니다. 안전하고 영양가 높은 급식 계획과 관리를 통해 아이들의 건강한 성장을 지원합니다." />
        <meta name="keywords" content="iCooks, 아이쿡스, 급식관리, 어린이급식지원센터, 성북어린이급식지원센터, 강남어린이급식지원센터, 사회복지급식, 급식계획, 급식지도, 어린이 영양관리" />
      </div>

      {/* Header Navigation */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-emerald-100 dark:border-emerald-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              <span className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">iCooks</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">아이쿡스</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">서비스</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">회사소개</a>
              <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">실적</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">문의</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
            7년 이상의 신뢰받는 서비스
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            안전하고 건강한 <br />
            <span className="text-emerald-600 dark:text-emerald-400">어린이 급식관리</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            성북어린이·사회복지급식지원센터, 강남어린이급식지원센터와 함께 <br />
            전문적인 급식 계획과 관리 서비스를 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
              서비스 문의하기
            </Button>
            <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400">
              실적 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              전문 급식관리 서비스
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              아이들의 건강한 성장을 위한 체계적이고 안전한 급식 관리 솔루션을 제공합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">급식 계획 및 관리</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  영양 균형을 고려한 체계적인 급식 계획 수립과 전문적인 관리
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />영양 균형 분석</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />메뉴 개발 및 계획</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />식재료 관리</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">급식 지도 및 감독</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  안전하고 위생적인 급식 환경 조성을 위한 전문 지도와 감독
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />위생 관리 점검</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />조리 과정 지도</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />품질 관리</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">영양 교육 및 상담</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  올바른 식습관 형성을 위한 영양 교육과 전문 상담 서비스
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />영양 교육 프로그램</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />개별 상담</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />부모 교육</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-emerald-50 dark:bg-emerald-950">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              iCooks 소개
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                  7년 이상의 검증된 전문성
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  iCooks는 2017년부터 성북어린이·사회복지급식지원센터, 강남어린이급식지원센터와 함께 
                  어린이 급식 관리 분야에서 축적된 경험과 전문성을 바탕으로 안전하고 영양가 높은 
                  급식 서비스를 제공하고 있습니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">성북어린이·사회복지급식지원센터 파트너</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">강남어린이급식지원센터 파트너</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">7년 이상 연속 서비스 제공</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">핵심 가치</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-3 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">안전성</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">HACCP 기준의 철저한 위생 관리</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-3 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">영양성</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">성장기 아이들을 위한 균형 잡힌 영양</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-3 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">신뢰성</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">투명하고 체계적인 관리 시스템</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Portfolio */}
      <section id="portfolio" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              성공 사례 및 실적
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              신뢰받는 파트너십으로 함께 성장해온 7년의 기록
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="text-emerald-800 dark:text-emerald-200 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  성북어린이·사회복지급식지원센터
                </CardTitle>
                <CardDescription className="dark:text-gray-400">2017년부터 지속적인 파트너십</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">서비스 기간</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">7년 이상</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">관리 시설</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">어린이집, 복지시설</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">서비스 만족도</span>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="text-emerald-800 dark:text-emerald-200 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  강남어린이급식지원센터
                </CardTitle>
                <CardDescription className="dark:text-gray-400">체계적인 급식 관리 서비스 제공</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">서비스 기간</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">지속 서비스</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">전문 분야</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">어린이 급식 지원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">서비스 만족도</span>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
              누적 서비스 실적
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">7+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">서비스 연수</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">관리 시설</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">급식 계획</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-emerald-50 dark:bg-emerald-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              문의하기
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              전문적인 급식 관리 서비스에 대해 언제든지 문의해 주세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">전화번호</div>
                    <div className="text-gray-600 dark:text-gray-300">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">이메일</div>
                    <div className="text-gray-600 dark:text-gray-300">info@icooks.kr</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">사업장 주소</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      서울특별시 성북구<br />
                      (상세 주소는 문의 시 안내)
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">운영 시간</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span>09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일, 공휴일</span>
                    <span>휴무</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ChefHat className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">iCooks 아이쿡스</span>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>&copy; 2024 iCooks. All rights reserved.</p>
              <p className="text-sm mt-1">성북어린이·사회복지급식지원센터, 강남어린이급식지원센터 파트너</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}