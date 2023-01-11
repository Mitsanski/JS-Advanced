function roadRadar(speed, area) {
    let diff = 0;
    let status = "";
    let limit = 0;
    let result = "";

    switch (area) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }

    if (speed <= limit && speed > 0) {
        result = `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        diff = speed - limit;
        if (diff <= 20) {
            status = "speeding";
        } else if (diff > 20 && diff <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        result = `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`
    }
    console.log(result);
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
