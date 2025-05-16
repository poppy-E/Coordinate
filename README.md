# 🌍 Coordinate – Track Your Adventures

Coordinate is a modern React application that allows users to track cities they've visited across the globe. It features a dynamic 3D globe animation using Vanta.js, a clean UI, and a mock API to manage user and location data.

---

## 🚀 Features

- 📍 Track cities and countries you’ve visited
- 🗺️ Interactive world map (OpenStreetMap)
- 🧠 Persistent data via local/fake API
- 🧑‍💼 User authentication (fake login)
- 🌐 Vanta.js background animation (3D Globe)
- ⚡ Fast and responsive React UI

---

## 🧰 Tech Stack

- **Frontend:** React, React Router
- **Styling:** CSS Modules
- **Map:** [Leaflet.js](https://leafletjs.com/)
- **Animation:** [Vanta.js (Globe effect)](https://www.vantajs.com/)
- **Fake API:** [JSON Server](https://github.com/typicode/json-server)

---

## 🖼️ Screenshots

> ![Screenshot](./public/screenshot.png)

---

## 🧪 Fake API Setup (JSON Server)

This project uses `JSON Server` as a mock backend to simulate CRUD operations.

### 📁 Sample `db.json`:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Jack",
      "email": "jack@example.com"
    }
  ],
  "cities": [
    {
      "id": 1,
      "city": "Lisbon",
      "country": "Portugal",
      "date": "2027-10-31"
    },
    {
      "id": 2,
      "city": "Berlin",
      "country": "Germany",
      "date": "2027-02-12"
    }
  ]
}
```

---

! you cannot run this app untill you setup fake API in your file
