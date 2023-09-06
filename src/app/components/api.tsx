'user server';
import { cookies } from "next/headers";

export class Caches {
  constructor(nameTag: string){
    this.name = nameTag;
    this.storage = cookies();
    if(!this.storage.has(this.nameTag)){
      this.storage.set(this.nameTag, '');
    }
  }
  setto(val: any | any[]) {
    this.storage.set(this.nameTag, val);
  }
  retrieve() {
    return this.storage.get(nameTag);
  }
}