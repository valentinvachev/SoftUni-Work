function solve(worker) {
    if (worker.hasOwnProperty('dizziness') && worker.dizziness === true) {
        worker.dizziness = false;
        worker.levelOfHydrated += (0.1*worker.weight*worker.experience);
    }

    return worker;
}



