#!/bin/bash
# Organize faculty images based on PDF structure analysis
# Faculty photos appear to be ~488x511 pixels on page 3

cd public/images/extracted
mkdir -p faculty

# Based on PDF analysis:
# - Page 3 has large images (488x511) that appear to be faculty photos
# - They start around img-003.ppm and appear in sequence
# - Image numbers in pdfimages list correspond to extraction order

echo "Organizing faculty images..."
echo "Note: This is based on PDF structure - verify images manually"

# Extract all images first if not already done
if [ ! -f "img-000.ppm" ]; then
    echo "Extracting images from PDF..."
    pdfimages ../matix.pdf img
fi

# Based on the PDF structure, faculty photos are the larger ones (488x511)
# Convert and organize the likely faculty photos
# Starting from img-003 (first large photo after header images)

# Faculty list in order from PDF
faculty_list=(
    "nishant-patwardhan"
    "ravindra-yadav"
    "abhishek-mehta"
    "sagar-shahane"
    "saurabh-pore"
    "akash-kesarkar"
    "mangilal-vishnoi"
    "deepak-singh"
    "shankar-tompe"
    "tushar-khapne"
    "dinesh-srivastava"
    "pravin-menkudale"
    "prasad-hande"
    "pankaj-singh"
    "bhagvat-dhesale"
    "sanket-gadade"
    "sneha-malgave"
    "vaishnavi-wadile"
    "pratik-jogalekar"
    "mahesh-govind-gholap"
    "ankita-taware"
)

# Map based on image analysis - larger images (488x511) are likely faculty
# These start around index 3, 5, 7, 9... (skipping smask entries)
echo ""
echo "Converting and organizing faculty photos..."
echo "This mapping is approximate - please verify and adjust:"
echo ""

index=3
for i in "${!faculty_list[@]}"; do
    faculty_name="${faculty_list[$i]}"
    source_img=$(printf "img-%03d.ppm" $index)
    
    if [ -f "$source_img" ]; then
        output_file="faculty/${faculty_name}.jpg"
        convert "$source_img" -quality 85 -resize 400x400 "$output_file" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "✓ Converted $source_img -> $output_file"
        fi
    fi
    
    # Increment by 2 to skip smask entries (transparency masks)
    index=$((index + 2))
done

echo ""
echo "✓ Done! Check faculty/ folder for organized images"
echo "Please verify the mapping and adjust if needed"

