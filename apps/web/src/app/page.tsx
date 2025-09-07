/**
 * Home page component - BlueTix styled landing page
 * Features hero section, trending events, and organizer tools
 */

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Star, ArrowRight, Zap, Compass, Rocket, Target, TrendingUp, MapPin as MapPinIcon } from 'lucide-react';
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
    <div className="min-h-screen bg-bluetix-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bluetix-dark via-bluetix-card to-bluetix-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bluetix-primary/10 to-bluetix-accent/10" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30 flex items-center gap-2 w-fit">
                  <Zap className="h-4 w-4" />
                  Gen Z's event hub
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Discover, create, and sell tickets with
                  <span className="block bg-gradient-to-r from-bluetix-primary to-bluetix-neon bg-clip-text text-transparent">
                    neon speed
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Playful, glassy, and fast. BlueTix makes attending and organizing events simple and fun.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white neon-glow">
                  <Link href="/events">
                    <Compass className="mr-2 h-5 w-5" />
                    Explore events
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-bluetix-primary/30 bg-bluetix-card/50 text-white hover:bg-bluetix-primary/10"
                >
                  <Link href="/events/create">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start organizing
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bluetix-primary/20 to-bluetix-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-bluetix-card/50 backdrop-blur-sm rounded-3xl p-8 border border-bluetix-primary/20">
                <Image
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
                  alt="People at a modern concert event"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-80"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Trending Events Section */}
      <section className="py-20 bg-bluetix-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-bluetix-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Trending near you
              </h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-bluetix-neon/20 text-bluetix-neon border-bluetix-neon/30">
                Tonight
              </Button>
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                This weekend
              </Button>
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                Free
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingEvents.map((event) => (
              <Card key={event.id} className="bg-bluetix-secondary border-bluetix-primary/20 overflow-hidden hover:shadow-lg hover:shadow-bluetix-primary/10 transition-all">
                <div className="relative h-48">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30">
                    {event.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.details}</p>
                    <p className="text-sm text-bluetix-primary">{event.distance}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-bluetix-neon">
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {event.attendees} going
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Organizers Section */}
      <section className="py-20 bg-bluetix-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-bluetix-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                For organizers
              </h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                Simple setup
              </Button>
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                Fast payouts
              </Button>
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                QR tickets
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-bluetix-card border-bluetix-primary/20 text-center p-4">
                <Calendar className="h-8 w-8 text-bluetix-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-sm text-muted-foreground">Active events</div>
              </Card>
              <Card className="bg-bluetix-card border-bluetix-primary/20 text-center p-4">
                <Star className="h-8 w-8 text-bluetix-neon mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1,284</div>
                <div className="text-sm text-muted-foreground">Tickets sold</div>
              </Card>
              <Card className="bg-bluetix-card border-bluetix-primary/20 text-center p-4">
                <TrendingUp className="h-8 w-8 text-bluetix-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">$24,980</div>
                <div className="text-sm text-muted-foreground">Net revenue</div>
              </Card>
            </div>
            
            {/* Action Items */}
            <div className="space-y-4">
              {organizerActions.map((action, index) => (
                <Card key={index} className="bg-bluetix-card border-bluetix-primary/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-bluetix-primary/20 rounded-full flex items-center justify-center">
                        <action.icon className="h-5 w-5 text-bluetix-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className={action.buttonStyle}
                    >
                      {action.buttonText}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
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
 * Trending events data
 */
const trendingEvents = [
  {
    id: '1',
    title: 'Neon Nights: DJ Nova',
    details: 'Fri · Pulse Club',
    distance: '1.2 km',
    price: 18,
    attendees: '120 going',
    badge: 'Tonight',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
  },
  {
    id: '2',
    title: 'Indie Waves Live',
    details: 'Sat - Harbor Hall',
    distance: '3 km',
    price: 25,
    attendees: '300 going',
    badge: 'This Weekend',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
  },
  {
    id: '3',
    title: 'Midnight Food Fest',
    details: 'Sun · City Square',
    distance: '2 km',
    price: 0,
    attendees: '1.1k going',
    badge: 'Free',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
  }
];

/**
 * Organizer actions data
 */
const organizerActions = [
  {
    title: 'Create event',
    description: 'Step-by-step in under 5 mins',
    icon: Zap,
    buttonText: 'New event',
    buttonStyle: 'bg-bluetix-primary hover:bg-bluetix-primary/90 text-white'
  },
  {
    title: 'Scan tickets',
    description: 'Use our mobile app',
    icon: Rocket,
    buttonText: 'iOS & Android',
    buttonStyle: 'bg-bluetix-neon hover:bg-bluetix-neon/90 text-white'
  },
  {
    title: 'Track performance',
    description: 'Real-time analytics',
    icon: Target,
    buttonText: 'Open analytics',
    buttonStyle: 'bg-bluetix-card border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10'
  }
];