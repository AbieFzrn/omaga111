/**
 * Formatting utilities for consistent data presentation
 */

import { clsx, type ClassValue } from 'clsx';

/**
 * Combines class names using clsx utility
 * @param inputs - Class names to combine
 * @returns {string} Combined class names
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats currency values with proper symbol and decimals
 * @param amount - Amount to format
 * @param currency - Currency code (default: USD)
 * @param locale - Locale for formatting (default: en-US)
 * @returns {string} Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Formats large numbers with appropriate suffixes (K, M, B)
 * @param num - Number to format
 * @returns {string} Formatted number with suffix
 */
export function formatNumber(num: number): string {
  if (num < 1000) return num.toString();
  
  const units = ['K', 'M', 'B', 'T'];
  const unitIndex = Math.floor(Math.log10(num) / 3) - 1;
  const scaledNum = num / Math.pow(1000, unitIndex + 1);
  
  return `${scaledNum.toFixed(1)}${units[unitIndex]}`;
}

/**
 * Truncates text to specified length with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns {string} Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Capitalizes the first letter of a string
 * @param str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts string to slug format (URL-friendly)
 * @param text - Text to convert to slug
 * @returns {string} URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}