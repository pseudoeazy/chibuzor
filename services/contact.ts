import axios from "axios";

export const sendContactUs = async (data: any, url: string) => {
  return await axios({
    url,
    data,
    method: "post",
  });
};
