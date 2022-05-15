
const Ship = (name, positions) => {

    let hits = [];
    function hit (position) {
        if (!hits.includes(position)) {
            hits.push(position);
        }
    }
    function isSunk () {
        return hits.length === positions.length;
    }

    return {
        hit,
        isSunk,
        positions
    }
}

export {Ship};