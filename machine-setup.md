Instructions for machine setup
==============================
1. If on Windows, set up WSL2: https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10
    -   Also install Ubuntu on it: https://www.microsoft.com/en-gb/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab

2. Install VS Code (https://code.visualstudio.com/).
    -   Get plugins:
        -   esbenp.prettier-vscode
        -   formulahendry.auto-close-tag
        -   hex-ci.stylelint-plus
        -   dbaeumer.vscode-eslint
        -   naumovs.color-highlight
        -   DigitalBrainstem.javascript-ejs-support
        -   Optional
        -   ritwickdey.LiveServer
        -   erikphansen.vscode-toggle-column-selection
        -   file-icons

3. Get some sort of terminal program
    -   If you're on Windows, cmdr is a good choice: https://cmder.net/

4. git (install on the terminal...you'll probably have to look this up too)
    -   See if it's already present by typing "git"

5. Create a github account (github.com)

6. Install nvm using the terminal commands given here: https://github.com/nvm-sh/nvm

7. Restart the terminal, then use nvm to install the latest version of node.js with this terminal command:

        nvm install v14.16.1

8. Create a projects folder and navigate into it with these terminal commands:
mkdir projects
cd projects

9. Use git to clone the repo at https://github.com/andfaulkner/chess-game-test.
    -   Terminal command:

            git clone https://github.com/andfaulkner/chess-game-test.git

10. Install the node.js libraries for it (navigate into the directory on the terminal with "cd chess-game-test", then type "npm install")

11. Install global node.js libraries. Terminal command:

        npm install -g nodemon prettier avn avn-nvm avn-n

12. Add these to your bashrc file:

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

13. Add an alias to navigate into the chess game project

        alias gochess="cd [[INSERT PATH TO PROJECT HERE]]"

14. Restart terminal for aliases to take effect.
