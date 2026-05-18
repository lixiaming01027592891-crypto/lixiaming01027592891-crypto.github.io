export const COMPANY = {
  name: '宇涵居家照護',
  nameEn: 'YUHAN HOMECARE',
  description:
    '宇涵居家照護提供高雄市專業居家看護、長者陪伴、失智照護、術後照顧服務。24小時全年無休，用心守護您的家人。',
  phone: '0935-803-258',
  phoneAlt: '0978-788-886',
  telLink: 'tel:+886935803258',
  telLinkAlt: 'tel:+886978788886',
  email: 'service@yuhanhomecare.com',
  address: {
    street: '覺民路370號',
    city: '高雄市',
    district: '三民區',
    full: '高雄市三民區覺民路370號',
  },
  mapsQuery: 'https://maps.google.com/?q=高雄市三民區覺民路370號',
  hours: '24小時全年無休',
  hoursDetail: '週一至週日 08:00 - 20:00（急件 24 小時聯繫）',
  openingHours: 'Mo-Su 00:00-23:59',
  lineUrl: 'https://line.me/ti/p/@yuhanhomecare',
  geo: { latitude: 22.6505, longitude: 120.3286 },
  priceRange: '$$',
} as const;

export const SERVICE_AREAS = [
  '高雄市新興區',
  '高雄市苓雅區',
  '高雄市左營區',
  '高雄市鼓山區',
  '高雄市三民區',
  '高雄市前鎮區',
  '高雄市楠梓區',
  '高雄市小港區',
] as const;

export const DISCLAIMER =
  '本網站所載內容僅供一般照護參考，不能取代醫師、護理師或其他合格醫療人員的專業判斷與處方。如有醫療需求請諮詢專業人員。';
