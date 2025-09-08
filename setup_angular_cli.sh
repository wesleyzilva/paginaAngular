
#!/bin/bash

# Get the global npm prefix path
NPM_PREFIX=$(npm config get prefix)

# Convert Windows path to Unix-style path for Git Bash
NPM_PATH=$(echo $NPM_PREFIX | sed 's/\\/\//g' | sed 's/C:/\/c/')

# Add the npm path to .bashrc if not already present
if ! grep -q "$NPM_PATH" ~/.bashrc; then
    echo "export PATH=\$PATH:$NPM_PATH" >> ~/.bashrc
    echo "Added npm global path to .bashrc"
else
    echo "npm global path already exists in .bashrc"
fi

# Reload .bashrc
source ~/.bashrc

# Confirm ng command is available
if command -v ng &> /dev/null; then
    echo "Angular CLI is now available. You can run 'ng serve'."
else
    echo "Angular CLI is still not available. Please check your npm installation."
fi
