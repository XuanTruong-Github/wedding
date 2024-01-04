import supabase from "@/lib/supabase";

export const services = {
  async getImages() {
    const sliderNames =
      (
        await supabase.storage.from("wedding").list("sliders", { limit: 4 })
      )?.data?.map((item) => item.name) || [];
    const sliders = await Promise.all([
      ...sliderNames.map(
        (item) =>
          supabase.storage.from("wedding").getPublicUrl(`sliders/${item}`).data
            .publicUrl
      ),
    ]);
    const groom = await supabase.storage
      .from("wedding")
      .getPublicUrl("other/groom.jpg").data.publicUrl;
    const bride = await supabase.storage
      .from("wedding")
      .getPublicUrl("other/bride.jpg").data.publicUrl;
    const thankYou = await supabase.storage
      .from("wedding")
      .getPublicUrl("other/thank-you.jpg").data.publicUrl;
    const story1 = await supabase.storage
      .from("wedding")
      .getPublicUrl("story/story-1.jpg").data.publicUrl;
    const story2 = await supabase.storage
      .from("wedding")
      .getPublicUrl("story/story-2.jpg").data.publicUrl;
    const story3 = await supabase.storage
      .from("wedding")
      .getPublicUrl("story/story-3.jpg").data.publicUrl;
    return {
      sliders,
      couple: { groom, bride },
      story: [
        {
          heading: "Bạn có tin vào định mệnh không?",
          date: "Tháng 9 năm 2020",
          content: `Chúng tôi gặp nhau tại một quán nước. Lúc đó tôi đi là sinh viên, đi làm thêm tại một quán trà chanh và gặp cô ấy đi uống nước cùng bạn ở đó. Thật trùng hợp chúng tôi nhuộm tóc giống màu nhau. Thật ấn tượng. Trùng hợp tiếp theo là đồng nghiệp làm chung với tôi là bạn cô ấy, sau khi biết được Facebook, chúng tôi đã nhắn tin qua lại. Qua một thời gian nhắn tin, tôi rủ cô ấy đi chơi, cô ấy đồng ý.`,
          image: story1,
        },
        {
          heading: "Lời tỏ tình dễ thương ^^",
          date: "Ngày 03 tháng 10 năm 2023",
          content: `Hôm ấy, sau 1 buổi tối đẹp trời tôi và em đi chơi. Khi kết thúc buổi hẹn cả 2 đều rung động và xao xuyến. Tôi đưa cô ấy về và tỏ tình đầy ngượng ngùng và yêu thương  ''Làm người yêu anh nhé". Dù 1 thời gian ngắn gặp và quen em nhưng tôi thật sự rát hạn phúc <3`,
          image: story2,
        },
        {
          heading: "Phút giây cầu hôn bất ngờ",
          date: "Ngày 22 tháng 10 năm 2023",
          content: `Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau . Và giờ đây chúng ta tiếp tục cùng nhau bước sang trang mới . Tôi rủ em đi ăn nhân dịp kỉ niệm 3 năm yêu nhau và 20/10, tôi lên kế hoạch tỏ tình bí mật. Liên hệ dến quán ăn, mang hoa cùng với nhẫn tỏ tình tôi đã chọn trước đó, ngỏ lời: “Làm vợ anh nhé “, em đã rất xúc động và đồng ý lời tỏ tình của tôi.`,
          image: story3,
        },
      ],
      thankYou,
    };
  },
  async getAlbum(params: any) {
    const { data } = await supabase.storage
      .from("wedding")
      .list("album", params);
    const fileNames = data?.map((item) => item.name) || [];
    const images = await Promise.all([
      ...fileNames.map(
        (item) =>
          supabase.storage.from("wedding").getPublicUrl(`album/${item}`).data
            .publicUrl
      ),
    ]);
    return images;
  },
};
