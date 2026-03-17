Travel Advisor 🗺️

**🌍 Live Demo:** [Aceder ao Travel Advisor](https://travel-advisor-gilt.vercel.app/)

About the Project

This project is an advanced-level portfolio application designed to serve as a comprehensive travel guide app. It provides an interactive UI divided into two main sections: a left column rendering a list of places and a right column featuring a dynamic map.

🚀 Features
 
**Place Discovery:** Fetch and display lists of restaurants, tourist attractions, and hotels based on the current map view.


**Interactive Map:** Fully interactive map interface that updates the data list automatically when the user changes the map's position (`onChange` events).


**Smart Search:** A header navigation bar featuring an autocomplete input for destination searches.


**User Geolocation:** Automatically fetches the user's coordinates on the initial load to display nearby places.


**Weather Integration (Extra Level):** Displays real-time weather data for the searched cities directly on the interface.



💻 Tech Stack

**Framework:** Next.js (bootstrapped with `create-next-app`) 


**Language:** TypeScript 


**UI Library:** React 


**Styling:** Tailwind CSS 


**Maps Library:** `@react-google-maps/api` 



## 🔌 APIs & Services

**Google Maps Platform:** Utilizes the Maps JavaScript API for map rendering and navigation.


**Travel Advisor API:** Consumed via RapidAPI to fetch the core data (restaurants, hotels, attractions).


**Open Weather Map API:** Consumed via RapidAPI to fetch climate and weather conditions.



## 🏗️ Architecture & Best Practices

This project was built with a strong focus on clean code and the **DRY (Don't Repeat Yourself)** principle, ensuring that components are highly modular, atomic, and reusable.

State management and side effects are decoupled from the UI components and organized into custom React Hooks, including:

* A custom hook dedicated to fetching and storing the user's initial geolocation.


* A custom hook responsible for handling the API fetches based on the current search coordinates.



## ⚙️ How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/saulovalin/travel-advisor.git

```


2. Navigate to the project folder:
```bash
cd travel-advisor

```


3. Install dependencies:
```bash
npm install

```


4. Create a `.env.local` file in the root directory and add your API keys:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key

```


5. Run the development server:
```bash
npm run dev

```
