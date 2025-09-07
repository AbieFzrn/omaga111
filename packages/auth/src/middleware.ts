/**
 * Authentication middleware for API routes and request handling
 */

import type { NextRequest } from 'next/server';
import { extractTokenFromHeader, verifyToken } from './jwt';
import type { AuthUser } from '@hi-events/utils';

/**
 * Result of authentication middleware
 */
export interface AuthResult {
  success: boolean;
  user?: AuthUser;
  error?: string;
}

/**
 * Authenticates a request using JWT token from Authorization header
 * @param request - Next.js request object or headers
 * @returns {Promise<AuthResult>} Authentication result
 */
export async function authenticateRequest(
  request: NextRequest | { headers: { get: (name: string) => string | null } }
): Promise<AuthResult> {
  try {
    const authHeader = request.headers.get('authorization');
    const token = extractTokenFromHeader(authHeader || '');
    
    if (!token) {
      return {
        success: false,
        error: 'No authentication token provided',
      };
    }
    
    const payload = verifyToken(token);
    
    const user: AuthUser = {
      id: payload.userId,
      email: payload.email,
      name: null, // Will be populated from database if needed
      avatar: null,
      role: payload.role as 'USER' | 'ADMIN' | 'ORGANIZER',
    };
    
    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}

/**
 * Checks if user has required role for accessing resource
 * @param user - Authenticated user
 * @param requiredRole - Required role or array of roles
 * @returns {boolean} True if user has required role
 */
export function hasRequiredRole(
  user: AuthUser,
  requiredRole: string | string[]
): boolean {
  const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
  return roles.includes(user.role);
}

/**
 * Middleware factory for protecting API routes with authentication
 * @param requiredRole - Optional role requirement
 * @returns {Function} Middleware function
 */
export function requireAuth(requiredRole?: string | string[]) {
  return async (request: NextRequest): Promise<Response | null> => {
    const authResult = await authenticateRequest(request);
    
    if (!authResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: authResult.error || 'Authentication required',
        }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    if (requiredRole && !hasRequiredRole(authResult.user!, requiredRole)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Insufficient permissions',
        }),
        {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Add user to request context (handled by the calling route)
    return null; // Continue to route handler
  };
}

/**
 * Extracts user information from authenticated request
 * Used in API routes after authentication middleware
 * @param request - Authenticated request
 * @returns {Promise<AuthUser | null>} User information or null
 */
export async function getUserFromRequest(
  request: NextRequest
): Promise<AuthUser | null> {
  const authResult = await authenticateRequest(request);
  return authResult.success ? authResult.user! : null;
}