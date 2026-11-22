import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Award, 
  Gift, 
  Search, 
  X, 
  ChevronRight, 
  Star, 
  Menu, 
  Check, 
  ExternalLink
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string[];
  inStock: boolean;
  tag?: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Royal Italian Crystal Bridal Set",
    category: "Bridal Collection",
    price: 385000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.11_AM_4b21b15b.jpeg",
    description: "An awe-inspiring heavy crystal-studded bridal necklace and matching drop earrings set designed to captivate at traditional and white weddings.",
    details: ["Premium Handset Crystal Stones", "Tarnish-Resistant & Hypoallergenic", "Includes necklace and drop earrings", "Comes in a luxury velvet gift box"],
    inStock: true,
    tag: "Bestseller"
  },
  {
    id: '2',
    name: "Welady Textured Gold Geometric Earrings",
    category: "Everyday Minimalist",
    price: 45000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.10_AM_01748a1b.jpeg",
    description: "Sleek architectural mesh-textured gold earrings by Welady. Lightweight, chic, and perfect for both casual outings and office wear.",
    details: ["Welady Designer Collection", "18k Gold Plated Finish", "Secure push-back fastening", "Tarnish-resistant coating"],
    inStock: true,
    tag: "Trending"
  },
  {
    id: '3',
    name: "Multicolor Crystal Floral Gold Leaf Set",
    category: "18k Gold Sets",
    price: 165000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.08_AM_deb755dc.jpeg",
    description: "Stunning handcrafted gold leaf necklace paired with colorful crystal accents, matching earrings, and a delicate bracelet.",
    details: ["Complete 3-piece jewelry set", "Enamel and crystal detailing", "Adjustable necklace length", "Luxurious presentation box"],
    inStock: true,
    tag: "New Arrival"
  },
  {
    id: '4',
    name: "Luxury Clover & Nail Bangle Stack",
    category: "Diamond Pendants",
    price: 125000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.05_AM__2__c4d5eeb0.jpeg",
    description: "A gorgeous stacked trio featuring the iconic nail bangle, black clover station bracelet, and engraved luxury cuff.",
    details: ["High-polish 18k gold plating", "Scratch-resistant ceramic/enamel inlay", "Stackable matching trio", "Hypoallergenic steel base"],
    inStock: true,
    tag: "Popular"
  },
  {
    id: '5',
    name: "Black Clover Signature Box Set",
    category: "Bridal Collection",
    price: 210000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.05_AM__1__2e97a0cc.jpeg",
    description: "Complete black clover luxury set featuring necklace, statement earrings, matching ring, and bracelet in our signature orange gift box.",
    details: ["Complete 4-piece clover set", "18k Gold vermeil with onyx inlay", "Includes luxury gift box", "Celebrity favorite style"],
    inStock: true,
    tag: "Exclusive"
  },
  {
    id: '6',
    name: "Lookworld Luxury Couple Watches",
    category: "Traditional Royalty",
    price: 195000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.05_AM_7e72fe13.jpeg",
    description: "Matching Lookworld luxury couple timepieces with faceted bezel dials, gold-and-silver dual-tone straps, and precision quartz movement.",
    details: ["His & Hers matching watches", "Precision quartz movement", "Dual-tone gold and silver steel", "Water resistant for daily wear"],
    inStock: true,
    tag: "Couple Set"
  },
  {
    id: '7',
    name: "Welady Floral Crystal Designer Studs",
    category: "Everyday Minimalist",
    price: 52000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.04_AM__1__db60173c.jpeg",
    description: "Exquisite Welady crystal flower cluster earrings in delightful pastel pink and purple hues surrounded by enamel petals.",
    details: ["Authentic Welady brand", "Handset multi-color crystals", "Lightweight comfortable wear", "Ideal gift packaging"],
    inStock: true
  },
  {
    id: '8',
    name: "Royal Nautilus Gold Wristwatches",
    category: "Traditional Royalty",
    price: 115000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.04_AM_72caa97c.jpeg",
    description: "Bold octagonal bezel luxury wristwatches in royal blue, champagne gold, and obsidian black dials with structured gold bracelets.",
    details: ["Textured dial finish with date indicator", "Solid stainless steel gold-plated band", "Scratch-proof mineral glass", "Sophisticated executive styling"],
    inStock: true
  },
  {
    id: '9',
    name: "Grand Gold Fan-Shell Statement Set",
    category: "Traditional Royalty",
    price: 290000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.02_AM_2764e4dd.jpeg",
    description: "Breathtaking architectural fan-shell gold necklace and matching bracelet set designed for traditional weddings and grand Owambes.",
    details: ["Statement Nigerian traditional wear", "Heavy 18k gold electroplating", "Textured fan-shell motif", "Unmatched royal presence"],
    inStock: true,
    tag: "Traditional Royalty"
  },
  {
    id: '10',
    name: "Patek Philippe Geneva Men's Luxury Watch",
    category: "Diamond Pendants",
    price: 340000,
    image: "/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.01_AM_b3a8a0d6.jpeg",
    description: "Prestige men's chronograph wristwatch with black dial, rose gold case, sub-dials, and genuine brown leather strap.",
    details: ["Chronograph function with date", "Genuine leather brown strap", "Rose gold polished steel case", "Luxury presentation box included"],
    inStock: true,
    tag: "Men's Luxury"
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Collections");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);
  const [mapModalOpen, setMapModalOpen] = useState<boolean>(false);
  
  // Checkout form state
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [customerAddress, setCustomerAddress] = useState<string>("");
  const [customerCity, setCustomerCity] = useState<string>("Port Harcourt");
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  // Reviews state
  const [reviews, setReviews] = useState([
    { name: "Chioma Okoro", location: "GRA Phase 2, Port Harcourt", rating: 5, date: "2 days ago", comment: "Mandy's Jewelry is simply unmatched in Port Harcourt! Ordered the Italian gold bridal set for my traditional wedding and everyone kept asking where I got it. Super fast delivery too!" },
    { name: "Blessing Edet", location: "Rumuola, Port Harcourt", rating: 5, date: "1 week ago", comment: "The quality is top-tier. I've worn my layered gold necklace for months now swimming and bathing with it, zero fading! True luxury." },
    { name: "Dr. Ngozi Adeleke", location: "Abuja", rating: 5, date: "2 weeks ago", comment: "Ordered online and it arrived via GIGM in Abuja within 48 hours securely boxed in gorgeous velvet packaging. Will definitely buy more!" }
  ]);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewLocation, setNewReviewLocation] = useState("");
  const [newReviewComment, setNewReviewComment] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const categories = ["All Collections", "18k Gold Sets", "Diamond Pendants", "Bridal Collection", "Everyday Minimalist", "Traditional Royalty"];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === "All Collections" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const handleWhatsAppCheckout = () => {
    const summary = cart.map(i => `• ${i.quantity}x ${i.product.name} (${formatNaira(i.product.price * i.quantity)})`).join('\n');
    const text = `Hello Mandy's Jewelry! 🌟\n\nI want to order:\n${summary}\n\n*Total:* ${formatNaira(cartTotal)}`;
    window.open(`https://wa.me/2348069049707?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) return;

    const orderSummary = cart.map(item => `• ${item.quantity}x ${item.product.name} (${formatNaira(item.product.price * item.quantity)})`).join('\n');
    const totalText = formatNaira(cartTotal);
    const text = `Hello Mandy's Jewelry! 🌟\n\nI would like to place an order:\n${orderSummary}\n\n*Total:* ${totalText}\n\n*Customer Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Delivery Address:* ${customerAddress}, ${customerCity}\n\nPlease confirm availability and delivery!`;
    
    window.open(`https://wa.me/2348069049707?text=${encodeURIComponent(text)}`, '_blank');
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutModalOpen(false);
      setOrderSuccess(false);
      setIsCartOpen(false);
    }, 3000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName || !newReviewComment) return;
    setReviews([{
      name: newReviewName,
      location: newReviewLocation || "Port Harcourt",
      rating: 5,
      date: "Just now",
      comment: newReviewComment
    }, ...reviews]);
    setNewReviewName("");
    setNewReviewLocation("");
    setNewReviewComment("");
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactMessage) return;
    setContactSent(true);
    setTimeout(() => {
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setContactSent(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1c1c] selection:bg-[#d4af37]/30">
      
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-[#1c1c1c] text-[#f4f1ea] py-2 px-4 text-xs font-medium tracking-wider text-center flex items-center justify-center gap-4">
        <span>✨ FREE Delivery across Port Harcourt on orders above ₦100,000</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">Nationwide Express Delivery via GIGM & DHL</span>
        <span className="hidden md:inline">·</span>
        <a href="https://wa.me/2348069049707" target="_blank" rel="noreferrer" className="underline hover:text-[#d4af37] transition-colors">
          Chat on WhatsApp: 0806 904 9707
        </a>
      </div>

      {/* HEADER / TOP NAVIGATION (Strict 3-zone contract) */}
      <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e5e0d8] px-6 lg:px-12 py-4 flex items-center justify-between gap-8 transition-all">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <span className="text-2xl font-serif font-bold tracking-tight text-[#1c1c1c] group-hover:text-[#9c7c1c] transition-colors">
            Mandy's Jewelry
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#d4af37] text-[#9c7c1c] rounded-full font-semibold">
            Port Harcourt
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4a4a4a]">
          <a href="#hero" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Home</a>
          <a href="#story" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Our Story</a>
          <a href="#collections" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Collections</a>
          <a href="#catalog" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Catalog (₦)</a>
          <a href="#promise" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Why Us</a>
          <a href="#reviews" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Reviews</a>
          <a href="#contact" className="hover:text-[#1c1c1c] transition-colors whitespace-nowrap shrink-0">Contact</a>
        </nav>

        {/* Zone 3: Primary Action & Cart */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
            className="relative p-2.5 rounded-full bg-[#f0ece1] hover:bg-[#e8e2d2] text-[#1c1c1c] transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-semibold">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#1c1c1c] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartItemCount}
              </span>
            )}
          </button>

          <a 
            href="https://wa.me/2348069049707?text=Hello%20Mandy's%20Jewelry,%20I%20want%20to%20inquire%20about%20your%20luxury%20pieces." 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1c1c1c] hover:bg-[#333333] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>WhatsApp 08069049707</span>
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-[#f0ece1] text-[#1c1c1c]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf9f6] border-b border-[#e5e0d8] px-6 py-6 space-y-4 animate-fade-in shadow-xl z-30 relative">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Home</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Our Story</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Collections</a>
            <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Catalog (₦ Pricing)</a>
            <a href="#promise" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Why Us</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Customer Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9c7c1c]">Showroom & Contact</a>
          </nav>
          <div className="pt-4 border-t border-[#e5e0d8]">
            <a 
              href="https://wa.me/2348069049707?text=Hello%20Mandy's%20Jewelry" 
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#1c1c1c] rounded-lg"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
              <span>Chat on WhatsApp: 0806 904 9707</span>
            </a>
          </div>
        </div>
      )}

      {/* ==================== SECTION 1: HERO SECTION ==================== */}
      <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white px-6 lg:px-16 py-20">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.05_AM__1__2e97a0cc.jpeg" 
            alt="Mandy's Jewelry Luxury Showcase" 
            className="w-full h-full object-cover object-center opacity-70 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content on Top of Image */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-widest uppercase text-[#d4af37] font-semibold">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Port Harcourt's Premier Luxury Jewelry Destination</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto text-balance">
            Timeless Elegance, Crafted for Royalty in Port Harcourt
          </h1>

          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
            Discover breathtaking 18k Italian gold sets, brilliant diamonds, and traditional coral masterpieces designed to celebrate your most precious moments.
          </p>

          {/* Action Buttons that remain stable on click */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#catalog"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#d4af37] hover:bg-[#c29d2c] text-black font-bold tracking-wide transition-all shadow-xl hover:shadow-[#d4af37]/20 flex items-center justify-center gap-2 group"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://wa.me/2348069049707?text=Hello%20Mandy's%20Jewelry,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20pieces."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
              <span>Order via WhatsApp 0806 904 9707</span>
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/15 text-stone-300 text-xs sm:text-sm">
            <div>
              <p className="font-serif text-xl sm:text-2xl text-white font-bold">100%</p>
              <p className="text-stone-400">Tarnish-Resistant Gold</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-white font-bold">Same-Day</p>
              <p className="text-stone-400">Port Harcourt Delivery</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-white font-bold">Nationwide</p>
              <p className="text-stone-400">Shipping across Nigeria</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-white font-bold">5,000+</p>
              <p className="text-stone-400">Happy Royal Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: BRAND STORY & HERITAGE ==================== */}
      <section id="story" className="py-24 px-6 lg:px-12 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">
              Our Heritage in Port Harcourt
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1c1c] leading-tight">
              The Story of Mandy's Jewelry: Where Sophistication Meets Tradition
            </h2>
            <p className="text-[#555555] leading-relaxed">
              Founded in the vibrant heart of Port Harcourt, Rivers State, Mandy's Jewelry was born out of a profound passion for exceptional craftsmanship and uncompromising luxury. We believe that true jewelry is not merely worn; it tells a story of milestones, celebrations, and personal triumphs.
            </p>
            <p className="text-[#555555] leading-relaxed">
              From high-society weddings in GRA Phase 2 to prestigious corporate galas across Nigeria, our curated collections of 18k Italian gold, handset diamonds, and royal coral pieces are handpicked for individuals who demand nothing short of perfection. Every piece undergoes rigorous quality assurance to ensure everlasting brilliance and tarnish resistance in Nigerian climates.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div>
                <p className="text-2xl font-serif font-bold text-[#1c1c1c]">10+ Years</p>
                <p className="text-xs text-[#777777]">Trusted Excellence</p>
              </div>
              <div className="w-px h-10 bg-[#e5e0d8]"></div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#1c1c1c]">36 States</p>
                <p className="text-xs text-[#777777]">Nationwide Delivery</p>
              </div>
              <div className="w-px h-10 bg-[#e5e0d8]"></div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#1c1c1c]">GRA PH</p>
                <p className="text-xs text-[#777777]">Flagship Showroom</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#f0ece1] rounded-2xl -z-10 transform -rotate-1"></div>
            <img 
              src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.15.02_AM_2764e4dd.jpeg" 
              alt="Craftsmanship at Mandy's Jewelry" 
              className="rounded-xl shadow-2xl w-full h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 bg-[#1c1c1c] text-white p-6 rounded-xl shadow-xl max-w-xs backdrop-blur-md bg-opacity-90">
              <p className="font-serif italic text-sm text-[#d4af37]">"Elegance is when the inside is as beautiful as the outside."</p>
              <p className="text-xs text-stone-400 mt-2">— Mandy, Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: FEATURED COLLECTIONS ==================== */}
      <section id="collections" className="py-20 px-6 lg:px-12 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">Curated Categories</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1c1c1c]">Explore Our Signature Collections</h2>
            <p className="text-[#666666] text-sm">Handcrafted to elevate every occasion, from everyday understated luxury to grand traditional ceremonies.</p>
          </div>

          {/* Category Filter Tabs (Interactive buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#1c1c1c] text-white shadow-md' 
                    : 'bg-white text-[#555555] hover:bg-[#e8e2d2] border border-[#e5e0d8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: PRODUCT CATALOG (NIGERIAN NAIRA ₦ PRICING) ==================== */}
      <section id="catalog" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#1c1c1c]">Available Masterpieces</h2>
            <p className="text-sm text-[#666666] mt-1">Prices shown in Nigerian Naira (₦). Order securely online or via WhatsApp.</p>
          </div>
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#888888]" />
            <input 
              type="text"
              placeholder="Search jewelry pieces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c] transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-3 text-xs text-[#888888] hover:text-[#1c1c1c]">
                Clear
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#e5e0d8]">
            <p className="text-lg font-medium text-[#555555]">No jewelry pieces found matching your search.</p>
            <button onClick={() => { setSelectedCategory("All Collections"); setSearchQuery(""); }} className="mt-4 px-6 py-2 bg-[#1c1c1c] text-white text-xs font-semibold rounded-lg">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-xl border border-[#e5e0d8] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1ea]">
                    {product.tag && (
                      <span className="absolute top-3 left-3 z-10 bg-[#1c1c1c] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {product.tag}
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button 
                        onClick={() => setQuickViewProduct(product)}
                        className="px-4 py-2 bg-white text-[#1c1c1c] font-semibold text-xs rounded-lg shadow-lg hover:bg-[#faf9f6]"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#888888]">
                      <span>{product.category}</span>
                      <span className="text-emerald-700 font-medium">In Stock</span>
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#1c1c1c] line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-[#666666] line-clamp-2">{product.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-[#f0ece1] mt-4">
                  <div className="font-serif font-bold text-lg text-[#1c1c1c]">
                    {formatNaira(product.price)}
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-[#1c1c1c] hover:bg-[#333333] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ==================== SECTION 5: WHY CHOOSE US / OUR PROMISE ==================== */}
      <section id="promise" className="py-24 bg-[#1c1c1c] text-white px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">The Mandy's Promise</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold">Why Discerning Clients Trust Us</h2>
            <p className="text-stone-300 text-sm">We combine artisanal mastery with seamless delivery across Port Harcourt and all 36 states in Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl">Port Harcourt Same-Day Delivery</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Need your jewelry urgently for an event in GRA, Woji, Peter Odili, or Rumuola? Enjoy prompt same-day doorstep delivery within Port Harcourt.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl">100% Tarnish-Resistant</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Crafted with high-grade 18k gold plating and anti-tarnish protective sealing. Wear your pieces with absolute confidence daily.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl">Nationwide Nigeria Shipping</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Secure, insured dispatch via GIGM and DHL to Lagos, Abuja, Port Harcourt, Enugu, Ibadan, and every corner of Nigeria.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl">Luxury Gift Packaging</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Every order arrives in our signature branded luxury velvet box and gift bag, making unboxing an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: CLIENT REVIEWS & TESTIMONIALS ==================== */}
      <section id="reviews" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">Social Proof</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1c1c1c]">Loved Across Nigeria</h2>
            <p className="text-[#666666] text-sm">Read glowing words from brides, professionals, and fashion lovers who chose Mandy's Jewelry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#e5e0d8] shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <p className="text-[#444444] text-sm italic leading-relaxed">"{rev.comment}"</p>
                </div>
                <div className="pt-4 border-t border-[#f0ece1] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#1c1c1c]">{rev.name}</p>
                    <p className="text-xs text-[#888888]">{rev.location}</p>
                  </div>
                  <span className="text-xs text-[#aaaaaa]">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a Review Form */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-[#e5e0d8] shadow-sm">
            <h3 className="font-serif font-bold text-xl text-[#1c1c1c] mb-2">Share Your Experience</h3>
            <p className="text-xs text-[#666666] mb-6">Have you purchased from Mandy's Jewelry? Leave your review below.</p>
            
            {reviewSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Thank you! Your review has been successfully posted.</span>
              </div>
            )}

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                    placeholder="e.g. Mrs. Funke Adebayo"
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Location / City</label>
                  <input 
                    type="text" 
                    value={newReviewLocation}
                    onChange={(e) => setNewReviewLocation(e.target.value)}
                    placeholder="e.g. GRA, Port Harcourt"
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Your Review</label>
                <textarea 
                  rows={3} 
                  required
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="Tell us about the quality and packaging..."
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="px-6 py-3 bg-[#1c1c1c] hover:bg-[#333333] text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: VISIT OUR SHOWROOM & CONTACT / FAQ FOOTER ==================== */}
      <section id="contact" className="py-24 bg-[#f4f1ea] px-6 lg:px-12 border-t border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Showroom & Contact Details */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">Visit Us in Port Harcourt</span>
              <h2 className="text-3xl font-serif font-bold text-[#1c1c1c] mt-2">Flagship Showroom & Contact</h2>
              <p className="text-sm text-[#666666] mt-2">Experience our luxury pieces in person or reach our concierge team instantly via phone and WhatsApp.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-[#1c1c1c] shrink-0">
                  <MapPin className="w-5 h-5 text-[#9c7c1c]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1c1c1c]">Port Harcourt Showroom</h3>
                  <p className="text-xs text-[#666666] mt-1">GRA Phase 2 (Close to Presidential Hotel), Port Harcourt, Rivers State, Nigeria</p>
                  <button 
                    onClick={() => setMapModalOpen(true)}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#9c7c1c] hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-[#1c1c1c] shrink-0">
                  <Phone className="w-5 h-5 text-[#9c7c1c]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1c1c1c]">Direct Phone & WhatsApp</h3>
                  <p className="text-xs text-[#666666] mt-1">0806 904 9707 (+234 806 904 9707)</p>
                  <a href="https://wa.me/2348069049707" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:underline">
                    <span>Chat instantly on WhatsApp</span>
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-[#1c1c1c] shrink-0">
                  <Clock className="w-5 h-5 text-[#9c7c1c]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1c1c1c]">Opening Hours</h3>
                  <p className="text-xs text-[#666666] mt-1">Monday – Saturday: 9:00 AM – 6:30 PM<br/>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl border border-[#e5e0d8] shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-xl text-[#1c1c1c]">Send an Inquiry</h3>
            <p className="text-xs text-[#666666]">Have a custom request or wedding inquiry? Drop us a message and our concierge will respond promptly.</p>
            
            {contactSent && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Message sent! We will reach out to you via phone or WhatsApp shortly.</span>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Adaora Johnson"
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Phone / WhatsApp Number</label>
                <input 
                  type="text" 
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="e.g. 08031234567"
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Message or Custom Request</label>
                <textarea 
                  rows={4} 
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Tell us what jewelry piece or bridal set you are looking for..."
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-[#1c1c1c] hover:bg-[#333333] text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Send Inquiry Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1c1c1c] text-[#a8a29e] py-12 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-white font-serif font-bold text-lg">Mandy's Jewelry</p>
            <p className="text-xs text-stone-400">Port Harcourt's trusted sanctuary for luxury 18k gold, diamonds, and bridal sets.</p>
          </div>
          <div className="text-xs text-stone-400 space-y-1">
            <p>© {new Date().getFullYear()} Mandy's Jewelry. All rights reserved.</p>
            <p>Customer Care & Orders WhatsApp: <a href="https://wa.me/2348069049707" target="_blank" rel="noreferrer" className="text-[#d4af37] font-semibold underline">0806 904 9707</a></p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
        <a 
          href="https://wa.me/2348069049707?text=Hello%20Mandy's%20Jewelry,%20I%20would%20like%20to%20inquire%20about%20your%20pieces."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-105 font-bold text-sm"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </div>

      {/* ==================== QUICK VIEW MODAL ==================== */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-fade-in relative">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f1ea] hover:bg-[#e5e0d8] text-[#1c1c1c] z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#f4f1ea] aspect-square">
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">{quickViewProduct.category}</span>
                  <h3 className="font-serif font-bold text-2xl text-[#1c1c1c]">{quickViewProduct.name}</h3>
                  <p className="text-xl font-bold text-[#1c1c1c]">{formatNaira(quickViewProduct.price)}</p>
                  <p className="text-sm text-[#666666] leading-relaxed">{quickViewProduct.description}</p>

                  <div className="pt-2 space-y-1.5">
                    <p className="text-xs font-semibold text-[#1c1c1c] uppercase tracking-wider">Highlights:</p>
                    <ul className="space-y-1 text-xs text-[#555555]">
                      {quickViewProduct.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#9c7c1c]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#f0ece1] flex items-center gap-3">
                  <button 
                    onClick={() => {
                      addToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 py-3 bg-[#1c1c1c] hover:bg-[#333333] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <a 
                    href={`https://wa.me/2348069049707?text=${encodeURIComponent("Hello Mandy's Jewelry, I want to buy " + quickViewProduct.name + " priced at " + formatNaira(quickViewProduct.price))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20ba5a] transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CART & CHECKOUT DRAWER ==================== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-fade-in">
            {/* Header */}
            <div className="p-6 border-b border-[#e5e0d8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1c1c1c]" />
                <h3 className="font-serif font-bold text-lg text-[#1c1c1c]">Your Shopping Bag ({cartItemCount})</h3>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full bg-[#f4f1ea] hover:bg-[#e5e0d8] text-[#1c1c1c]">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <ShoppingBag className="w-12 h-12 text-[#ccc] mx-auto" />
                  <p className="text-sm text-[#666666]">Your bag is currently empty.</p>
                  <button onClick={() => setIsCartOpen(false)} className="px-6 py-2.5 bg-[#1c1c1c] text-white text-xs font-semibold rounded-lg">
                    Browse Collections
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="flex gap-4 p-4 bg-[#faf9f6] rounded-xl border border-[#e5e0d8] items-center">
                    <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded-lg shrink-0" referrerPolicy="no-referrer" />
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-sm text-[#1c1c1c] line-clamp-1">{item.product.name}</h4>
                      <p className="text-xs text-[#9c7c1c] font-semibold mt-0.5">{formatNaira(item.product.price)}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.product.id, -1)} className="w-6 h-6 rounded bg-white border border-[#d4af37] text-xs font-bold flex items-center justify-center">-</button>
                        <span className="text-xs font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, 1)} className="w-6 h-6 rounded bg-white border border-[#d4af37] text-xs font-bold flex items-center justify-center">+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#e5e0d8] bg-[#faf9f6] space-y-4">
                <div className="flex items-center justify-between text-base font-bold text-[#1c1c1c]">
                  <span>Subtotal:</span>
                  <span className="font-serif text-xl">{formatNaira(cartTotal)}</span>
                </div>
                <p className="text-[11px] text-[#777777]">Shipping & delivery calculated at checkout or via WhatsApp.</p>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setCheckoutModalOpen(true)}
                    className="py-3 bg-[#1c1c1c] hover:bg-[#333333] text-white text-xs font-bold rounded-xl transition-colors text-center"
                  >
                    Proceed to Checkout
                  </button>
                  <button 
                    onClick={handleWhatsAppCheckout}
                    className="py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== CHECKOUT MODAL ==================== */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fade-in p-8 space-y-6 relative">
            <button 
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f1ea] hover:bg-[#e5e0d8] text-[#1c1c1c]"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">Secure Order Form</span>
              <h3 className="font-serif font-bold text-2xl text-[#1c1c1c] mt-1">Complete Your Order</h3>
              <p className="text-xs text-[#666666] mt-1">Fill in your delivery details in Nigeria. Orders are dispatched instantly.</p>
            </div>

            {orderSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-emerald-900">Order Sent to WhatsApp!</h4>
                <p className="text-xs text-emerald-700">Thank you for shopping with Mandy's Jewelry. WhatsApp has opened with your order summary.</p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Mrs. Blessing Okon"
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Phone Number (WhatsApp preferred)</label>
                  <input 
                    type="text" 
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 08069049707"
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Delivery City in Nigeria</label>
                  <select 
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                  >
                    <option value="Port Harcourt">Port Harcourt (Same-Day Delivery Available)</option>
                    <option value="Lagos">Lagos (Express Delivery)</option>
                    <option value="Abuja">Abuja (Express Delivery)</option>
                    <option value="Enugu">Enugu State</option>
                    <option value="Ibadan">Ibadan (Oyo State)</option>
                    <option value="Other Nigerian City">Other Nigerian State / City</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Delivery Street Address</label>
                  <textarea 
                    rows={2} 
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="e.g. 12 Aba Road, GRA Phase 2"
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#e5e0d8] rounded-xl text-sm focus:outline-none focus:border-[#1c1c1c]"
                  ></textarea>
                </div>

                <div className="p-4 bg-[#f4f1ea] rounded-xl flex items-center justify-between text-xs font-semibold">
                  <span>Total Amount:</span>
                  <span className="font-serif text-lg text-[#1c1c1c]">{formatNaira(cartTotal)}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Order via WhatsApp (0806 904 9707)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ==================== GOOGLE MAPS LOCATION MODAL ==================== */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-8 space-y-6 relative animate-fade-in">
            <button 
              onClick={() => setMapModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f1ea] hover:bg-[#e5e0d8] text-[#1c1c1c]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#9c7c1c] font-semibold">Showroom Location</span>
              <h3 className="font-serif font-bold text-2xl text-[#1c1c1c]">Mandy's Jewelry Port Harcourt</h3>
              <p className="text-xs text-[#666666]">GRA Phase 2, Port Harcourt, Rivers State, Nigeria</p>
            </div>

            <div className="p-4 bg-[#f4f1ea] rounded-xl space-y-3 text-xs text-[#333333]">
              <p className="font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9c7c1c]" />
                <span>Google Maps Reference Link:</span>
              </p>
              <a 
                href="https://maps.app.goo.gl/TrDAFf1hk9wbxa8e8" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#9c7c1c] underline break-all block font-medium hover:text-[#1c1c1c]"
              >
                https://maps.app.goo.gl/TrDAFf1hk9wbxa8e8
              </a>
              <p className="text-[11px] text-[#666666]">Click above to open exact GPS directions on Google Maps to our showroom in Port Harcourt.</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://maps.app.goo.gl/TrDAFf1hk9wbxa8e8"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#1c1c1c] hover:bg-[#333333] text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setMapModalOpen(false)}
                className="px-6 py-3 bg-[#f4f1ea] hover:bg-[#e5e0d8] text-[#1c1c1c] text-xs font-semibold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
