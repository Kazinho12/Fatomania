# FATOMANIA - Scientific Curiosities Website

## Overview
FATOMANIA is a Portuguese-language scientific curiosities website that provides interactive content about various scientific topics. The project was imported from GitHub and successfully configured to run in the Replit environment.

## Project Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6 modules)
- **Authentication**: Firebase Authentication with Google Sign-in
- **Server**: Python HTTP server for static file serving
- **Deployment**: Configured for Replit autoscale deployment

### Key Features
- Scientific curiosity articles and content
- Firebase authentication system
- Interactive dashboard for authenticated users
- Laboratory simulations and tools
- News and quiz sections
- Multi-section educational content (Chemistry, Physics, Biology, etc.)

## File Structure
```
├── index.html                 # Landing redirect page
├── paginainicial.html         # Main landing page
├── logsin.html               # Authentication page
├── dashboard.html            # User dashboard (requires auth)
├── firebase-config.js        # Firebase configuration
├── css/                      # Stylesheets for each section
├── js/                       # JavaScript modules
├── icon/                     # Image assets
├── lab/                      # Laboratory tools and simulations
├── mania/                    # Subject-specific pages
└── app.html                  # Application showcase page
```

## Recent Changes (Complete Modernization)
- **Date**: September 29, 2025
- **Major Update**: Complete modernization with dynamic Firebase integration
- **Changes Made**:
  1. **Infrastructure Setup**: Python 3.11, static HTTP server, autoscale deployment
  2. **Firebase Integration**: Complete Firestore database integration for dynamic content
  3. **Modernized Mania Pages** (8 key sections):
     - newsmania-modern.html - Dynamic scientific news system
     - quizmania-modern.html - Interactive quiz system with ranking
     - artmania-modern.html - Dynamic art and culture gallery
     - sciencemania-modern.html - Scientific discoveries center
     - ecomania-modern.html - Environmental sustainability content
     - techmania-modern.html - Technology and innovation hub
     - medmania-modern.html - Medical and health information
     - spacemania-modern.html - Space exploration content
  4. **Content Management System**: 
     - submit-news.html, submit-quiz.html, submit-art.html - User submission systems
     - admin-panel.html - Centralized content administration
  5. **Advanced Features**: Quiz ranking system, user authentication, dynamic filtering
  6. **User Experience**: Modern responsive design, Portuguese language preservation

## Configuration Details

### Server Setup
- **Development**: Python HTTP server on port 5000
- **Production**: Same configuration with autoscale deployment
- **Binding**: 0.0.0.0 to allow external access through Replit proxy

### Firebase Configuration
- Authentication is pre-configured with API keys
- Google OAuth provider enabled
- User state management implemented
- Automatic redirects between login and dashboard pages

## User Workflow
1. User visits root URL → redirected to main landing page
2. Clicks "Explorar Agora" → redirected to login page
3. Authenticates via email/password or Google
4. Access granted to dashboard and protected content
5. Can explore various scientific sections and tools

## Deployment Status
✅ Successfully configured and ready for production deployment
✅ All static assets serving correctly
✅ Firebase authentication functional
✅ Cross-browser compatibility maintained
✅ Mobile-responsive design preserved

## Notes
- The project uses ES6 modules with Firebase CDN
- All paths use absolute references (starting with /)
- Portuguese language content maintained
- Original styling and branding preserved
- No dependencies beyond Firebase CDN and Python stdlib