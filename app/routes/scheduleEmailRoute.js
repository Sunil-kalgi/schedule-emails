module.exports = (app) => {
    const schedule = require('../controller/scheduleEmailcontroller');
  
    const express = require('express');
    var router = require('express').Router(); 
  
    router.post('/create/schedule/email/service', schedule.createScheduleEmailService);
    router.get('/read/schedule/email/service', schedule.readScheduleEmailService);
    router.put('/update/schedule/email/service/byId/:id', schedule.updateScheduleEmailService);
    router.delete('/delete/schedule/email/service/byId/:id', schedule.deleteScheduleEmailService);

  
    app.use('/API/V1', router);
  };
  