# ProHunters 2025 Event Landing Page - Requirements Document

## Project Overview

**Target Audience:** HR professionals, business leaders, C-suite executives, and employer brand managers from medium to large companies in Kazakhstan.

**Primary Conversion Goal:** Drive event attendance through compelling presentation of value proposition and ease of RSVP.

**Buyer Persona:**
- HR Directors, CHROs, and HR Managers
- Business owners and executives interested in labor market insights
- Company representatives who may receive employer recognition
- Age: 30-55
- Professional, data-driven decision makers
- Value networking opportunities and industry recognition
- Motivated by exclusivity and professional development

## Page Objectives and KPIs

**Primary Goal:** Event registration/attendance confirmation

**Key Performance Indicators:**
- Click-through rate on primary CTA buttons
- Time on page (target: 2+ minutes)
- Scroll depth (target: 80%+ reach speakers section)
- Mobile vs desktop engagement ratio
- Social sharing rate

**Success Metrics:**
- Registration conversion rate target: 25-35%
- Bounce rate target: <40%
- Page load time: <2 seconds

## Design Approach and Visual Style

**Theme:** Sophisticated corporate event with festive holiday undertones (Jingle Bells theme)

**Design Philosophy:**
- Premium, elegant aesthetic befitting a closed professional event
- Modern minimalist approach with strategic use of white space
- Festive accents without being overly Christmas-themed
- Professional photography showcase of speakers
- Trust-building through visual hierarchy and credibility signals

**Visual Style Keywords:**
- Elegant
- Professional
- Exclusive
- Modern
- Sophisticated
- Approachable luxury

## Color Scheme - ProHunters Brand Alignment

**Official ProHunters Brand Colors:**
- Primary Brand Red: #A5171D - authority, passion, brand identity
- Lime Green Accent: #86E619 - energy, innovation, modern touch
- Secondary Green: #297432 - stability, growth, hover states
- Dark Gray Neutral: #333333 - professional text, solid foundation
- Off-White Background: #F9F8F8 - clean, elegant, approachable
- Deep Navy: #1a2332 - sophistication, trust, section backgrounds

**Color Application Strategy:**

**Backgrounds:**
- Primary sections: Off-White (#F9F8F8)
- Contrast sections: Deep Navy (#1a2332) for hero and pre-footer CTA
- Subtle gradient overlays: Navy to transparent for depth

**Call-to-Action Elements:**
- Primary CTA buttons: Brand Red (#A5171D)
- Hover state: Secondary Green (#297432) with smooth transition
- Focus/active state: Darker red (#8B1318)
- Glow effect: Lime Green (#86E619) subtle shadow on hover

**Typography:**
- Headings: Deep Navy (#1a2332) on light backgrounds, Off-White (#F9F8F8) on dark
- Body text: Dark Gray (#333333)
- Accent text: Brand Red (#A5171D) for emphasis
- Links: Lime Green (#86E619) with Secondary Green (#297432) hover

**Decorative Elements:**
- Awards/achievements: Lime Green (#86E619) accents
- Timeline markers: Brand Red (#A5171D)
- Icons: Lime Green (#86E619) primary, Secondary Green (#297432) secondary
- Dividers: Light gray (#E4E6EB) with Lime Green accents
- New Year sparkles: Lime Green (#86E619) with opacity variations

**Accessibility Notes:**
- Lime Green (#86E619) on white: Contrast ratio 2.8:1 (decorative only, not for small text)
- For text use: Secondary Green (#297432) on white: 5.1:1 (AA compliant)
- Brand Red (#A5171D) on white: 7.2:1 (AAA compliant for body text)
- Dark Gray (#333333) on white: 12.6:1 (AAA compliant)
- Always pair Lime Green text with sufficient background contrast
- Use Lime Green primarily for large elements, icons, and decorative accents

## New Year Elements Design Strategy

**Design Philosophy:**
Subtle, professional festive touches that enhance atmosphere without overwhelming the sophisticated corporate aesthetic. All holiday elements must feel elegant and refined, never childish or overly decorative.

**Animated Snowflakes:**
- **Quantity:** 15-20 snowflakes maximum across viewport
- **Size:** 3 variants - small (8px), medium (12px), large (16px)
- **Color:** Semi-transparent white/lime green blend
  - Base: rgba(255, 255, 255, 0.6)
  - Accent: rgba(134, 230, 25, 0.3) for 30% of snowflakes
- **Animation:** Gentle float with CSS keyframes
  - Duration: 10-20 seconds (varied per snowflake)
  - Movement: Vertical descent with subtle horizontal drift
  - Rotation: Slow spin for naturalistic effect
- **Performance:** CSS animations only, GPU-accelerated transforms
- **Placement:** Full-page overlay with pointer-events: none
- **Mobile:** Reduce to 8-10 snowflakes for performance

**Sparkle Effects:**
- **Application:** Interactive elements (CTAs, speaker cards, award icons)
- **Color:** Lime Green (#86E619) with opacity fade
- **Trigger:** Hover state on desktop, ambient pulse on mobile
- **Style:** Small star/sparkle SVG particles
- **Animation:** 0.8s fade-in-out on hover
- **Placement:**
  - Corner accents on speaker photo cards
  - Button edge shimmer effect
  - Award trophy icon highlight

**Winter-Themed Section Dividers:**
- **Design:** Abstract geometric patterns with winter motifs
- **Elements:**
  - Crystalline geometric shapes (hexagons, triangles)
  - Subtle bell silhouettes in line art style
  - Musical note integration (referencing "Jingle Bells")
- **Color Scheme:**
  - Primary: Light gray (#E4E6EB) base
  - Accent: Lime Green (#86E619) highlights
  - Gradient: Navy to transparent for depth
- **Implementation:** SVG patterns, scalable and responsive
- **Opacity:** 20-40% for subtle background presence

**Festive Timeline Markers:**
- **Awards Ceremony Item:** Special visual treatment
  - Icon: Trophy with subtle sparkle animation
  - Background: Lime Green (#86E619) glow effect
  - Border: Gradient from Brand Red to Lime Green
  - Badge: "Праздничный момент" or bell icon
- **Other Timeline Items:** Standard styling
- **Connection Line:** Dotted pattern with small snowflake markers

**Glow Effects on Interactive Elements:**
- **CTA Buttons:**
  - Default: Solid Brand Red (#A5171D)
  - Hover: Lime Green (#86E619) outer glow
    - box-shadow: 0 0 20px rgba(134, 230, 25, 0.5)
  - Pulse animation: Subtle 2s loop on primary hero CTA
- **Speaker Cards:**
  - Hover: Soft white glow with lime green tint
  - Transition: 0.3s ease
- **Award Icons:**
  - Ambient pulse: Lime green glow 3s loop
  - Intensity: Subtle, never garish

**Background Patterns (Optional, Subtle):**
- **Hero Section:**
  - Faint snowflake pattern overlay at 5% opacity
  - Navy background with subtle bokeh light effects (lime green dots)
- **Footer Section:**
  - Winter constellation pattern in dark navy
  - Small lime green stars forming abstract shapes

**Microinteractions:**
- **Page Load:** Gentle snowfall starts after 1s delay
- **Scroll Trigger:** Sparkles appear on elements entering viewport
- **Click Feedback:** Brief green flash on CTA click
- **Hover States:** All glow effects smooth 0.3s transition

**Performance Considerations:**
- Use CSS transforms and opacity (GPU-accelerated)
- Limit number of animated elements on mobile
- RequestAnimationFrame for JavaScript animations if needed
- Lazy load decorative SVG patterns
- Prefers-reduced-motion: Disable all animations

**Brand Consistency:**
- All festive elements use ProHunters brand colors
- Never introduce gold/traditional Christmas colors
- Maintain professional aesthetic throughout
- Holiday touches enhance, never distract from content

## Typography Recommendations

**Primary Font Stack:**
- Headings: 'Montserrat', 'Raleway', or 'Playfair Display' - elegant, modern
- Body: 'Open Sans', 'Inter', or 'Roboto' - readable, professional
- Accent: 'Cormorant Garamond' for event title - sophisticated serif

**Type Scale:**
- H1 (Hero title): 48-64px (mobile: 32-40px)
- H2 (Section titles): 36-42px (mobile: 28-32px)
- H3 (Subsections): 24-28px (mobile: 20-24px)
- Body text: 16-18px (mobile: 16px)
- Small text: 14px

**Typography Guidelines:**
- Line height: 1.6-1.8 for body text
- Letter spacing: Slightly increased for headings (0.5-1px)
- Font weight: Bold (700) for headings, Regular (400) for body, Medium (500) for emphasis
- All text in Russian (Cyrillic support essential)

## Layout Structure and Content Hierarchy

### 1. Hero Section (Above the Fold)
**Purpose:** Immediate impact and value proposition

**Elements:**
- Logo (top left or center)
- Event title with festive styling
- Date, time, and location prominently displayed
- Compelling subheadline about exclusivity and value
- Primary CTA button: "Зарегистрироваться" or "Подтвердить участие"
- Background: Elegant gradient or subtle holiday-themed pattern
- Optional: Countdown timer to event

**Visual Treatment:**
- Full viewport height on desktop
- Centered content with strategic use of negative space
- Subtle animation on load (fade-in, slide-up)
- Background: Deep Navy (#1a2332) with subtle snowflake overlay
- Text: Off-White (#F9F8F8) for high contrast
- CTA: Brand Red (#A5171D) with lime green glow effect
- Decorative: Lime green bokeh light effects in background

### 2. Value Proposition Section
**Purpose:** Answer "Why attend?"

**Elements:**
- "Вас ожидает" headline
- Three key benefits in icon/text cards:
  - Networking opportunities
  - Exclusive raffle
  - Gourmet dinner
- Visual icons or illustrations
- Brief, benefit-focused copy

**Visual Treatment:**
- Clean 3-column grid (stacks on mobile)
- Icon above text
- Subtle hover effects

### 3. Program Timeline Section
**Purpose:** Build anticipation through detailed schedule

**Elements:**
- "Программа мероприятия" headline
- Vertical timeline design with time markers
- Each program item with:
  - Time
  - Activity title
  - Brief description
  - Speaker names (linked to profiles below)
- Visual timeline connector line

**Visual Treatment:**
- Alternating left/right layout on desktop (centered on mobile)
- Time badges with accent colors
- Progressive disclosure: more details on hover/tap
- Icons for different activity types

### 4. Moderator Spotlight
**Purpose:** Build credibility with charismatic host

**Elements:**
- "Модератор" headline
- Photo: Grigory Shanin
- Name and title
- Brief bio

**Visual Treatment:**
- Centered layout
- Circular or rounded rectangle photo
- Elegant card design

### 5. Speakers Section
**Purpose:** Showcase expertise and draw attendance

**Elements:**
- "Информация о спикерах" headline
- Two subsections:
  - Research presentation speakers (3 speakers)
  - Well-being talk speakers (2 speakers)
- Each speaker card:
  - Professional photo
  - Name
  - Title/role
  - Credentials/bio
  - Talk topic (for well-being speakers)

**Visual Treatment:**
- Grid layout: 3 columns on desktop, 1 column on mobile
- Professional photo treatment (consistent sizing, subtle effects)
- Card-based design with hover effects
- Hierarchical typography for names/titles

### 6. Venue Information Section
**Purpose:** Provide logistics and build excitement about location

**Elements:**
- "Дата и место" headline
- Date and time emphasized
- Venue name: Le Dome
- Full address
- Embedded map or link to maps
- Optional: Venue photo or illustration
- Parking/transportation notes

**Visual Treatment:**
- Split layout: Info left, map right (stacks on mobile)
- Accent color for date/time
- Icon for location pin

### 7. Awards Section
**Purpose:** Recognition and prestige

**Elements:**
- "Награждение компаний" headline
- Two award categories:
  - High-tech
  - Non-High-tech
- Trophy/award icon
- Brief description

**Visual Treatment:**
- Centered or two-column layout
- Lime Green (#86E619) accent colors for award highlights
- Trophy/award iconography with lime green glow pulse animation
- Brand Red (#A5171D) for category headings
- Celebratory visual treatment with subtle sparkle effects
- Winter-themed decorative elements (crystalline borders)

### 8. Call-to-Action Section (Pre-footer)
**Purpose:** Final conversion push

**Elements:**
- Urgency message: "Количество мест ограничено"
- Primary CTA button (repeated)
- Secondary info: Contact for questions

**Visual Treatment:**
- Contrasting background: Deep Navy (#1a2332)
- Large, prominent button: Brand Red (#A5171D) with lime green glow
- Off-White (#F9F8F8) text on dark background
- Full-width section
- Subtle snowflake animation in background
- Urgency messaging in Lime Green (#86E619) accent

### 9. Footer
**Purpose:** Additional information and credibility

**Elements:**
- ProHunters logo
- Contact information
- Social media links
- Copyright notice
- Privacy policy link (if applicable)

**Visual Treatment:**
- Dark background (navy)
- Minimal, organized layout
- Small text

## Responsive Design Breakpoints

**Mobile First Approach:**

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

**Mobile Optimizations (320-767px):**
- Single column layout throughout
- Larger touch targets (min 44x44px)
- Simplified navigation (hamburger if needed)
- Stacked speaker cards
- Condensed timeline (centered alignment)
- CTAs become full-width or near full-width
- Reduced font sizes for hero
- Optimized images (smaller file sizes)
- Click-to-call phone numbers
- Click-to-navigate for address

**Tablet Optimizations (768-1023px):**
- Two-column layouts where appropriate
- Balanced spacing
- Hybrid navigation
- Medium-sized images

**Desktop Optimizations (1024px+):**
- Multi-column grids
- Hover effects and interactions
- Larger imagery
- Fixed navigation (optional)
- Side-by-side content blocks

**Performance Considerations:**
- Lazy loading for images below the fold
- Responsive images with srcset
- Optimized image formats (WebP with JPG fallback)
- Critical CSS inlining
- Deferred JavaScript loading

## User Experience Flow

**Entry Point:** Direct link, email invitation, social media

**User Journey:**

1. **Arrival (0-3 seconds):**
   - Hero section immediately communicates event value
   - Clear event title and date visible
   - CTA button obvious and accessible

2. **Interest Building (3-30 seconds):**
   - Scan value propositions
   - Quick scroll to see what's below
   - Review program highlights

3. **Consideration (30-90 seconds):**
   - Read through program timeline
   - Review speaker credentials
   - Check venue details
   - Assess schedule fit

4. **Decision (90-180 seconds):**
   - Re-read key benefits
   - Final review of logistics
   - Notice exclusivity/limited seats messaging

5. **Conversion:**
   - Click primary CTA
   - (If external form): Smooth transition to registration
   - (If inline form): Simple, minimal fields

**Psychological Triggers:**
- Exclusivity: "закрытое мероприятие", "ограниченное количество мест"
- Social proof: Award categories, reputable speakers, recognized companies
- Authority: Speaker credentials, company background
- Scarcity: Limited seating implication
- Reciprocity: Free event with high value (research, networking, dinner)
- Anticipation: Raffle, awards ceremony

**Friction Reduction:**
- Minimal form fields (name, email, company, phone)
- Clear privacy assurance
- One-click social sharing
- Auto-fill friendly forms
- Progress indicators if multi-step

## Conversion Optimization Strategies

**Primary CTA Optimization:**
- Placement: Above fold, repeated 2-3 times
- Text: Action-oriented in Russian
  - Primary: "Зарегистрироваться" or "Забронировать место"
  - Alternative: "Подтвердить участие"
- Design: Solid Brand Red (#A5171D) with high contrast on navy/white backgrounds
- Size: Prominent but not overwhelming (min 48px height for touch)
- Visual effects:
  - Subtle lime green glow on hover: box-shadow: 0 0 20px rgba(134, 230, 25, 0.5)
  - Primary hero CTA: Gentle 2s pulse animation using lime green
  - Scale transform on hover: 1.05
  - Smooth 0.3s transition for all states
- Hover state: Transition to Secondary Green (#297432) background
- Active/clicked: Darker red (#8B1318) with brief lime green flash
- Brand alignment: All CTAs use ProHunters red, reinforcing brand recognition

**Trust Signals:**
- Speaker photos and credentials
- Company logo (ProHunters)
- Past event photos (if available)
- Testimonials from previous events (if available)
- Partner logos (if applicable)
- Professional venue name

**Urgency Elements:**
- "Количество мест ограничено" messaging
- Optional countdown timer to event
- "Осталось X дней" indicator

**Social Proof:**
- Award categories listing
- Notable companies mentioned (Sber, Beeline, etc.)
- Speaker affiliations with recognizable companies

**Exit Intent Strategy:**
- Exit intent popup (optional) offering:
  - Reminder to register
  - Quick benefits recap
  - Email capture for event reminders

**Micro-interactions:**
- Button hover effects
- Smooth scroll to sections
- Image hover zoom or overlay effects
- Timeline progress indicator
- Loading animations
- Success confirmation after CTA click

## Technical Implementation Notes

**HTML Structure:**
- Semantic HTML5 elements
- Proper heading hierarchy (h1 > h2 > h3)
- ARIA labels for accessibility
- Alt text for all images
- Meta tags for SEO and social sharing

**CSS Architecture:**
- CSS Grid for layout
- Flexbox for component alignment
- CSS Custom Properties (variables) for colors/spacing
- Mobile-first media queries
- Smooth scroll behavior
- CSS animations for micro-interactions
- Fallbacks for older browsers

**JavaScript Requirements (Minimal):**
- Smooth scroll to sections (if not using CSS)
- Optional: Countdown timer
- Optional: Exit intent detection
- Optional: Form validation
- Analytics tracking (event tracking for CTAs)

**Performance Optimization:**
- Minified CSS
- Optimized images (compressed JPGs, WebP)
- Lazy loading for images
- Async/defer for scripts
- Critical CSS inline
- Remove unused CSS

**Cross-Browser Compatibility:**
- Modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Graceful degradation for older browsers
- Progressive enhancement approach

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast (4.5:1 for text)
- Focus indicators
- Skip to content link

**SEO Considerations:**
- Descriptive title tag: "ProHunters 2025: Под звон Jingle-Bells - Закрытое мероприятие 9 декабря"
- Meta description: 155 characters summarizing event value
- Open Graph tags for social sharing
- Structured data markup (Event schema)
- Semantic HTML
- Fast page load speed

**Analytics Integration:**
- Google Analytics (or equivalent) setup
- Event tracking for:
  - CTA clicks
  - Scroll depth
  - Time on page
  - Exit points
  - Form interactions

## Content Writing Guidelines

**Tone of Voice:**
- Professional but warm
- Sophisticated yet approachable
- Enthusiastic without being overly promotional
- Confident and authoritative

**Key Messaging Points:**
- Exclusive, closed event (creates desire)
- Valuable labor market research (educational benefit)
- Networking with industry leaders (social benefit)
- Recognition of top employers (prestige/FOMO)
- Premium venue and experience (experiential benefit)

**Content Principles:**
- Keep original Russian text from markdown
- Do not alter or reinterpret the meaning
- Use bullet points for scannability
- Short paragraphs (2-3 sentences max)
- Active voice
- Benefit-focused language
- Specific details (times, names, locations)

**Call-to-Action Copy:**
- Primary CTA: "Зарегистрироваться на мероприятие"
- Alternative: "Забронировать место"
- Secondary: "Узнать больше"
- Urgency: "Места ограничены - зарегистрируйтесь сегодня"

## Visual Assets Requirements

**Logo:**
- ProHunters logo (img/logo.png)
- Placement: Header, footer
- Format: PNG with transparency
- Sizing: Maintain aspect ratio, max height 60px header

**Speaker Photos:**
- All images in img/ directory
- Professional headshots
- Consistent sizing: 300x300px display (actual size can be larger)
- Circular or rounded rectangle crop
- Subtle shadow or border effect
- Optimized for web (under 150KB each)

**Icons/Decorative Elements:**
- Vector icons for benefits section
- Timeline connector graphics
- Award/trophy icons
- Location pin icon
- Clock/calendar icons
- Musical note or bell (subtle holiday theme)

**Background Elements:**
- Subtle geometric patterns
- Gradient overlays
- Optional: Abstract holiday-themed shapes (subtle snowflakes, bells)
- Texture: Paper or fabric texture for depth (very subtle)

**Image Optimization:**
- Use WebP format with JPG fallback
- Compress all images (80-85% quality)
- Implement responsive images (srcset)
- Lazy load images below fold

## Form Design (If Inline)

**Form Fields:**
1. Имя и Фамилия (Full Name) - required
2. Email - required, with validation
3. Телефон (Phone) - required, formatted
4. Компания (Company) - required
5. Должность (Position) - optional

**Form Design:**
- Clean, minimal design
- Clear labels above fields
- Placeholder text as examples
- Inline validation (real-time)
- Error messages in Russian
- Submit button matches primary CTA style
- Success message after submission
- Privacy note: "Ваши данные защищены и не будут переданы третьим лицам"

**Form Validation:**
- Email format check
- Phone number format (Kazakhstan)
- Required field indicators
- Clear error messaging
- Prevent double submission

## Testing Recommendations

**A/B Testing Priorities:**

**Test 1: CTA Button Color (Brand-Aligned Variants)**
- Variant A: Brand Red (#A5171D) - default
- Variant B: Secondary Green (#297432) - alternative accent
- Variant C: Lime Green (#86E619) with dark text - high energy
- Note: All variants maintain brand consistency
- Metric: Click-through rate, conversion rate

**Test 2: Hero CTA Text**
- Variant A: "Зарегистрироваться"
- Variant B: "Забронировать место"
- Variant C: "Подтвердить участие"
- Metric: Click-through rate

**Test 3: Value Proposition Order**
- Variant A: Networking first
- Variant B: Research insights first
- Metric: Scroll depth, engagement

**Test 4: Speaker Section Format**
- Variant A: Grid layout
- Variant B: Carousel
- Metric: Time on section, clicks

**Test 5: Urgency Messaging**
- Variant A: "Количество мест ограничено"
- Variant B: "Осталось X мест"
- Variant C: No urgency message
- Metric: Conversion rate

**Device Testing:**
- iPhone (various models)
- Android devices (various screen sizes)
- iPad/tablets
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Various screen resolutions

**Usability Testing:**
- Task: Find event date and time (target: <5 seconds)
- Task: Identify main benefits (target: <15 seconds)
- Task: Locate registration button (target: <3 seconds)
- Task: Find speaker information (target: <20 seconds)

**Performance Testing:**
- Page load time on 3G, 4G, WiFi
- Time to interactive
- First contentful paint
- Largest contentful paint
- Cumulative layout shift

**Cross-Browser Testing:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers

## Success Criteria

**Launch Criteria:**
- Page loads in under 2 seconds on 4G
- All images display correctly
- CTAs are functional
- Mobile responsive on all tested devices
- No console errors
- Accessibility score 90+ (Lighthouse)
- SEO score 90+ (Lighthouse)

**Post-Launch Monitoring:**
- Daily analytics review
- Heat mapping analysis (week 1)
- User session recordings review
- Conversion rate tracking
- Bounce rate monitoring
- Device/browser breakdowns
- Traffic source analysis

**Optimization Cycle:**
- Week 1: Monitor and fix critical issues
- Week 2: Implement quick wins from analytics
- Ongoing: A/B testing of key elements
- Post-event: Gather feedback for future events

## Maintenance and Updates

**Pre-Event:**
- Weekly content reviews
- Speaker bio updates if needed
- Program adjustments
- Countdown timer updates

**Post-Event:**
- Add photos from event
- Convert to "thank you" page
- Collect feedback
- Archive as portfolio piece

## Additional Considerations

**Internationalization:**
- All content in Russian
- Proper Cyrillic font rendering
- Right locale for date/time formatting
- Proper character encoding (UTF-8)

**Print Considerations:**
- Print stylesheet for easy printing
- QR code generation (optional) for easy mobile access

**Social Sharing:**
- Pre-populated share text
- Open Graph image (event banner)
- Twitter card metadata
- LinkedIn sharing optimization

**Email Integration:**
- Calendar invite download (.ics file)
- Email reminder system
- Thank you email after registration
- Follow-up emails with more details

## Brand Alignment Summary

**Color Transformation:**
This requirements document has been updated to fully align with ProHunters official brand identity, replacing generic event colors with the authentic brand palette:

**Removed Colors (Non-Brand):**
- Champagne Gold/Bronze (#c9a961, #d4af37)
- Deep Burgundy/Wine (#8b2839, #a94064)
- Generic Success Green (#27ae60)

**Implemented Colors (Official ProHunters Brand):**
- Primary Brand Red (#A5171D) - All CTAs, headings, timeline markers
- Lime Green Accent (#86E619) - Interactive elements, awards, sparkles, glow effects
- Secondary Green (#297432) - Hover states, alternative accents
- Dark Gray (#333333) - Body text
- Off-White (#F9F8F8) - Clean backgrounds
- Deep Navy (#1a2332) - Hero and contrast sections (retained for sophistication)

**New Year Elements Integration:**
All festive touches use brand colors exclusively:
- Snowflakes: White/lime green semi-transparent blend
- Sparkles: Lime green (#86E619) with opacity variations
- Glow effects: Lime green halos on CTAs and interactive elements
- Timeline decorations: Brand red markers with lime green accents
- Section dividers: Geometric winter patterns in brand colors

**Brand Benefits:**
- Consistent brand recognition throughout user journey
- Professional festive atmosphere without generic holiday cliches
- Modern, energetic feel from lime green contrasts with sophisticated red
- All elements reinforce ProHunters identity
- Accessibility maintained with proper contrast ratios
- Unique visual identity distinct from competitor events

**Implementation Priorities:**
1. Update all CTA buttons to Brand Red (#A5171D)
2. Apply lime green glow effects to interactive elements
3. Implement snowflake animation with brand color blend
4. Update award icons and sparkle effects to lime green
5. Revise section backgrounds to off-white/navy palette
6. Add festive timeline marker for awards ceremony
7. Test lime green contrast ratios for accessibility compliance

This comprehensive requirements document serves as the foundation for creating a high-converting, professional landing page that effectively communicates the value of the ProHunters 2025 event while maintaining the sophisticated, exclusive tone appropriate for the target audience and authentic ProHunters brand identity.