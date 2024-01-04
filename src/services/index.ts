import supabase from "@/lib/supabase";

export const services = {
  async getImages() {
    const sliders =
      (await supabase.storage.from("wedding").list("sliders"))?.data?.map(
        (item) =>
          "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/wedding/sliders/" +
          item.name
      ) || [];
    const groom = await supabase.storage
      .from("wedding")
      .getPublicUrl("other/groom.jpg").data.publicUrl;
    const bride = await supabase.storage
      .from("wedding")
      .getPublicUrl("other/bride.jpg").data.publicUrl;
    const thankYou = await supabase.storage
      .from("wedding")
      .getPublicUrl("other/thank-you.jpg").data.publicUrl;
    const cauHon = await supabase.storage
      .from("wedding")
      .getPublicUrl("story/cau-hon.jpg").data.publicUrl;
    return {
      sliders,
      couple: { groom, bride },
      story: [
        {
          heading: "Bạn có tin vào tình yêu online không?",
          date: "October 03 2023",
          content: `<p>Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao
          có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại
          đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật
          đấy!!! Ngày ấy xung quanh tôi các chị em đều quen các bạn qua
          mạng. Do vì không tin về tình yêu online nên tôi nghĩ khó có thể
          quen ai qua mạng. Nhưng rồi thời gian cứ trôi, bạn bè dần dần có
          gia đình hết. Và rồi tôi cũng thử làm quen trên mạng xem sao.
          Sau vài cuộc tìm hiểu tôi đã gặp được anh bây giờ !!!</p>`,
          image:
            "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/f8e3bb158e9f4c00c3e8528400f3ee03.jpeg",
        },
        {
          heading: "Lời cầu hôn lãng mạn^^",
          date: "June 28 2023",
          content: `<p>Ngày ấy, sau 1 buổi tối đẹp trời tôi và anh đi dạo. Khi kết thúc buổi hẹn cả 2 đều rung động và xao xuyến. Chúng tôi ai về nhà nấy. Nhưng cả 2 đều có những cảm xúc yêu thương.  Anh đã nhắn tin với tôi bằng 1 giọng văn đầy ngượng ngùng và yêu thương. ''Mình y em nhé".<br>
          Và cứ thế chúng tôi có những cái nắm tay đầu tiền, nụ hôn đầu tiên ...<br>
          Dù 1 thời gian ngắn gặp và quen anh nhưng chúng tôi đều có cảm giác mình là của nhau &lt;3</p>`,
          image: cauHon,
        },
        {
          heading: "Ngày lễ dạm ngõ",
          date: "June 28 2023",
          content: `<p>Và cuối cùng ngày đó cũng đến. Ngày 2 họ gặp nhau và chúng ta về chung 1 nhà. <br>
          Cảm ơn anh đã đồng hành cùng em trên chặng đường tiếp theo. Chúng mình sẽ cùng bước. Có thể nhanh, có thể chậm miễn là có bước đi cùng nhau. </p>`,
          image:
            "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/f8e3bb158e9f4c00c3e8528400f3ee03.jpeg",
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
