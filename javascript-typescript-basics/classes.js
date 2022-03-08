/**
 * Any chess piece
 */
class Piece {
    color = null;
    row = null;
    col = null;

    constructor(color, startCol, startRow, pieceType) {
        console.log(`A ${color} ${pieceType} was created at ${startCol}, ${startRow}!`);
    }

    moveToPosition = (row, col) => {
        this.row = row;
        this.col = col;
    };

    switchTeam = () => {
        if (this.color === 'white') {
            this.color = 'black';
        } else if (this.color === 'black') {
            this.color = 'white';
        }
    }
}

/**
 * The Pawn piece in chess
 */
class Pawn extends Piece {
    constructor(color, startCol, startRow) {
        super(color, startCol, startRow, 'pawn');
        this.color = color;
        this.row = startRow;
        this.col = startCol;
    }

    /**
     * @param {boolean} advance2 If true go forward 2 instead of 1
     */
    moveForward = (advance2) => {
        if (this.color === 'black' && advance2) {
            this.moveToPosition(this.row + 2, this.col);
        } else if (this.color === 'black') {
            this.moveToPosition(this.row + 1, this.col);
        } else if (this.color === 'while' && advance2) {
            this.moveToPosition(this.row - 2, this.col);
        } else if (this.color === 'while') {
            this.moveToPosition(this.row - 1, this.col);
        }
        this.switchTeam();
    }
}

/**
 * The Bishop piece in chess
 */
class Bishop extends Piece {
    constructor(color, startCol, startRow) {
        super(color, startCol, startRow, 'bishop');
        this.color = color;
        this.row = startRow;
        this.col = startCol;
    }
}

const pawn1 = new Pawn('black', 0, 1);
console.log(pawn1);

pawn1.moveForward();
console.log(pawn1);

pawn1.moveForward();
console.log(pawn1);

pawn1.moveForward(true);
console.log(pawn1);

pawn1.switchTeam();
console.log(pawn1);

const bishop1 = new Bishop('white', 3, 6);
console.log(bishop1);

bishop1.switchTeam();
console.log(bishop1);


// const pawn2 = new Pawn('black', 1, 1);
// console.log(pawn2);

// const pawn3 = new Pawn('black', 2, 1);
// console.log(pawn3);





// class OldPawn {
//     color = 'black';
//     row = 0;
//     col = 0;
    
//     constructor(color, startCol, startRow) {
//         this.color = color;
//         this.row = startRow;
//         this.col = startCol;
//     }

//     /**
//      * @param {boolean} advance2 If true go forward 2 instead of 1
//      */
//     moveForward = (advance2) => {
//         if (this.color === 'black' && advance2) {
//             this.row = this.row + 2;
//         } else if (this.color === 'black') {
//             this.row = this.row + 1;
//         } else if (this.color === 'while' && advance2) {
//             this.row = this.row - 2;
//         } else if (this.color === 'while') {
//             this.row = this.row - 1;
//         }
//     }
// }

// const pawn1 = new OldPawn('black', 0, 1);
// console.log(pawn1);

// pawn1.moveForward();
// console.log(pawn1);

// pawn1.moveForward();
// console.log(pawn1);

// pawn1.moveForward(true);
// console.log(pawn1);

// // const pawn2 = new Pawn('black', 1, 1);
// // console.log(pawn2);

// // const pawn3 = new Pawn('black', 2, 1);
// // console.log(pawn3);
