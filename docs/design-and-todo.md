
-   Next meeting: start building! (react is set up)

# TODO
!   Install prettier
!   Set up webpack for building react
!   Configure prettier
    !   Automate in script
!   Classes
    !   Inheritance
!   React static components
    !   React class components
    !   React stateless functional components
    !   Container vs view basic concept
!   React rendering to DOM
!   React props
!   React children

!   React state - setState
!   Draw pieces
!   Click cell method placeholder
!   Pass row and column index into click cell method (make cells aware of location)

---

!   New system setup
    !   Get autocompletions working in VSCode again for jsx files
    !   Get prettier working


----------------------------------------------------------------------------------------------------
CURRENT LOCATION
================
!   Explain objects again (for Isaac)
    !   Then explain the object returned by the builder function
!   Explain factory functions (for Isaac)
!   Explain complex factory functions (for Isaac)
    -- i.e. factory functions with functions and closures in the return object

!   Type testing

-   Bonus credit:
    -   Make your own open-source npm library

!   Control flow
    !   if-then
    !   switch
    !   for
    !   for-of
    !   while
    !   forEach
    !   map
    !   reduce
    !   filter

!   Classes basics
    !   Basic inheritance
        !   Including super in constructor
    !   Basic constructors
    !   Basic properties
    !   "this" (basics)

----------------------------------------------------------------------------------------------------
Regular expressions
===================
Cheatsheet
----------
### Positionals / optionals
?           =   Make previous char/"set" of chars optional
\           =   "Escape" next char (i.e. use a regex symbol as a regular char) e.g. \.
^           =   Match beginning of string/line
$           =   Match end of string/line
.           =   Match any character

(a|z)       =   Match either the item before the line, or the item after. If there are 3+,
                Match any item before, after, or between the lines.
                e.g. "f: (orange|apple|pear|banana)\." will match:
                    f: orange.
                    f: apple.
                    f: pear.
                    f: banana.

### Sets
[]          =   Match ANY char inside braces e.g. [ABC] matches either A, B or C
- in []     =   Match any chars BETWEEN chars around the "-"
                e.g. [a-z] matches any lowercase letter
                e.g. [A-Z] matches any uppercase letter
                e.g. [0-9] matches any digit
^ in []     =   Match any chars BESIDES the chars in the set
                e.g. [^a-zA-Z] Match non-letter characters

{} with 1 # =   Match the previous char the number of times in the braces
                e.g. [0-9]{4}  <- Matches any 4-digit number.
                                  DOES NOT match 3-digit numbers
                e.g. [a-z]{3}  <- Matches any 3-digit number.
                                  DOES NOT match 2-digit numbers

### Quantity
*           =   Match 0 or more of the previous character
                e.g. `Q[a-z]*q` <- Matches anything between a capital Q
                                   and a lowercase q, including Qq

+           =   Match 1 or more of the previous character
                e.g. `Q[a-z]+q` <- Matches anything between a capital Q
                                   and a lowercase q, NOT including Qq

{} with #,# =   Match the previous char any number of times within the RANGE between
                the first # and the second #.
                e.g. [0-9]{3,4} <- Matches any 3-digit or 4-digit number.


### Lookahead & lookbehind
(?=a)      =    Match anything with the given char or set directly in front of it
                e.g. [a-zA-Z](?=g) <- Only match characters that are right before a g


TODO
----
!   Simple text matching e.g. asdf
-   Symbols
    !   \   <- escapes special characters
    !   ^
    !   $
    !   ?               e.g. asdf? -- Make the character (or matching "set") directly before it optional
    !   []              e.g. [1-9a-zA-Z]
    !   [] with chars   e.g. [HRB]
    !   [] with -       e.g. [A-Z]
    !   [] with ^       e.g. [^A-Z]
    -   -               e.g. [1-9a-zA-Z]
    -   .
    -   *
    -   +
    -   Braces
    -   Lookahead, lookbehind
-   Flags
    -   g
    -   i
    -   m

-   Special characters
    -   \s
    -   \S

-   Optionals (|)
----------------------------------------------------------------------------------------------------


-   React
    !   Model-view-controller
    !   What it is
    !   Components
    !   SFCs
    !   Props
    !   Class components
    -   Built-in tags
    -   Build little toy component
    -   Import statements

-   Typescript

Make a bear voting application


MODEL
=====
userData = {
    firstName: 'Isaac',
    socialClass: 'super-rich',
}


CONTROLLER
==========
// receive request for user data from client
view.firstName = userData.firstName;
view.socialClass = userData.socialClass
// return populated view to client;


VIEW
====
Hi {firstName}! You are {socialClass} today!

-   Refactors and codebase setup
    !   Add .editorconfig
    !   Get rid of the commented-out code
    -   No state store - issues:
            Updating is a pain in the ass
            Updates in "deep" objects are unreliable
            Updating more than one thing at once is dangerous
            Data can't be passed down in a clump easily
    -   Add typechecking
        -   Update to Typescript

!   Add EditorConfig

-   How to add snippets (Sublime but figure it out for VSCode)

-   Making pieces move
    !   Create input boxes (to and from)
    !   Refactor rows inside BoardView to be more concise
    !   Fix x coordinate box updating on click
    -   DEDICATE NEXT SESSION TO CLEANING TECHNICAL DEBT AND ADDITIONAL CODEBASE SETUP
        -   Add source mapping
        -   Create MobX state container
        -   Add Typescript

    -   Make submitMove able to control pieces

    -   Make clicking a cell select a piece if piece is present
        -   Selecting piece inputs the cell coordinates into the box
    -   Disable swap sides once a move is made
    -   Block invalid moves
        -   If invalid:
            -   Block move (revert or don't allow at all)
            -   Show error message
            -   Clear input boxes
    -   Update board on valid move
        -   Update positions to have change in the correct one
        -   TODO set up logic for jumping over pieces
        

-   Set up cell selection and basic piece movement

-   Game rules
    -   Take turns on the same machine logic
        -   Turn logic
    -   Capture logic
    -   Kinging
        -   King move logic
    -   Endgame conditions
    -   Restart button at endgame
    -   End early button

-   REST API routes (express.js):
    -   Join/start game
    -   Submit move
    -   End game / forfeit

-   Socket routes (socket.io):
    -   Ongoing game (receive other moves, end game)

-   Read about it
    -   
-   Play around with it
---


---
Homework
========
-   Stay away from r/javascript

-   Set up computer to auto-backup .bashrc and .bash_profile
    -   cron job
    -   date

-   Get to know express.js better
    -   Make your own toy server that does (some sort of thing)
    -   fs
    -   path
    -   process

-   Get to know react.js better

-   Get to know Redis and the driver

-   Research socket libraries:
    -   Popularity - the more popular, the better
    -   How active the project is
    -   Maturity - how long it's existed
    -   Speed - look at benchmarks (especially comparative benchmarks)
    -   Stability - does it crash, leak memory
    -   Developer responsiveness - do they close tickets? How many maintainers?
    -   Feature set - does it do everything we need it to?


---
Install these:
-   VS Code
-   Some sort of terminal
-   Git
-   Node.js
-   Pull repo
-   Install node.js libraries

---



-   Sign up for free deployment environment (probably Heroku)
    -   

-   Redis

-   Server
    -   
    -   Websockets
    -   

-   Source maps

-   Refactor to do Row component rendering of pieces sanely

# Bonus materials later
-   Typescript


# Must-haves - checkers:
-   Set up board
    -   Colour it
-   Set up pieces in starting places
    -   Get icons for each (and colour them)
-   Input boxes for moves (start box, finish box)
-   Submit button
-   Ability to remove a piece

-   Username input
-   Ready button (on inputting username)

## Backend
-   Route to receive username input
    -   ...and store username in
    -   Matching when 2nd user joins (in database)
    -   Web sockets to send responses in real-time down to page
-   Route to receive moves
-   Route to mark end of game
-   Route to accept end of game




---
Ignore for now ::

Should-have:
-   Castling
-   Drag and drop for pieces
-   Move validation / Blocking disallowed moves
-   Ability to swap a piece (pawn for Queen on reaching other side)
-   Username not taken/active validation

Could-have:
-   Add chess
-   Timer
-   Set up removed pieces beside board

Would like to have:
-   Piece/board theme
-   Leaderboard


----------------------------------------------------------------------------------------------------
Homework
--------
-   Make an npm module
-   Learn some regexes
