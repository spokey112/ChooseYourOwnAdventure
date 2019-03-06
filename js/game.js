// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "BLACK OPS 2 ZOMBIES OFFICIAL Theme Song.mp3",
    background_image: "<img src= 'data:image/jpeg;base64,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'/>",
    levels: {

        start: {
            message: "You wake up unconscious in the middle of a war zone",
            choices: [
                {
                    text: "Pick up a gun and keep fighting",
                    nextLevel: "war",
                },

                {
                    text: "Question how you got there or ask others whats going on",
                    nextLevel: "death",
                },
            ]
        },

        war: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You get shot and are wounded",
            choices: [
                {
                    text: "Look for a medic",
                    nextLevel: "trap",
                },
            ]
        },

        death: {
            message: "Dont think while shots are being fired!!!",
            choices: [ 
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        trap: {
            message: "You stepped on a trip mine and killed the nearby medic :(",
            choices: [ 
                {
                    text: " You're too tired to fight so you betray your coutnry and leave",
                    nextLevel: "end",
                },
            ]
        },
    
    end: {
            message: "You are forever known as a traitor to Britain",
            choices: [ 
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]

         }
    }
    };

