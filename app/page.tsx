import React from "react";

import {
  CreditCard,
  ArrowRight,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Star,
  CheckCircle,
  Globe,
  Target,
  Heart,
  Quote,
} from "lucide-react";

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
    outline:
      "border border-input hover:bg-accent hover:text-accent-foreground border-gray-300 text-gray-700 hover:bg-gray-50",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-white text-purple-600 hover:bg-gray-50",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
  >
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
  >
    {children}
  </h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-muted-foreground text-gray-600">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-0">{children}</div>
);

const Link = ({ href, children, className = "" }) => (
  <a href={href} className={`transition-colors ${className}`}>
    {children}
  </a>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Rewaire
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link href="#mission" className="text-gray-600 hover:text-gray-900">
              Mission
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900"
            >
              Reviews
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            🚀 Now Live - Join the Cashback Revolution
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Buy & Sell Cashback Cards Like Never Before
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The first peer-to-peer marketplace for coupons and cashback cards.
            Turn your unused rewards into cash or discover amazing deals from
            other users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Start Selling <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Deals
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-8">
              Trusted by thousands of users worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$2M+</div>
              <div className="text-gray-600">Cards Traded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Big Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Unused Cards Into Real Money
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Stop letting your cashback cards collect dust. Our platform makes it
            simple to monetize your rewards and discover incredible savings from
            other users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">Average 85%</div>
              <div className="opacity-90">Return on card value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">Under 5 min</div>
              <div className="opacity-90">Average transaction time</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Two Column Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                For Sellers: Turn Cards Into Cash
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Instant Monetization</h4>
                    <p className="text-gray-600">
                      Convert your unused cashback cards into real money within
                      minutes of listing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Fair Market Pricing</h4>
                    <p className="text-gray-600">
                      Set your own prices and get the value you deserve for your
                      rewards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Zero Risk</h4>
                    <p className="text-gray-600">
                      Secure escrow system protects both buyers and sellers
                      throughout the transaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                For Buyers: Maximum Savings
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Unbeatable Discounts</h4>
                    <p className="text-gray-600">
                      Access cashback cards at significant discounts from face
                      value
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Verified Authenticity
                    </h4>
                    <p className="text-gray-600">
                      All cards are verified before listing to ensure they're
                      legitimate and active
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Instant Access</h4>
                    <p className="text-gray-600">
                      Get your purchased cards immediately and start saving
                      right away
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stylised Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Rewaire?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it simple, secure, and profitable to trade cashback cards
              and coupons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Instant Cash</CardTitle>
                <CardDescription>
                  Convert your unused cashback cards into real money within
                  minutes
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Secure Transactions</CardTitle>
                <CardDescription>
                  Bank-level security with escrow protection for all
                  transactions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Best Rates</CardTitle>
                <CardDescription>
                  Competitive pricing with transparent fees and no hidden
                  charges
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Verified Community</CardTitle>
                <CardDescription>
                  All users are verified with ratings and reviews for trust
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Quick listing process and instant notifications for new deals
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Premium Support</CardTitle>
                <CardDescription>
                  24/7 customer support to help with any questions or issues
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Features */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to start trading
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Sellers */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-purple-600">
                For Sellers
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">List Your Card</h4>
                    <p className="text-gray-600">
                      Upload photos and details of your cashback card or coupon
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Set Your Price</h4>
                    <p className="text-gray-600">
                      Choose your selling price and pay a small listing fee
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Get Paid</h4>
                    <p className="text-gray-600">
                      Receive payment instantly when a buyer purchases your card
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Buyers */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-blue-600">
                For Buyers
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Browse Deals</h4>
                    <p className="text-gray-600">
                      Explore thousands of cashback cards and coupons
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Secure Purchase</h4>
                    <p className="text-gray-600">
                      Buy with confidence using our secure payment system
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Enjoy Savings</h4>
                    <p className="text-gray-600">
                      Use your purchased cards and enjoy the cashback benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Mission */}
      <section id="mission" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We believe everyone should get maximum value from their rewards.
              Too many cashback cards and coupons go unused, while others miss
              out on great savings. Rewaire bridges this gap by creating a
              trusted marketplace where value flows freely between users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-gray-600">
                  Making rewards accessible to everyone, everywhere
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Maximum Value</h3>
                <p className="text-gray-600">
                  Ensuring every reward reaches its full potential
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Community First</h3>
                <p className="text-gray-600">
                  Building trust and relationships that last
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from our satisfied community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <CardDescription className="text-base">
                  "I had over $500 in unused gift cards sitting in my drawer.
                  Rewaire helped me turn them into cash in just 2 days. The
                  process was incredibly smooth!"
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Verified Seller</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <CardDescription className="text-base">
                  "As a frequent shopper, I love finding discounted gift cards
                  on Rewaire. I've saved hundreds of dollars on my regular
                  purchases. Highly recommended!"
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Mike Chen</div>
                  <div className="text-sm text-gray-500">Power Buyer</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <CardDescription className="text-base">
                  "The security features gave me confidence to trade high-value
                  cards. The escrow system works perfectly and customer support
                  is always helpful."
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Emily Rodriguez</div>
                  <div className="text-sm text-gray-500">Active Trader</div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already making money with their
            unused cashback cards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary">
              Create Account <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">
                    For Sellers
                  </CardTitle>
                  <div className="text-3xl font-bold">$2.99</div>
                  <div className="opacity-80">per listing</div>
                  <Button className="w-full mt-4 bg-white text-purple-600 hover:bg-gray-100">
                    Start Selling
                  </Button>
                </CardHeader>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">
                    For Buyers
                  </CardTitle>
                  <div className="text-3xl font-bold">Free</div>
                  <div className="opacity-80">to browse and buy</div>
                  <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-gray-100">
                    Start Buying
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Rewaire</span>
              </div>
              <p className="text-gray-400">
                The trusted marketplace for cashback cards and coupons.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Rewaire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
