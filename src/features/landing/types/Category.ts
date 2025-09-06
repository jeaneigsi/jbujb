export type CategoryKey =
  | 'pharma'
  | 'super'
  | 'food'
  | 'spa'
  | 'hair'
  | 'doctor'
  | 'dent'
  | 'plumb'
  | 'tire'
  | 'acct'

export type Category = {
  key: CategoryKey
  label: string
  iconKey: CategoryKey
}

