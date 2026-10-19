// The residents of 1407, alphabetical by last name.
// Photos go in public/residents/ — square images look best. Until a photo is set,
// the card shows the resident's initials instead.

export interface Resident {
  name: string;
  website: string;
  photo?: string; // e.g. "/residents/ishaan-awasthi.jpg"
}

export const residents: Resident[] = [
  { name: "Ishaan Awasthi", website: "https://ishaanawasthi.com" }, // switch to veryishaan.com once it's live
  { name: "Divij Chawla", website: "https://divijchawla.com" },
  { name: "Agasthya Gangavarapu", website: "https://www.agasthya.info" },
  { name: "Douglas Lin", website: "https://douglas-lin.net" },
  { name: "Tejas Naladala", website: "https://tejasnaladala.com" },
  { name: "Shayaan Uddin", website: "https://shayaan.ai" },
];
