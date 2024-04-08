export default class Wrapper {
   public delegate = (x: number) => {
      /**/
   };

   public trigger(x: number) {
      this.delegate(x);
   }
}
