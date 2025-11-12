# TravelNest 🏖️

A modern travel booking platform built with Next.js, Redux Toolkit, and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
travelnest/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── AuthDemo.tsx    # Authentication demo
│   │   └── ReduxProvider.tsx # Redux provider wrapper
│   ├── constants/          # Application constants
│   │   └── index.ts
│   ├── hooks/             # Custom React hooks
│   │   └── useAuth.ts     # Authentication hook
│   ├── lib/               # Utility libraries
│   │   └── utils.ts       # Helper functions
│   ├── services/          # API services
│   │   ├── api.ts         # Base API service
│   │   └── authService.ts # Authentication service
│   ├── store/             # Redux store
│   │   ├── index.ts       # Store configuration
│   │   └── slices/        # Redux slices
│   │       └── authSlice.ts
│   └── types/             # TypeScript types
│       └── index.ts
├── public/                # Static assets
├── .env.local            # Environment variables
└── package.json          # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui pattern
- **Icons**: Lucide React

## 🔧 Key Features

### ✅ Completed Setup
- Redux Toolkit store configuration
- Axios service layer with interceptors
- TypeScript types and interfaces
- Authentication system structure
- Custom hooks for business logic
- Service layer for API communication
- Constants and configuration management
- UI components with Tailwind CSS

### 🔄 Ready for Backend Integration
The project is structured to easily integrate with a NestJS backend:

- **API Service**: Configured axios instance with base URL and interceptors
- **Authentication Flow**: Complete auth slice with login/register/logout actions
- **Token Management**: Automatic token handling and refresh logic
- **Error Handling**: Centralized error handling with user feedback
- **Type Safety**: Full TypeScript coverage for API requests/responses

## 🚀 Development Workflow

### Running the Project
```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Environment Variables
Copy `.env.local` and configure:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=TravelNest
```

## 🔗 Backend Integration

The frontend is ready to connect to a NestJS backend. Update the API URL in your environment variables and ensure your backend implements the following endpoints:

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/refresh` - Refresh token

### Expected Response Format
```typescript
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
```

## 📚 Next Steps

1. **Backend Setup**: Create NestJS backend with authentication endpoints
2. **Database Integration**: Add database models and migrations
3. **UI Enhancement**: Build out travel-specific components
4. **Testing**: Add unit and integration tests
5. **Deployment**: Configure CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.