# Chiprion — approved project context

Source: owner-supplied website context and PRD, pasted in the conversation on October 13, 2026. This supersedes the repository's incorrect medical-company content.

## Company and purpose
- Company: **Chiprion**, not Chipiron.
- Industry: **VLSI and semiconductor training**, not healthcare or medical imaging.
- Website: marketing and lead generation; not an LMS in version 1.
- Audience: electronics/ECE/EEE/VLSI/embedded students, working engineers, related-domain career switchers, colleges, semiconductor companies.
- Core message: practical VLSI and semiconductor training for future chip engineers.
- Learning areas: VLSI design, verification, physical design, DFT, embedded systems.
- Approach: industry-oriented curriculum, hands-on projects, tool exposure, expert mentorship, career and interview guidance.
- Conversions: free demo, course inquiry, syllabus/brochure request, college/corporate training proposal, counselor contact.

## Design direction
Preserve the original homepage section layout. Use professional technical styling, readable content, subtle circuit details, restrained green/cyan accents. Avoid heavy glitch effects and unrealistic placement claims.

Tokens: background #070B12; surface #0D1420; elevated #121A28; border #1E2A3A; primary text #E6EDF5; secondary text #9AA7B8; green #00E585; cyan #22D3EE; purple #A855F7; danger #FF4D6D.
Fonts: Space Grotesk headings, Inter body, JetBrains Mono technical labels. Uppercase only for buttons, labels, badges.

## Content rules
Do not invent student counts, placement rates, hiring partnerships, testimonials, mentor credentials, pricing, program schedules, locations, contact details, or social handles. Publish success stories only with approval and consent.

Learning-track descriptions on the current page are indicative editorial overviews based on the named domains, not approved course syllabi. Program-specific prerequisites, tools, project scope, fees, certification, schedules, and delivery modes need owner confirmation.

## Required production scope (not yet implemented)
- Course catalog and SEO-friendly detail pages; filters for domain, level, duration, mode.
- About, tracks, why Chiprion, mentors, outcomes, college training, corporate training, resources/blog, careers, contact, privacy and terms.
- Student inquiry fields: name, email, phone, qualification, college/company, course, preferred mode, message, communication consent.
- Business fields: name, designation, organization, email, phone, requirement, participant count, message.
- Live lead submission, validation and spam protection, server-side database writes, email notifications, booking, WhatsApp integration.
- CMS content management and lead administration.
- Page SEO, analytics/conversion tracking, verified production-domain canonical URLs and sitemap, approved legal and cookie-consent content.
- Target stack: Next.js 14+ App Router, TypeScript, Tailwind; Sanity or Payload; PostgreSQL through Supabase/Neon; Vercel; Resend/SendGrid; Zod; GA4; future CRM.

The current repository remains a React/Vite frontend. This update corrects the homepage content and visual tokens, not the complete production platform or framework migration.

## Preview form behavior
Inquiries are **local downloadable drafts only**. No details are submitted, emailed, stored on a server, or booked. Explicitly disclose this before collecting input and after saving. No fake submission confirmations. Do not add guessed phone numbers or WhatsApp URLs.

## Owner content / launch blockers
Approved course list and detailed syllabi; mentor profiles/photos; consented testimonials; verified outcomes/partners; college/corporate offerings; contact channels; pricing policy; brochure PDFs; legal policies; CMS/database/email/booking configuration; production domain and analytics IDs.

Version 1 excludes online payments, student accounts, course progress, video hosting, full LMS, and multilingual support unless separately requested.

## UI content coverage
The homepage retains its original nine-section structure. Public-facing content is attached to that design through reusable components:

| Brief content | UI location |
| --- | --- |
| Brand positioning and hero CTAs | Hero and header |
| Company purpose and audience journeys | About section / `AudiencePaths` |
| Learning tracks and catalog discovery | Course cards, search, domain filter |
| Course overview, audience, topics, outcomes, confirmation fields | `ProgramOverview` inside each course card |
| Downloadable information | Clearly labeled text track overviews; approved PDF downloads pending |
| Learning journey | Four-step learning sequence |
| Differentiators and example technologies | Why Chiprion / `ToolsOverview` |
| Mentor and success-story requirements | Mentorship / outcomes approval notices; no invented profiles |
| Career guidance and recruitment status | `CareerGuidance` |
| Resource categories and introductory guides | `ResourceLibrary`; website draft content clearly identified |
| College and corporate offerings and request process | `TrainingDetails` |
| Student and institution inquiry fields | `InquiryDialog`; local draft only |
| FAQs and final conversion actions | FAQ and contact sections |
| Contact, WhatsApp, office, social details | Contact-channel readiness notices; verified values pending |
| Privacy and terms | `PreviewNotices`; accurate preview behavior, not approved production policies |

Editable frontend content lives in `src/content/site.ts` and `src/content/experience.ts`. This is source-code content configuration, **not** a CMS or a nontechnical admin interface. Course-detail routes and the broader production sitemap are still not implemented.

## Internal goals and launch acceptance (not marketing copy)
- Awareness, program discovery, credibility, qualified leads, demo bookings, and institutional training inquiries.
- Set traffic targets after establishing a launch baseline.
- Target lead conversion: 3–5%; bounce rate below 55%; track course inquiries and demo bookings weekly.
- Mobile responsiveness: 320px through 1920px+; fast page loading with a target below three seconds on standard broadband; WCAG 2.1 AA basics and modern Chrome/Safari/Edge/Firefox support.
- Launch requires functioning server-side submissions and notifications, complete approved course details, content/lead administration, verified contact integrations, analytics and SEO, legal approval, mobile/cross-browser/accessibility/performance testing, domain/HTTPS, and backup/rollback planning.
- Lead statuses for the future admin system: New, Contacted, Demo scheduled, Follow-up, Enrolled, Not interested.
- Use environment variables for API keys; never expose database writes or service credentials in browser code.
- Do not activate analytics or live communication consent until the corresponding approved policy and service are configured.
