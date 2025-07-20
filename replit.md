# iCooks - Food Service Management System

## Overview

This is a full-stack web application for iCooks, a Korean food service management company specializing in meal planning and supervision for children's facilities and social welfare institutions. The application features a modern React frontend with a Korean-language interface and an Express.js backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Korean brand colors
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints for contact inquiry management
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot module replacement with Vite integration

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Inquiries Table**: Customer inquiry management with fields for name, position, organization, phone, email, service type, message, and timestamp
- **Validation**: Zod schemas with Korean language validation messages

### API Endpoints
- `POST /api/contact`: Submit new contact inquiries with validation
- `GET /api/contact`: Retrieve all contact inquiries (admin functionality)

### Frontend Features
- **Single Page Application**: Home page with multiple sections (hero, services, about, success stories, portfolio, contact)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Korean Localization**: All UI text and validation messages in Korean
- **Contact Form**: Comprehensive inquiry form with real-time validation
- **Modern UI**: Professional design with custom color scheme matching iCooks branding

### Storage Layer
- **Development**: In-memory storage implementation for rapid development
- **Production**: Drizzle ORM with PostgreSQL for persistent data storage
- **Migration Support**: Database schema migrations through Drizzle Kit

## Data Flow

1. **User Interaction**: Users navigate the single-page application and submit contact inquiries
2. **Form Validation**: Client-side validation using Zod schemas with Korean error messages
3. **API Request**: Validated data sent to Express.js backend via TanStack Query
4. **Server Processing**: Express routes handle requests with additional server-side validation
5. **Database Operations**: Drizzle ORM manages data persistence in PostgreSQL
6. **Response Handling**: Success/error responses displayed to users via toast notifications

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Wouter for routing
- **UI Components**: Extensive Radix UI component library for accessible components
- **Database**: Drizzle ORM, Neon Database serverless PostgreSQL
- **Validation**: Zod for schema validation
- **HTTP Client**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom configuration
- **Forms**: React Hook Form with Hookform resolvers

### Development Dependencies
- **Build Tools**: Vite with React plugin and TypeScript support
- **Development Server**: Express with Vite middleware integration for HMR
- **Code Quality**: TypeScript for type safety
- **Replit Integration**: Specialized plugins for Replit development environment

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend integration
- **Hot Module Replacement**: Seamless development experience with instant updates
- **Environment Variables**: Database URL configuration through environment variables

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles Express server to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency
- **Deployment**: Single build process creates production-ready application

### Configuration Management
- **TypeScript**: Shared configuration across frontend, backend, and shared modules
- **Path Aliases**: Simplified imports using @ aliases for better developer experience
- **Environment Separation**: Development and production configurations with appropriate optimizations

The application follows modern web development best practices with a focus on type safety, performance, and user experience, specifically tailored for the Korean market with proper localization and cultural considerations.