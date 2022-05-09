export async function recuperaPost(){
  return await (await fetch('assets/db.json')).json();
}
