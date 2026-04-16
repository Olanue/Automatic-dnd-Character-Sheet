# ⚔️ D&D Character Sheet Generator

This is a simple project built with pure HTML, CSS, and JavaScript, designed to automatically generate Dungeons & Dragons character sheets based on basic user input.

The system calculates key character stats such as HP, Armor Class (AC), and ability modifiers, making character creation faster and more practical.

---

## 🎮 About the project

The D&D Character Sheet Generator was created as a tool to simplify RPG character creation. Instead of manually calculating all values, the user only inputs basic information such as name, class, race, level, attributes, and background, and the system generates the full character sheet automatically.

This project is also intended as a learning exercise focused on:
- JavaScript DOM manipulation
- Programming logic applied to game systems
- Front-end structure using HTML, CSS, and JavaScript
- Clean separation of files and responsibilities

---

## ⚙️ Features

- Custom character name creation  
- Class, race, and background selection  
- Character level input  
- Ability score inputs:
  - Strength
  - Dexterity
  - Constitution
  - Intelligence
  - Wisdom
  - Charisma  
- Automatic calculation of:
  - Ability score modifiers  
  - HP based on class and level  
  - Armor Class (AC)  
- Dynamic character sheet generation  

---

## 🧠 How it works

The system uses simplified D&D-inspired formulas:

Ability modifier:
(modifier) = floor((ability - 10) / 2)

HP is calculated using a base value per class, scaling with level and Constitution modifier. Armor Class is simplified as:

AC = 10 + Dexterity modifier

---

## 🧙 Available Classes

Barbarian, Bard, Warlock, Cleric, Druid, Sorcerer, Ranger, Fighter, Rogue, Wizard, Monk, Paladin.

---

## 🌍 Available Races

Aasimar, Dwarf, Dragonborn, Elf, Gnome, Goliath, Human, Orc, Halfling, Tiefling.

---

## 🎭 Available Backgrounds

Acolyte, Wanderer, Artisan, Artist, Charlatan, Criminal, Hermit, Merchant, Scribe, Noble, Farmer, Sage, Guard, Soldier, Guide, Sailor.

---

## 📁 Project structure

The project is divided into three main files:

index.html → page structure  
style.css → interface styling  
script.js → character generation logic  

---

## 💡 Future improvements

Possible upgrades include:
- PDF import/export for character sheets
- Automatic class and race features
- Spell and inventory systems
