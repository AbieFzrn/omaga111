/**
 * Footer component with links and company information
 */

import Link from 'next/link';
import { Calendar, Mail, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bluetix-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-bluetix-primary rounded-full">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">BlueTix</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The modern platform for event organizers and attendees. 
              Create, manage, and discover events with ease.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/bluetix" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/yourusername/bluetix" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@bluetix.com" className="text-muted-foreground hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-muted-foreground hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="text-muted-foreground hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/api" className="text-muted-foreground hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-muted-foreground hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/status" className="text-muted-foreground hover:text-white transition-colors">Status</Link></li>
              <li><Link href="/security" className="text-muted-foreground hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-bluetix-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 BlueTix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

