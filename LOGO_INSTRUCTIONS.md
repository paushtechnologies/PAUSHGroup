# Logo Installation Instructions

## How to Add Your Logo

1. **Place your logo file** in the `public` folder:
   - Recommended formats: PNG, SVG, or JPG
   - Recommended name: `logo.png` (or `logo.svg`, `logo.jpg`)
   - Recommended size: At least 200x200px for best quality

2. **Update the Navbar component** (`src/components/Navbar.js`):
   - Find the logo section (around line 90-110)
   - Uncomment the `<Box component="img">` section
   - Comment out or remove the `<Avatar>` component
   - Adjust the `height` and `width` in the `sx` prop if needed

3. **Example:**
   ```jsx
   // Replace this:
   <Avatar sx={{ width: 50, height: 50, ... }}>
     PG
   </Avatar>
   
   // With this:
   <Box
     component="img"
     src="/logo.png"
     alt="PAUSH Group Logo"
     sx={{
       height: 50,
       width: 'auto',
       objectFit: 'contain',
     }}
   />
   ```

4. **For the mobile menu**, update the drawer section similarly (around line 50-60)

## Logo Best Practices

- Use a transparent background (PNG) for best results
- SVG format is recommended for scalability
- Keep logo file size under 200KB for fast loading
- Ensure logo looks good on both light and dark backgrounds
