import { ConfigurationData } from "src/Configuration/types";

export const getConfigurationData = (): ConfigurationData => ({
  left_accounts_data: [
    {
      id: 1,
      name: "Left - Binance",
      image:
        "https://cornix.nyc3.digitaloceanspaces.com/icons/channels/48~2021-07-25 12:23:11.134949.jpg",
    },
    {
      id: 2,
      name: "Left - Binance Futures",
      image:
        "https://cornix.nyc3.digitaloceanspaces.com/icons/channels/48~2021-07-25 12:23:11.134949.jpg",
    },
    {
      id: 3,
      name: "Left - Kucoin",
      image:
        "https://cornix.nyc3.digitaloceanspaces.com/icons/channels/48~2021-07-25 12:23:11.134949.jpg",
    },
  ],
  right_accounts_data: [
    {
      id: 101,
      name: "Right - Binance",
      image:
        "https://cornix.nyc3.digitaloceanspaces.com/icons/channels/48~2021-07-25 12:23:11.134949.jpg",
    },
    {
      id: 102,
      name: "Right - Binance Futures",
      image:
        "https://cornix.nyc3.digitaloceanspaces.com/icons/channels/48~2021-07-25 12:23:11.134949.jpg",
    },
    {
      id: 103,
      name: "Right - KuCoin",
      image:
        "https://cornix.nyc3.digitaloceanspaces.com/icons/channels/48~2021-07-25 12:23:11.134949.jpg",
    },
  ],
  left_id_to_right_ids: {
    1: [101, 103],
    2: [],
    3: [102, 103],
  },
});
