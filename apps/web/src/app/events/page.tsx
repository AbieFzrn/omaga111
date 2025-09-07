/**
 * Events Discovery Page - Main events listing with filters and search
 */

'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Users, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// Mock data for events
const events = [
  {
    id: '1',
    title: 'Hyperwave Tour: Neon Nights',
    description: 'Experience the future of electronic music with cutting-edge visuals and immersive soundscapes.',
    date: '2024-03-15',
    time: '8:00 PM',
    location: 'Brooklyn Mirage • NYC',
    price: 45,
    currency: 'USD',
    attendees: 150,
    maxAttendees: 200,
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    category: 'Music',
    badge: 'Tonight',
    distance: '1.2 km'
  },
  {
    id: '2',
    title: 'BlueCity Summer Fest',
    description: 'A vibrant celebration of summer with live music, food trucks, and outdoor activities.',
    date: '2024-03-16',
    time: '2:00 PM',
    location: 'Central Park • NYC',
    price: 0,
    currency: 'USD',
    attendees: 500,
    maxAttendees: 1000,
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    category: 'Festival',
    badge: 'This Weekend',
    distance: '2.5 km'
  },
  {
    id: '3',
    title: 'Laugh Lab: Late Night',
    description: 'Comedy show featuring up-and-coming comedians in an intimate setting.',
    date: '2024-03-17',
    time: '10:30 PM',
    location: 'Laugh House • SoHo',
    price: 18,
    currency: 'USD',
    attendees: 45,
    maxAttendees: 80,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    category: 'Comedy',
    badge: 'Fri, Sep 20',
    distance: '0.8 km'
  },
  {
    id: '4',
    title: 'Streetball Showdown',
    description: 'Intense basketball tournament featuring local teams and streetball legends.',
    date: '2024-03-18',
    time: '6:00 PM',
    location: 'Pier 36 • NYC',
    price: 25,
    currency: 'USD',
    attendees: 89,
    maxAttendees: 150,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    category: 'Sports',
    badge: 'This Weekend',
    distance: '3.2 km'
  },
  {
    id: '5',
    title: 'Shadows of Verona',
    description: 'A modern interpretation of Shakespeare\'s classic tale with stunning visuals.',
    date: '2024-03-19',
    time: '7:30 PM',
    location: 'Regent Theatre • NYC',
    price: 35,
    currency: 'USD',
    attendees: 120,
    maxAttendees: 200,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    category: 'Theatre',
    badge: 'This Weekend',
    distance: '1.8 km'
  },
  {
    id: '6',
    title: 'Midnight Pulse: Rooftop',
    description: 'Exclusive rooftop party with top DJs and panoramic city views.',
    date: '2024-03-20',
    time: '11:00 PM',
    location: 'Skyline Rooftop • NYC',
    price: 28,
    currency: 'USD',
    attendees: 75,
    maxAttendees: 100,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    category: 'Music',
    badge: 'Tonight',
    distance: '2.1 km'
  }
];

const categories = ['All', 'Concerts', 'Festivals', 'Comedy', 'Sports', 'Theatre'];
const timeFilters = ['Anytime', 'Today', 'This weekend', 'Next week'];
const preferences = ['21+ only', 'Free events', 'Outdoor'];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTime, setSelectedTime] = useState('Anytime');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const togglePreference = (pref: string) => {
    setSelectedPreferences(prev => 
      prev.includes(pref) 
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };

  return (
    <div className="min-h-screen bg-bluetix-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-bluetix-card rounded-lg p-6 space-y-6">
              
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={`w-full justify-start ${
                        selectedCategory === category 
                          ? 'bg-bluetix-primary text-white' 
                          : 'border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* When */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">When</h3>
                <div className="space-y-2">
                  {timeFilters.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      className={`w-full justify-start ${
                        selectedTime === time 
                          ? 'bg-bluetix-primary text-white' 
                          : 'border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Price</h3>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}+
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-bluetix-secondary rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
                <div className="space-y-3">
                  {preferences.map((pref) => (
                    <label key={pref} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPreferences.includes(pref)}
                        onChange={() => togglePreference(pref)}
                        className="w-4 h-4 text-bluetix-primary bg-bluetix-secondary border-bluetix-primary/30 rounded focus:ring-bluetix-primary focus:ring-2"
                      />
                      <span className="text-sm text-white">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Discover events near you</h1>
                  <p className="text-muted-foreground">Curated picks with neon vibes. Explore by category, time, and price.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                    <MapPin className="h-4 w-4 mr-2" />
                    Map
                  </Button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search events, artists, venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-bluetix-card border-bluetix-primary/30 text-white placeholder:text-muted-foreground focus:border-bluetix-primary"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 mb-6">
                <Button variant="outline" size="sm" className="bg-bluetix-neon/20 text-bluetix-neon border-bluetix-neon/30">
                  Trending
                </Button>
                <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                  Nearby
                </Button>
                <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                  For you
                </Button>
                <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                  Map
                </Button>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="bg-bluetix-secondary border-bluetix-primary/20 overflow-hidden hover:shadow-lg hover:shadow-bluetix-primary/10 transition-all group">
                  <div className="relative h-48">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30">
                      {event.badge}
                    </Badge>
                    <div className="absolute top-3 right-3 bg-bluetix-dark/80 text-white text-xs px-2 py-1 rounded">
                      {event.distance}
                    </div>
                  </div>
                  
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} going</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-lg font-bold text-bluetix-neon">
                        {event.price === 0 ? 'Free' : `$${event.price}`}
                      </div>
                      <Button size="sm" className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                Load More Events
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Map Section */}
        <div className="mt-12 bg-bluetix-card rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <Badge variant="outline" className="border-bluetix-primary/30 text-white">Showing: All categories</Badge>
              <Badge variant="outline" className="border-bluetix-primary/30 text-white">NYC, 10 mi</Badge>
              <Badge variant="outline" className="border-bluetix-primary/30 text-white">Any price</Badge>
              <Badge variant="outline" className="border-bluetix-primary/30 text-white">Dates: This month</Badge>
            </div>
            <div className="text-sm text-muted-foreground">12 results</div>
          </div>
          
          {/* Map Placeholder */}
          <div className="h-64 bg-bluetix-secondary rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-bluetix-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

