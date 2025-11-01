#!/usr/bin/env python3
"""
Extract faculty images from PDF by identifying text context
This script attempts to correlate faculty names with nearby images
"""

import subprocess
import re
import os
from pathlib import Path

# Faculty names in order from PDF
faculty_names = [
    'Nishant Patwardhan',
    'Ravindra Yadav', 
    'Abhishek Mehta',
    'Sagar Shahane',
    'Saurabh Pore',
    'Akash Kesarkar',
    'Mangilal Vishnoi',
    'Deepak Singh',
    'Shankar Tompe',
    'Tushar Khapne',
    'Dinesh Srivastava',
    'Pravin Menkudale',
    'Prasad Hande',
    'Pankaj Singh',
    'Bhagvat Dhesale',
    'Sanket Gadade',
    'Sneha Malgave',
    'Vaishnavi Wadile',
    'Pratik Jogalekar',
    'Mahesh Govind Gholap',
    'Ankita Taware',
]

def extract_text_with_positions():
    """Extract text with approximate positions from PDF"""
    try:
        result = subprocess.run(
            ['pdftotext', '-layout', 'public/images/matix.pdf', '-'],
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout
    except:
        return None

def extract_all_images():
    """Extract all images from PDF"""
    extracted_dir = Path('public/images/extracted')
    extracted_dir.mkdir(parents=True, exist_ok=True)
    
    try:
        subprocess.run(
            ['pdfimages', 'public/images/matix.pdf', str(extracted_dir / 'img')],
            check=True
        )
        print("✓ Extracted all images from PDF")
        return True
    except Exception as e:
        print(f"Error extracting images: {e}")
        return False

def find_faculty_in_text(text):
    """Find faculty names and their approximate positions in text"""
    positions = {}
    lines = text.split('\n')
    
    for idx, line in enumerate(lines):
        for faculty in faculty_names:
            if faculty.lower() in line.lower():
                positions[faculty] = idx
                break
    
    return positions

def suggest_image_mapping():
    """Suggest which images might correspond to which faculty"""
    print("Analyzing PDF structure...")
    text = extract_text_with_positions()
    
    if not text:
        print("Could not extract text. Extracting all images for manual mapping...")
        if extract_all_images():
            print(f"\n✓ Images extracted to public/images/extracted/")
            print(f"✓ Total faculty: {len(faculty_names)}")
            print(f"\nManual mapping needed:")
            print("1. View the extracted images")
            print("2. Identify which img-XXX corresponds to which faculty")
            print("3. Rename or organize them accordingly")
        return
    
    positions = find_faculty_in_text(text)
    print(f"\nFound {len(positions)} faculty names in PDF")
    
    # Extract images
    if extract_all_images():
        print(f"\n✓ All images extracted")
        print(f"✓ Check public/images/extracted/ for img-*.ppm files")
        print(f"\nNext steps:")
        print("1. Review images manually to identify faculty")
        print("2. Create a mapping file or rename images")

if __name__ == '__main__':
    suggest_image_mapping()

