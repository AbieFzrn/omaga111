/**
 * Login Page - BlueTix styled authentication
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Github, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-bluetix-dark flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Panel - Marketing */}
        <div className="bg-bluetix-card rounded-lg p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <Badge className="bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30 w-fit">
              <span className="mr-2">⚡</span>
              BlueTix
            </Badge>
            
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Sign in to your BlueTix account
              </h1>
              <p className="text-muted-foreground text-lg">
                Access tickets, manage events, and keep the vibes going.
              </p>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-bluetix-primary/20 text-bluetix-primary border-bluetix-primary/30"
              >
                Login
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10"
              >
                Create account
              </Button>
            </div>

            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
                alt="Concert crowd"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="bg-bluetix-card rounded-lg p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            
            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-bluetix-secondary border-bluetix-primary/30 text-white placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative mt-1">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground">
                    🔒
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-bluetix-secondary border-bluetix-primary/30 text-white placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-bluetix-primary bg-bluetix-secondary border-bluetix-primary/30 rounded focus:ring-bluetix-primary focus:ring-2"
                />
                <span className="text-sm text-white">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-bluetix-primary hover:text-bluetix-primary/80">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button className="w-full bg-bluetix-primary hover:bg-bluetix-primary/90 text-white py-3">
              <span className="mr-2">→</span>
              Sign in
            </Button>

            {/* Separator */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-bluetix-primary/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-bluetix-card text-muted-foreground">or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <Button 
        variant="outline" 
        size="sm" 
        className="fixed top-4 right-4 border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10"
        asChild
      >
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}

