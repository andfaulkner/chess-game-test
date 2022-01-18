Instructions for machine setup
==============================
1. If on Windows, set up WSL2: https://www.windowscentral.com/how-install-wsl2-windows-10
    -   Also install Ubuntu on it: https://www.microsoft.com/en-gb/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab

    -   If you get error code 0x80370102 - see these instructions here:
        https://askubuntu.com/a/1289208

2. Install VS Code (https://code.visualstudio.com/).
    -   Get plugins:
        -   Recommended:
            -   esbenp.prettier-vscode
            -   formulahendry.auto-close-tag
            -   hex-ci.stylelint-plus
            -   dbaeumer.vscode-eslint
            -   naumovs.color-highlight
            -   DigitalBrainstem.javascript-ejs-support
        -   Optional:
            -   ritwickdey.LiveServer
            -   erikphansen.vscode-toggle-column-selection
            -   file-icons

3. Get some sort of terminal program
    -   If you're on Windows, cmdr is a good choice: https://cmder.net/

4. git (install on the terminal...you'll probably have to look this up too)
    -   See if it's already present by typing `git`

5. Create a github account: https://github.com

6. Install nvm using the terminal commands given here: https://github.com/nvm-sh/nvm

    -   It will be something like:

            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    -   ...but grab the most recent instead

7. Restart the terminal, then use nvm to install the latest version of node.js with this terminal command:

        nvm install v14.16.1

    -   Set it as default:

            nvm alias default v14.16.1

8. Create a projects folder and navigate into it with these terminal commands:

        mkdir projects
        cd projects

9. Use git to clone the repo at https://github.com/andfaulkner/checkers-game-test.
    -   Terminal command:

            git clone https://github.com/andfaulkner/checkers-game-test.git

10. Install the node.js libraries for it.
    -   Navigate into the directory on the terminal with `cd chess-game-test`, then type `npm install`

11. Install global node.js libraries. Terminal command:

        npm install -g nodemon prettier avn avn-nvm avn-n

12. Open bashrc file in vim:

    Add these to your bashrc file:

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

13. Add an alias to .bashrc to navigate into the chess game project

        alias gocheckers="cd [[INSERT PATH TO PROJECT HERE]]"

14. Restart terminal for aliases to take effect.

15. Try running the application:
    a.  Navigate to the application (`gocheckers`), run `npm run build-client-dev`
    b.  Open a second terminal
    c.  Navigate to the application (`gocheckers`), run `npm run run-server`
    d.  Open a browser tab, navigate to localhost:8080. You should see the checkers application.

16. TODO: set up npm autocomplete
