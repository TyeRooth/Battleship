

async function addHitButtons (attackedPositions) {
    const enemyTargets = document.querySelectorAll('.enemy button');
    const hitPromise = new Promise ((resolve) => {
        enemyTargets.forEach(target => {
            if (attackedPositions.includes(Number(target.getAttribute('data-position'))) === false) {
                target.addEventListener('click', () => {
                    resolve(target.getAttribute('data-position')); 
                })
            };
        });
    });
    return await hitPromise;
};

async function chooseShipPosition() {
    const positions = document.querySelectorAll('.placement button');
    const placementPromise = new Promise ((resolve) => {
        positions.forEach(position => {
            position.addEventListener('click', () => {
                if (position.classList.contains('available')) {
                    resolve(position.getAttribute('data-position'));
                }
            });  
        });
    });
    return await placementPromise;
};

export {addHitButtons, chooseShipPosition, };