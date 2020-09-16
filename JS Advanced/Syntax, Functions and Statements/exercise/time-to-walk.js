function findNeededTime(a,b,c) {
        let totalDistanceKm = (a*b)/1000
        let additionalMinutes = Math.floor(totalDistanceKm/0.5);
        let inMinutes = ((totalDistanceKm/c)*60)+additionalMinutes;
        let sec_num = (inMinutes)*60;

        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = Math.ceil(sec_num - (hours * 3600) - (minutes * 60));
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        console.log(hours+':'+minutes+':'+seconds);
    }
