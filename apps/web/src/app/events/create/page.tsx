/**
 * Create Event Page - Event creation form
 */

'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, DollarSign, Upload, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: '',
    maxAttendees: '',
    price: '',
    imageUrl: ''
  });

  const [ticketTypes, setTicketTypes] = useState([
    { id: 1, name: 'General Admission', price: 0, quantity: 100 }
  ]);

  const categories = ['Music', 'Festival', 'Comedy', 'Sports', 'Theatre', 'Conference', 'Workshop', 'Other'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTicketType = () => {
    setTicketTypes(prev => [...prev, {
      id: Date.now(),
      name: '',
      price: 0,
      quantity: 100
    }]);
  };

  const removeTicketType = (id: number) => {
    setTicketTypes(prev => prev.filter(ticket => ticket.id !== id));
  };

  const updateTicketType = (id: number, field: string, value: string | number) => {
    setTicketTypes(prev => prev.map(ticket => 
      ticket.id === id ? { ...ticket, [field]: value } : ticket
    ));
  };

  return (
    <div className="min-h-screen bg-bluetix-dark">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Create New Event</h1>
          <p className="text-muted-foreground">Fill in the details to create your event</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Basic Information */}
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Event Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter event title"
                    className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    placeholder="Describe your event..."
                    className="mt-1 w-full bg-bluetix-secondary border border-bluetix-primary/30 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bluetix-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-white">Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="mt-1 w-full bg-bluetix-secondary border border-bluetix-primary/30 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bluetix-primary"
                  >
                    <option value="">Select category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Date & Time */}
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Date & Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-white">Event Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-white">Start Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="location" className="text-white">Venue Address</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Enter venue address"
                    className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Ticket Types */}
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Ticket Types</CardTitle>
                <Button
                  onClick={addTicketType}
                  size="sm"
                  className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Ticket Type
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {ticketTypes.map((ticket) => (
                  <div key={ticket.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-bluetix-secondary rounded-lg">
                    <div>
                      <Label className="text-white text-sm">Name</Label>
                      <Input
                        value={ticket.name}
                        onChange={(e) => updateTicketType(ticket.id, 'name', e.target.value)}
                        placeholder="Ticket name"
                        className="mt-1 bg-bluetix-dark border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white text-sm">Price ($)</Label>
                      <Input
                        type="number"
                        value={ticket.price}
                        onChange={(e) => updateTicketType(ticket.id, 'price', parseFloat(e.target.value) || 0)}
                        placeholder="0"
                        className="mt-1 bg-bluetix-dark border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white text-sm">Quantity</Label>
                      <Input
                        type="number"
                        value={ticket.quantity}
                        onChange={(e) => updateTicketType(ticket.id, 'quantity', parseInt(e.target.value) || 0)}
                        placeholder="100"
                        className="mt-1 bg-bluetix-dark border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div className="flex items-end">
                      {ticketTypes.length > 1 && (
                        <Button
                          onClick={() => removeTicketType(ticket.id)}
                          variant="outline"
                          size="sm"
                          className="border-red-400/30 text-red-400 hover:bg-red-400/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Event Image */}
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Event Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="imageUrl" className="text-white">Image URL</Label>
                    <Input
                      id="imageUrl"
                      value={formData.imageUrl}
                      onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                    />
                  </div>
                  <div className="border-2 border-dashed border-bluetix-primary/30 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-bluetix-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Upload event image</p>
                    <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                      Choose File
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-bluetix-card border-bluetix-primary/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white">Event Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-full h-32 bg-bluetix-secondary rounded-lg mb-4 flex items-center justify-center">
                    {formData.imageUrl ? (
                      <img
                        src={formData.imageUrl}
                        alt="Event preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Calendar className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {formData.title || 'Event Title'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {formData.description || 'Event description will appear here...'}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-bluetix-primary" />
                    <span className="text-muted-foreground">
                      {formData.date ? new Date(formData.date).toLocaleDateString() : 'Select date'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-bluetix-primary" />
                    <span className="text-muted-foreground">
                      {formData.time || 'Select time'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-bluetix-primary" />
                    <span className="text-muted-foreground">
                      {formData.location || 'Enter location'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-bluetix-primary/20">
                  <h4 className="text-white font-semibold mb-2">Ticket Types</h4>
                  <div className="space-y-2">
                    {ticketTypes.map((ticket) => (
                      <div key={ticket.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ticket.name || 'Ticket name'}</span>
                        <span className="text-bluetix-neon">${ticket.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                    Create Event
                  </Button>
                  <Button variant="outline" className="w-full mt-2 border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

