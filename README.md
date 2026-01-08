# 🛍️ Expo Store App

<div align="center">
  
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, feature-rich mobile e-commerce application built with React Native and Expo Router

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Screenshots](#-screenshots)

</div>

---

## ✨ Features

- 🛒 **Product Catalog** - Browse products fetched from FakeStore API
- 🌓 **Dark Mode Support** - Seamless theme switching with NativeWind
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🎨 **Modern UI** - Clean interface with Tailwind CSS styling
- ⚡ **Fast Navigation** - File-based routing with Expo Router
- 🔢 **Cart Functionality** - Add/remove items with quantity control
- 📦 **Product Details** - Rich product information display
- 🎯 **TypeScript** - Full type safety throughout the app
- 🔄 **Real-time API Integration** - Live product data from FakeStore API
- 💾 **Optimized Performance** - Smooth scrolling and fast rendering

---

## 🚀 Tech Stack

### Core
- **React Native** - Mobile app framework
- **Expo** (~54.0.31) - Development platform
- **Expo Router** (v6) - File-based navigation
- **TypeScript** - Type safety

### Styling
- **NativeWind** (v4.2.1) - Tailwind CSS for React Native
- **Tailwind CSS** (v3.3.2) - Utility-first CSS

### State & Data
- **React Hooks** - State management
- **Axios** - HTTP client for API requests
- **FakeStore API** - Product data source

### UI Components
- **@expo/vector-icons** - Icon library
- **React Native Safe Area Context** - Safe area handling
- **React Native Gesture Handler** - Touch gestures

---

## 📦 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo Go** app on your mobile device
- **iOS Simulator** (Mac only) or **Android Emulator**

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:TamarCoder/expo-store-app.git
   cd expo-store-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run the app**
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Physical Device**: Scan QR code with Expo Go app

### Additional Commands

```bash
# Start with cleared cache
npx expo start --clear

# Run on specific platform
npm run ios
npm run android
npm run web

# Lint code
npm run lint
```

---

## 📱 Screenshots

> **Note:** Add your app screenshots here

<div align="center">
  
| Light Mode | Dark Mode | Product Details |
|------------|-----------|-----------------|
| ![Light](https://via.placeholder.com/250x500?text=Light+Mode) | ![Dark](https://via.placeholder.com/250x500?text=Dark+Mode) | ![Details](https://via.placeholder.com/250x500?text=Product+Details) |

</div>

### Demo GIF

> **Coming soon:** Add animated GIF showing app functionality

---

## 📂 Project Structure

```
expo-store-app/
├── app/                    # Expo Router screens
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Home screen
├── components/            # Reusable components
│   ├── ProductsCard.tsx   # Product card component
│   └── ProductsList.tsx   # Product list component
├── constants/             # App constants
│   └── theme.ts          # Theme configuration
├── assets/               # Static assets
│   └── images/          # Image files
├── hooks/               # Custom React hooks
├── products.ts          # Product data/types
├── global.css           # Global styles
├── tailwind.config.js   # Tailwind configuration
├── babel.config.js      # Babel configuration
└── package.json         # Dependencies
```

---

## 🎨 Features in Detail

### Product Browsing
- Infinite scrollable product list
- High-quality product images
- Category filtering
- Real-time product data

### Shopping Cart
- Add/Remove items
- Quantity adjustment with +/- buttons
- Live price calculation
- Visual feedback on interactions

### Dark Mode
- System-based theme detection
- Manual toggle switch
- Smooth theme transitions
- Persistent theme preference

---

## 🔧 Configuration

### NativeWind Setup
The app uses NativeWind for Tailwind CSS support in React Native. Configuration is in:
- `tailwind.config.js` - Tailwind settings
- `global.css` - Global styles
- `metro.config.js` - Metro bundler config

### Expo Router
File-based routing is configured in `app.json`:
```json
{
  "experiments": {
    "typedRoutes": true
  }
}
```

---

## 🌐 API Integration

This app uses the [FakeStore API](https://fakestoreapi.com/) for product data.

**Endpoints used:**
- `GET /products` - Fetch all products
- Product data includes: title, price, description, category, image, and ratings

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Tamar Khuskivadze**

- GitHub: [@TamarCoder](https://github.com/TamarCoder)

---

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) - Amazing development platform
- [NativeWind](https://www.nativewind.dev/) - Tailwind for React Native
- [FakeStore API](https://fakestoreapi.com/) - Free fake API for testing
- [React Native](https://reactnative.dev/) - Cross-platform mobile framework

---

<div align="center">
  
### ⭐ Star this repo if you find it helpful!

Made with ❤️ by [Tamar Khuskivadze](https://github.com/TamarCoder)

</div>
