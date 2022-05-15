

async function addHitButtons (attackedPositions) {
    console.log(attackedPositions);
    const enemyTargets = document.querySelectorAll('.enemy button');
    const hitPromise = new Promise ((resolve) => {
        enemyTargets.forEach(target => {
            if (attackedPositions.includes(Number(target.getAttribute('data-position'))) === false) {
                target.addEventListener('click', () => {
                    console.log(target.getAttribute('data-position'));
                    resolve(target.getAttribute('data-position')); 
                })
            };
        });
    });
    return await hitPromise;
};

export {addHitButtons};