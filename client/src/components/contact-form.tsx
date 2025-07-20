import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "이름은 2글자 이상 입력해 주세요"),
  position: z.string().min(1, "직책을 입력해 주세요"),
  organization: z.string().min(1, "소속 기관명을 입력해 주세요"),
  phone: z.string().min(10, "연락처를 정확히 입력해 주세요"),
  email: z.string().email("유효한 이메일 주소를 입력해 주세요"),
  serviceType: z.string().min(1, "관심 있는 서비스를 선택해 주세요"),
  message: z.string().min(10, "문의 내용을 10글자 이상 입력해 주세요"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      position: "",
      organization: "",
      phone: "",
      email: "",
      serviceType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다. 감사합니다.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "문의 접수 실패",
        description: error.message || "잠시 후 다시 시도해 주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <Card className="border-emerald-200 dark:border-emerald-800">
      <CardHeader>
        <CardTitle className="text-emerald-800 dark:text-emerald-200 flex items-center">
          <Send className="h-5 w-5 mr-2" />
          문의 양식
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">이름 *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="홍길동" 
                        {...field}
                        className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700" 
                      />
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
                    <FormLabel className="text-gray-700 dark:text-gray-300">직책 *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="원장, 영양사, 조리사 등" 
                        {...field}
                        className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700" 
                      />
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
                  <FormLabel className="text-gray-700 dark:text-gray-300">소속 기관 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="OO어린이집, OO복지센터 등" 
                      {...field}
                      className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">연락처 *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="010-1234-5678" 
                        {...field}
                        className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700" 
                      />
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
                    <FormLabel className="text-gray-700 dark:text-gray-300">이메일 *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="example@email.com" 
                        {...field}
                        className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300">관심 있는 서비스 *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700">
                        <SelectValue placeholder="서비스를 선택해 주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="meal-planning">급식 계획 및 관리</SelectItem>
                      <SelectItem value="supervision">급식 지도 및 감독</SelectItem>
                      <SelectItem value="nutrition-education">영양 교육 및 상담</SelectItem>
                      <SelectItem value="comprehensive">종합 급식 관리 서비스</SelectItem>
                      <SelectItem value="consultation">서비스 상담</SelectItem>
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
                  <FormLabel className="text-gray-700 dark:text-gray-300">문의 내용 *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="급식 관리 서비스에 대해 궁금한 점이나 요청사항을 자세히 적어주세요..." 
                      rows={5}
                      {...field}
                      className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-700" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              disabled={contactMutation.isPending}
            >
              {contactMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  문의 접수 중...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  문의하기
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}