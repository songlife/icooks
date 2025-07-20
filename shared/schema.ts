import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  organization: text("organization").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "담당자 성함을 입력해주세요"),
  position: z.string().min(1, "직책을 입력해주세요"),
  organization: z.string().min(1, "소속 기관명을 입력해주세요"),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/, "올바른 전화번호 형식으로 입력해주세요 (010-1234-5678)"),
  email: z.string().email("올바른 이메일 형식으로 입력해주세요"),
  service: z.string().min(1, "문의 서비스를 선택해주세요"),
  message: z.string().min(10, "상세 문의내용을 10자 이상 입력해주세요"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
