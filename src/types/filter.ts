interface Column {
  label: string;
  model: string;
  require?: boolean;
}

export const GENERIC_COL_TYPES = ['text', 'textarea', 'number', 'email', 'tel', 'password', 'ckeditor', 'file'] as const;
interface GenericColumn extends Column {
  type: typeof GENERIC_COL_TYPES[number];
}

interface ChoiceColumn extends Column {
  type: 'select' | 'radio' | 'checkbox';
  options: {
    text: string;
    value: string | number | boolean;
  }[];
}

interface DateColumn extends Omit<Column, 'model'> {
  type: 'date';
  model: string[];
}

export type FilterColumn = GenericColumn | ChoiceColumn | DateColumn;
