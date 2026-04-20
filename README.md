# Automatic D&D Character Sheet

A web-based Dungeons & Dragons character sheet generator that automatically calculates HP, AC, and applies background bonuses to create characters quickly and easily.

## 🌟 Features

- **Automatic Calculations**: HP and AC are calculated based on class, level, and ability scores
- **Background Bonuses**: Select backgrounds that provide ability score bonuses to specific attributes
- **Portuguese Interface**: User-friendly interface in Portuguese
- **Dark Theme**: Modern dark UI for comfortable use
- **Real-time Updates**: Background selection dynamically updates bonus labels

## 🎮 How to Use

1. **Open the Application**: Open index.html in any modern web browser
2. **Enter Character Details**:
   - Name your character
   - Select race (cosmetic - doesn't affect stats yet)
   - Choose background (provides ability bonuses)
   - Select class and level
3. **Set Ability Scores**: Enter base ability scores (10-20 range recommended)
4. **Apply Background Bonuses**: Use the bonus fields that appear based on your background choice
5. **Generate Sheet**: Click "Gerar Ficha" to create your character sheet

### Background Bonuses

Each background provides bonuses to 3 specific abilities:
- **Acólito**: Sabedoria, Carisma, Inteligência
- **Soldado**: Força, Constituição, Destreza
- **Andarilho**: Força, Constituição, Sabedoria
- And many more!

## 🛠️ Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript (ES6)**: Logic and calculations
- **Git**: Version control
- **GitHub**: Code hosting

## 🚀 Installation & Setup

### Option 1: Run Locally
1. Clone the repository:
   `ash
   git clone https://github.com/Olanue/Automatic-dnd-Character-Sheet.git
   `
2. Navigate to the project directory:
   `ash
   cd Automatic-dnd-Character-Sheet
   `
3. Open index.html in your web browser

### Option 2: GitHub Pages
The project is already hosted on GitHub Pages at: [https://olanue.github.io/Automatic-dnd-Character-Sheet/](https://olanue.github.io/Automatic-dnd-Character-Sheet/)

## 📋 D&D Rules Implemented

- **Hit Points**: Base HP + Constitution modifier × level
- **Armor Class**: 10 + Dexterity modifier (unarmored)
- **Ability Modifiers**: (Score - 10) ÷ 2, floor rounded
- **Background Bonuses**: Custom implementation for ability score improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Race bonuses implementation
- [ ] Equipment and inventory system
- [ ] Spell management for casters
- [ ] Character saving/loading functionality
- [ ] Proficiency bonuses
- [ ] Skill calculations
- [ ] Export to PDF

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the Dungeons & Dragons 5th Edition rules
- Built with love for the D&D community
- Special thanks to all contributors and the open source community

---

**Happy adventuring!** ⚔️🛡️📜
