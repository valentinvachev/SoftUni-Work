function findWinner(arrayOfGenerals,battles) {

 const kingdoms = arrayOfGenerals.reduce((acc,curr)=>{
        let {kingdom,general,army} = curr;

        if (!acc.hasOwnProperty(kingdom)) {
            acc[kingdom] = {};
            acc[kingdom][general] = {};
            acc[kingdom][general]['army'] = army;
            acc[kingdom][general]['wins'] = 0;
            acc[kingdom][general]['losses'] = 0;
        } else {
            if (!acc[kingdom].hasOwnProperty(general)) {
                acc[kingdom][general] = {};
                acc[kingdom][general]['army'] = army;
                acc[kingdom][general]['wins'] = 0;
                acc[kingdom][general]['losses'] = 0;
            } else {
                acc[kingdom][general]['army'] += army;
            }
        }
        return acc;
    },{});


    battles.forEach(battle=>{
        let [firstKingdom,firstGeneral,secondKingdom,secondGeneral] = battle;
        if (firstKingdom!==secondKingdom) {

           
            let firstArmy = kingdoms[firstKingdom][firstGeneral]['army'];
            let secondArmy = kingdoms[secondKingdom][secondGeneral]['army'];

            if (firstArmy > secondArmy) {
                let remains = Math.floor(kingdoms[secondKingdom][secondGeneral]['army'] * 0.90);
                kingdoms[secondKingdom][secondGeneral]['army'] = remains;
                kingdoms[secondKingdom][secondGeneral]['losses'] += 1;
                let increase = Math.floor(kingdoms[firstKingdom][firstGeneral]['army'] * 1.10);
                kingdoms[firstKingdom][firstGeneral]['army'] = increase;
                kingdoms[firstKingdom][firstGeneral]['wins'] += 1;
            } else if (secondArmy > firstArmy) {
                let remains = Math.floor(kingdoms[firstKingdom][firstGeneral]['army'] * 0.90);
                kingdoms[firstKingdom][firstGeneral]['army'] = remains;
                kingdoms[firstKingdom][firstGeneral]['losses'] += 1;
                let increase = Math.floor(kingdoms[secondKingdom][secondGeneral]['army'] * 1.10);
                kingdoms[secondKingdom][secondGeneral]['army'] = increase;
                kingdoms[secondKingdom][secondGeneral]['wins'] += 1;
            }
        }
    });


    let winner = Object.keys(kingdoms).sort((a,b)=>{
        return findTotalWins(b)-findTotalWins(a) || findTotalLosses(a)-findTotalLosses(b) || a.localeCompare(b);
    })[0];

    console.log(`Winner: ${winner}`);


    Object.keys(kingdoms[winner]).sort((a,b)=>{
      return kingdoms[winner][b]['army']-kingdoms[winner][a]['army'];
    }).forEach(g=>{
        console.log(`/\\general: ${g}`);
        console.log(`---army: ${kingdoms[winner][g]['army']}`);
        console.log(`---wins: ${kingdoms[winner][g]['wins']}`);
        console.log(`---losses: ${kingdoms[winner][g]['losses']}`);
    });


    function findTotalWins(obj) {
        let number = Object.values(kingdoms[obj]).reduce((a, b) => a + b['wins'], 0);
        return number;
    }


    function findTotalLosses(obj) {
        let number = Object.values(kingdoms[obj]).reduce((a, b) => a + b['losses'], 0);
        return number;
    }
}
