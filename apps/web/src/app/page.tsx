/**
 * Home page component - Landing page for Hi.Events platform
 * Features hero section, featured events, and call-to-action sections
 */

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeaturedEvents } from '@/components/events/featured-events';
import { StatsSection } from '@/components/home/stats-section';

/**
 * Home page with hero section and featured content
 * @returns {JSX.Element} Complete landing page
 */
export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  ✨ New Platform Launch
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Create Amazing
                  <span className="block gradient-text bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                    Events That Matter
                  </span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed">
                  The modern platform for event organizers and attendees. 
                  Create, manage, and discover events with ease and style.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                  <Link href="/events/create">
                    <Calendar className="mr-2 h-5 w-5" />
                    Create Event
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/events">
                    Discover Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-primary-100">4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-200" />
                  <span className="text-sm text-primary-100">10k+ events created</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
                  alt="People at a modern conference event"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-80"
                  priority
                />
                
                {/* Floating Event Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Live Event</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>150+ attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="mb-2">Featured Events</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Discover Amazing Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From conferences to workshops, find events that inspire and connect you
              with like-minded people in your community.
            </p>
          </div>
          
          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-80" />
            ))}
          </div>}>
            <FeaturedEvents />
          </Suspense>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools and features designed to make event management effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Create Your First Event?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of organizers who trust Hi.Events for their event management needs.
              Get started in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/auth/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/events">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Feature list for the features section
 */
const features = [
  {
    icon: Calendar,
    title: 'Easy Event Creation',
    description: 'Create beautiful events in minutes with our intuitive drag-and-drop builder.',
    color: 'bg-primary-500',
  },
  {
    icon: Users,
    title: 'Smart Registration',
    description: 'Streamlined registration process with automated confirmations and reminders.',
    color: 'bg-secondary-500',
  },
  {
    icon: MapPin,
    title: 'Location Management',
    description: 'Support for both in-person and virtual events with integrated maps.',
    color: 'bg-accent-500',
  },
];