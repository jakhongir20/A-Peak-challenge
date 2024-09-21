import { v4 as uuidv4 } from 'uuid';

enum ColumnTitles {
  NAME = 'Наименование',
  BARCODE = 'Штрихкод',
  QUANTITY = 'Количество',
  PRICE = 'Цена',
  SUM = 'Сумма',
  DISCOUNT = 'Скидки',
  MARKUP = 'Наценка',
  TO_PAY = 'К оплате',
}

const createColumns = (titles: ColumnTitles[]) =>
  titles.map((title) => ({ id: uuidv4(), title }));

export const COLUMNS = createColumns([
  ColumnTitles.NAME,
  ColumnTitles.BARCODE,
  ColumnTitles.QUANTITY,
  ColumnTitles.PRICE,
]);
export const COLUMNS_TABLE = createColumns([
  ColumnTitles.NAME,
  ColumnTitles.BARCODE,
  ColumnTitles.QUANTITY,
  ColumnTitles.PRICE,
  ColumnTitles.SUM,
]);
export const SEARCH_TABLE = createColumns([
  ColumnTitles.NAME,
  ColumnTitles.BARCODE,
  ColumnTitles.PRICE,
  ColumnTitles.QUANTITY,
  ColumnTitles.SUM,
]);
export const HEADER_SUM = createColumns([
  ColumnTitles.NAME,
  ColumnTitles.DISCOUNT,
  ColumnTitles.MARKUP,
  ColumnTitles.TO_PAY,
]).map((item) => ({
  ...item,
  amount: 0,
}));
