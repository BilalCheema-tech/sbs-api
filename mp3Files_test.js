const assert = require('assert');
const axios = require('axios').default;
Feature('api');

Scenario('Get all .mp3 audio files and validate the response', async ({ I }) => {

  axios.get('https://www.sbs.com.au/guide/ajax_radio_program_catchup_data/language/hindi/location/NSW/subloacation/Sydney')
  .then(function (response) {
    //Note:: comment out console.log to print the whole response of the sbs ajax radio response
    // console.log(response.data);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Sunday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1632039263', response.data[0].archiveAudio.mp3);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Saturday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1631952870', response.data[1].archiveAudio.mp3);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Friday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1631867203', response.data[2].archiveAudio.mp3);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Thursday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1631780780', response.data[3].archiveAudio.mp3);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Wednesday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1631695106', response.data[4].archiveAudio.mp3);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Tuesday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1631607965', response.data[5].archiveAudio.mp3);
    assert.equal('https://media.sbs.com.au/ondemand/audio/Monday_ONDemand_SBS_RADIO2_17_00.mp3?mtime=1631521559', response.data[6].archiveAudio.mp3);


    assert.equal('200', response.status);
    console.log("Response Status is:  " + response.status);
    assert.equal('OK', response.statusText);
    console.log("Response status text is   " + response.statusText);
  })
  .catch(function (error)
  {
      console.log(error);
  })
  .then(function ()
  {
    console.log("Get Request execution completed");
  })
});
