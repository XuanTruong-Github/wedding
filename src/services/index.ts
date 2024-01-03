import supabase from "@/lib/supabase";

export const services = {
  async getSliders() {
    const BASE_URL =
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/";
    const { data, error } = await supabase.storage.from("Sliders").list();
    if (error) return [];
    return data.map((item) => BASE_URL + item.name);
  },
  async getAlbum(params: any) {
    const BASE_URL =
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Album/";
    const { data, error } = await supabase.storage
      .from("Album")
      .list("", params);
    if (error) return [];
    return data.map((item) => BASE_URL + item.name).reverse();
  },
};
