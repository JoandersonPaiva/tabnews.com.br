exports.up = async (pgm) => {
  await pgm.addColumns('contents', {
    words_quantity: {
      type: 'NUMERIC',
      notNull: false,
    },
  });
};

exports.down = false;
