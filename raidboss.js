'use strict';

// Rename this file to `raidboss.js` and edit it to change the raidboss ui.
// This file is Javascript.  Anything after "//" on a line is a comment.
// If you edit this file, remember to reload ACT or click the "Reload overlay"
// button on the raidboss CactbotOverlay.
// If there are errors in this file, they will appear in the OverlayPlugin.dll
// log window in ACT.


// If false, no timeline of upcoming events will be displayed during fights.
Options.TimelineEnabled = true;

// If false, triggers and timelines will not show or speak text, nor play
// sounds.
Options.AlertsEnabled = true;

// If false, then visual text alerts are not shown for triggers.
Options.TextAlertsEnabled = true;

// If false, then sound alerts are not played.
Options.SoundAlertsEnabled = true;

// If true, then text-to-speech alerts are read aloud.  Text-to-speech takes
// priority over custom sounds and text noises.  If a trigger does not have
// a tts entry then it will fall back on text and sound (if turned on).
Options.SpokenAlertsEnabled = true;

// Will override the singular TTS alerts if a group alert is set for a specific trigger
// Change phrasing to make sense in a group setting
Options.GroupSpokenAlertsEnabled = false;


// Show timer bars for events that will happen in this many seconds or less.
Options.ShowTimerBarsAtSeconds = 60;

// Once a timer bar reaches 0, keep it around this long after.
Options.KeepExpiredTimerBarsForSeconds = 0.7;

// Change the bar color to highlight it is coming up when this many seconds
// are left on it.
Options.BarExpiresSoonSeconds = 8;

// Number of bars to show in the space given to the UI by css.
Options.MaxNumberOfTimerBars = 8;


// Path to sound played for info-priority text popups, or when "Info" is
// specified as the sound name.
Options.InfoSound = '../../resources/sounds/freesound/percussion_hit.ogg';

// Path to sound played for alert-priority text popups, or when "Alert" is
// specified as the sound name.
Options.AlertSound = '../../resources/sounds/BigWigs/Alert.ogg';

// Path to sound played for alarm-priority text popups, or when "Alarm" is
// specified as the sound name.
Options.AlarmSound = '../../resources/sounds/BigWigs/Alarm.ogg';

// Path to sound played when "Long" is specified as the sound name.
Options.LongSound = '../../resources/sounds/BigWigs/Long.ogg';

// Volume between 0 and 1 to play the InfoSound at.
// Options.InfoSoundVolume = 1;

// // Volume between 0 and 1 to play the AlertSound at.
// Options.AlertSoundVolume = 1;

// // Volume between 0 and 1 to play the AlarmSound at.
// Options.AlarmSoundVolume = 1;

// // Volume between 0 and 1 to play the LongSound at.
// Options.LongSoundVolume = 1;

// // A set of nicknames to use for players, when trying to shorten names.
Options.PlayerNicks = {
  'Katriel White': 'Luikauttelija',
  'Panic Nyannyan': 'Pade Perse Mies',
  'Reijo Frost': 'REIJOOOOO',
  'Izmo Laitela': 'ISMOOOOO',
  'Raj Doe': 'Borgen',
  'Dinjoriina Myllaaja': 'Dinjoooo',
  'Admiral Lalapult': 'Kaapio Mamuti',
  'Smaga Smaiggels': 'Smagaaaaaaa',
  'Ruoho Squarepants': 'Ruoho naama',
};

// // A set of triggers to be ignored. The key is the 'id' of the trigger, and
// // the value should be true if the trigger is to be ignored, whereas false
// // will have no effect.  The trigger ids can be found in the trigger files for
// // each fight in the files inside of this directory:
// // https://github.com/quisquous/cactbot/tree/master/ui/raidboss/data/triggers
// Options.DisabledTriggers = {
//   // Disable the /psych trigger from `test.js` in Summerford Farms.
//   'Test Psych': true,
//   // Disable the "eye lasers" trigger from `drowned_city_of_skalla.js`.
//   'Hrodric Words': true,
// };


// // An array of user-defined triggers, in the format defined in the readme:
// // https://github.com/quisquous/cactbot/tree/master/ui/raidboss/data/triggers
Options.Triggers = [

//   // (1) Simple example trigger: show text on screen when you die.
//   {
//     // Match every zone.
//     zoneRegex: /.*/,
//     triggers: [
//       {
//         regex: /:You are defeated by/,
//         alarmText: 'YOU DIED',
//       },
//     ],
//   },

//   // You can add other triggers for other zones too.  Here's more examples:
//   //
//   // (2) Maybe you want a silly kissy noise whenever you a blow a kiss in
//   // a housing zone!
//   {
//     zoneRegex: /^(Mist|The Goblet|The Lavender Beds|Shirogane)$/,
//     triggers: [
//       {
//         regex: /You blow a kiss/,
//         sound: '../../resources/sounds/PowerAuras/bigkiss.ogg',
//         volume: 0.5,
//       },
//     ],
//   },

//   // (3) Maybe you want to modify some existing timeline and triggers:
//   //
//   // Add some extra triggers to the test timeline.  To use it, see:
//   // https://github.com/quisquous/cactbot/blob/master/ui/raidboss/data/timelines/test.txt
//   {
//     // The zone this should apply to.
//     // This should match the zoneRegex in the triggers file.
//     zoneRegex: /^Middle La Noscea$/,

//     // Add some additional timeline events to the test timeline.
//     timeline: `
//       # Note: Hash marks are comments inside of a timeline file.
//       # This format is the same as ACT timeline.

//       # Add a new personal event to the test timeline.
//       5.2 "(Remember To Use Feint!)"

//       # Remind yourself to shield the tank 5 seconds before final sting.
//       infotext "Final Sting" before 5 "shield the tank"

//       # Events you don't like, you can hide.  This gets rid of "Long Castbar".
//       hideall "Long Castbar"
//     `,

    // Add some additional triggers that will go off in Summerford Farms.
    // triggers: [
      // If you provoke the striking dummy (or anything), this will trigger.
      // {
      //   id: 'User Example Provoke',
      //   regex: /You use Provoke/,
      //   infoText: 'Provoke!',
      //   tts: 'provoke',
      // },

      // My triggers
  {
    zoneRegex: /.*/,
    triggers: [
      {
        id: 'Stormbite.',
        regex: /You use Stormbite/,
        delaySeconds: function(data, matches) {
          return 25;
        },
        alertText: 'Dot Reminder',
        tts: 'Dots',
      },
      {
        id: 'Iron Jaws.',
        regex: /You use Iron Jaws/,
        delaySeconds: function(data, matches) {
          return 25;
        },
        alertText: 'Dot Reminder',
        tts: 'Dots',
      },
      {
        id: 'wanderer minuet',
        regex: /You cast The Wanderer's Minuet/,
        delaySeconds: function(data, matches) {
          return 27;
        },

        alertText: 'Blue song',
        tts: 'Blue song',
      },
      {
        id: 'Armys paeon',
        regex: /You cast Army's Paeon/,
        delaySeconds: function(data, matches) {
          return 20;
        },

        alertText: 'Green song',
        tts: 'Green song',
      },
      {
        id: 'Mages ballad',
        regex: /You cast Mage's Ballad/,
        delaySeconds: function(data, matches) {
          return 27;
        },

        alertText: 'Yellow song',
        tts: 'Yellow song',
      },
      {
        id: 'General Reprisal',
        regex: /:(\y{Name}):1D6F:Reprisal:/,
        condition: function(data) {
          return data.role == 'tank';
        },
        infoText: function(data, matches) {
          console.log(matches);
          return {
            en: 'Reprisal: ' + data.ShortName(matches[1]),
          };
        },
        tts: 'Other tank used reprisal'
      }
    ],
  },
];

// :(\y{Name}):1D6D:
