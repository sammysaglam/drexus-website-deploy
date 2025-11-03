# Navigation Accessibility Guide

## Overview

The Drexus platform implements a fully accessible mega navigation system following WCAG 2.1 AA
standards. This guide documents the keyboard navigation features and testing procedures.

## Keyboard Navigation Features

### 1. Skip Link

- **Location**: First focusable element when tabbing
- **Purpose**: Allows keyboard users to skip directly to main content
- **Activation**: Press Enter when focused to jump to `#main-content`

### 2. Tab Navigation

- **Tab**: Move forward through interactive elements
- **Shift+Tab**: Move backward through interactive elements
- **Order**: Logical flow from left to right, top to bottom

### 3. Mega Menu Navigation

#### Opening Menus

- **Focus**: Tab to a menu item with dropdown
- **Open**: Press Enter, Space, or Arrow Down
- **Mouse**: Hover to open (keyboard takes precedence)

#### Within Mega Menus

- **Arrow Down**: Move to next item in current column
- **Arrow Up**: Move to previous item in current column
- **Arrow Right**: Move to next column
- **Arrow Left**: Move to previous column
- **Tab/Shift+Tab**: Navigate through all links sequentially

#### Closing Menus

- **Escape**: Close any open mega menu
- **Click Outside**: Close mega menu
- **Tab Out**: Menu closes when focus leaves

### 4. Search Functionality

- **Open**: Click search icon or tab to it and press Enter
- **Focus**: Input automatically receives focus when opened
- **Close**: Press Escape or click Cancel button

### 5. Mobile Navigation

- **Menu Toggle**: Hamburger button opens full-screen menu
- **Search**: Integrated at top of mobile menu
- **Scroll**: Menu items are scrollable if content exceeds viewport

## Focus Management

### Visual Indicators

- **Default**: 2px blue ring with 2px offset
- **High Contrast**: Meets WCAG color contrast requirements
- **Consistency**: Same focus style across all interactive elements

### Focus Trapping

- **Mega Menus**: Focus trapped within open menu
- **First/Last Element**: Tab wraps from last to first element
- **Escape Route**: ESC key always available to exit

## Testing Procedures

### Manual Testing Checklist

1. **Skip Link Test**
   - [ ] Tab once from page load
   - [ ] Verify skip link appears
   - [ ] Press Enter
   - [ ] Verify focus moves to main content

2. **Menu Navigation Test**
   - [ ] Tab to each main menu item
   - [ ] Open with Enter/Space/Arrow Down
   - [ ] Navigate with arrow keys
   - [ ] Close with Escape
   - [ ] Verify focus returns to trigger

3. **Focus Trap Test**
   - [ ] Open mega menu
   - [ ] Tab through all items
   - [ ] Verify focus wraps at boundaries
   - [ ] Test Shift+Tab backwards

4. **Search Test**
   - [ ] Tab to search button
   - [ ] Press Enter to open
   - [ ] Verify input has focus
   - [ ] Test Escape to close
   - [ ] Verify focus returns to button

### Automated Testing

Visit `/test-keyboard-nav` to run the interactive keyboard navigation test suite. This page
provides:

- Real-time key press logging
- Visual feedback for navigation features
- Test status indicators
- Focus order verification

### Screen Reader Compatibility

The navigation has been tested with:

- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

All interactive elements include:

- Proper ARIA labels
- Role attributes
- State indicators (expanded/collapsed)
- Descriptive link text

## Implementation Details

### Key Components

1. **NavMega.tsx**
   - Sticky header with shadow on scroll
   - Utility bar with quick actions
   - Main navigation with mega menus
   - Mobile responsive design

2. **FooterMega.tsx**
   - Comprehensive sitemap
   - Newsletter signup form
   - Social links
   - Contact information

### Accessibility Features

- `aria-expanded`: Indicates menu state
- `aria-haspopup`: Indicates presence of submenu
- `tabIndex=-1`: Prevents tab focus on non-active menu items
- Focus restoration after menu close
- Reduced motion support

## Browser Support

Tested and verified on:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Known Issues & Limitations

1. **Touch Devices**: Hover interactions fallback to tap
2. **Screen Magnification**: Mega menus may require horizontal scrolling at 400% zoom
3. **Voice Control**: Optimized for common commands (e.g., "Click Solutions")

## Maintenance

When adding new navigation items:

1. Ensure all links have descriptive text
2. Test keyboard navigation flow
3. Verify focus indicators are visible
4. Check mobile menu integration
5. Update sitemap in footer

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Keyboard Testing](https://webaim.org/articles/keyboard/)
