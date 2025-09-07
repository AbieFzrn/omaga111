# Hi.Events - Modern Event Management Platform

A full-stack event management platform built with Next.js 14, Expo, and modern web technologies. This monorepo contains both web and mobile applications with shared packages for consistent functionality across platforms.

## 🌟 Features

- **📅 Event Management**: Create, edit, and manage events with rich details
- **🎫 Registration System**: Smart registration with automated confirmations
- **📱 Cross-Platform**: Web app (Next.js) and mobile app (Expo) 
- **🔐 Authentication**: JWT-based auth with email/password login
- **📊 Dashboard**: Event analytics and management tools
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS
- **⚡ Performance**: Optimized for speed with SSR and caching
- **🔒 Security**: Built-in security best practices and validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **Expo** - React Native framework for mobile
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality component library
- **NativeWind** - Tailwind CSS for React Native

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Primary database (configurable)
- **JWT** - Authentication tokens

### Development
- **TypeScript** - Type safety across all packages
- **pnpm** - Fast, disk space efficient package manager
- **Turborepo** - High-performance build system
- **ESLint + Prettier** - Code formatting and linting
- **Husky** - Git hooks for code quality

## 📁 Project Structure

```
hi-events/
├── apps/
│   ├── web/              # Next.js 14 web application
│   └── mobile/           # Expo mobile application
├── packages/
│   ├── ui/              # Shared UI components
│   ├── utils/           # Shared utilities and types
│   ├── auth/            # Authentication logic
│   └── db/              # Database schema and client
├── .env.example         # Environment variables template
└── README.md           # This file
```

## 🚀 Quick Start (Linux Mint)

### Prerequisites

1. **Install Node.js 18+**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install pnpm**
   ```bash
   curl -fsSL https://get.pnpm.io/install.sh | sh -
   # Reload your shell or run:
   source ~/.bashrc
   ```

3. **Install PostgreSQL** (optional - can use SQLite for development)
   ```bash
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo -u postgres createdb hi_events_db
   ```

### Installation

1. **Clone and setup**
   ```bash
   git clone <your-repo-url>
   cd hi-events
   pnpm install
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```

3. **Configure your .env file**
   Edit the `.env` file with your settings:
   ```env
   # Database (choose one)
   DATABASE_URL="postgresql://username:password@localhost:5432/hi_events_db"
   # OR for SQLite (development)
   # DATABASE_URL="file:./dev.db"
   
   # JWT Secret (generate a secure key)
   JWT_SECRET="your-super-secret-jwt-key-change-this"
   
   # API Configuration
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Generate database client and run migrations**
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start development servers**
   ```bash
   # Start all applications
   pnpm dev
   
   # Or start specific apps
   pnpm --filter web dev      # Web app only
   pnpm --filter mobile dev   # Mobile app only
   ```

## 📱 Application Access

- **Web App**: http://localhost:3000
- **Mobile App**: Use Expo Go app to scan QR code from terminal

## 🗄️ Database Setup

### Option 1: PostgreSQL (Recommended for Production)

1. **Install PostgreSQL**
   ```bash
   sudo apt install postgresql postgresql-contrib
   ```

2. **Create database and user**
   ```bash
   sudo -u postgres psql
   CREATE DATABASE hi_events_db;
   CREATE USER hi_events_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE hi_events_db TO hi_events_user;
   \q
   ```

3. **Update .env**
   ```env
   DATABASE_URL="postgresql://hi_events_user:your_password@localhost:5432/hi_events_db"
   ```

### Option 2: SQLite (Development)

For quick development setup, use SQLite:

```env
DATABASE_URL="file:./dev.db"
```

### Running Migrations

```bash
# Generate Prisma client
pnpm db:generate

# Apply database schema
pnpm db:push

# Run migrations (production)
pnpm db:migrate

# Open database browser
pnpm db:studio
```

## 🔐 Authentication Setup

The application uses JWT-based authentication. Make sure to:

1. **Set a secure JWT_SECRET** in your `.env` file
2. **Generate a strong secret key**:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Configure authentication endpoints** in `packages/auth/src/jwt.ts`

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Required - Database
DATABASE_URL="postgresql://username:password@localhost:5432/hi_events_db"

# Required - JWT Authentication  
JWT_SECRET="your-super-secret-jwt-key-here"

# Required - NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Optional - API Configuration
API_BASE_URL="http://localhost:3000/api"
NODE_ENV="development"

# Optional - Email (for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587" 
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# Optional - File Uploads
UPLOAD_MAX_SIZE="10485760"
ALLOWED_FILE_TYPES="image/jpeg,image/png,image/gif,application/pdf"
```

⚠️ **Important**: Never commit your `.env` file to version control. The `.env.example` file shows the required structure.

## 🏗️ Building for Production

```bash
# Build all applications
pnpm build

# Build specific app
pnpm --filter web build
pnpm --filter mobile build

# Start production server
pnpm start
```

## 🧪 Testing and Code Quality

```bash
# Run linting
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check

# Run all checks
pnpm lint && pnpm type-check
```

## 📚 Package Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all applications  
- `pnpm lint` - Run ESLint on all packages
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript checks
- `pnpm clean` - Clean build artifacts
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `pnpm lint && pnpm type-check`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check if PostgreSQL is running: `sudo systemctl status postgresql`
   - Verify database credentials in `.env`
   - Ensure database exists: `sudo -u postgres psql -l`

2. **JWT_SECRET Warning**
   - Generate a secure secret key and add to `.env`
   - Never use the fallback key in production

3. **Port Already in Use**
   - Kill process: `sudo lsof -t -i tcp:3000 | xargs kill -9`
   - Or change port in `package.json`

4. **Prisma Client Issues**
   - Regenerate client: `pnpm db:generate`
   - Clear node_modules: `rm -rf node_modules && pnpm install`

5. **Mobile App Not Loading**
   - Ensure Expo CLI is installed: `npm install -g @expo/cli`
   - Check network connection between devices

### Getting Help

- 📖 Check the [documentation](docs/)
- 🐛 Report bugs in [Issues](https://github.com/your-repo/issues)
- 💬 Join our [Discord community](https://discord.gg/your-link)
- 📧 Email support: support@hi-events.com

---

**Happy Event Planning! 🎉**