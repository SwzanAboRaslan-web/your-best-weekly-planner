# 🗓️ My Weekly Planner — مخططي الأسبوعي

> **your best weekly planner between your hands — everywhere you go, on every device.** >  مخططك الأسبوعي المفضل بين يديك — في كل مكان، على كل جهاز.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://swzanaboraslan-web.github.io/your-best-weekly-planner/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)]()
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blueviolet?style=for-the-badge&logo=pwa)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)]()

## 🌐 Live Demo
👉 **[Open the App Here](https://swzanaboraslan-web.github.io/your-best-weekly-planner/)**

---

## ✨ Features

### 📅 Planning & Scheduling
- **Weekly Schedule**: Tap any cell to add an activity with custom types, colors, and start/end times.
- **Recurring Events**: Mark any activity to repeat automatically on selected days.
- **Annual Overview**: Monthly progress tracking with star ratings per week.
- **Google Calendar Export**: Export your schedule instantly as an `.ics` file.
- **Overlap Layout**: Overlapping events automatically display side-by-side.

### ⭐ Habits & Goals
- **Habit Tracker**: Create habits with specific start & end times.
- **Calendar Sync**: Timed habits automatically appear in your weekly schedule.
- **Weekly Goals & Progress**: Set measurable goals. Track your score, percentage, completion bar, and streaks.
- **Smart Suggestions**: Add from a list of 28+ popular habits with one tap.

### 🍅 Productivity & Stats
- **Built-in Pomodoro**: 25m focus / 5m short break / 15m long break with an animated SVG progress ring.
- **Completion Alerts**: Browser notifications & buddy celebrations when a session ends.
- **Stats Page**: Visual charts showing hours by day, time by activity type, and points summary.
- **Weekly Report**: Auto-popup every Saturday summarizing your week (habits %, top type, Pomodoros, points).

### 📝 Journal & Memories
- **Daily Journal**: Log daily entries with date navigation and a **Mood Tracker** (happy/neutral/sad/stressed/excited/tired).
- **Memory Journal**: Log special moments with dates, titles, descriptions, and photo attachments.
- **Built-in Drawing Canvas**: Sketch directly within your memories using customizable brush sizes and erasers.
- **Universal Search**: Search across events, habits, and memories simultaneously.

### 🔔 Reminders & Customization
- **Smart Reminders**: Set custom, habit-linked, event-linked, or daily fixed reminders.
- **Companion Character (Buddy)**: A customizable, mood-reactive floating buddy that encourages you based on habit completion.
- **Personalization**: 12 Animated Backgrounds (sky, sunset, rain, forest, etc.) and custom tab colors.
- **Ambient Sounds**: Built-in focus sounds (rain, waves, fire, wind, piano, lo-fi).
- **Dark/Light Mode**: Smooth toggle with an animated sun & moon.

### 🔐 Auth, Sync & Offline Support
- **Firebase Authentication**: Email/Password or Google Sign-In.
- **Cloud Sync**: Data is synced in real-time across all devices via Firestore.
- **PWA Ready**: Install as a native app on your phone or desktop.
- **Offline Fallback (Guest Mode)**: Fully functional offline via `localStorage` if not logged in.
- **Undo Deletions**: 5-second undo toast after deleting any item.

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **Vanilla JS, HTML, CSS** | Core structure, design, and logic (No heavy frameworks) |
| **Firebase Auth & Firestore** | Secure login, Google Sign-In, and real-time cloud data sync |
| **PWA (Progressive Web App)**| Installable locally with offline caching capabilities |
| **Web Audio / YouTube API** | Ambient sounds generated directly in-browser |
| **SVG & HTML5 Canvas** | Animated backgrounds, Pomodoro ring, drawing tool, and buddy |
| **Web Notifications API** | Scheduled reminders & Pomodoro alerts |

---

## 🚀 Getting Started

No installation needed! Just open the link and start planning:

1. **Create a free account** (Email + optional nickname).
2. **Or sign in with Google**.
3. **Or use Guest Mode** (Skip login to use fully offline without an account).

---

## 🔧 Self-Hosting

The app is fully contained and easily hostable anywhere:

1. Clone or download the repository.
2. Host on GitHub Pages, Netlify, Vercel, or any static host.
3. To enable Cloud Sync, add your domain to **Firebase Console → Authentication → Authorized Domains**.

**Firebase Setup (Optional):**
- Enable **Email/Password** and **Google** sign-in methods in Firebase Auth.
- Set Firestore rules to allow read/write *only* to authenticated users' own data paths.

---

## 📁 File Structure

```text
├── index.html        # The entire app — HTML + CSS + JS in one file
├── sw.js             # Service Worker — offline caching & background sync
├── manifest.json     # PWA configuration
├── icons/            # App icons (72px to 512px)
└── README.md         # Project documentation

## 🗺️ Roadmap
- [x] PWA Integration (Install as a native app)
- [x] Offline Persistence with IndexedDB (Firestore)
- [x] Background Sync (data syncs when back online)
- [ ] PDF weekly report export
- [ ] Share schedule via a public read-only link

---

## 📄 License
This is a personal project — feel free to fork, adapt, and use it for your own planning needs.

👩‍💻 Made with ❤️ by Swzan Abo Raslan
