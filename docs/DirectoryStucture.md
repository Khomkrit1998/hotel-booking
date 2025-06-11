hotel-booking/
├── 📁 public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── hotels/
│   │   ├── icons/
│   │   └── logos/
│   └── assets/
│
├── 📁 src/
│   ├── 📁 app/                          # App Router (Next.js 13+)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx                   # Root layout
│   │   ├── page.tsx                     # Home page (Landing Page)
│   │   ├── loading.tsx                  # Global loading UI
│   │   ├── error.tsx                    # Global error UI
│   │   ├── not-found.tsx                # 404 page
│   │   │
│   │   ├── 📁 hotels/                   # Hotels routes
│   │   │   ├── page.tsx                 # Hotels listing (/hotels)
│   │   │   ├── loading.tsx
│   │   │   ├── 📁 [id]/                 # Dynamic hotel detail
│   │   │   │   ├── page.tsx             # Hotel detail page
│   │   │   │   └── loading.tsx
│   │   │   └── 📁 search/               # Search results
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 booking/                  # Booking flow
│   │   │   ├── page.tsx                 # Booking form
│   │   │   ├── 📁 confirmation/
│   │   │   │   └── page.tsx             # Booking confirmation
│   │   │   └── 📁 [bookingId]/
│   │   │       └── page.tsx             # Booking details
│   │   │
│   │   ├── 📁 auth/                     # Authentication
│   │   │   ├── 📁 login/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 register/
│   │   │   │   └── page.tsx
│   │   │   └── 📁 forgot-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 profile/                  # User profile
│   │   │   ├── page.tsx
│   │   │   ├── 📁 bookings/
│   │   │   │   └── page.tsx
│   │   │   └── 📁 settings/
│   │   │       └── page.tsx
│   │   │
│   │   └── 📁 api/                      # API routes
│   │       ├── 📁 hotels/
│   │       │   ├── route.ts             # GET /api/hotels
│   │       │   ├── 📁 [id]/
│   │       │   │   └── route.ts         # GET /api/hotels/[id]
│   │       │   └── 📁 search/
│   │       │       └── route.ts         # POST /api/hotels/search
│   │       ├── 📁 booking/
│   │       │   ├── route.ts             # POST /api/booking
│   │       │   └── 📁 [id]/
│   │       │       └── route.ts         # GET /api/booking/[id]
│   │       └── 📁 auth/
│   │           ├── 📁 login/
│   │           │   └── route.ts
│   │           └── 📁 register/
│   │               └── route.ts
│   │
│   ├── 📁 components/                   # Reusable components
│   │   ├── 📁 ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   │
│   │   ├── 📁 layout/                   # Layout components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   ├── 📁 hotel/                    # Hotel-related components
│   │   │   ├── HotelCard.tsx
│   │   │   ├── HotelList.tsx
│   │   │   ├── HotelDetail.tsx
│   │   │   ├── HotelGallery.tsx
│   │   │   ├── HotelAmenities.tsx
│   │   │   └── HotelReviews.tsx
│   │   │
│   │   ├── 📁 search/                   # Search components
│   │   │   ├── SearchForm.tsx
│   │   │   ├── SearchFilters.tsx
│   │   │   ├── SearchResults.tsx
│   │   │   └── AutoComplete.tsx
│   │   │
│   │   ├── 📁 booking/                  # Booking components
│   │   │   ├── BookingForm.tsx
│   │   │   ├── GuestSelector.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   └── BookingSummary.tsx
│   │   │
│   │   ├── 📁 common/                   # Common/shared components
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   └── DatePicker.tsx
│   │   │
│   │   └── 📁 sections/                 # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── FeaturedHotelsSection.tsx
│   │       ├── NewsletterSection.tsx
│   │       └── StatsSection.tsx
│   │
│   ├── 📁 lib/                          # Utility libraries
│   │   ├── utils.ts                     # General utilities
│   │   ├── api.ts                       # API client/fetcher
│   │   ├── auth.ts                      # Authentication utilities
│   │   ├── validation.ts                # Form validation schemas
│   │   ├── constants.ts                 # App constants
│   │   ├── db.ts                        # Database connection
│   │   └── mail.ts                      # Email utilities
│   │
│   ├── 📁 types/                        # TypeScript type definitions
│   │   ├── hotel.ts                     # Hotel-related types
│   │   ├── booking.ts                   # Booking-related types
│   │   ├── user.ts                      # User-related types
│   │   ├── api.ts                       # API response types
│   │   └── index.ts                     # Export all types
│   │
│   ├── 📁 hooks/                        # Custom React hooks
│   │   ├── useAuth.ts                   # Authentication hook
│   │   ├── useLocalStorage.ts           # Local storage hook
│   │   ├── useApi.ts                    # API fetching hook
│   │   ├── useDebounce.ts               # Debounce hook
│   │   └── useSearchParams.ts           # URL search params hook
│   │
│   ├── 📁 store/                        # State management (Zustand/Redux)
│   │   ├── authStore.ts                 # Authentication state
│   │   ├── searchStore.ts               # Search state
│   │   ├── bookingStore.ts              # Booking state
│   │   └── index.ts                     # Store configuration
│   │
│   ├── 📁 styles/                       # Additional styles
│   │   ├── globals.css                  # Global styles
│   │   ├── components.css               # Component-specific styles
│   │   └── themes.css                   # Theme variables
│   │
│   └── 📁 data/                         # Static data & mock data
│       ├── hotels.json                  # Mock hotel data
│       ├── cities.json                  # Cities for autocomplete
│       ├── amenities.json               # Hotel amenities
│       └── reviews.json                 # Mock reviews
│
├── 📁 docs/                             # Documentation
│   ├── README.md
│   ├── API.md                           # API documentation
│   ├── DEPLOYMENT.md                    # Deployment guide
│   └── CONTRIBUTING.md                  # Contribution guidelines
│
├── 📁 prisma/                           # Database (if using Prisma)
│   ├── schema.prisma                    # Database schema
│   ├── seed.ts                          # Database seeding
│   └── migrations/                      # Database migrations
│
├── 📄 .env.local                        # Environment variables
├── 📄 .env.example                      # Environment template
├── 📄 .gitignore                        # Git ignore rules
├── 📄 components.json                   # shadcn/ui config
├── 📄 next.config.js                    # Next.js configuration
├── 📄 tailwind.config.js                # Tailwind CSS config
├── 📄 tsconfig.json                     # TypeScript config
├── 📄 package.json                      # Dependencies
└── 📄 README.md                         # Project documentation