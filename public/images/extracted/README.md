# Extracted Images from PDF

This folder contains **462 images** extracted from the PDF document.

## Image Format

Images are currently in **PPM format** (Portable Pixmap). For web use, you should convert them to **JPG** or **PNG** format.

## Converting Images

### Option 1: Use the provided script
```bash
cd public/images/extracted
./convert-to-jpg.sh
```

### Option 2: Manual conversion
```bash
cd public/images/extracted
for f in *.ppm; do
  convert "$f" -quality 85 "${f%.ppm}.jpg"
done
```

### Option 3: Convert specific images
```bash
convert img-000.ppm -quality 85 img-000.jpg
```

## Image Categories

The PDF contains images of:
- Felicitation ceremonies
- Award ceremonies
- Orientation sessions with guest speakers
- Student events and activities
- Campus and facility photos
- Test results and achievements

## Usage in Website

Once converted to JPG/PNG, you can reference images like:
```jsx
<img src="/images/extracted/img-000.jpg" alt="Description" />
```

## File Size

Original PPM files are quite large (some over 1MB). JPG conversion will significantly reduce file size while maintaining good quality for web display.

