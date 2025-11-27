import requset from "@/utils/http";

export const insertCartAPI = (skuId, count) => {
  return requset({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

export const findNewCartListAPI = () => {
  return requset({
    url: "/member/cart",
  });
};
