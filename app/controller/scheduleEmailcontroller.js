const db = require('../models');
const scheduleService = db.createEmailService;
let sendGridMAil = require('@sendgrid/mail');

//create functionalities available for scheduling
exports.createScheduleEmailService = async (req, res) => {
  try {
    sendGridMAil.setApiKey(process.env.SENDGRIDAPIKEY);

    const toEmail = req.body.email;
    const fromEmail = process.env.FROMEMAIL;
    const emailSubject = req.body.subject;
    const emailText = req.body.text;

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: emailSubject,
      text: emailText,
    };

    sendGridMAil.send(msg, function (err, info) {
      if (err) {
        console.log('not sent', err);
      } else {
        if (info[0].statusCode == 202) {
          const mailservice = new scheduleService({
            toEmail: toEmail,
            subject: emailSubject,
            text: emailText,
          });
          mailservice
            .save(mailservice)
            .then((data) => {
              res.status(200).send({
                message: 'schedule service mail saved successfully',
                data: data,
              });
            })
            .catch((err) => {
              res
                .status(404)
                .send({ message: 'No mail to schedule', data: err });
            });
        }
      }
    });
  } catch (error) {
    res.status(500).send({ message: 'Bad request', data: error });
  }
};

//read or list  functionalities available for scheduling
exports.readScheduleEmailService = async (req, res) => {
  try {
    await scheduleService
      .find({})
      .then((data) => {
        res.status(200).send({ message: 'success', data: data });
      })
      .catch((err) => {
        res.status(404).send({ message: 'No data found', data: err });
      });
  } catch (error) {
    res.status(500).send({ message: 'Bad request', data: error });
  }
};

//update functionalities available for scheduling
exports.updateScheduleEmailService = async (req, res) => {
  try {
    const _id = req.params.id;
    const myQuery = { _id: _id };
    const emailSubject = req.body.subject;
    const emailText = req.body.text;

    const newEmail = {
      subject: emailSubject,
      text: emailText,
    };
    scheduleService
      .updateOne(myQuery, newEmail)
      .then((data) => {
        res.status(200).send({
          message: 'service got updated',
          data: data,
        });
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message,
        });
      });
  } catch (error) {
    res.status(500).send({ message: 'Bad request', data: error });
  }
};

//delete functionalities available for scheduling
exports.deleteScheduleEmailService = async (req, res) => {
  try {
    const _id = req.params.id;
    scheduleService
      .deleteOne({ _id: _id })
      .then((data) => {
        res.status(200).send({ message: 'Email service deleted', data: data });
      })
      .catch((err) => {
        res.status(404).send({
          message: 'Some error occurred while deleting.',
          data: err,
        });
      });
  } catch (error) {
    res.status(500).send({ message: 'Bad request', data: error });
  }
};
