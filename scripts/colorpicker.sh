#!/bin/bash

# Ensure the terminal stays open while the color picker is active
echo "Click anywhere on the screen to pick a color..."
sleep 0.5  # Small delay to ensure the cursor mode properly activates

# Get the gdbus output
output=$(gdbus call --session --dest org.gnome.Shell.Screenshot --object-path /org/gnome/Shell/Screenshot --method org.gnome.Shell.Screenshot.PickColor)
colors=($(echo $output | command grep -o "[0-9\.]*"))

# Convert to 255-based RGB format
LC_NUMERIC=C  # Force C locale to avoid comma issues
for ((i = 0; i < ${#colors[@]}; i++)); do
    colors[$i]=$(echo "${colors[$i]} * 255" | bc | awk '{printf "%.0f\n", $1}')
done

echo "RGB: ${colors[0]} ${colors[1]} ${colors[2]}"
printf "HEX: #%02x%02x%02x\n" "${colors[0]}" "${colors[1]}" "${colors[2]}"

# Keep the terminal open
exec bash
