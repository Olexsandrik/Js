function triangle(element1, type1, element2, type2){
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Неправильно введений тип");
        return "failed";
    }    
    if (type1 === "hypotenuse" && type2 === "hypotenuse") {
        console.log("Типи не можуть бути однакові");
        return "failed";
    }
    if (element1 <= 0 || element2 <= 0) {
        return "Error: значення повинні бути більше нуля";
    }

    let sideA, sideB, hypotenuse, angleA, angleB, leg, oppositeAngle, adjacentAngle;

    if (type1 === "leg" && type2 === "leg") {
        // обидва елементи - катети
        sideA = element1;
        sideB = element2;
        hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
        angleA = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        // перший елемент - катет, а другий - гіпотенуза
        sideA = element1;
        hypotenuse = element2;
        if (sideA >= hypotenuse) {
            return "катет не може бути рівним або більшим за гіпотенузу";
        }
        sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
        angleA = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        // перший елемент - гіпотенуза, а другий - катет
        hypotenuse = element1;
        sideA = element2;
        if (sideA >= hypotenuse) {
            return "катет не може бути рівним або більшим за гіпотенузу";
        }
        sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
        angleA = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "opposite angle" && type2 === "leg") {
        // перший елемент - протилежний кут, а другий - катет
        oppositeAngle = element1 * (Math.PI / 180);
        leg = element2;
        if (element1 >= 90) {
            return "кут не може бути рівним або більшим за 90 градусів";
        }
        hypotenuse = leg / Math.sin(oppositeAngle);
        angleA = element1;
        angleB = 90 - angleA;
        sideB = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2));
    } else if (type1 === "leg" && type2 === "opposite angle") {
        // перший елемент - катет, а другий - протилежний кут
        leg = element1;
        oppositeAngle = element2 * (Math.PI / 180);
        if (element2 >= 90) {
            return "кут не може бути рівним або більшим за 90 градусів";
        }
        hypotenuse = leg / Math.sin(oppositeAngle);
        angleA = element2;
        angleB = 90 - angleA;
        sideB = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2));
    } else if (type1 === "angle" && type2 === "hypotenuse") {
        // перший елемент - гострий кут, а другий - гіпотенуза
        givenAngle = element1;
        hypotenuse = element2;
        if (givenAngle >= 90) {
            return "кут не може бути рівним або більшим за 90 градусів";
        }
        angleA = givenAngle;
        angleB = 90 - angleA;
        sideA = hypotenuse * Math.sin(angleA * (Math.PI / 180));
        sideB = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideA, 2));
    } else if (type1 === "hypotenuse" && type2 === "angle") {
        // перший елемент - гіпотенуза, а другий - кут
        hypotenuse = element1;
        angleA = element2;
        if (angleA >= 90) {
            return "кут не може бути рівним або більшим за 90 градусів";
        }
        angleB = 90 - angleA;
        sideA = hypotenuse * Math.sin(angleA * (Math.PI / 180));
        sideB = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideA, 2));
    } else if (type1 === "adjacent angle" && type2 === "leg") {
        // перший елемент - прилеглий кут, а другий - катет
        adjacentAngle = element1;
        sideB = element2;
        if (adjacentAngle >= 90) {
            return "кут не може бути рівним або більшим за 90 градусів";
        }
        sideA = sideB * Math.tan(adjacentAngle * (Math.PI / 180));
        hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
        angleA = adjacentAngle;
        angleB = 90 - adjacentAngle;
    } else if (type1 === "leg" && type2 === "adjacent angle") {
        // перший елемент - катет, а другий - прилеглий кут
        sideB = element1;
        adjacentAngle = element2;
        if (adjacentAngle >= 90) {
            return "кут не може бути рівним або більшим за 90 градусів";
        }
        sideA = sideB * Math.tan(adjacentAngle * (Math.PI / 180));
        hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
        angleA = adjacentAngle;
        angleB = 90 - adjacentAngle;
    } else {
        console.log("Введено невірні типи.");
        return "failed";
    }



    // Вивід результатів
    console.log("Сторони трикутника:");
    console.log("a=:", sideA);
    console.log("b=:", sideB);
    console.log("c=", hypotenuse);
    console.log("alpha:", angleA.toFixed(2), "градусів");
    console.log("beta:", angleB.toFixed(2), "градусів");

    return "success";


}
