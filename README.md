# 🚲 Stolen Bike Closure

> *"They nicked your wheels. Don't let them nick your spirit too."*

A parody grief-support website for people who've had their bikes stolen — because sometimes the only thing left to do is laugh, process, and fantasise about karmic retribution.

[Stolen Bike Closure](https://www.stolenbikeclosure.com/)

![Landing Page](https://github.com/user-attachments/assets/2a5d17e4-5528-4f4d-80a2-c140fbb45028)

---

## What Is This?

**Stolen Bike Closure** is a satirical single-page application that guides bereaved cyclists through the emotional stages of having their bike stolen. It offers:

- Grief counselling based on the *5 Stages of Bike Grief*
- A mad-libs-style **Karmic Retribution Story Builder**
- A curated **Karma Chronicles** of documented thief comeuppances
- An **Online Medium** for séancing stolen bike's spirit
- **Obituary Templates** for posting in the local classifieds
- **Grief Articles** peer-reviewed by nobody in particular
- **Recovery Merch** — because retail therapy is cheaper than a new bike (barely)

![Grief Counselling & Karma Chronicles](https://github.com/user-attachments/assets/d2486494-4e67-4e93-acd8-18fbe4e71abe)

---

## Features

**Grief Counselling** — Work through the 5 Stages of Bike Grief (Denial, Anger, Walking, Bus Fare, and Acceptance) with rotating stage sets and practical coping strategies such as "invest in good thongs, you live in them now."

**Build a Story** — A fill-in-the-blanks generator that produces a fully narrated tale of karmic retribution in one of nine styles: Noir Detective, Nature Documentary, Legal Proceedings, Bedtime Story, Bigfoot Witness Report, Haunting, Mothman Prophecy, Loch Ness Deposition, or Alien Abduction Report.

**Karma Chronicles** — Real (fictional) case files of bike thieves meeting their cosmic fate, including the AirTag incident, the rusty chain gang, and the man who stole a fixie with no brakes.

**Online Medium / Séance** — Channel the remaining spirit of your bicycle and say a proper goodbye.

**Obituary Templates** — Beautifully pre-written tributes honouring your bike's exact top-tube geometry and emotional impact on your life.

**Grief Articles** — A peer-reviewed library on topics such as the psychological toll of seeing a stranger riding your bike two weeks later and knowing there's absolutely nothing you can do.

**Recovery Merch** — Tasteful merchandise for the grieving cyclist.

![Build a Story & Online Medium](https://github.com/user-attachments/assets/f7db3e96-1bc9-4200-b0fb-ee83e1ba8223)

---

## Internationalisation

The site supports 6 locales, because bike theft is a global phenomenon and grief is universal:

| Locale | Language |
|--------|----------|
| `en-AU` | English (Australian) |
| `en-US` | English (American) | 
| `de-DE` | German |
| `nl-NL` | Dutch |
| `pt-BR` | Brazilian Portuguese |
| `zh-CN` | Simplified Chinese |

Language is detected automatically from the browser. All copy — including the grief stages, story templates, and séance messages — is fully localised per language.

![Recovery Merch & Obituary Templates](https://github.com/user-attachments/assets/b40ce424-b61d-4a11-acb5-ca559e587a44)

---

## Tech Stack

- **[React 19](https://react.dev/)** — UI framework
- **[Vite](https://vite.dev/)** — Build tool with HMR
- **[React Router v7](https://reactrouter.com/)** — Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** — Animations
- **[i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)** — Internationalisation
- **[SASS](https://sass-lang.com/)** — Styling
- **[react-icons](https://react-icons.github.io/react-icons/)** — Icon library

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/stolen-bike-closure.git
cd stolen-bike-closure

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/         # Page section components
│   ├── Layout.jsx
│   ├── GriefCounseling.jsx
│   ├── KarmaChronicles.jsx
│   ├── BuildStory.jsx
│   ├── OnlineMedium.jsx
│   ├── ObituaryTemplates.jsx
│   ├── GriefArticles.jsx
│   ├── RecoveryMerch.jsx
│   ├── SubmitStory.jsx
│   └── BannerAdvert.jsx
├── pages/
│   └── LandingPage.jsx
├── locales/            # i18n translation files
│   ├── en-AU/
│   ├── en-US/
│   ├── de-DE/
│   ├── nl-NL/
│   ├── pt-BR/
│   └── zh-CN/
└── main.jsx
```

---

## Accessibility

This project includes a WCAG audit report (`wcag-audit-report.md`). Contributions that improve accessibility are very welcome.

---

## Contributing

If you've personally experienced bike theft and have ideas for new grief stages, karmic retribution story templates, or séance dialogue... pull requests are open. Lock your bike first.

---

## Licence

This project is provided as-is for comedic and cathartic purposes. No actual bikes were recovered in its making.
