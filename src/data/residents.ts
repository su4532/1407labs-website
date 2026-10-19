// The residents of 1407, alphabetical by last name.
// Photos go in public/residents/ — square images look best. Without a photo,
// the card shows the resident's initials instead.

export interface Resident {
  name: string;
  website: string;
  photo?: string; // e.g. "/residents/ishaan-awasthi.jpg"
}

export const residents: Resident[] = [
  { name: "Ishaan Awasthi", website: "https://veryishaan.com", photo: "/residents/ishaan-awasthi.jpg" },
  { name: "Divij Chawla", website: "https://divijchawla.com", photo: "/residents/divij-chawla.jpg" },
  { name: "Agasthya Gangavarapu", website: "https://www.agasthya.info", photo: "/residents/agasthya-gangavarapu.jpg" },
  { name: "Douglas Lin", website: "https://douglas-lin.net", photo: "/residents/douglas-lin.jpg" },
  { name: "Tejas Naladala", website: "https://tejasnaladala.com", photo: "/residents/tejas-naladala.jpg" },
  { name: "Shayaan Uddin", website: "https://shayaan.ai", photo: "/residents/shayaan-uddin.jpg" },
];
