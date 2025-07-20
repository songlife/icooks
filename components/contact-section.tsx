'use client'

import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const contactMethods = [
    {
      icon: Phone,
      title: "전화 문의",
      value: "02-1234-5678",
      description: "평일 09:00 - 18:00",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-500"
    },
    {
      icon: Mail,
      title: "이메일",
      value: "info@icooks.kr",
      description: "24시간 접수",
      bgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    },
    {
      icon: MapPin,
      title: "오시는 길",
      value: "서울특별시 강남구 테헤란로 123",
      description: "iCooks 빌딩 5층",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      position: "",
      organization: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "문의 접수 완료",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "문의 접수 실패",
        description: error.message || "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-korean">
              전문 상담 및 문의
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-korean">
              7년간의 경험과 노하우로 여러분의 급식 관리를 지원하겠습니다. 
              언제든 문의해 주세요.
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                    <method.icon className={`h-6 w-6 ${method.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-korean">{method.title}</h4>
                    <p className="text-gray-600 font-korean">{method.value}</p>
                    <p className="text-sm text-gray-500 font-korean">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg font-korean">
                <Calendar className="h-5 w-5 mr-2" />
                무료 상담 예약하기
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-korean">서비스 문의</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-korean">담당자 성함</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-korean">직책</FormLabel>
                        <FormControl>
                          <Input placeholder="센터장" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-korean">소속 기관명</FormLabel>
                      <FormControl>
                        <Input placeholder="○○어린이급식지원센터" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-korean">연락처</FormLabel>
                        <FormControl>
                          <Input placeholder="010-1234-5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-korean">이메일</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-korean">문의 서비스</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="서비스를 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="식단 작성 및 계획">식단 작성 및 계획</SelectItem>
                          <SelectItem value="급식 감수 업무">급식 감수 업무</SelectItem>
                          <SelectItem value="영양 교육 및 컨설팅">영양 교육 및 컨설팅</SelectItem>
                          <SelectItem value="종합 서비스">종합 서비스</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-korean">상세 문의내용</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="궁금한 사항이나 요청사항을 자세히 적어주세요." 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg font-korean"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {contactMutation.isPending ? "문의 접수 중..." : "문의하기"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}