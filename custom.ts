
/**
 * Makebot blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace Makebot {
    /**
     * @param c is for coloum of led
     * @param r is for rows of led
     * @param t is for Interval time 
     */
    //% block="Blink coloum $c row $r Interval time $t"
     //% c.min=0 c.max=4 r.min=0 r.max=4
    //% c.fieldOptions.precision=1 r.fieldOptions.precision=1
    export function Makebot (c: number, r: number, t: number): void {
      let start= game.createSprite(c,r)
      start.setBlink(t)
      start.blink()  
    }
}
