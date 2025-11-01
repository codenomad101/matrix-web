#!/bin/bash
# Convert all PPM images to JPG format for web use
# Run this script from the extracted directory

echo "Converting PPM images to JPG..."
count=0
for f in *.ppm; do
    if [ -f "$f" ]; then
        convert "$f" -quality 85 "${f%.ppm}.jpg"
        ((count++))
        if [ $((count % 50)) -eq 0 ]; then
            echo "Converted $count images..."
        fi
    fi
done
echo "Conversion complete! Converted $count images to JPG format."
echo "You can now delete the .ppm files if needed: rm *.ppm"

