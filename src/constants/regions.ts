interface IRegions {
  id: number;
  name: string;
}

const regionNames = [
  'Qoraqalpog‘iston Respublikasi',
  'Andijon viloyati',
  'Buxoro viloyati',
  'Jizzax viloyati',
  'Qashqadaryo viloyati',
  'Navoiy viloyati',
  'Namangan viloyati',
  'Samarqand viloyati',
  'Surxandaryo viloyati',
  'Sirdaryo viloyati',
  'Toshkent viloyati',
  'Farg‘ona viloyati',
  'Xorazm viloyati',
  'Toshkent shahri',
];

export const REGIONS: IRegions[] = regionNames.map((name, index) => ({
  id: index + 1,
  name,
}));
