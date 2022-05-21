

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

function computerChooses (lastHit, attackedPositions) {
    let possibleNextHits = [];
    if (lastHit >= 10) {
        possibleNextHits.push(lastHit - 10);
    }
    if (lastHit % 10 !== 9) {
        possibleNextHits.push(lastHit - 1);
    }
    if (lastHit < 90) {
        possibleNextHits.push(lastHit + 10);
    }
    if (lastHit % 10 !== 0) {
        possibleNextHits.push(lastHit + 1);
    }
    for (let i = 0; i < possibleNextHits.length; i++) {
        if (attackedPositions.includes(possibleNextHits[i])) {
            possibleNextHits.splice(i, 1);
        }
    }
    return possibleNextHits
}

export {addHitButtons, chooseShipPosition, computerChooses};