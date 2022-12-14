const catchAsync = (fn) => {
  return function wrappedFn(req, res, next) {
    fn(req, res).catch((error) => {
      const errorMessage =
        error.message || "Something went wrong! Please try again";
      res.status(500).json({ text: errorMessage });
    });
  };
};

export default catchAsync;
