module.exports = {
    success: (status, message, data) => ({
      status,
      success: true,
      message,
      data,
    }),
    fail: (status, message) => ({
      status,
      success: false,
      message,
    }),
  };

  // response body 형식
  // 클라이언트, 통신 간에 response message 를
  // 사람이 알아보기 쉽게 만든 모듈