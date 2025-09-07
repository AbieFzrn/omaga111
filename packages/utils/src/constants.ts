/**
 * Application-wide constants and configuration values
 */

/**
 * API endpoints configuration
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    PROFILE: '/api/auth/profile',
    REFRESH: '/api/auth/refresh',
  },
  EVENTS: {
    LIST: '/api/events',
    CREATE: '/api/events',
    DETAIL: (id: string) => `/api/events/${id}`,
    UPDATE: (id: string) => `/api/events/${id}`,
    DELETE: (id: string) => `/api/events/${id}`,
    REGISTER: (id: string) => `/api/events/${id}/register`,
  },
  CATEGORIES: {
    LIST: '/api/categories',
    CREATE: '/api/categories',
  },
} as const;

/**
 * Application theme colors
 */
export const COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
  SECONDARY: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    900: '#134e4a',
  },
  ACCENT: {
    50: '#fff7ed',
    100: '#ffedd5',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    900: '#9a3412',
  },
  SUCCESS: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
  },
  WARNING: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
  },
  ERROR: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },
} as const;

/**
 * Event status configurations with colors and labels
 */
export const EVENT_STATUS_CONFIG = {
  DRAFT: {
    label: 'Draft',
    color: COLORS.PRIMARY[500],
    bgColor: COLORS.PRIMARY[50],
  },
  PUBLISHED: {
    label: 'Published',
    color: COLORS.SUCCESS[600],
    bgColor: COLORS.SUCCESS[50],
  },
  CANCELLED: {
    label: 'Cancelled',
    color: COLORS.ERROR[600],
    bgColor: COLORS.ERROR[50],
  },
  COMPLETED: {
    label: 'Completed',
    color: COLORS.PRIMARY[600],
    bgColor: COLORS.PRIMARY[50],
  },
} as const;

/**
 * Registration status configurations
 */
export const REGISTRATION_STATUS_CONFIG = {
  PENDING: {
    label: 'Pending',
    color: COLORS.WARNING[600],
    bgColor: COLORS.WARNING[50],
  },
  CONFIRMED: {
    label: 'Confirmed',
    color: COLORS.SUCCESS[600],
    bgColor: COLORS.SUCCESS[50],
  },
  CANCELLED: {
    label: 'Cancelled',
    color: COLORS.ERROR[600],
    bgColor: COLORS.ERROR[50],
  },
  WAITLISTED: {
    label: 'Waitlisted',
    color: COLORS.ACCENT[600],
    bgColor: COLORS.ACCENT[50],
  },
} as const;

/**
 * File upload constraints
 */
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB in bytes
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
  ],
  IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
} as const;

/**
 * Pagination defaults
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
} as const;

/**
 * Default event categories
 */
export const DEFAULT_CATEGORIES = [
  { name: 'Conference', color: COLORS.PRIMARY[500] },
  { name: 'Workshop', color: COLORS.SECONDARY[500] },
  { name: 'Networking', color: COLORS.ACCENT[500] },
  { name: 'Social', color: COLORS.SUCCESS[500] },
  { name: 'Sports', color: COLORS.WARNING[500] },
  { name: 'Arts & Culture', color: COLORS.ERROR[500] },
] as const;