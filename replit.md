# FATOMANIA - Site de Curiosidades Científicas

## Overview
FATOMANIA is a Portuguese scientific curiosities website providing interactive content across various scientific topics. It features a dynamic content management system, user authentication via Firebase, and interactive dashboards, making scientific knowledge accessible and engaging. The project aims to deliver educational content in an interactive format, with a focus on modern web technologies and a responsive user experience.

## User Preferences
I prefer simple language and clear explanations. I want iterative development with frequent, small updates rather than large, infrequent ones. Please ask for my approval before making any major architectural changes or introducing new external dependencies. When implementing features, prioritize user experience and maintain consistency with the existing design language. Do not make changes to the existing file structure without explicit approval.

## System Architecture
The project utilizes a modern web stack consisting of HTML5, CSS3, and ES6 JavaScript for the frontend. Authentication is handled by Firebase Authentication with Google Sign-in. A Python HTTP server serves static files. The architecture supports dynamic content loading through Firestore, interactive dashboards for authenticated users, and a comprehensive content submission and administration system.

**UI/UX Decisions:**
- Modern, responsive design principles.
- Preservation of the Portuguese language and original branding.
- Consistent modal behavior and article viewing across sections.
- Dynamic content display for articles, quizzes, and multimedia.
- Certificate generation for quiz achievements.

**Technical Implementations:**
- **Firebase Integration:** Firebase Authentication for user management and Firestore for dynamic content storage.
- **Content Management:** Dedicated submission forms (e.g., `submit-news.html`, `submit-quiz.html`) and an `admin-panel.html` for centralized content administration.
- **Image Uploads:** Implemented using the `imgbb` API for direct client-side uploads, with a centralized utility (`js/upload-utils.js`).
- **Dynamic Content Sections:** Eight main "mania" sections (e.g., `newsmania-modern.html`, `quizmania-modern.html`) designed for dynamic content display and user interaction.
- **Client-Side Data Handling:** Fallback mechanisms for Firestore queries (client-side ordering when server-side indexes are unavailable) and dynamic filtering.
- **Module-based JavaScript:** Utilizing ES6 modules, with functions explicitly exposed to the `window` object for HTML `onclick` events.

**Feature Specifications:**
- Scientific articles and educational content.
- User authentication and personalized dashboards.
- Interactive quizzes with ranking systems.
- Dynamic news feeds, art galleries, and technology hubs.
- Submission forms for user-generated content.
- Lab tools and simulations (e.g., `lab/periotab.js`).
- WhatsApp integration for contact forms.

**System Design Choices:**
- **Frontend-only with Firebase Backend:** The application operates entirely on the client-side, accessing Firebase services (Auth, Firestore) directly from the browser.
- **Static File Serving:** A Python `http.server` is used for serving static assets, configured for Replit's autoscale deployment.
- **Absolute Paths:** All internal links and resource paths use absolute references.

## External Dependencies
- **Firebase:**
    - **Firebase Authentication:** For user sign-up, login, and session management.
    - **Firestore:** NoSQL cloud database for storing dynamic content (articles, quizzes, user profiles).
- **imgbb API:** Used for image uploads from client-side forms.
- **Python Standard Library:** Specifically, `http.server` for serving static files.