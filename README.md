# SanLuis AI Solutions Website

Professional website for SanLuis AI Solutions built with Next.js 15, Tailwind CSS, and TypeScript.

## Project Overview

This website serves as the online presence for SanLuis AI Solutions, showcasing our services, portfolio, and expertise in AI-powered business automation.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Connect Vercel to the repository
3. Configure custom domain
4. Set environment variables if needed

### Environment Variables

Create a `.env.local` file with:

```env
# Supabase configuration (when ready)
# SUPABASE_URL=your_supabase_url
# SUPABASE_KEY=your_supabase_key

# Email service configuration (when ready)
# RESEND_API_KEY=your_resend_api_key
```

## Project Structure

```
app/
  ├── components/     # React components
  ├── globals.css     # Global CSS styles
  ├── layout.tsx      # Root layout
  └── page.tsx        # Homepage
public/
  └── images/         # Static images
```

## Design System

This project implements a formal design system using Google Labs' DESIGN.md specification. The complete design system is defined in [DESIGN.md](./DESIGN.md) which includes:
- Color palette with gold and navy accents on a dark background
- Typography system using Space Grotesk for headings and Inter for body text
- Component specifications for buttons, visual effects, and utilities
- Design guidelines and rules for consistent implementation

To validate the design system:
```bash
# Run the validation script
./scripts/validate-design.sh
```

## Execution Plan

The canonical execution plan for this website is maintained in the Obsidian Vault at:
[Surgical-Projects/SanLuis-Website-Consolidated-Plan.md](../SanLuis_Knowledge_Vault/Surgical-Projects/SanLuis-Website-Consolidated-Plan.md)

This plan consolidates multiple previous planning documents and focuses on:
1. Critical infrastructure (Supabase/email integration)
2. Content essentials (real case studies, finalized copy)
3. Design & UX polish
4. Deployment preparation

## Stripe Verification

This website is designed to meet Stripe's business verification requirements:

- Professional appearance and branding
- Clear business information
- Contact methods (email, booking link)
- Complete service descriptions
- Portfolio showcasing past work

## Components

### Header Navigation
- Logo with brand name
- Main navigation links
- Booking button

### Hero Section
- Main tagline and value proposition
- Emotional appeal
- Primary call-to-action (Book Discovery Session)

### Social Proof
- Statistics about projects delivered
- Client testimonials or logos
- Trust indicators

### Problem Section
- Identification of common business pain points
- Quantification of time/money lost
- Relatable scenarios

### Solution Section
- Clear articulation of our approach
- Differentiation from DIY AI tools
- Types of solutions offered

### Case Studies
- Real-world examples of client successes
- Before/after scenarios
- Quantified results

### Lead Magnet
- FAQ about the service offering
- Overcoming objections
- Clear next step (booking)

### Founder Story
- Personal background and expertise
- Why this business exists
- Call to action for deeper connection

### Process Explanation
- Step-by-step breakdown of engagement
- Timeline expectations
- What clients can expect

### Final Call-to-Action
- Strong closing argument
- Clear value proposition
- Prominent booking button

## Brand Guidelines

### Colors
- Background: #0A0A0A (Rich Black)
- Surface: #141414 (Off Black)
- Primary Accent: #D49E2C (Gold)
- Secondary: #2D527E (Navy Blue) and #1B3C72 (Brand Navy)
- Text: #FFFFFF (Pure White) and #888888 (Muted Gray)
- Error: #f87171 (Soft Red)

### Typography
- Headers: Space Grotesk - modern geometric sans-serif
- Body: Inter - highly readable sans-serif with excellent clarity

## SEO & Metadata

The site includes comprehensive SEO metadata:
- Page titles optimized for target keywords
- Meta descriptions for search snippets
- Open Graph tags for social sharing
- Twitter Cards for enhanced social presence

## Accessibility

Following WCAG guidelines:
- Semantic HTML structure
- Proper contrast ratios
- Keyboard navigation support
- Screen reader compatibility

## Performance

Optimized for:
- Fast loading times
- Mobile responsiveness
- Core Web Vitals compliance
- Efficient asset loading

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License

This project is proprietary to SanLuis AI Solutions and not available for public use without explicit permission.