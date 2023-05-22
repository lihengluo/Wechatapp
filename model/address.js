/** 地址 */
export function genAddress(id) {
  return {
    saasId: '88888888',
    uid: `8888888820550${id}`,
    authToken: null,
    id: `${id}`,
    addressId: `${id}`,
    phone: '12345678901',
    name: `无暇不出团队${id}`,
    countryName: '中国',
    countryCode: 'chn',
    provinceName: '湖北省',
    provinceCode: '430000',
    cityName: '武汉',
    cityCode: '430000',
    districtName: '洪山区',
    districtCode: '623026',
    detailAddress: `珞瑜路1037号华中科技大学`,
    isDefault: `${id}` === '0' ? 1 : 0,
    addressTag: id === 0 ? '' : '公司',
    latitude: '34.59103',
    longitude: '102.48699',
    storeId: null,
  };
}

/** 地址列表 */
export function genAddressList(len = 10) {
  return new Array(len).fill(0).map((_, idx) => genAddress(idx));
}
