/**
 * User Dashboard Page - Event organizer dashboard
 */

'use client';

import { useState } from 'react';
import { Calendar, Users, TrendingUp, DollarSign, Plus, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// Mock data
const stats = [
  {
    title: 'Active Events',
    value: '8',
    icon: Calendar,
    change: '+2 from last month',
    changeType: 'positive' as const
  },
  {
    title: 'Tickets Sold',
    value: '1,284',
    icon: Users,
    change: '+12% from last month',
    changeType: 'positive' as const
  },
  {
    title: 'Total Revenue',
    value: '$24,980',
    icon: DollarSign,
    change: '+8% from last month',
    changeType: 'positive' as const
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    icon: TrendingUp,
    change: '-0.1% from last month',
    changeType: 'negative' as const
  }
];

const recentEvents = [
  {
    id: '1',
    title: 'Neon Nights: DJ Nova',
    date: '2024-03-15',
    attendees: 150,
    revenue: 6750,
    status: 'active',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
  },
  {
    id: '2',
    title: 'Indie Waves Live',
    date: '2024-03-16',
    attendees: 300,
    revenue: 7500,
    status: 'active',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
  },
  {
    id: '3',
    title: 'Midnight Food Fest',
    date: '2024-03-10',
    attendees: 500,
    revenue: 0,
    status: 'completed',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
  }
];

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  return (
    <div className="min-h-screen bg-bluetix-dark">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-muted-foreground">Manage your events and track performance</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
              <Eye className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-bluetix-card border-bluetix-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className={`text-xs ${
                      stat.changeType === 'positive' ? 'text-bluetix-neon' : 'text-red-400'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-bluetix-primary/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-bluetix-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Events */}
        <Card className="bg-bluetix-card border-bluetix-primary/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Recent Events</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                All Events
              </Button>
              <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4 p-4 bg-bluetix-secondary rounded-lg">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{event.title}</h3>
                      <Badge 
                        className={
                          event.status === 'active' 
                            ? 'bg-bluetix-neon/20 text-bluetix-neon border-bluetix-neon/30'
                            : 'bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30'
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.attendees} attendees</span>
                      <span>${event.revenue.toLocaleString()} revenue</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-bluetix-card border-bluetix-primary/20">
                        <DropdownMenuItem className="text-white hover:bg-bluetix-primary/10">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Event
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-bluetix-primary/10">
                          <Users className="h-4 w-4 mr-2" />
                          View Attendees
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:bg-red-400/10">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Event
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-bluetix-card border-bluetix-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-bluetix-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="h-6 w-6 text-bluetix-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Create New Event</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start organizing your next amazing event
              </p>
              <Button className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-bluetix-card border-bluetix-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-bluetix-neon/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-bluetix-neon" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">View Analytics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Track your event performance and insights
              </p>
              <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                View Reports
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-bluetix-card border-bluetix-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-bluetix-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-bluetix-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Manage Attendees</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check-in attendees and manage registrations
              </p>
              <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                Manage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

