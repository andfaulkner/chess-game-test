Instructions for machine setup
==============================
1. If on Windows, set up WSL2: https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10

2. Install these:
-   VS Code (https://code.visualstudio.com/)
-   Some sort of terminal program
    -   if you're on Windows: cmdr is a good choice
-   git (install on the terminal...you'll probably have to look this up too)
    -   See if it's already present by typing "git"

3. Create a github account (github.com)

4. Install nvm using the terminal commands given here: https://github.com/nvm-sh/nvm

5. Restart the terminal, then use nvm to install the latest version of node.js with this terminal command:
nvm install v14.16.1

6. Create a projects folder and navigate into it with these terminal commands:
mkdir projects
cd projects

7. Use git to clone the repo at
https://github.com/andfaulkner/chess-game-test. Terminal command:
git clone https://github.com/andfaulkner/chess-game-test.git

8. Install the node.js libraries for it (navigate into the directory on the terminal with "cd chess-game-test", then type "npm install")

9. Install global node.js libraries. Terminal command:
npm install -g nodemon prettier avn avn-nvm avn-n

10. Add these to your bashrc file:
    alias ..="cd .."
    alias ...="cd ../.."
    alias ....="cd ../../.."
    alias .....="cd ../../../.."
    alias ......="cd ../../../../.."
    alias .......="cd ../../../../../.."
    alias ........="cd ../../../../../../.."
    alias .........="cd ../../../../../../../.."
    alias ..........="cd ../../../../../../../../.."
    alias ...........="cd ../../../../../../../../../.."
    alias ............="cd ../../../../../../../../../../.."
    alias .............="cd ../../../../../../../../../../../.."

11. Add an alias to navigate into the chess game project
    alias gochess="cd [[INSERT PATH TO PROJECT HERE]]"

12. Restart terminal for aliases to take effect.

