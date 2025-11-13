# 💚 Seznamka - University Student Connection Platform

A beautiful, modern web application designed to help university students meet new people and build genuine connections in a safe, organized environment.

## 🌟 Features

- **Stunning Design**: Neon purple and blue accent colors on a sleek black background
- **Responsive Layout**: Works perfectly on all devices
- **Interactive Animations**: Smooth, eye-catching animations and glow effects
- **User Registration**: Complete form to join the Seznamka community
- **Story-Driven**: Features real student experiences and value propositions

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 📄 Pages

### Home Page (`/`)
- Project introduction with animated hero section
- Benefits showcase (Safe Environment, Natural Meetings, Community First)
- Tomáš's story - a typical student journey
- Clear call-to-action to join

### Join Page (`/join`)
- Comprehensive registration form
- Fields for university details, interests, and preferences
- Success confirmation screen
- Additional information about what to expect

## 🎨 Design System

- **Primary Color**: Neon Purple (`#a855f7`)
- **Secondary Color**: Blue (`#3b82f6`)
- **Background**: Black (`#0a0a0a`)
- **Text**: White with gray variants for hierarchy
- **Effects**: Glow shadows, gradient borders, smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.2 (with Turbopack)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Linting**: ESLint with Next.js config

## 📱 Mobile Responsive

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Customization

To customize the app:

1. **Colors**: Edit `/src/app/globals.css` - update CSS variables
2. **Content**: Edit `/src/app/page.tsx` and `/src/app/join/page.tsx`
3. **Metadata**: Update `/src/app/layout.tsx` for SEO

## 📝 Form Integration

The registration form currently logs to the console. To integrate with a backend:

1. Add API endpoint in `/src/app/api/register/route.ts`
2. Update form submission in `/src/app/join/page.tsx`
3. Add database integration (e.g., Prisma, MongoDB)

## 🎯 Project Goals

- Create regular, safe events for students
- Support formation of new student relationships
- Reduce loneliness and isolation among university students
- Connect students from different faculties and universities
- Provide alternative to online-only dating apps

## 📖 Based On

This project is based on the "Green Seznamka" canvas presentation, which outlines:
- User personas and stories
- Project goals and objectives
- Success criteria
- SWOT analysis
- Stakeholder mapping

## 🤝 Contributing

This is a student project for university dating and networking events. If you'd like to contribute or organize events, please reach out!

## 📄 License

Private project for ZSO Web course.

---

**Built with ❤️ for connecting students and building community**

