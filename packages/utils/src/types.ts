/**
 * Shared TypeScript type definitions
 */

/**
 * API response wrapper type for consistent API responses
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

/**
 * Pagination parameters for API requests
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Filter parameters for events
 */
export interface EventFilters extends PaginationParams {
  categoryId?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  isPublic?: boolean;
  search?: string;
}

/**
 * User authentication data
 */
export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
  role: 'USER' | 'ADMIN' | 'ORGANIZER';
}

/**
 * JWT token payload structure
 */
export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

/**
 * Event creation/update input
 */
export interface EventInput {
  title: string;
  description?: string;
  location: string;
  startDate: string;
  endDate?: string;
  isPublic: boolean;
  maxAttendees?: number;
  price?: number;
  currency: string;
  imageUrl?: string;
  categoryId?: string;
}

/**
 * Event with computed fields for display
 */
export interface EventDisplay {
  id: string;
  title: string;
  description?: string;
  location: string;
  startDate: string;
  endDate?: string;
  isPublic: boolean;
  maxAttendees?: number;
  price?: number;
  currency: string;
  imageUrl?: string;
  status: string;
  organizerName: string;
  categoryName?: string;
  registrationCount: number;
  spotsRemaining?: number;
  isUserRegistered?: boolean;
  canRegister?: boolean;
}

/**
 * Form field validation error
 */
export interface FieldError {
  field: string;
  message: string;
}

/**
 * Generic form state for handling submissions
 */
export interface FormState<T = any> {
  data: T;
  errors: FieldError[];
  isSubmitting: boolean;
  isSubmitted: boolean;
}

/**
 * Toast notification types
 */
export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Modal state management
 */
export interface ModalState {
  isOpen: boolean;
  type?: 'confirm' | 'form' | 'info';
  title?: string;
  content?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

/**
 * File upload progress tracking
 */
export interface UploadProgress {
  fileName: string;
  progress: number;
  status: 'uploading' | 'complete' | 'error';
  url?: string;
  error?: string;
}