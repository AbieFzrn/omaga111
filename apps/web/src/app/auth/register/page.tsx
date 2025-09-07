/**
 * Register Page - BlueTix styled authentication
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Github, Eye, EyeOff, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                Create your BlueTix account
              </h1>
              <p className="text-muted-foreground text-lg">
                Join the community and start discovering amazing events today.
              </p>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10"
              >
                Login
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-bluetix-primary/20 text-bluetix-primary border-bluetix-primary/30"
              >
                Create account
              </Button>
            </div>

            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
                alt="People at event"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Panel - Register Form */}
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
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 bg-bluetix-secondary border-bluetix-primary/30 text-white placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="username" className="text-white">Username</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="JhonDoe"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
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
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
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

            {/* Terms and Conditions */}
            <div className="space-y-2">
              <label className="flex items-start space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-bluetix-primary bg-bluetix-secondary border-bluetix-primary/30 rounded focus:ring-bluetix-primary focus:ring-2 mt-0.5"
                />
                <span className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <Link href="/terms" className="text-bluetix-primary hover:text-bluetix-primary/80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-bluetix-primary hover:text-bluetix-primary/80">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {/* Sign Up Button */}
            <Button className="w-full bg-bluetix-primary hover:bg-bluetix-primary/90 text-white py-3">
              <span className="mr-2">→</span>
              Create Account
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

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-bluetix-primary hover:text-bluetix-primary/80">
                  Sign in
                </Link>
              </p>
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

