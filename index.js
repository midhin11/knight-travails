export function knightMoves (start, end) {
    let visited = [];
    visited.push(start);

    let queue = [];
    queue.push({
        position: start,
        path: [start]
    });
    let front = 0;

    while(front < queue.length) {
        let current = queue[front];
        front++;

        if(arrayEquals(current.position, end)) {
            console.log(`You made it in ${current.path.length - 1} moves!  Here's your path:`)
            for(let item of current.path) console.log(item);
            return;
        }

        let neighbors = getValidMoves(current.position);
        neighbors.forEach(neighbor => {
            let isVisited = visited.some(position => arrayEquals(position, neighbor));
            if(!isVisited) {
                queue.push({
                    position: neighbor,
                    path: [...current.path, neighbor]
                });
                visited.push(neighbor);
            }
            else return;
        })
    }
}

function getValidMoves(position) {
    let [i, j] = position;
    let moves = [];
    moves.push([i+1, j+2],
                [i+1, j-2],
                [i-1, j+2],
                [i-1, j-2],
                [i+2, j+1],
                [i+2, j-1],
                [i-2, j+1],
                [i-2, j-1],

    );

    let validMoves = moves.filter(move => {
        let [i, j] = move;
        if(i < 0 || j < 0 || i > 7 || j > 7) return false;
        return true;
    })

    return validMoves;
}

function arrayEquals(a, b) {
    if(a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) return false;
    }
    return true 
}