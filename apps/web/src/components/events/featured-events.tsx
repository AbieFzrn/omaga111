/**
 * Featured Events component - displays a grid of featured events
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

// Mock data - replace with actual API call
const featuredEvents = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year',
    date: '2024-03-15',
    location: 'San Francisco, CA',
    price: 299,
    currency: 'USD',
    attendees: 150,
    maxAttendees: 200,
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Design Workshop',
    description: 'Learn modern design principles and tools',
    date: '2024-03-20',
    location: 'New York, NY',
    price: 0,
    currency: 'USD',
    attendees: 45,
    maxAttendees: 50,
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    category: 'Design'
  },
  {
    id: '3',
    title: 'Startup Networking',
    description: 'Connect with fellow entrepreneurs and investors',
    date: '2024-03-25',
    location: 'Austin, TX',
    price: 49,
    currency: 'USD',
    attendees: 89,
    maxAttendees: 100,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    category: 'Business'
  }
];

export function FeaturedEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredEvents.map((event) => (
        <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-bluetix-card border-bluetix-primary/20">
          <div className="relative h-48">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-3 left-3 bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30">
              {event.category}
            </Badge>
          </div>
          
          <CardHeader>
            <CardTitle className="text-lg line-clamp-2 text-white">{event.title}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{event.attendees}/{event.maxAttendees} attendees</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-bluetix-neon">
                {event.price === 0 ? 'Free' : `$${event.price}`}
              </div>
              <Button asChild size="sm" className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                <Link href={`/events/${event.id}`}>
                  View Details
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

