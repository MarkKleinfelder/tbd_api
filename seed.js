var db = require('./models');

var audioList = [
  {
  title: "hihatAnalog.wav",
  audioPath: "/sounds/hihatAnalog.wav"
  },
   {
  title: "kickFloppy.wav",
  audioPath: "/sounds/kickFloppy.wav"
  },
   {
  title: "kickHeavy.wav",
  audioPath: "/sounds/kickHeavy.wav"
  },
   {
  title: "openhatTight.wav",
  audioPath: "/sounds/openhatTight.wav"
  },
   {
  title: "snareAnalog.wav",
  audioPath: "/sounds/snareAnalog.wav"
  },
   {
  title: "snareBlock.wav",
  audioPath: "/sounds/snareBlock.wav"
  },
];

// remove all records that match {} -- which means remove ALL records
db.Audio.remove({}, function(err, audiofiles){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all audio files');

    // create new records based on the array books_list
    db.Audio.create(audioList, function(err, audiofiles){
      if (err) { return console.log('err', err); }
      console.log("created", audiofiles, "audiofiles");
      process.exit();
    });
  }
});