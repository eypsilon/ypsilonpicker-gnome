# Ypsilon Picker 🎨

Authors: ChatGPT by OpenAI & Engin Ypsilon by class:Parent()

## Overview

Ypsilon Picker is a minimalistic and GNOME-native color picker extension. It allows you to point anywhere on the screen and instantly retrieve the RGB and HEX values of the selected color in a terminal.

### Features

- ✅ Fully GNOME-based – Works on any GNOME installation (Wayland & X11)
- ✅ Simple & lightweight – No extra dependencies, just point & pick
- ✅ Opens in a terminal – Displays the selected color's RGB & HEX values

### Installation

__1. GNOME Extensions__
  - Install via extensions.gnome.org (coming soon).
  - Enable the extension:

```sh
gnome-extensions enable ypsilonpicker@gnome
```

__2. Manual Installation__
  - Clone this repository:

```sh
git clone https://github.com/EnginYpsilon/ypsilon-picker.git ~/.local/share/gnome-shell/extensions/ypsilonpicker@gnome
```

- Restart GNOME Shell:

```sh
# For X11
gnome-shell --replace & disown
```

or

```sh
# For X11
Alt + F2 → type r → Enter
```

or `logout & login again` (for __Wayland__)

__Enable the extension:__

```sh
gnome-extensions enable ypsilonpicker@gnome
```

#### Usage
- Click the Ypsilon Picker icon in the GNOME panel.
- A tiny magnifying glass will appear, displaying the color under your cursor.
- The preview shows the exact color that will be picked when you click.
- Click anywhere on the screen to select a color.
- The RGB and HEX values will be displayed in the terminal.


##### Example Output

```c
Click anywhere on the screen to pick a color...
RGB: 33 33 33
HEX: #212121
```

---

##### License

MIT License
