# Open Graph Image Creation Guide

## Required Specifications

### Dimensions
- **Width:** 1200px
- **Height:** 630px
- **Aspect Ratio:** 1.91:1
- **Format:** JPG or PNG (JPG recommended for smaller file size)

### Design Guidelines

#### Content to Include:
1. **VelDurSen Logo** - Prominently displayed
2. **Company Name:** "VelDurSen Technologies"
3. **Tagline:** "Enterprise AI Solutions & Digital Transformation"
4. **Visual Elements:**
   - Modern, professional design
   - Technology-themed graphics (circuits, networks, AI symbols)
   - Corporate color scheme (Red #EF4444, Blue #2563EB, Slate #0F172A)

#### Design Tips:
- Keep text large and readable (minimum 60px for main text)
- Use high contrast for better visibility on social media
- Avoid placing important content in the outer 10% of the image (safe zone)
- Test how it looks as a thumbnail (small size preview)

### File Location
Save the final image as:
```
/public/og-image.jpg
```

### Alternative: Use Image Generation

You can use the AI image generation tool to create this:

**Prompt Example:**
"Professional corporate Open Graph image for enterprise technology company VelDurSen. Modern design with company logo, text 'VelDurSen Technologies - Enterprise AI Solutions & Digital Transformation', technology-themed graphics like neural networks and cloud infrastructure, corporate colors red and blue, clean professional layout, 1200x630 pixels"

### Current Status
- ❌ og-image.jpg not yet created
- ✅ Meta tags reference og-image.jpg
- ⚠️ Create this image to complete Open Graph implementation

### Testing
After creating the image, test it using:
1. **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

### Priority
**Medium** - The website will function without it, but social media sharing will look much better with a custom OG image.
