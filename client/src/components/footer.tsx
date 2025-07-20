import { Utensils, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const services = ["식단 작성", "급식 감수", "영양 교육", "컨설팅"];
  const contactInfo = [
    { icon: Phone, value: "02-1234-5678" },
    { icon: Mail, value: "info@icooks.kr" },
    { icon: MapPin, value: "서울특별시 강남구\n테헤란로 123" }
  ];
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" }
  ];
  const footerLinks = ["개인정보처리방침", "이용약관", "사업자정보"];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Utensils className="h-6 w-6 text-primary-400 mr-2" />
              <span className="text-xl font-bold font-korean">iCooks</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed font-korean">
              어린이와 사회복지시설의 건강한 급식 환경을 만들어가는 
              전문 급식관리 서비스 기업입니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-korean">서비스</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors font-korean">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-korean">연락처</h4>
            <ul className="space-y-2 text-gray-300">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start">
                  <contact.icon className="h-4 w-4 text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="font-korean whitespace-pre-line">{contact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-korean">
              © 2024 iCooks. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm transition-colors font-korean"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
