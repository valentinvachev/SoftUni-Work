function gladiatorPool(input) {
    

  const pool = input.filter(s=>s.includes("->")).reduce((acc,curr)=>{
        let [hero,technique,skill] = curr.split(" -> ");
        if (!acc.hasOwnProperty(hero)) {
            acc[hero] = {};
            acc[hero][technique] = Number(skill);
        } else {
            if (!acc[hero].hasOwnProperty(technique)) {
                acc[hero][technique] = Number(skill);
            } else {
                if (acc[hero][technique] < Number(skill)) {
                    acc[hero][technique] = Number(skill);
                }
            }
        }
        return acc;
    },{});

    input.filter(s=>s.includes("vs")).forEach(duel=>{
        let [firstDuelist,secondDuelist] = duel.split(" vs ");
        if (pool.hasOwnProperty(firstDuelist) && pool.hasOwnProperty(secondDuelist)) {

            let canDuel = false;
            let techniquesFirstPlayer = Object.keys(pool[firstDuelist]);
            for (let i=0;i<=techniquesFirstPlayer.length-1;i++) {
                if (pool[secondDuelist].hasOwnProperty(techniquesFirstPlayer[i])) {
                    canDuel = true;
                    break;
                }
            }

            if (canDuel) {
               if (findTotalPointsOfHero(firstDuelist)>findTotalPointsOfHero(secondDuelist)) {
                delete pool[secondDuelist];
               } else if (findTotalPointsOfHero(secondDuelist)>findTotalPointsOfHero(firstDuelist)) {
                delete pool[firstDuelist];
               }
            }
        }
    });


    Object.keys(pool).sort((a,b)=>{
        return findTotalPointsOfHero(b)-findTotalPointsOfHero(a) || a.localeCompare(b);
    }).forEach(h=>{
        console.log(`${h}: ${findTotalPointsOfHero(h)} skill`);
        Object.keys(pool[h]).sort((a,b)=>
        {
         return pool[h][b]-pool[h][a] || a.localeCompare(b);
        }).forEach(t=>{
            console.log(`- ${t} <!> ${pool[h][t]}`);
        });
    });

    function findTotalPointsOfHero(hero) {
      return Object.values(pool[hero]).reduce((acc,curr)=>acc+curr);
    }
}

