/**
 * JWT token management utilities
 */

import jwt from 'jsonwebtoken';
import type { JwtPayload } from '@hi-events/utils';

/**
 * JWT configuration with fallback values
 * Shows warning if JWT_SECRET is not properly configured
 */
const JWT_CONFIG = {
  secret: process.env.JWT_SECRET || (() => {
    console.warn('⚠️  JWT_SECRET not found in environment variables. Using default secret.');
    console.warn('   Please set JWT_SECRET in your .env file for production use.');
    return 'fallback-secret-key-change-this-in-production';
  })(),
  expiresIn: '24h',
  refreshExpiresIn: '7d',
};

/**
 * Generates a JWT access token for authenticated user
 * @param payload - User data to embed in token
 * @returns {string} Signed JWT token
 */
export function generateAccessToken(payload: {
  userId: string;
  email: string;
  role: string;
}): string {
  try {
    return jwt.sign(payload, JWT_CONFIG.secret, {
      expiresIn: JWT_CONFIG.expiresIn,
      issuer: 'hi-events',
      subject: payload.userId,
    });
  } catch (error) {
    console.error('Error generating access token:', error);
    throw new Error('Failed to generate access token');
  }
}

/**
 * Generates a JWT refresh token for token renewal
 * @param userId - User ID for the refresh token
 * @returns {string} Signed refresh token
 */
export function generateRefreshToken(userId: string): string {
  try {
    return jwt.sign(
      { userId, type: 'refresh' },
      JWT_CONFIG.secret,
      {
        expiresIn: JWT_CONFIG.refreshExpiresIn,
        issuer: 'hi-events',
        subject: userId,
      }
    );
  } catch (error) {
    console.error('Error generating refresh token:', error);
    throw new Error('Failed to generate refresh token');
  }
}

/**
 * Verifies and decodes a JWT token
 * @param token - JWT token to verify
 * @returns {JwtPayload} Decoded token payload
 * @throws {Error} If token is invalid or expired
 */
export function verifyToken(token: string): JwtPayload {
  try {
    const decoded = jwt.verify(token, JWT_CONFIG.secret) as JwtPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    } else if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expired');
    } else {
      console.error('Token verification error:', error);
      throw new Error('Token verification failed');
    }
  }
}

/**
 * Extracts token from Authorization header
 * @param authHeader - Authorization header value
 * @returns {string | null} Extracted token or null
 */
export function extractTokenFromHeader(authHeader?: string): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}

/**
 * Checks if a token is expired without throwing
 * @param token - JWT token to check
 * @returns {boolean} True if token is expired
 */
export function isTokenExpired(token: string): boolean {
  try {
    jwt.verify(token, JWT_CONFIG.secret);
    return false;
  } catch (error) {
    return error instanceof jwt.TokenExpiredError;
  }
}

/**
 * Decodes token without verification (for debugging/logging)
 * @param token - JWT token to decode
 * @returns {any} Decoded payload (unverified)
 */
export function decodeToken(token: string): any {
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}