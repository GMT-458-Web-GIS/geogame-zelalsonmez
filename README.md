# GMT 458 - Web GIS Assignment: City Hunter GeoGame Design Report

## Project/Game Name: City Hunter: Turkey Edition

## Project Goals
Using Web GIS technologies (OpenLayers), we create a simple and fun time-limited guessing game that improves understanding of geospatial information and interaction on the map.

---

# 1. Game Mechanics and Gameplay

## 1.1. General Concept
The game asks the user to guess the center of a randomly selected hidden Turkish city from among city centers marked on a map, based on the distance (in kilometers) between two points.
The game is played with a 30-second time limit.

## 1.2. Game Flow (Cycle)

| Aşama | Adımlar | Açıklama |
| :--- | :--- | :--- |
| **The Start** | Explanation Screen | Displays the rules of the game and the "Start" button on the left panel. |
| **Game Start** | Timer and Secret City Selection | When you press the "Start" button, the timer (30 seconds) begins. A random target city is selected. |
| **Prediction Phase** | User's Prediction | The user clicks on one of the city centers marked on the map. |
| **Feedback** | Distance Calculation | The distance in kilometers (km) between the clicked city center and the hidden target city center is calculated and displayed in the left panel. |
| **Visual Cue** | Prediction Markup | The marker (Feature) that the user clicks turns yellow to indicate that the prediction has been made. |
| **Win Condition** | Correct Guess | The user wins the game when they click on the same city center as the hidden target city (distance $= 0\text{ km}$). The timer stops. |
| **Lose Condition** | Time Out | The game is lost when the 30-second timer runs out and the correct city is not found. |
| **End of Game** | Return | The user is informed of the result and returns to the starting screen with the "Play Again" button. |

---

# 2. Design Structure and User Interface (UI)

## 2.1. General Layout
The game will be divided vertically into two main sections using CSS Flexbox.

| Section | Percentages | Content | Style |
| :--- | :--- | :--- | :--- |
| **Control Panel (Left)** | 30% | Game Instructions, Timer, Secret City Hint Text, KM Result and Buttons. | Dark (black or navy blue) background, light (white/green) text. |
| **Map Panel (Right)** | 70% | Completely OpenLayers map. | The map view is always focused on Türkiye, with all city centers marked. |

## 2.2. Data to Use
The game will use manually defined fixed geographic coordinates of major urban centers in Türkiye.

### Sample Data Structure (JavaScript Array):
```javascript
[
    { name: "Ankara", coords: [32.8597, 39.9334] }, // [Longitude, Latitude]
    { name: "İstanbul", coords: [28.9784, 41.0082] },
    //... other citys...
]
...
## 2.3. Visual Feedback and Animation (CSS Requirement)

### Mileage Indicator
* The calculated distance will be displayed to the player in a prominent size.
* As the distance decreases, its color will change from red to yellow/green (via CSS transition and class change).

### Markers
* All cities: Blue dot/icon.
* User's Guess: Yellow dot.
* Secret Target (End of Game): Red dot.

### Timer
* As time decreases, the color of the timer text will change to red, increasing the feeling of pressure.

---

# 3. Technologies and Methods to be Used

## 3.1. Libraries

| Library | Purpose of Use |
| :--- | :--- |
| HTML5, CSS3, JavaScript | Basic structure, style and game logic. |
| OpenLayers (ol) | Displaying a map, adding clickable markers (Features) to the map, and capturing map events (clicks). |

## 3.2. Basic Algorithms (GIS Application)
* **Coordinate Transformation:** Using OpenLayers' built-in functions (ol.proj.fromLonLat), geographic (WGS84: Latitude/Longitude) coordinates will be converted to screen coordinates.
* **Distance Calculation (Haversine Formula):** Used to calculate the curvilinear distance (in km) between two geographic points. This formula forms the core GIS component of GeoGame.
