/**
 * Authentication-related type definitions
 */

/**
 * Login credentials interface
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Registration data interface
 */
export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

/**
 * Authentication response interface
 */
export interface AuthResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
    name: string | null;
    role: string;
  };
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  error?: string;
}

/**
 * Password reset request interface
 */
export interface PasswordResetRequest {
  email: string;
}

/**
 * Password reset confirmation interface
 */
export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
}

/**
 * Token refresh request interface
 */
export interface RefreshTokenRequest {
  refreshToken: string;
}

/**
 * User session interface for client-side state
 */
export interface UserSession {
  user: {
    id: string;
    email: string;
    name: string | null;
    avatar: string | null;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

/**
 * Authentication context interface for React providers
 */
export interface AuthContextValue {
  user: UserSession['user'] | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  register: (data: RegisterData) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<boolean>;
  updateProfile: (data: Partial<UserSession['user']>) => Promise<boolean>;
}

/**
 * Role-based access control permissions
 */
export interface RolePermissions {
  [key: string]: {
    events: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    };
    users: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    };
    categories: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    };
  };
}