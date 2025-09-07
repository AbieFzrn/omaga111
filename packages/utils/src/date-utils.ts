/**
 * Date utility functions using date-fns library
 */

import {
  format,
  formatDistanceToNow,
  isAfter,
  isBefore,
  isToday,
  isTomorrow,
  isYesterday,
  parseISO,
  addDays,
  startOfDay,
  endOfDay,
} from 'date-fns';

/**
 * Formats date for display in events
 * @param date - Date to format (string or Date object)
 * @param formatString - Format string (default: 'PPP')
 * @returns {string} Formatted date string
 */
export function formatEventDate(
  date: string | Date,
  formatString: string = 'PPP'
): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatString);
}

/**
 * Formats date and time for event display
 * @param date - Date to format
 * @returns {string} Formatted date and time
 */
export function formatEventDateTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'PPP p');
}

/**
 * Gets relative time description (e.g., "in 2 hours", "3 days ago")
 * @param date - Date to get relative time for
 * @returns {string} Relative time description
 */
export function getRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
}

/**
 * Checks if an event is happening today
 * @param eventDate - Event date to check
 * @returns {boolean} True if event is today
 */
export function isEventToday(eventDate: string | Date): boolean {
  const dateObj = typeof eventDate === 'string' ? parseISO(eventDate) : eventDate;
  return isToday(dateObj);
}

/**
 * Checks if an event is happening tomorrow
 * @param eventDate - Event date to check
 * @returns {boolean} True if event is tomorrow
 */
export function isEventTomorrow(eventDate: string | Date): boolean {
  const dateObj = typeof eventDate === 'string' ? parseISO(eventDate) : eventDate;
  return isTomorrow(dateObj);
}

/**
 * Checks if an event has already passed
 * @param eventDate - Event date to check
 * @returns {boolean} True if event has passed
 */
export function isEventPast(eventDate: string | Date): boolean {
  const dateObj = typeof eventDate === 'string' ? parseISO(eventDate) : eventDate;
  return isBefore(dateObj, new Date());
}

/**
 * Checks if an event is upcoming (in the future)
 * @param eventDate - Event date to check
 * @returns {boolean} True if event is upcoming
 */
export function isEventUpcoming(eventDate: string | Date): boolean {
  const dateObj = typeof eventDate === 'string' ? parseISO(eventDate) : eventDate;
  return isAfter(dateObj, new Date());
}

/**
 * Gets user-friendly date description
 * @param date - Date to describe
 * @returns {string} User-friendly date description
 */
export function getFriendlyDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(dateObj)) return 'Today';
  if (isTomorrow(dateObj)) return 'Tomorrow';
  if (isYesterday(dateObj)) return 'Yesterday';
  
  return format(dateObj, 'MMM d, yyyy');
}

/**
 * Gets the start and end of day for a given date
 * @param date - Date to get bounds for
 * @returns {object} Object with start and end of day
 */
export function getDayBounds(date: string | Date): {
  start: Date;
  end: Date;
} {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return {
    start: startOfDay(dateObj),
    end: endOfDay(dateObj),
  };
}