import supabase from "@/lib/supabase";

export const services = {
  async getSliders() {
    const BASE_URL =
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/";
    const { data, error } = await supabase.storage.from("Sliders").list();
    if (error) {
      console.log("Error:", error);
      return [];
    }
    return data.map((item) => BASE_URL + item.name);
  },
  async getAlbum(params: any) {
    const BASE_URL =
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Album/";
    const { data, error } = await supabase.storage
      .from("Album")
      .list("", params);
    if (error) {
      console.log("Error:", error);
      return [];
    }
    return data
      .filter((item) => item.name != ".emptyFolderPlaceholder")
      .map((item) => BASE_URL + item.name)
      .reverse();
  },
  async getCouple() {
    const groom = await supabase.storage
      .from("Couple")
      .getPublicUrl("groom.jpg").data.publicUrl;
    const bride = await supabase.storage
      .from("Couple")
      .getPublicUrl("bride.jpg").data.publicUrl;
    return { groom, bride };
  },
};
