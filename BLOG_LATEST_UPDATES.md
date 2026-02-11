# Latest Blog Updates - Feb 11, 2026

## ✅ Changes Completed

### 1. Blog Card Subtitle Enhancement

**Location**: Blog listing page (`/blog`)

**Changes Made**:
- **Font Size**: `text-sm` (14px) → `text-base` (16px) - Bigger and more readable
- **Font Family**: Added `font-serif` - Unique, elegant serif font (Georgia-style)
- **Color**: `text-slate-600` → `text-slate-700` - Darker for better contrast
- **Result**: Subtitle (excerpt) text now stands out with a distinctive serif font

**Before**:
```tsx
<p className="text-sm text-slate-600 ...">
```

**After**:
```tsx
<p className="text-base text-slate-700 font-serif ...">
```

### 2. Alternating Left-Right Scroll Animations

**Location**: Blog detail pages (`/blog/:slug`)

**What It Does**:
- Content sections animate as you scroll down
- **Even sections** (0, 2, 4...): Slide in from **RIGHT** →
- **Odd sections** (1, 3, 5...): Slide in from **LEFT** ←
- Creates dynamic, engaging reading experience

**Technical Implementation**:
```tsx
<motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Section content */}
</motion.div>
```

**Animation Details**:
- **Trigger**: Section becomes visible while scrolling (100px before it enters viewport)
- **Duration**: 0.6 seconds
- **Easing**: Smooth "easeOut" curve
- **Once**: Animation plays only once (doesn't repeat on scroll up)
- **Direction**: Alternates based on section index

**Visual Flow**:
```
Hero Image
    ↓
Introduction (static)
    ↓
Section 1 ← (slides from left)
    ↓
Section 2 → (slides from right)
    ↓
Section 3 ← (slides from left)
    ↓
Section 4 → (slides from right)
    ↓
... continues alternating ...
```

## Files Modified

1. **src/pages/Blog.tsx**
   - Enhanced excerpt font styling

2. **src/pages/BlogDetail.tsx**
   - Added Framer Motion import
   - Wrapped sections in motion.div with alternating animations

## Typography Hierarchy (Blog Cards)

```
Category Badge:  text-xs (12px) - sans-serif
Title:          text-lg (18px) - sans-serif, bold
Excerpt:        text-base (16px) - SERIF font ✨ NEW
Metadata:       text-xs (12px) - sans-serif
CTA:            text-sm (14px) - sans-serif
```

## Testing the Animations

1. Navigate to any blog post: `http://localhost:5173/blog/enterprise-ai-adoption`
2. Scroll down slowly through the content
3. Watch sections slide in alternately from left and right
4. Notice smooth fade-in combined with horizontal movement

## Design Benefits

**Blog Cards**:
- ✅ Unique serif font makes excerpt distinctive
- ✅ Better visual hierarchy between title and excerpt
- ✅ More sophisticated, editorial look
- ✅ Improved readability with larger font

**Blog Detail Pages**:
- ✅ Engaging scroll experience
- ✅ Guides reader's eye through content
- ✅ Professional animation timing (not too fast/slow)
- ✅ Smooth, modern feel
- ✅ Adds dynamism without being distracting

## Current Status

✅ Dev server running and hot-reloaded successfully  
✅ Excerpt text uses larger serif font  
✅ Scroll animations working on all blog detail pages  
✅ Alternating left-right pattern implemented  
✅ Smooth 0.6s animations with easeOut curve  

Visit `http://localhost:5173/blog` to see the enhanced blog cards and navigate to any post to experience the alternating scroll animations! 🎉
