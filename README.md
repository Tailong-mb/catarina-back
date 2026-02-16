# Folio Template - Sanity CMS

This project uses Sanity CMS to manage the content of a portfolio folio.

## Schema Structure

### 1. Global Configuration (`globale`)
- **Folio Name** : Main site name
- **Playground Link Name** : Text for the playground link
- **About Link Name** : Text for the about link
- **Dark Button Name** : Text for dark mode button (default: "Dark")
- **Light Button Name** : Text for light mode button (default: "Light")
- **Email** : Contact email

### 2. Albums (`album`)
- **Name** : Album name
- **Items** : Array of items containing:
  - Image (with hotspot)
  - Title
  - Description

### 3. About Page (`pageAbout`)
- **Title** : Page title
- **Description** : Main description
- **Links** : Array of links with title + URL
- **Trail Effect** : Array of images for trail effect

### 4. Home Page (`pageHome`)
- **Albums** : Selection of albums to display on the home page
- **View Button Label** : Text for the "View" button

### 5. Playground Page (`pagePlayground`)
- **Albums** : Selection of albums for the playground (maximum 8)

## Organization in Sanity Studio

The interface is organized into 4 main sections:

1. **Global Configuration** - Single document for site config
2. **Pages** - Submenu with:
   - Home Page
   - About Page
   - Playground Page
3. **Albums** - List of all created albums

## Getting Started

```bash
# Install dependencies
npm install

# Start Sanity studio
npm run dev
```

## Usage

1. **Global Configuration** : First create the global site configuration
2. **Albums** : Create your albums with images, titles and descriptions
3. **Pages** : Configure each page by linking albums and defining content
4. **Links** : In the About page, add your external links
5. **Trail Effect** : Add images for the trail effect in the About page

## Validation

- Required fields are marked with validation
- Playground page limits to 8 albums maximum
- Albums must have at least 1 item
- Images support hotspot for better framing
