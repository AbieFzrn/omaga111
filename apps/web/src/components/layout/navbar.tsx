/**
 * Navigation bar component with authentication state and responsive design
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Calendar, 
  Menu, 
  X, 
  User, 
  LogOut, 
  Settings, 
  PlusCircle,
  Search 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@hi-events/utils';

/**
 * Main navigation component with mobile support
 * @returns {JSX.Element} Navigation bar with responsive design
 */
export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  /**
   * Handles user logout action
   */
  const handleLogout = async (): Promise<void> => {
    await logout();
    router.push('/');
  };

  /**
   * Toggles mobile menu visibility
   */
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-bluetix-primary/20 bg-bluetix-dark/95 backdrop-blur supports-[backdrop-filter]:bg-bluetix-dark/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-8 h-8 bg-bluetix-primary rounded-full">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">BlueTix</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/events" 
              className="text-muted-foreground hover:text-white transition-colors font-medium"
            >
              Browse Events
            </Link>
            <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
              <Zap className="h-4 w-4 mr-2" />
              For Organizers
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                {/* Quick Create Button */}
                <Button asChild size="sm" className="hidden sm:flex">
                  <Link href="/events/create">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create
                  </Link>
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                        <User className="h-4 w-4 text-primary-600" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex flex-col space-y-1 p-2">
                      <p className="text-sm font-medium leading-none">{user.name || 'User'}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              /* Auth Buttons for non-authenticated users */
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                  <Link href="/auth/login">Sign in</Link>
                </Button>
                <Button asChild size="sm" className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          'md:hidden border-t border-gray-200 bg-white',
          isOpen ? 'block' : 'hidden'
        )}>
          <nav className="flex flex-col space-y-1 p-4">
            <Link
              href="/events"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Discover Events
            </Link>
            <Link
              href="/events/create"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Event
            </Link>
            {!isAuthenticated && (
              <>
                <div className="border-t border-gray-200 my-2" />
                <Link
                  href="/auth/login"
                  className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="flex items-center px-3 py-2 bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}