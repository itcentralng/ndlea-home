# 82nd Division - Chronicle of Commanders

A comprehensive web application showcasing the history and commanders of the Nigerian Army's 82nd Division, documenting the leadership legacy from 1973 to present.

## Features

- **Home Page** (`index.html`): Interactive grid displaying all 39 commanders with flip cards
- **History Page** (`history.html`): Complete history of the 82nd Division
- **Biography Pages** (`biography.html`): Detailed individual commander biographies with typing animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Color transitions, typing effects, and card flip animations
- **Modern UI**: Military-themed design with gold and green color scheme

## File Structure

```
82 DIV/
├── index.html          # Home page with commanders grid
├── history.html        # Division history page
├── biography.html      # Commander biography template
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality and animations
├── run.bat            # Windows batch file for local server
├── fonts/             # Custom font files directory
│   ├── local-fonts.css     # Font face declarations
│   ├── crimson-text-*.ttf  # Crimson Text font variants
│   ├── oswald-*.ttf        # Oswald font variants
│   └── playfair-display-*.ttf # Playfair Display font variants
├── images/            # Commander portraits and assets
│   ├── 82nd-logo.png      # Division logo
│   └── [commander].jpg    # Individual commander photographs
└── videos/            # Video assets directory
    └── video.mp4          # Background or promotional video
```

## How to Use

1. **Open the application**: Open `index.html` in a web browser
2. **Navigate to History**: Click on the "History" text under the logo
3. **View Commander Biographies**: Click on any commander card to view their biography
4. **Return Home**: Click the logo from any page to return to the home page

## Commander Information

The application chronicles 39 distinguished commanders who have led the Nigerian Army's 82nd Division from 1973 to present, including:

### Notable Historical Commanders:
- **Late Brig Gen GGA Ally** (1973) - First Commander, appointed 15 Dec 73
- **Late Maj Gen M Buhari** (1980-1981) - Later became President of Nigeria (2015-2023)
- **Gen AA Abubakar** (1988-1990) - Later became Head of State and Commander-in-Chief
- **Late Lt Gen SVL Malu** (1996-1998) - Later served as Chief of Army Staff
- **Late Lt Gen I Attahiru** (2015-2016) - Later served as Chief of Army Staff until 2021
- **Late Lt Gen TA Lagbaja** (2021-2022) - Later served as Chief of Army Staff until 2024
- **Maj Gen OT Olatoye** (2025-Present) - Current Commander

### Division Evolution:
- Originally established as **4 Infantry Division** (1975-1981)
- Transitioned to **82 Composite Division** (1981-1985)  
- Became **82 Division** (1985-Present)
- Currently serves as **82 Division and Force Commander Joint Task Force (South East) Operation UDO KA**

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies or frameworks required
- **Responsive Grid**: Automatically adjusts from 4 columns to fewer on smaller screens
- **Interactive Animations**: 
  - Card flip animations on commander cards
  - Typing animations for biography text
  - Color transition effects for navigation
  - Staggered card loading animations
- **URL Parameters**: Biography pages use URL parameters to display specific commanders
- **Custom Typography**: Local font files for Crimson Text, Oswald, and Playfair Display
- **High-Resolution Images**: Actual commander photographs (39 unique portraits)
- **Military Color Scheme**: Nigerian Army colors - military green (#1a472a) and gold (#ffd700)
- **Performance Optimized**: Efficient animations and minimal resource usage

## Customization

### Adding More Commanders

1. Add new commander data to the `commanders` array in `script.js` following the existing structure:
   ```javascript
   {
       id: [next_number],
       name: "COMMANDER NAME",
       image: "images/commander_filename.jpg",
       yearOfService: "YYYY-YYYY",
       biography: "Detailed biography text..."
   }
   ```
2. Add the commander's photograph to the `images/` directory
3. The grid will automatically update to include the new commander

### Customizing Fonts

The application uses three custom font families stored locally in the `fonts/` directory:
- **Crimson Text**: For body text and paragraphs
- **Oswald**: For headings and commander names
- **Playfair Display**: For decorative elements

To modify fonts, update the `@font-face` declarations in `fonts/local-fonts.css`

### Updating Color Scheme

Primary color variables in `styles.css`:
- `--primary-green`: `#1a472a` (Nigerian Army green)
- `--accent-gold`: `#ffd700` (Military gold)
- `--cream`: `#f4f4f4` (Background cream)
- `--dark-green`: `#0f2e1a` (Darker green for accents)

### Image Specifications

Commander portraits should be:
- **Format**: JPEG (.jpg)
- **Dimensions**: Minimum 300x300 pixels, preferably square aspect ratio
- **Quality**: High resolution for crisp display
- **Naming**: Use lowercase with underscores (e.g., `lastname.jpg` or `firstname_lastname.jpg`)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile devices
- No JavaScript frameworks required

## Development & Deployment

### Local Development
1. **Simple HTTP Server**: Use the included `run.bat` file for Windows, or run:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```
2. **Live Server**: Use VS Code Live Server extension for real-time development
3. **Direct File Access**: Open `index.html` directly in modern browsers

### Browser Compatibility
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile Devices**: iOS Safari 12+, Android Chrome 60+
- **Features Used**: CSS Grid, Flexbox, CSS Animations, ES6 JavaScript

### Performance Features
- **Lazy Loading**: Images load as needed
- **Efficient Animations**: CSS transforms and transitions for smooth performance
- **Minimal Dependencies**: No external libraries or frameworks
- **Optimized Assets**: Compressed images and minimal CSS/JS

## Project History & Context

This application serves as a digital memorial and historical record of the Nigerian Army's 82nd Division leadership. Originally established in 1975 as the 4 Infantry Division in Enugu, it has evolved through several organizational changes while maintaining its critical role in Nigeria's defense structure.

The division has been commanded by distinguished officers who have gone on to serve in the highest positions of Nigerian military and civilian leadership, including former Presidents and Chiefs of Army Staff.

## Repository Information
- **Repository**: 82div-enugu
- **Owner**: itcentralng  
- **Branch**: main
- **Type**: Static web application
- **License**: Not specified

## Technical Support & Maintenance

- **Error Handling**: Graceful fallbacks for missing images and data
- **Responsive Design**: Adapts to all screen sizes
- **Accessibility**: Keyboard navigation and screen reader friendly
- **SEO Optimized**: Proper meta tags and semantic HTML structure
# ndlea-home
