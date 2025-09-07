/**
 * User Profile Page - Account settings and preferences
 */

'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Settings, Bell, Shield, CreditCard, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Event organizer and music enthusiast. Love creating memorable experiences for people.',
    joinDate: '2024-01-15'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-bluetix-dark">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-bluetix-card border-bluetix-primary/20">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-bluetix-primary/20 text-bluetix-primary'
                          : 'text-muted-foreground hover:text-white hover:bg-bluetix-primary/10'
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <Card className="bg-bluetix-card border-bluetix-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white">Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Profile Picture */}
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-bluetix-primary/20 rounded-full flex items-center justify-center">
                          <User className="h-12 w-12 text-bluetix-primary" />
                        </div>
                        <Button
                          size="sm"
                          className="absolute -bottom-2 -right-2 bg-bluetix-primary hover:bg-bluetix-primary/90 text-white rounded-full w-8 h-8 p-0"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{profileData.name}</h3>
                        <p className="text-muted-foreground">Event Organizer</p>
                        <Badge className="bg-bluetix-neon/20 text-bluetix-neon border-bluetix-neon/30 mt-2">
                          Pro Member
                        </Badge>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                          className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                          className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                          className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location" className="text-white">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                          className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio" className="text-white">Bio</Label>
                      <textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                        rows={4}
                        className="mt-1 w-full bg-bluetix-secondary border border-bluetix-primary/30 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bluetix-primary"
                      />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {new Date(profileData.joinDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                        Save Changes
                      </Button>
                      <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <Card className="bg-bluetix-card border-bluetix-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      { label: 'Email notifications', description: 'Receive updates about your events via email' },
                      { label: 'Push notifications', description: 'Get instant notifications on your device' },
                      { label: 'SMS alerts', description: 'Important updates sent to your phone' },
                      { label: 'Marketing emails', description: 'Promotional content and new features' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">{item.label}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-bluetix-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-bluetix-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bluetix-primary"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <Card className="bg-bluetix-card border-bluetix-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white">Change Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="current-password" className="text-white">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password" className="text-white">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password" className="text-white">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="mt-1 bg-bluetix-secondary border-bluetix-primary/30 text-white"
                      />
                    </div>
                    <Button className="bg-bluetix-primary hover:bg-bluetix-primary/90 text-white">
                      Update Password
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-bluetix-card border-bluetix-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Enable 2FA</h4>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                        Enable
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <Card className="bg-bluetix-card border-bluetix-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white">Billing Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Current Plan</h4>
                        <p className="text-sm text-muted-foreground">Pro Plan - $29/month</p>
                      </div>
                      <Badge className="bg-bluetix-neon/20 text-bluetix-neon border-bluetix-neon/30">
                        Active
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                        Change Plan
                      </Button>
                      <Button variant="outline" className="border-bluetix-primary/30 text-white hover:bg-bluetix-primary/10">
                        Update Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-bluetix-card border-bluetix-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white">Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { date: '2024-03-01', amount: '$29.00', status: 'Paid' },
                        { date: '2024-02-01', amount: '$29.00', status: 'Paid' },
                        { date: '2024-01-01', amount: '$29.00', status: 'Paid' }
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-bluetix-primary/20 last:border-b-0">
                          <div>
                            <p className="text-white">{new Date(payment.date).toLocaleDateString()}</p>
                            <p className="text-sm text-muted-foreground">Pro Plan</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">{payment.amount}</p>
                            <Badge className="bg-bluetix-neon/20 text-bluetix-neon border-bluetix-neon/30 text-xs">
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

