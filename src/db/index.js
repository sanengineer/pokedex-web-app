import Dexie from "dexie";

export const db = new Dexie("san_poke_collects");
db.version(1).stores({
  mine_collection: "++id,name,image_url,id_pokemon,&nickname",
});
