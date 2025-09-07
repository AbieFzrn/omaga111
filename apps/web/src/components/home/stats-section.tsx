/**
 * Stats Section component - displays platform statistics
 */

import { Users, Calendar, MapPin, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'Event organizers and attendees'
  },
  {
    icon: Calendar,
    value: '2,500+',
    label: 'Events Created',
    description: 'Successfully hosted events'
  },
  {
    icon: MapPin,
    value: '150+',
    label: 'Cities',
    description: 'Events across the globe'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Rating',
    description: 'Average user satisfaction'
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-bluetix-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Trusted by Event Organizers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of organizers who trust BlueTix for their event management needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-bluetix-primary/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-bluetix-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

