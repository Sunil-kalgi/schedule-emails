module.exports = (mongoose) => {
  const createSchedule = mongoose.model(
    'mailservices',
    mongoose.Schema(
      {
        toEmail: {
          type: String,
        },
        subject: {
          type: String,
        },
        text: {
          type: String,
        },
      },
      {
        timestamps: true,
      }
    )
  );
  return createSchedule;
};
