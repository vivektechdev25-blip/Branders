# Branderss — Premium MERN Stack Agency Website

> **"Make it bold, make it Branderss"**  
> *"We just don't do marketing, we create a story around your brand."*

A luxury creative agency platform built for **Branderss**, combining business clarity and conversion-focused information architecture with high-end visual impact, 3D storytelling, and creative motion.

---

## 🌟 Brand Identity & Visual Language

- **Brand Name**: BRANDERSS
- **Tagline**: *"Make it bold, make it Branderss."*
- **Brand Message**: *"We just don't do marketing. We create a story around your brand."*
- **Primary Logo**: Exact Branderss logo asset reused with pixel-perfect aspect ratio and sharpness in Navbar, Footer, and Open Graph previews.
- **Verified Clients**: Dakshin Paschim Darbar, Barkaas, CoffeeDude, and 100+ brands in Lucknow and beyond.
- **Target Sectors**: Hotels & Resorts, Banquet Halls, Restaurants, Cafés, Medical & Healthcare, Retail, Corporate, Local Businesses, Service Businesses, and other growing brands.
- **Verified Contacts**:
  - 📞 **Phone / WhatsApp**: `+91 9119673841`, `+91 8009938354`
  - ✉️ **Email**: `amarnathmishra9956@gmail.com`
  - 📍 **Operating Hub**: Lucknow, Uttar Pradesh, India

---

## 🎨 Color System (Brown & Cream Palette)

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deepest Brown** | `#170A05` | Canvas background & dark section base |
| **Primary Brown** | `#35170B` | Card surfaces & container borders |
| **Secondary Brown** | `#5A2C18` | Elevated surfaces & structural dividers |
| **Soft Beige** | `#D8C0A5` | Secondary typography, badges & borders |
| **Warm Cream** | `#F3E6D2` | High-contrast display titles & primary buttons |

Centralized in `frontend/src/index.css` under `:root` and `@theme`.

---

## 📐 Universal Card Alignment Architecture

All cards across the entire application adhere to the `card-flex` standard:
```css
.card-flex {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card-action {
  margin-top: auto;
}
```

Interactive cards include subtle upward hover physics:
```css
.card-hover-lift {
  transition:
    transform 250ms ease,
    box-shadow 250ms ease,
    border-color 250ms ease,
    background-color 250ms ease;
}
.card-hover-lift:hover {
  transform: translateY(-4px) scale(1.01);
}
```

---

## 🚀 Running Locally

### Backend API
```bash
cd backend
npm install
npm run dev
# Server runs on http://localhost:5000 (Health check: http://localhost:5000/api/health)
```

### Frontend Client
```bash
cd frontend
npm install
npm run dev
# Client runs on http://localhost:3000 (Proxies /api requests to port 5000)
```

### Production Build
```bash
npm --prefix frontend run build
```
