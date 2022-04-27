import './style.css';

const Ship = (name, positions) => {

    let hits = [];
    function hit (position) {
        hits.push(position);
    }
    function isSunk () {
        if (hits.length === positions.length) {
            return true;
        }
        else { return false };
    }

    return {
        hit,
        isSunk
    }
}



export {Ship};