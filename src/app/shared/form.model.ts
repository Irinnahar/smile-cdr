export interface Validators {
  required: boolean;
}

export interface ValueCoding {
  system: string;
  code: string;
  display: string;
}

export interface Option {
  valueCoding: ValueCoding;
}

export interface Item {
  linkId: string;
  text: string;
  type: string;
  validators: Validators;
  option: Option[];
}

export interface RootObject {
  resourceType: string;
  id: string;
  url: string;
  status: string;
  subjectType: string[];
  date: string;
  item: Item[];
}
