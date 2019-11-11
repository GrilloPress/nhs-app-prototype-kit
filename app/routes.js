// External dependencies
const express = require('express');
const router = express.Router();



router.post('/settings/v1/logout', function (req, res) {

  req.session.data = {}
  res.redirect('/home/v1/')

});

var moment = require('moment');

router.post('/send-a-message/v1/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mm");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/messaging/v1/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/send-a-message/v2/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mma");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/send-a-message/v2/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/send-a-message/v2/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/send-a-message/v2/contact-your-gp')

  } else {
    res.redirect('/send-a-message/v2/select-who')
  }
});

router.post('/send-a-message/v3/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mma");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgSender = req.session.data.sender
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/send-a-message/v3/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "subject" + req.session.data.msgSubject + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/send-a-message/v4/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mma");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgSender = req.session.data.sender
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/send-a-message/v4/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "subject" + req.session.data.msgSubject + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/send-a-message/v3/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/send-a-message/v3/contact-your-gp')

  } else {
    res.redirect('/send-a-message/v3/select-who')
  }
});

router.post('/send-a-message/v4/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/send-a-message/v4/contact-your-gp')

  } else {
    res.redirect('/send-a-message/v4/select-who')
  }
});

router.post('/send-a-message/v4/message-subject-radio', function (req, res) {
  let answer = req.body.subject;

  if (answer === 'Other') {

    res.redirect('/send-a-message/v4/message-subject')

  } else {
    res.redirect('/send-a-message/v4/send-a-message-radio')
  }
});

// NHS App AJAX routes

router.post('/notifications', function (req, res) {
  let answer = req.body.notifications;
  if (answer == "on") {
    req.session.data.notifications = "True";
  } else {
    req.session.data.notifications = "False";
  }
  res.redirect('/notifications')
});

router.post('/password', function (req, res) {
  let answer = req.body.touchID;
  if (answer == "on") {
    req.session.data.touchID = "True";
  } else {
    req.session.data.touchID = "False";
  }
  res.redirect('/password')
});


// Add your routes here - above the module.exports line



// SEND A PATIENT ROUTES

router.post('/send-a-patient-a-message/v2/create/sender/from', function (req, res) {
  let answer = req.body.senderFrom;
  if (answer == "yes") {
    // set senderFrom to senderDisplayName
    req.session.data.senderDisplayName = req.session.data.ODS;
    res.redirect('/send-a-patient-a-message/v2/create/sender/check-your-answers')
    // redirect to check your answers
  } else {
    // redirect to new sender name
    res.redirect('/send-a-patient-a-message/v2/create/sender/new-sender-name')
  }
});


// Organ donation routing

router.post('/organ-donation/v1/your-choice', function (req, res) {
  let answer = req.body.yourChoice;

  if (answer === 'all') {

    res.redirect('/organ-donation/v1/faith-beliefs')

  } else {
    res.redirect('/organ-donation/v1/which-organs')
  }
});

router.post('/organ-donation/v2/your-choice', function (req, res) {
  let answer = req.body.yourChoice;

  if (answer === 'all') {

    res.redirect('/organ-donation/v2/faith-beliefs')

  } else {
    res.redirect('/organ-donation/v2/which-organs')
  }
});


// Nominated pharmacy routing


router.post('/nominated-pharmacy/v1/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/nominated-pharmacy/v1/find-community-pharmacy')

  } else {
    res.redirect('/nominated-pharmacy/v1/name-of-pharmacy')
  }
});

router.post('/nominated-pharmacy/v1/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/nominated-pharmacy/v1/search-name')

  } else {
    res.redirect('/nominated-pharmacy/v1/online-results')
  }
});


router.post('/nominated-pharmacy/v1/nominate-a-pharmacy', function (req, res) {
  let answer = req.body.nominatePharmacy;

  if (answer === 'community') {

    res.redirect('/nominated-pharmacy/v1/find-community-pharmacy-nom')

  } else {
    res.redirect('/nominated-pharmacy/v1/name-of-pharmacy-nom')
  }
});

router.post('/nominated-pharmacy/v1/name-of-pharmacy-nom', function (req, res) {
  let answer = req.body.pharmacyNameNom;

  if (answer === 'yes') {

    res.redirect('/nominated-pharmacy/v1/search-name-nom')

  } else {
    res.redirect('/nominated-pharmacy/v1/online-results-nom')
  }
});


// Add your routes here - above the module.exports line
module.exports = router;
