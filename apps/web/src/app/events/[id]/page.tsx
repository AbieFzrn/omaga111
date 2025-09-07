/**
 * Event Details & Ticket Purchase Page
 */

'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Share, Save, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EventDetailsPage() {
  const [selectedTickets, setSelectedTickets] = useState({
    general: 1,
    vip: 0,
    backstage: 0
  });
  const [showPassword, setShowPassword] = useState(false);

  const ticketTypes = [
    {
      id: 'general',
      name: 'General Admission',
      price: 45,
      description: 'Standing • 18+',
      quantity: selectedTickets.general,
      setQuantity: (qty: number) => setSelectedTickets(prev => ({ ...prev, general: qty }))
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 95,
      description: 'Balcony + Lounge',
      quantity: selectedTickets.vip,
      setQuantity: (qty: number) => setSelectedTickets(prev => ({ ...prev, vip: qty }))
    },
    {
      id: 'backstage',
      name: 'Backstage Pass',
      price: 180,
      description: 'Meet & Greet',
      quantity: selectedTickets.backstage,
      setQuantity: (qty: number) => setSelectedTickets(prev => ({ ...prev, backstage: qty }))
    }
  ];

  const subtotal = (selectedTickets.general * 45) + (selectedTickets.vip * 95) + (selectedTickets.backstage * 180);
  const fees = subtotal * 0.124; // 12.4% fees
  const taxes = subtotal * 0.075; // 7.5% tax
  const total = subtotal + fees + taxes;

  return (
    <div className="min-h-screen bg-bluetix-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Ticket details</CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Review event info and customize your ticket. Pay on the next step.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                
                {/* Event Image */}
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
                    alt="Hyperwave Tour: Neon Nights"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30">
                    Fri • 9:00 PM
                  </Badge>
                </div>

                {/* Event Title */}
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Hyperwave Tour: Neon Nights</h1>
                  <p className="text-bluetix-primary">Brooklyn Mirage • NYC</p>
                </div>

                {/* Event Description */}
                <div>
                  <Label className="text-white font-semibold">Event Description</Label>
                  <div className="mt-2 bg-bluetix-secondary rounded-lg p-4 min-h-[100px]">
                    <p className="text-muted-foreground">
                      Experience the future of electronic music with cutting-edge visuals and immersive soundscapes. 
                      Join us for an unforgettable night of neon lights, pulsating beats, and mind-bending performances 
                      that will transport you to another dimension.
                    </p>
                  </div>
                </div>

                {/* Event Information */}
                <div>
                  <Label className="text-white font-semibold">Event information</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-bluetix-primary/20">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-bluetix-primary" />
                        <span className="text-white">Date</span>
                      </div>
                      <span className="text-muted-foreground">Fri, Aug 22 • Doors 7:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-bluetix-primary/20">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-bluetix-primary" />
                        <span className="text-white">Venue</span>
                      </div>
                      <span className="text-muted-foreground">Brooklyn Mirage, 140 Stewart Ave, Brooklyn, NY</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-bluetix-primary/20">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-bluetix-primary" />
                        <span className="text-white">Set times</span>
                      </div>
                      <span className="text-muted-foreground">Opener 9:00 • Headliner 10:30</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-bluetix-primary" />
                        <span className="text-white">Policy</span>
                      </div>
                      <span className="text-muted-foreground">18+ • Gov ID required • No re-entry • Clear bag policy</span>
                    </div>
                  </div>
                </div>

                {/* Purchase Information */}
                <div>
                  <Label className="text-white font-semibold">Purchase Information</Label>
                  <div className="mt-2 space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-muted-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Fees & Totals */}
                <div className="bg-bluetix-secondary rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Fees & Totals</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">General Admission x {selectedTickets.general}</span>
                      <span className="text-white">${(selectedTickets.general * 45).toFixed(2)}</span>
                    </div>
                    {selectedTickets.vip > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">VIP x {selectedTickets.vip}</span>
                        <span className="text-white">${(selectedTickets.vip * 95).toFixed(2)}</span>
                      </div>
                    )}
                    {selectedTickets.backstage > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Backstage Pass x {selectedTickets.backstage}</span>
                        <span className="text-white">${(selectedTickets.backstage * 180).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service fees</span>
                      <span className="text-white">${fees.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated tax</span>
                      <span className="text-white">${taxes.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-bluetix-primary/20 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Estimated total</span>
                        <span className="text-bluetix-neon font-bold text-lg">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Ticket Selection */}
          <div className="lg:col-span-1">
            <Card className="bg-bluetix-card border-bluetix-primary/20 sticky top-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Your selection</CardTitle>
                <Badge className="bg-bluetix-accent/20 text-bluetix-accent border-bluetix-accent/30">
                  Step 1 of 2
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                
                {/* Ticket Types */}
                <div className="space-y-4">
                  {ticketTypes.map((ticket) => (
                    <div key={ticket.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{ticket.name}</h4>
                          <p className="text-sm text-muted-foreground">{ticket.description}</p>
                        </div>
                        <div className="text-bluetix-neon font-bold">${ticket.price}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => ticket.setQuantity(Math.max(0, ticket.quantity - 1))}
                          className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10"
                        >
                          -
                        </Button>
                        <span className="text-white font-semibold min-w-[2rem] text-center">
                          {ticket.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => ticket.setQuantity(ticket.quantity + 1)}
                          className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal */}
                <div className="space-y-2 pt-4 border-t border-bluetix-primary/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Fees</span>
                    <span className="text-white">${fees.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes</span>
                    <span className="text-white">${taxes.toFixed(2)}</span>
                  </div>
                </div>

                {/* Go to Payment Button */}
                <Button 
                  className="w-full bg-bluetix-primary hover:bg-bluetix-primary/90 text-white py-3"
                  size="lg"
                >
                  Go to payment
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  You'll confirm and pay on the next page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-bluetix-card border-t border-bluetix-primary/20 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-bluetix-neon rounded-full animate-pulse"></div>
              <span className="text-sm text-white">Secure process</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Tickets held for 09:58
            </div>
            <Button variant="outline" size="sm" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
              Need help?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

