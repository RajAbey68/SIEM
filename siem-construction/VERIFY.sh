#!/bin/bash
# SIEM — Canonical Verification Script
# Run from: /Users/arajiv/SIEM/siem-construction
#
# LESSON: grep for the SMALLEST token, not a combined phrase.
# "100% Client" MISSES ["100%","Client Retention"] — comma, not a space.
# Correct pattern: grep -r "100\|Retention" src/

set -e
cd /Users/arajiv/SIEM/siem-construction

echo "========================================"
echo " SIEM CODEBASE VERIFICATION"
echo "========================================"

echo ""
echo "--- Unverified copy claims (expect CLEAN) ---"
echo -n "Retention: " && (grep -r "Retention" src/ || echo "CLEAN")
echo -n "re-born:   " && (grep -r "re-born" src/ || echo "CLEAN")
echo -n "BIM-enabled/driven: " && (grep -r "BIM-enabled\|BIM-driven" src/ || echo "CLEAN")
echo -n "Design-Build: " && (grep -r "Design-Build" src/ || echo "CLEAN")
echo -n "Crystal Sands: " && (grep -r "Crystal Sands" src/ || echo "CLEAN")
echo -n "Orion City: " && (grep -r "Orion City" src/ || echo "CLEAN")

echo ""
echo "--- Required pages ---"
ls src/app/services/page.tsx \
   src/app/past-projects/page.tsx \
   src/app/contact-us/page.tsx \
   src/app/sitemap.ts \
   src/app/robots.ts && echo "All pages present"

echo ""
echo "--- Google Fonts CDN (expect CLEAN) ---"
grep -n "fonts.googleapis" src/app/globals.css src/app/layout.tsx || echo "CLEAN"

echo ""
echo "--- JSON-LD structured data ---"
grep -n "LocalBusiness" src/app/layout.tsx

echo ""
echo "--- Image sizes ---"
ls -lh public/images/projects/site-0*.jpg public/images/gallery/design-*.jpg

echo ""
echo "--- TSC gate ---"
npx tsc --noEmit && echo "TSC: OK"

echo ""
echo "========================================"
echo " VERIFICATION COMPLETE"
echo "========================================"
