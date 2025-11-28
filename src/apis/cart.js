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

export const delCartAPI = (ids) => {
  return requset({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
};

export const mergeCartAPI = (data) => {
  return requset({
    url: "/member/cart/merge",
    method: "POST",
    data,
  });
};
