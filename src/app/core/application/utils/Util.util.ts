export default class Util {
  public static getPercentaje(increment: number, totalSteps: number) {
    const value = (increment / totalSteps) * 100;
    console.log("value", value);
    return value.toString();
  }
}
