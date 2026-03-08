# 🗓️ مخططي الأسبوعي — My Weekly Planner

> أجمل مخطط أسبوعي — في كل مكان، على كل جهاز.  
> The most beautiful weekly planner — everywhere you go, on every device.

## 🌐 Live Demo
👉 [Open the App](https://swzanaboraslan-web.github.io/your-best-weekly-planner/)

---

## ✨ Features

### 📅 Planning & Scheduling
- 📅 **Weekly Schedule** — tap any cell to add an activity with type, color, start & end time
- 🔁 **Recurring Events** — mark any activity to repeat weekly on selected days automatically
- 🗓️ **Annual Overview** — monthly progress tracking with star ratings per week
- 📤 **Google Calendar Export** — export your schedule as an `.ics` file
- 📊 **Overlap Layout** — overlapping events display side-by-side (Google Calendar style)

### ⭐ Habits & Goals
- ⭐ **Habit Tracker** — create habits with per-day start & end times
- 📅 **Calendar Sync** — habits with times appear automatically in the weekly schedule
- 🎯 **Weekly Goals** — set measurable goals linked to habits with progress bars
- 📊 **Weekly Progress** — score, percentage, completion bar & streaks per habit
- 💡 **Habit Suggestions** — 28+ popular habits to add with one tap

### 📊 Stats & Reports
- 📊 **Stats Page** — hours by day chart, time by activity type, points summary
- 📋 **Weekly Report** — auto-popup every Saturday with full week summary (habits %, top type, Pomodoro sessions, points)

### 🍅 Pomodoro Timer
- 🍅 **Built-in Pomodoro** — 25 min focus / 5 min short break / 15 min long break
- ⭕ **Animated ring** — SVG progress circle updates in real time
- 🔔 **Completion notification** — browser notification + buddy celebration when session ends
- 🧮 **Session counter** — tracks daily Pomodoro sessions (contributes to points)

### 🏅 Points & Achievements
- ⭐ **Points System** — earned from habits (10 pts), journal entries (3 pts), Pomodoro (15 pts), completed goals (20 pts), annual stars (5 pts)
- 🏅 **10 Achievement Badges** — Beginner → Legend, unlocked progressively by points
- 🎨 **Visual reward cards** — greyed out until earned, highlighted in gold when unlocked

### 🔔 Reminders & Notifications
- 🔔 **Custom Reminders** — any message with time & selected days
- ⭐ **Habit Reminders** — linked to a specific habit
- 📅 **Event Reminders** — linked to a calendar event
- 🌅 **Daily Fixed Reminders** — same time every day
- 🔕 **Toggle on/off** per reminder without deleting
- 🔴 **Badge counter** on the bell icon

### 🌤️ Morning Brief
- ☀️ **Daily Summary Popup** — appears once per day on first open
- Shows: today's events, habits count, week progress %, journal streak
- 💬 Motivational quote (bilingual AR/EN)

### 📝 Daily Journal
- 📝 **Journal Page** — daily entries with date navigation (past & future)
- 😊 **Mood Tracker** — tag each entry: happy / neutral / sad / stressed / excited / tired
- 📖 **Recent entries** displayed as cards below the editor

### 🔍 Universal Search
- 🔍 Searches across **events, habits & memories** simultaneously
- Results show with type icon for quick identification

### 📌 Pinned Note
- 📌 **Sticky note** always visible above the weekly calendar
- Auto-saved as you type, persists across sessions

### ↩️ Undo Deletions
- ↩️ **5-second undo toast** after deleting any event, habit or memory
- One tap restores the deleted item instantly

### 🎨 Tab Color Customizer
- 🎨 Pick a custom accent color for each tab individually
- Colors persist across sessions in localStorage

### 📸 Memories
- 📸 **Memory Journal** — log moments with date, title & description
- 🖼️ **Photo Attachments** — add a photo to each memory
- 🎨 **Built-in Drawing Canvas** — sketch with brush size control & eraser

### 🧑 Companion Character (Buddy)
- 🧑 **Optional floating buddy** — chibi-style animated face
- 😊 **Mood-reactive** — happy/sad/celebrating based on habit completion
- 🎨 **Customizable** — 3 girl styles + 3 boy styles, multiple hair colors
- 💬 **Auto encouragement messages** at random intervals

### 🔐 Authentication & Accounts
- 📧 **Email & Password** registration and login
- 🔑 **Google Sign-In** with popup + redirect fallback
- 😊 **Custom Nickname** — display name instead of showing email
- 🗑️ **Delete Account** — permanently deletes account and all data
- 🚪 **Guest Mode** — full offline usage without an account

### 🎨 Personalization
- 🌍 **Bilingual** — Arabic & English with full RTL/LTR support
- 🌙 **Dark / Light Mode** with animated sun & moon toggle
- 🎨 **12 Animated Backgrounds** — sky, sunset, sunrise, rain, forest, ocean, aurora, stars & more
- 🎵 **6 Ambient Sounds** — rain, waves, fire, wind, piano & lo-fi (Web Audio API, zero external links)
- 🕐 **12h / 24h Time Format** toggle
- 🎨 **Custom tab colors** per section

### ☁️ Sync & Storage
- ☁️ **Cloud Sync** via Firebase Firestore — synced across all devices when logged in
- 💾 **Offline Fallback** — works fully with localStorage when Firebase is unavailable
- ⚡ **Memory Cache** — all data cached after first load; zero network calls during normal use
- 🔒 **Privacy First** — data tied to your account only; full email never displayed

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML / CSS / JavaScript | Structure, design & all logic |
| Firebase Authentication | Login, registration & Google Sign-In |
| Firebase Firestore | Cloud data sync |
| Web Audio API | Ambient sounds generated in-browser |
| SVG & Canvas | Animated backgrounds, Pomodoro ring & companion character |
| Notifications API | Scheduled reminders & Pomodoro alerts |
| localStorage | Offline storage, journal, reminders & session cache |

---

## 🚀 Getting Started

No installation needed — just open and plan:

1. **Create a free account** with email + optional nickname
2. **Or sign in with Google**
3. **Or skip** — use fully offline without an account

---

## 🔧 Self-Hosting

Single HTML file — host it anywhere:

```
1. Download index.html
2. Upload to GitHub Pages, Netlify, Vercel, or any static host
3. Add your domain to Firebase Console → Authentication → Authorized Domains
4. Done!
```

### Firebase Setup (for cloud sync)

```
Firebase Console → Authentication → Sign-in method:
  ✅ Email/Password — Enable
  ✅ Google — Enable + set support email

Firebase Console → Firestore → Rules:
  Allow read/write only to authenticated users' own data path
```

---

## 📁 File Structure

```
index.html    ← The entire app (HTML + CSS + JS in one file)
README.md     ← This file
```

---

## 🗺️ Roadmap

- [ ] PWA — install as a native app on any device (coming next)
- [ ] PDF weekly report export
- [ ] Share schedule via public read-only link

---

## 📄 License

Personal project — feel free to fork, adapt and use for your own planning needs.

## 👩‍💻 Made with ❤️ by Swzan
