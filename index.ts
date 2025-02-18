function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

// Обмежуємо можливі типи до варіантів з Таблиці 1
type ElementType =
  | "leg"
  | "hypotenuse"
  | "adjacent angle"
  | "opposite angle"
  | "angle";

// Функція triangle
function triangle(
  value1: number,
  type1: ElementType,
  value2: number,
  type2: ElementType
): string {
  if (value1 <= 0 || value2 <= 0) {
    console.log("zero or negative input");
    return "failed";
  }

  let a = 0,
    b = 0,
    c = 0,
    alpha = 0,
    beta = 0;

  if (type1 === "leg" && type2 === "leg") {
    a = value1;
    b = value2;
    c = Math.sqrt(a * a + b * b);
    alpha = radToDeg(Math.asin(a / c));
    beta = 90 - alpha;
  } else if (
    (type1 === "leg" && type2 === "hypotenuse") ||
    (type1 === "hypotenuse" && type2 === "leg")
  ) {
    // Катет + гіпотенуза
    if (type1 === "leg") {
      a = value1;
      c = value2;
    } else {
      c = value1;
      a = value2;
    }
    if (a >= c) {
      console.log(
        "Помилка: катет не може бути більшим або рівним за гіпотенузу."
      );
      return "failed";
    }
    b = Math.sqrt(c * c - a * a);
    alpha = radToDeg(Math.asin(a / c));
    beta = 90 - alpha;
  } else if (
    (type1 === "leg" && type2 === "adjacent angle") ||
    (type1 === "adjacent angle" && type2 === "leg")
  ) {
    if (type1 === "leg") {
      a = value1;
      beta = value2;
    } else {
      beta = value1;
      a = value2;
    }
    if (beta <= 0 || beta >= 90) {
      console.log("Помилка: прилеглий кут має бути гострим (0 < β < 90).");
      return "failed";
    }
    c = a / Math.cos(degToRad(beta));
    b = Math.sqrt(c * c - a * a);
    alpha = 90 - beta;
  } else if (
    (type1 === "leg" && type2 === "opposite angle") ||
    (type1 === "opposite angle" && type2 === "leg")
  ) {
    if (type1 === "leg") {
      a = value1;
      alpha = value2;
    } else {
      alpha = value1;
      a = value2;
    }
    if (alpha <= 0 || alpha >= 90) {
      console.log("Помилка: протилежний кут має бути гострим (0 < α < 90).");
      return "failed";
    }
    c = a / Math.sin(degToRad(alpha));
    beta = 90 - alpha;
    b = Math.sqrt(c * c - a * a);
  } else if (
    (type1 === "hypotenuse" && type2 === "angle") ||
    (type1 === "angle" && type2 === "hypotenuse")
  ) {
    if (type1 === "hypotenuse") {
      c = value1;
      alpha = value2;
    } else {
      alpha = value1;
      c = value2;
    }
    if (alpha <= 0 || alpha >= 90) {
      console.log("Помилка: кут має бути гострим (0 < α < 90).");
      return "failed";
    }
    beta = 90 - alpha;
    a = c * Math.sin(degToRad(alpha));
    b = c * Math.cos(degToRad(alpha));
  } else {
    console.log("Помилка: некоректне поєднання типів. Перевірте інструкцію.");
    return "failed";
  }

  console.log(`a = ${a.toFixed(10)}`);
  console.log(`b = ${b.toFixed(10)}`);
  console.log(`c = ${c.toFixed(10)}`);
  console.log(`alpha = ${alpha.toFixed(10)}`);
  console.log(`beta = ${beta.toFixed(10)}`);

  console.log("success");

  return "success";
}

triangle(7, "leg", 18, "hypotenuse");
