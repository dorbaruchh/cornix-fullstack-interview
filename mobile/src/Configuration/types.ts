export interface AccountData {
  id: number;
  image: string;
  name: string;
}

export interface ConfigurationData {
  left_accounts_data: AccountData[];
  right_accounts_data: AccountData[];
  left_id_to_right_ids: Record<number, number[]>;
}