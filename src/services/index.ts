import supabase from "@/lib/supabase";

export const services = {
  async getImages() {
    const sliders =
      (await supabase.storage.from("Sliders").list())?.data?.map(
        (item) =>
          "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/" +
          item.name
      ) || [];
    const groom = await supabase.storage
      .from("Others")
      .getPublicUrl("groom.jpg").data.publicUrl;
    const bride = await supabase.storage
      .from("Others")
      .getPublicUrl("bride.jpg").data.publicUrl;
    const thankYou = await supabase.storage
      .from("Others")
      .getPublicUrl("thank-you.jpg").data.publicUrl;
    return {
      sliders,
      thankYou,
      couple: { groom, bride },
    };
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
};
