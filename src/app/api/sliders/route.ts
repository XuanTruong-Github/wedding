export async function GET() {
  return Response.json({
    data: [
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/slider-1.jpg",
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/slider-2.jpg",
    ],
  });
}
