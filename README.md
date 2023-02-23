# Start Again

## Setup

### What's included

This repo includes:

- a single, simple API endpoint (`/api/v1/quotes`)
- a single React component (`<App />`)
- an example database module (`server/db/quotes.js`)
- an API client module (`client/apis/quotes.js`)
- configuration for Jest and testing library
- a single client-side test (`client/components/App.test.js`)
- CSS will be rendered using Tailwind and Headless UI. PostCSS will do the CSS compiling work
- Tests are setup in their own folders `__tests__` to keep things more organised
- React Router is installed to handle client side routes
- A sample `App.test.js` is provided

---

## MVP

### User Stories

1. When the page loads, I want to see a beautiful photograph fade-in
2. After a few seconds, I want a random, thought-provoking quote to fade-in overlaid on the photo. The quotes will come from a local database.
3. After a few more seconds, I want the question "How do you want to start your day?" to fade in. This will have a drop down that the user can select from to choose mindfulness or journaling

- Selecting mindfulness should direct me to a page containing a meditation timer where the user can select how long they want to meditate. The timer will count down and ring with a pleasing tone when it reaches zero.
- Selecting journaling should lead the user to a page where they can write a journal entry that will be stored in a local database

4. The top-right corner of the page should display the weather. The location can be pre-determined for MVP
5. The design should be mobile first: optimised from a tablet perspective.

---

## Stretch

### User Stories

1. As a user, want to be able to view, edit, and delete my previous journal entries.
2. I would like to be able to use Markdown syntax to create and update posts and have them display as rich text.
3. The weather information should display as numbers and icons only
4. The weather information will be location aware
5. I want to be able to click on the author of a quote to see if there others by the same author.
6. I want to be able to add my own quotes.
7. The design should be responsive to both phone and desktop.
8. The image should change based on the weather forecast
9. Users will be able to log in and out via Auth0

---

## Libraries and External API's and useful VSCode Extensions

- [Open Weather API](https://openweathermap.org/api): Weather Forecast
- [Unsplash Api](https://unsplash.com/developers): For beautiful images
- [Tailwind CSS](https://tailwindcss.com/): A 'utility-first' CSS framework
- [Tailwind Headless UI](https://headlessui.com/): A simple, stylable UI component library
- Optional: [Use Timer](https://www.npmjs.com/package/use-timer)- "Simple timer turned into React Hooks"
- [markdown-it](https://markdown-it.github.io/markdown-it/): For displaying markdown formatted journal entries
- Helpful VSCode Extensions
  - Tailwind CSS IntelliSense
  - PostCSS Language Support
