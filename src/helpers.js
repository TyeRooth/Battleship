

function addHitButtons (attackedPositions) {
    const enemyTargets = document.querySelectorAll('.enemy button');
    let hit;
    const hitPromise = new Promise ((resolve, reject) => {
        enemyTargets.forEach(target => {
            if (attackedPositions.includes(target.getAttribute('data-position'))) {
                target.addEventListener('click', () => {
                    console.log(target.getAttribute('data-position'));
                    resolve(target.getAttribute('data-position')); 
                })
            };
        });
    });
    hitPromise.then((chosenPosition) => {
        hit = chosenPosition;
    });
    return hit;
};

export {addHitButtons};