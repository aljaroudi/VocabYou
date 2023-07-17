import type { WordDef } from './types'

function verifyBrowser(): void {
	if (typeof window === 'undefined') throw new Error('Not in browser')
}

function addWord(phrase: string, word: WordDef[]) {
	verifyBrowser()
	const words = getWords()
	console.log('words', words.size)
	words.set(phrase, word)
	console.log('added word', words)
	localStorage?.setItem('words', JSON.stringify([...words]))
}

export function getWords(): Map<string, WordDef[]> {
	verifyBrowser()
	const words = localStorage?.getItem('words')
	return words
		? new Map(JSON.parse(words))
		: new Map([
				// ['charisma', example],
				// ['run', example2]
		  ])
}

function getWordLocal(phrase: string): WordDef[] {
	verifyBrowser()
	return getWords().get(phrase) ?? []
}

async function fetchWord(phrase: string): Promise<void> {
	verifyBrowser()
	fetch('/api?phrase=' + phrase)
		.then(res => res.json())
		.then(def => addWord(phrase, def))
		.catch(err => {
			console.error(err)
			return []
		})
}

export async function getWord(phrase: string): Promise<WordDef[]> {
	verifyBrowser()
	const word = getWordLocal(phrase)
	if (!word.length) fetchWord(phrase)
	return word
}

const example: WordDef[] = JSON.parse(`
[
    {
        "meta": {
            "id": "charisma",
            "uuid": "1e9d8038-b03b-47ef-a806-78e87636fbd7",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "6f349686-9655-4905-a720-a7487ec9d2cf",
                "tsrc": "collegiate"
            },
            "stems": [
                "charisma"
            ],
            "app-shortdef": {
                "hw": "charisma",
                "fl": "noun",
                "def": [
                    "{bc} a special charm or appeal that causes people to feel attracted and excited by someone (such as a politician)"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "cha*ris*ma",
            "prs": [
                {
                    "ipa": "kəˈrɪzmə",
                    "sound": {
                        "audio": "charis01"
                    }
                }
            ]
        },
        "fl": "noun",
        "gram": "noncount",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a special charm or appeal that causes people to feel attracted and excited by someone (such as a politician) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The candidate was lacking in {it}charisma{/it}."
                                            },
                                            {
                                                "t": "His success is largely due to his {it}charisma{/it}."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "a special charm or appeal that causes people to feel attracted and excited by someone (such as a politician)"
        ]
    }
]`)

const example2 = JSON.parse(`
[
    {
        "meta": {
            "id": "run:1",
            "uuid": "d591c634-986a-4464-b8cc-e423ddb89a76",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "2607a285-3693-4c9f-b0d1-be656f1bfae2",
                "tsrc": "collegiate"
            },
            "highlight": "yes",
            "stems": [
                "run",
                "ran",
                "run a fever",
                "run a temperature",
                "run a tight ship",
                "run across",
                "run after",
                "run against",
                "run by",
                "run circles around",
                "run dry",
                "run interference",
                "run into",
                "run low on",
                "run one's mouth",
                "run her mouth",
                "run his mouth",
                "run their mouth",
                "run past",
                "run rings around",
                "run riot",
                "run short",
                "run short of",
                "run the numbers",
                "run the table",
                "run to",
                "run upon",
                "run with",
                "running",
                "runs",
                "run a fever/temperature",
                "run along",
                "run around",
                "run about",
                "run round",
                "run away",
                "run by/past",
                "run down",
                "run for it",
                "run high",
                "run in",
                "run its course",
                "run off",
                "run on",
                "run out",
                "run over",
                "run through",
                "run up",
                "run your mouth",
                "walk before you (can) run",
                "walk before you can run",
                "walk before you run",
                "came running",
                "running loose",
                "ran wild",
                "ran at",
                "runs the bases",
                "run my own life",
                "up and running",
                "running late",
                "running low on",
                "running low/short",
                "running low",
                "running short",
                "ran short of",
                "running behind schedule",
                "ran a tab",
                "running at",
                "running a fever/temperature",
                "running a fever",
                "running a temperature",
                "running up the score"
            ],
            "app-shortdef": {
                "hw": "run:1",
                "fl": "verb",
                "def": [
                    "{bc} to move with your legs at a speed that is faster than walking",
                    "{bc} to leave a place quickly by running",
                    "{bc} to run as part of a sport, for exercise, or in a race"
                ]
            },
            "offensive": false
        },
        "hom": 1,
        "hwi": {
            "hw": "run",
            "prs": [
                {
                    "ipa": "ˈrʌn",
                    "sound": {
                        "audio": "run00001"
                    }
                }
            ]
        },
        "fl": "verb",
        "ins": [
            {
                "if": "runs"
            },
            {
                "if": "ran",
                "prs": [
                    {
                        "ipa": "ˈræn",
                        "sound": {
                            "audio": "run00002"
                        }
                    }
                ]
            },
            {
                "if": "run"
            },
            {
                "if": "run*ning"
            }
        ],
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sen",
                            {
                                "sn": "1",
                                "sgram": "no obj"
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to move with your legs at a speed that is faster than walking "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "How fast can you {it}run{/it}?"
                                            },
                                            {
                                                "t": "He {it}runs{/it} faster than anyone else on the team."
                                            },
                                            {
                                                "t": "She {it}ran{/it} up the stairs to get her jacket."
                                            },
                                            {
                                                "t": "We {it}ran{/it} for the train—but missed it."
                                            },
                                            {
                                                "t": "I heard her scream and {it}ran{/it} to help."
                                            },
                                            {
                                                "t": "She {it}ran{/it} to me for help."
                                            },
                                            {
                                                "t": "The dog {it}ran{/it} away from me."
                                            },
                                            {
                                                "t": "The dog {it}ran{/it} toward me."
                                            },
                                            {
                                                "t": "When I called the dog, he {phrase}came running{/phrase}."
                                            },
                                            {
                                                "t": "Don't expect me to {it}come running{/it} every time you want something. I'm not your servant."
                                            },
                                            {
                                                "t": "The chickens were {phrase}running loose{/phrase} in the yard."
                                            },
                                            {
                                                "t": "The horses {phrase}ran wild{/phrase}."
                                            },
                                            {
                                                "t": "He {phrase}ran at{/phrase} me with a knife. [=he ran toward me with a knife in his hand]"
                                            }
                                        ]
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often used figuratively "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "He {it}ran{/it} back to his ex-girlfriend after I dumped him."
                                                        },
                                                        {
                                                            "t": "You can't keep {it}running{/it} away from your problems."
                                                        },
                                                        {
                                                            "t": "Don't {it}come running{/it} to me when you get in trouble."
                                                        },
                                                        {
                                                            "t": "Don't let your imagination {it}run wild{/it}. I'm sure nothing bad has happened."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to leave a place quickly by running "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "When the alarm sounded, the robbers {it}ran{/it}."
                                            },
                                            {
                                                "t": "He dropped the gun and {it}ran{/it}."
                                            },
                                            {
                                                "t": "Quick! {it}Run{/it} and get a doctor!"
                                            },
                                            {
                                                "t": "The ambushed soldiers {it}ran{/it} for cover."
                                            },
                                            {
                                                "t": "They had the enemy {it}running{/it} scared."
                                            }
                                        ]
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often + {it}away{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "When she saw all the people in the audience, she had a sudden urge to {it}run away{/it}."
                                                        },
                                                        {
                                                            "t": "They {it}ran away{/it} screaming."
                                                        }
                                                    ]
                                                ]
                                            ],
                                            [
                                                [
                                                    "text",
                                                    "often + {it}off{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "When they saw the police, they quickly {it}ran off{/it}."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2 a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to run as part of a sport, for exercise, or in a race "
                                    ],
                                    [
                                        "wsgram",
                                        "no obj"
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}ran{/it} on the track team in college."
                                            },
                                            {
                                                "t": "She's {it}running{/it} in the marathon this year."
                                            },
                                            {
                                                "t": "The horse will not be {it}running{/it} in this race."
                                            }
                                        ]
                                    ],
                                    [
                                        "wsgram",
                                        "+ obj"
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "I {it}run{/it} six miles every day."
                                            },
                                            {
                                                "t": "She {it}ran{/it} a great race. [=she ran very well in the race]"
                                            },
                                            {
                                                "t": "He {it}ran{/it} track in college."
                                            },
                                            {
                                                "t": "She's {it}running{/it} the marathon this year."
                                            },
                                            {
                                                "t": "The marathon will be {it}run{/it} tomorrow. [=people will be running the marathon tomorrow]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sls": [
                                    "American football"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to carry and run with (the ball) "
                                    ],
                                    [
                                        "wsgram",
                                        "+ obj"
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}ran{/it} the football for a 20-yard gain."
                                            },
                                            {
                                                "t": "He {it}ran{/it} the kick back [=he caught the ball that was kicked and ran back with it] to the 40-yard line."
                                            }
                                        ]
                                    ],
                                    [
                                        "wsgram",
                                        "no obj"
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}ran{/it} for 15 yards."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "c",
                                "sls": [
                                    "baseball"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to run from base to base "
                                    ],
                                    [
                                        "wsgram",
                                        "no obj"
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}runs{/it} well and might attempt a steal."
                                            }
                                        ]
                                    ],
                                    [
                                        "wsgram",
                                        "+ obj"
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {phrase}runs the bases{/phrase} well."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "3",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to cause (an animal) to run "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}ran{/it} the horse through the fields."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "4",
                                "sgram": "no obj",
                                "sls": [
                                    "chiefly US"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to be a candidate in an election for a particular office"
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often + {it}for{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "She is {it}running{/it} [=({it}Brit{/it}) {it}standing{/it}] {it}for{/it} mayor."
                                                        }
                                                    ]
                                                ]
                                            ],
                                            [
                                                [
                                                    "text",
                                                    "often + {it}against{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "He is {it}running against{/it} her in the upcoming election."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "5",
                                "sgram": "+ obj"
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to direct the business or activities of (something) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She {it}runs{/it} [={it}manages{/it}] the restaurant/hotel/store."
                                            },
                                            {
                                                "t": "He {it}runs{/it} the after-school program."
                                            },
                                            {
                                                "t": "The President is doing a good job {it}running{/it} the country."
                                            },
                                            {
                                                "t": "The company is badly/privately {it}run{/it}."
                                            },
                                            {
                                                "t": "state/family-{it}run{/it} companies"
                                            },
                                            {
                                                "t": "I'm old enough to {phrase}run my own life{/phrase}! [=make my own decisions]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to do (a test or check) on someone or something "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The doctors need to {it}run{/it} some more tests."
                                            }
                                        ]
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often + {it}on{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "The doctors {it}ran{/it} some tests {it}on{/it} the blood samples."
                                                        },
                                                        {
                                                            "t": "The police {it}ran{/it} a security check {it}on{/it} him."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "6 a",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to use and control (something) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "I'm not licensed to {it}run{/it} [={it}operate{/it}] a forklift."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to put (something) into operation "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "You should {it}run{/it} the engine for a few minutes before you start driving."
                                            },
                                            {
                                                "t": "He {it}ran{/it} the program (on the computer)."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "c",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to function or operate "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Never leave your car unattended while the engine is {it}running{/it}."
                                            },
                                            {
                                                "t": "He didn't know the camera was still {it}running{/it}."
                                            },
                                            {
                                                "t": "He had his new computer {phrase}up and running{/phrase} in no time."
                                            }
                                        ]
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often + {it}on{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "This software {it}runs on{/it} most computers."
                                                        },
                                                        {
                                                            "t": "The car {it}runs on{/it} [={it}uses{/it}] diesel."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "7 a",
                                "lbs": [
                                    "usually followed by an adverb or preposition"
                                ],
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to go on a particular route or at particular times "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The bus/ferry {it}runs{/it} every hour."
                                            },
                                            {
                                                "t": "The train {it}runs{/it} between New York and Washington."
                                            },
                                            {
                                                "t": "Trains no longer {it}run{/it} on this track."
                                            },
                                            {
                                                "t": "The buses are {phrase}running late{/phrase}. [=the buses are late]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to have (a bus, train, ferry, etc.) traveling on a route "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "They {it}run{/it} extra trains on Saturdays."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "8 a",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to make a quick trip {it}to{/it} a place for something "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She {it}ran{/it} (up/down) {it}to{/it} the store for bread and milk."
                                            },
                                            {
                                                "t": "He {it}ran{/it} over {it}to{/it} the neighbors for some sugar."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to drive (someone) a short distance {it}to{/it} a place or event "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "I have to {it}run{/it} the kids {it}to{/it} soccer practice."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "c",
                                "lbs": [
                                    "always followed by an adverb or preposition"
                                ],
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to bring (something) quickly to someone who is at a particular place "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Wait here. I'm just going to {it}run{/it} this in/inside to her."
                                            },
                                            {
                                                "t": "He {it}ran{/it} an umbrella out to her before she drove off."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "d",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to do (something that involves making a quick trip) {bc}to do (an errand) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "I have a few errands to {it}run{/it} after I leave work today."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "9",
                                "lbs": [
                                    "always followed by an adverb or preposition"
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to cause (a driver or vehicle) to move in a particular direction "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "That car tried to {it}run{/it} me off the road!"
                                            },
                                            {
                                                "t": "She {it}ran{/it} her car off the road."
                                            },
                                            {
                                                "t": "He {it}ran{/it} the car into a tree."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "no obj",
                                "sls": [
                                    "of a driver or vehicle"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to move in a particular direction "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "His car {it}ran{/it} off the road. = He {it}ran{/it} off the road."
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{dx}see also {dxt|run into||(below)} {dxt|run over||(below)}{/dx}"
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "10",
                                "lbs": [
                                    "always followed by an adverb or preposition"
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to cause (something) to pass through, over, along, or into something else "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She {it}ran{/it} her fingers through my hair."
                                            },
                                            {
                                                "t": "He {it}ran{/it} a brush over the dog's fur."
                                            },
                                            {
                                                "t": "I quickly {it}ran{/it} my eyes over/down the list of names."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to travel or spread in a fast or uncontrolled way "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Whispers {it}ran{/it} through the crowd."
                                            },
                                            {
                                                "t": "A chill {it}ran{/it} up/down my spine."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "11",
                                "lbs": [
                                    "always followed by an adverb or preposition"
                                ],
                                "sgram": "no obj"
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to go or extend in a particular direction "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The boundary line {it}runs{/it} east."
                                            },
                                            {
                                                "t": "The road {it}runs{/it} through the mountain."
                                            },
                                            {
                                                "t": "The highway {it}runs{/it} from Boston to New York."
                                            }
                                        ]
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "sometimes used figuratively "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "My tastes in novels {it}run to/toward{/it} science fiction and thrillers. [=I tend to like science fiction and thrillers]"
                                                        },
                                                        {
                                                            "t": "Such behavior {it}runs{/it} counter to [=such behavior does not agree with] the values of our society."
                                                        },
                                                        {
                                                            "t": "He does nothing that would {it}run{/it} against [=go against] his moral principles."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "used to describe the position of a road, path, etc. "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "The highway {it}runs{/it} close to the shore."
                                                        },
                                                        {
                                                            "t": "The route {it}runs{/it} the length of the eastern coast."
                                                        },
                                                        {
                                                            "t": "A path {it}runs{/it} along the ridge."
                                                        },
                                                        {
                                                            "t": "The pipes {it}run{/it} beneath the floor."
                                                        },
                                                        {
                                                            "t": "There was a scratch {it}running{/it} down the side of the car."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "12",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to cause (something, such as a wire or cable) to go or extend from one point to another "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}ran{/it} the wires up from the basement."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "13",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to bring (something) from one country into another country illegally and secretly "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He was arrested for {it}running{/it} [={it}smuggling{/it}] drugs into the country."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "14 a",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to flow "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He left the water {it}running{/it}."
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{bc}to flow in a particular direction "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The river {it}runs{/it} down to the valley."
                                            },
                                            {
                                                "t": "The river {it}runs{/it} into the gulf."
                                            },
                                            {
                                                "t": "The tide was {it}running{/it} out."
                                            },
                                            {
                                                "t": "Sand {it}ran{/it} out of the bag."
                                            },
                                            {
                                                "t": "Steam {it}runs{/it} through the pipes."
                                            },
                                            {
                                                "t": "Blood was {it}running{/it} down his leg."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to cause (something) to flow or to produce a flow of water "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She {it}ran{/it} the tap/faucet."
                                            },
                                            {
                                                "t": "{it}Run{/it} the water until it gets hot."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "c",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to prepare (a bath) by running a faucet "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She {it}ran{/it} a hot bath for her husband. = She {it}ran{/it} her husband a hot bath."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "15",
                                "sgram": "no obj"
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to produce a flow of liquid "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Chopping the onions made my eyes {it}run{/it}. [={it}water{/it}]"
                                            },
                                            {
                                                "t": "I knew I was getting sick when my nose started to {it}run{/it}."
                                            },
                                            {
                                                "t": "a {it}running{/it} sore"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to spread or flow into another area "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Your eyeliner is {it}running{/it}."
                                            },
                                            {
                                                "t": "Mascara {it}ran{/it} from her eyes."
                                            },
                                            {
                                                "t": "The paint {it}ran{/it} in some spots."
                                            },
                                            {
                                                "t": "The writing was blurred where the ink {it}ran{/it}."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "c",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to have a color that spreads onto other pieces of clothing when clothes are washed together "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Her red shirt {it}ran{/it} and made my blue jeans look purple."
                                            },
                                            {
                                                "t": "colors that {it}run{/it}"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "16",
                                "lbs": [
                                    "always followed by an adverb or preposition"
                                ],
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to continue or remain effective for a particular period of time "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "His contract {it}runs{/it} until next season."
                                            },
                                            {
                                                "t": "She received six months on each charge, and the sentences are to {it}run{/it} concurrently."
                                            },
                                            {
                                                "t": "The course {it}runs{/it} over a six-week period of time."
                                            },
                                            {
                                                "t": "The televised game {it}ran{/it} 30 minutes over the scheduled time."
                                            },
                                            {
                                                "t": "The play has {it}run{/it} for six months."
                                            },
                                            {
                                                "t": "Things {it}ran{/it} smoothly at the office while the boss was away."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "17",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to be or to begin to be something specified "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The well has {phrase}run dry{/phrase}."
                                            },
                                            {
                                                "t": "Her creativity has {it}run dry{/it}."
                                            },
                                            {
                                                "t": "We are {phrase}running low on{/phrase} fuel. [=our supply of fuel is getting low]"
                                            },
                                            {
                                                "t": "Supplies were {phrase}running low/short{/phrase}."
                                            },
                                            {
                                                "t": "We {phrase}ran short of{/phrase} money. [=we did not have enough money]"
                                            },
                                            {
                                                "t": "I have to hurry. I'm {phrase}running late{/phrase}. [=I'm late; I'm behind schedule]"
                                            },
                                            {
                                                "t": "The project is {phrase}running behind schedule{/phrase}."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "18",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to include everything between specified limits {bc}{sx|range||} "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The prices for tickets {it}run{/it} from $10 to $50."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "19",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to allow charges on (a bill) to add up before paying "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {phrase}ran a tab{/phrase} at the bar."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "20 a",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to have (an amount of money) as a price "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The rooms {it}run{/it} [={it}cost{/it}] $100 a night."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to have or reach a particular length, size, or amount "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The book {it}runs{/it} (to) nearly 500 pages."
                                            },
                                            {
                                                "t": "Their annual budget {it}runs{/it} to about 5 million dollars."
                                            },
                                            {
                                                "t": "Their yearly income {it}runs{/it} into/to six figures. [=their yearly income is more than $100,000]"
                                            },
                                            {
                                                "t": "Gas is {phrase}running at{/phrase} over $4 per gallon. [=gas prices are over $4 per gallon]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "21 a",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to print or broadcast (something) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Every newspaper in the city {it}ran{/it} the story."
                                            },
                                            {
                                                "t": "The ad was {it}run{/it} in yesterday's newspaper."
                                            },
                                            {
                                                "t": "The news station {it}ran{/it} a feature on how to eat healthier."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to appear in print or on television "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Many of his stories {it}ran{/it} in national magazines."
                                            },
                                            {
                                                "t": "The show has {it}run{/it} for five seasons."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "22",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to produce (a copy of a document, newspaper, etc.) using a printer or copying machine "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "10,000 copies were {it}run{/it} for the first edition."
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{dx}see also {dxt|run off||(below)}{/dx}"
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "23 a",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to have (particular words) in writing or print "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "{ldquo}We Will Not Lose{rdquo} {it}ran{/it} the headline. [=the headline was/said {ldquo}We Will Not Lose{rdquo}]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "no obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to be expressed in words "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The definition {it}runs{/it} as follows …"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "24",
                                "sgram": "+ obj",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to drive past or through (a stop sign or red traffic light) illegally without stopping "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He {it}ran{/it} a red light. = He {it}ran{/it} the light."
                                            },
                                            {
                                                "t": "She {it}ran{/it} the stop sign."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "25",
                                "sgram": "no obj",
                                "sls": [
                                    "US",
                                    "of stockings"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to start to have a long hole that continues to get longer "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The nylons are guaranteed not to {it}run{/it}. [=({it}Brit{/it}) {it}ladder{/it}]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "26",
                                "sgram": "+ obj",
                                "sls": [
                                    "chiefly British"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}to own and maintain (a vehicle) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "I can't afford to {it}run{/it} a car on my salary."
                                            }
                                        ]
                                    ]
                                ],
                                "snotebox": [
                                    [
                                        "t",
                                        "In addition to the phrases shown below, {it}run{/it} occurs in many idioms that are shown at appropriate entries throughout the dictionary. For example, {it}cut and run{/it} can be found at {sx|cut:1||} and {it}run a tight ship{/it} can be found at {sx|ship:1||}."
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "dros": [
            {
                "drp": "run across",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sphrasev": {
                                            "phrs": [
                                                {
                                                    "pva": "run across (someone or something)"
                                                }
                                            ]
                                        },
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to meet (someone) or find (something) by chance "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "I {it}ran across{/it} [={it}ran into{/it}] an old roommate of mine today."
                                                    },
                                                    {
                                                        "t": "I {it}ran across{/it} some old photos from when I was a kid."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run a fever/temperature",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "snote",
                                                [
                                                    [
                                                        "t",
                                                        "If you are {phrase}running a fever/temperature{/phrase}, you have a body temperature that is higher than normal."
                                                    ]
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run after",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "phrasev": [
                                            {
                                                "pva": "run after (someone or something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to run toward (someone or something) in an attempt to catch that person or thing "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The dog {it}ran after{/it} [={it}chased{/it}] the squirrel."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run after (someone)"
                                            }
                                        ],
                                        "sls": [
                                            "informal + disapproving"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to try to start a romantic relationship with (someone) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He's always {it}running after{/it} younger women."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run along",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sls": [
                                            "informal + somewhat old-fashioned"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to go away {bc}{sx|leave||} "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He told the boy to {it}run along{/it} home."
                                                    },
                                                    {
                                                        "t": "{it}Run along{/it} now, kid. This doesn't concern you."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run around",
                "vrs": [
                    {
                        "vl": "or chiefly British",
                        "va": "run about"
                    },
                    {
                        "vl": "or",
                        "va": "run round"
                    }
                ],
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to run in an area while playing "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The children were {it}running around{/it} outside."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to go from place to place in a busy or hurried way "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "I spent the whole day {it}running around{/it} doing errands."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run around/about/round with (someone)"
                                            }
                                        ],
                                        "sls": [
                                            "informal + disapproving"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to spend a lot of time with (someone) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He {it}runs around with{/it} younger women."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run away",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to leave your home suddenly without permission and go somewhere else to live "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He {it}ran away{/it} (from home) at a young age."
                                                    },
                                                    {
                                                        "t": "They {it}ran away{/it} [={it}ran off{/it}] together because their families objected to their marriage."
                                                    }
                                                ]
                                            ],
                                            [
                                                "text",
                                                "{dx}see also {dxt|runaway||}{/dx}"
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to avoid a person or situation that makes you feel uncomfortable "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "You shouldn't keep {it}running away{/it}. You should face your mom and tell her how you feel."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3 a",
                                        "phrasev": [
                                            {
                                                "pva": "run away with (someone)"
                                            }
                                        ],
                                        "sls": [
                                            "disapproving"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to leave a person or place in order to live with and have a sexual relationship with (someone) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He left his wife and {it}ran away with{/it} [={it}ran off with{/it}] his secretary."
                                                    },
                                                    {
                                                        "t": "She {it}ran away with{/it} a man old enough to be her father."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "phrasev": [
                                            {
                                                "pva": "run away with (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to leave a place with (something that does not belong to you) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The butler {it}ran away with{/it} [={it}stole, ran off with{/it}] the family silver."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "4",
                                        "phrasev": [
                                            {
                                                "pva": "run away with (something)"
                                            }
                                        ],
                                        "sls": [
                                            "informal"
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to be the best or most popular performer in (a performance) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "She {it}ran away with{/it} [={it}stole{/it}] the show."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to win (something) very easily "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "She {it}ran away with{/it} the election."
                                                    },
                                                    {
                                                        "t": "He {it}ran away with{/it} first place."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "5",
                                        "phrasev": [
                                            {
                                                "pva": "run away with (someone)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to make (someone) do something that is not sensible or reasonable "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Don't let your imagination {it}run away with{/it} you. [=don't let yourself imagine all kinds of things that aren't true]"
                                                    }
                                                ]
                                            ],
                                            [
                                                "text",
                                                "{dx}see also {dxt|run:1||1b (above)}{/dx}"
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run by/past",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sphrasev": {
                                            "phrs": [
                                                {
                                                    "pva": "run (something) by/past (someone)"
                                                }
                                            ]
                                        },
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to tell (something) to (someone) so that it can be considered, approved, etc. "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "You'd better {it}run{/it} this {it}past{/it} the boss. [=you'd better tell the boss about this and find out if he/she thinks it is a good idea]"
                                                    },
                                                    {
                                                        "t": "He {it}ran{/it} some ideas {it}by{/it} her."
                                                    },
                                                    {
                                                        "t": "({it}informal{/it}) Can you {it}run{/it} that {it}by{/it} me again? [=can you repeat what you just said?]"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run down",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone or something) down"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run down (someone or something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to hit and knock down (a person or animal) with a vehicle "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He says she deliberately tried to {it}run{/it} him {it}down{/it}."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone or something) down"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run down (someone or something)"
                                            }
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to chase after and catch (a person or animal) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The cops {it}ran{/it} the robber {it}down{/it} in an alley."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to find (someone or something) after searching "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He wasn't in his office, but I finally {it}ran{/it} him {it}down{/it} in the faculty lounge."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run down"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run down (something)"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run (something) down"
                                            }
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to use up or cause (something) to use up all of its power "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The clock {it}ran down{/it}. [=the clock slowed down and stopped working because it did not have any more power]"
                                                    },
                                                    {
                                                        "t": "The watch's battery {it}ran down{/it}."
                                                    },
                                                    {
                                                        "t": "Turn off the radio so you don't {it}run down{/it} the batteries."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "sls": [
                                            "British"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to become or cause (something, such as a business or activity) to become gradually smaller "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The company has been {it}running down{/it} for decades."
                                                    },
                                                    {
                                                        "t": "The company has been {it}running down{/it} its factories/inventory."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "4",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone or something) down"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run down (someone or something)"
                                            }
                                        ],
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to criticize (someone or something) in usually an unfair way "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Don't keep {it}running{/it} yourself {it}down{/it} like that: you have a lot to offer!"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "5",
                                        "phrasev": [
                                            {
                                                "pva": "run down (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to say or repeat (a list of people or things) from the beginning to the end "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Let me just {it}run down{/it} all the things we need to do."
                                                    },
                                                    {
                                                        "t": "He {it}ran down{/it} the list of names."
                                                    }
                                                ]
                                            ],
                                            [
                                                "text",
                                                "{dx}see also {dxt|rundown||}{/dx}"
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run for it",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to run to avoid being caught "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "It's the cops! {it}Run for it{/it}!"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run high",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to be or become very strong or intense "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Passions often {it}run high{/it} in these debates. [=people often get very angry in these debates]"
                                                    },
                                                    {
                                                        "t": "Emotions are {it}running high{/it} between the two teams."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run in",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone) in"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run in (someone)"
                                            }
                                        ],
                                        "sls": [
                                            "informal + somewhat old-fashioned"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to arrest (someone) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The police {it}ran{/it} him {it}in{/it} for being drunk and disorderly."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run (something) in"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run in (something)"
                                            }
                                        ],
                                        "sls": [
                                            "British"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to drive (a new vehicle) carefully for a period of time until it is ready for regular use "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "You shouldn't drive a new car too fast while you're {it}running{/it} it {it}in{/it}. [=breaking it in]"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run into",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "phrasev": [
                                            {
                                                "pva": "run into (someone or something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to move into (someone or something) in a sudden or forceful way "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He went off the road and {it}ran into{/it} a tree. = His car went off the road and {it}ran into{/it} a tree."
                                                    },
                                                    {
                                                        "t": "Some guy on a bike almost {it}ran into{/it} me!"
                                                    },
                                                    {
                                                        "t": "She wasn't paying attention and {it}ran{/it} right {it}into{/it} the table."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run into (someone)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to meet (someone) by chance "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "I {it}ran into{/it} [={it}ran across{/it}] an old classmate the other day."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run into (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to experience (something that is unpleasant or difficult) {bc}{sx|encounter||} "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "We {it}ran into{/it} some bad weather on our way home."
                                                    },
                                                    {
                                                        "t": "We {it}ran into{/it} some problems setting up the computer."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run its course",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "snote",
                                                [
                                                    [
                                                        "t",
                                                        "When something {it}runs its course{/it}, it begins, continues for a time, and then ends."
                                                    ],
                                                    [
                                                        "vis",
                                                        [
                                                            {
                                                                "t": "The disease usually {it}runs its course{/it} in a few days."
                                                            }
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run off",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "1",
                                        "sls": [
                                            "informal"
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to leave or abandon a person or place "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Her husband {it}ran off{/it} and left her with two small children to care for."
                                                    }
                                                ]
                                            ],
                                            [
                                                "text",
                                                "{dx}see also {dxt|run:1||1b (above)}{/dx}"
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "phrasev": [
                                            {
                                                "pva": "run off with (someone or something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to leave a place with (someone or something) {bc}to run away with (someone or something) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Her husband {it}ran off with{/it} his secretary."
                                                    },
                                                    {
                                                        "t": "She {it}ran off with{/it} all the money."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run off (something)"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run (something) off"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to repeat or produce (something) quickly "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Would you please {it}run off{/it} five copies of this letter?"
                                                    }
                                                ]
                                            ],
                                            [
                                                "text",
                                                "{dx}see also {dxt|run:1||22 (above)}{/dx}"
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone or something) off"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run off (someone or something)"
                                            }
                                        ],
                                        "sls": [
                                            "US"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to force (a person or animal) off your land "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He {it}ran{/it} us {it}off{/it} his property."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run on",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to talk about something for a long time "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He {it}ran on{/it} (and on) about politics until everybody was bored."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to keep going without being stopped or interrupted for a long period of time "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The meeting {it}ran on{/it} for hours."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run out",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1 a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to come to an end "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Time {it}ran out{/it} [={it}expired{/it}] before we could tie the game."
                                                    },
                                                    {
                                                        "t": "My contract will {it}run out{/it} soon."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to become used up "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The gasoline {it}ran out{/it} before we got to Denver."
                                                    },
                                                    {
                                                        "t": "Our money finally {it}ran out{/it}. [=our money was all used; we had no more money]"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone) out"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run (someone) out of (something)"
                                            }
                                        ],
                                        "sls": [
                                            "old-fashioned"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to force (someone) to leave a place "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "An angry mob {it}ran{/it} him {it}out of{/it} town."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run out (something)"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run (something) out"
                                            }
                                        ],
                                        "sls": [
                                            "baseball",
                                            "of a batter"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to run hard to first base after hitting (a batted ball) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "His manager got angry because he failed to {it}run out{/it} a grounder."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "4",
                                        "phrasev": [
                                            {
                                                "pva": "run out"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run out of (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to use up the available supply of (something) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "We're low on gas. We'd better stop before we {it}run out{/it}."
                                                    },
                                                    {
                                                        "t": "He {it}ran out of{/it} space and had to put his address on the other side of the paper."
                                                    },
                                                    {
                                                        "t": "You have to work faster. We're {it}running out of{/it} time."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "5",
                                        "phrasev": [
                                            {
                                                "pva": "run out on (someone)"
                                            }
                                        ],
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to leave (someone you should stay with) {bc}to abandon or desert (someone) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "She {it}ran out on{/it} her husband and children to be with a man old enough to be her father."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run over",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to go beyond a limit "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The meeting {it}ran over{/it}. [=the meeting was longer than it was expected or planned to be]"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2 a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to flow over the top or edge of something {bc}{sx|overflow||} "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The water was {it}running over{/it} onto the floor."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "sls": [
                                            "of a container"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to have a liquid flow over its edge {bc}{sx|overflow||} "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "His cup {it}ran over{/it}."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run over (someone or something)"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run (someone or something) over"
                                            }
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to knock down and drive over or go over (someone or something) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The dog was {it}run over{/it} by a car."
                                                    },
                                                    {
                                                        "t": "The running back {it}ran over{/it} two defenders."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to read, repeat, or practice (something) quickly "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Let's {it}run{/it} the lines {it}over{/it} together one more time."
                                                    },
                                                    {
                                                        "t": "Can you {it}run over{/it} the instructions again?"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run past",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "text",
                                                "{dx}see {dxt|run by||(above)}{/dx}"
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run through",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "1",
                                        "phrasev": [
                                            {
                                                "pva": "run through (something)"
                                            }
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to spend or use up (something) quickly {bc}{sx|squander||} "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He {it}ran through{/it} his winnings in a short time."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "phrasev": [
                                            {
                                                "pva": "run through (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to read, repeat, or practice (something) quickly "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Let's {it}run through{/it} our lines one more time."
                                                    },
                                                    {
                                                        "t": "He quickly {it}ran through{/it} the dance routine."
                                                    }
                                                ]
                                            ],
                                            [
                                                "text",
                                                "{dx}see also {dxt|run-through||}{/dx}"
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "c",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to occur repeatedly in (something) or throughout (something) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The song has been {it}running through{/it} my head all morning."
                                                    },
                                                    {
                                                        "t": "Thoughts and memories of home kept {it}running through{/it} his mind."
                                                    },
                                                    {
                                                        "t": "A note of despair {it}runs through{/it} the narrative."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run (something) through (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to enter (information) into (a computer) for processing "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "She {it}ran{/it} his name {it}through{/it} the police computer to see if he had any previous arrests."
                                                    },
                                                    {
                                                        "t": "He {it}ran{/it} the data {it}through{/it}."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3",
                                        "phrasev": [
                                            {
                                                "pva": "run (someone) through"
                                            }
                                        ],
                                        "sls": [
                                            "literary"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to push a sword through (someone) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He {it}ran{/it} him {it}through{/it} with his sword."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run up",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sen",
                                    {
                                        "sn": "1",
                                        "phrasev": [
                                            {
                                                "pva": "run up (something)"
                                            },
                                            {
                                                "pvl": "or",
                                                "pva": "run (something) up"
                                            }
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to raise (a flag) to the top of a flagpole "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "To celebrate our victory, we {it}ran up{/it} our flag."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to achieve (a large score or lead) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "Our team {it}ran up{/it} a big lead in the first quarter."
                                                    },
                                                    {
                                                        "t": "({it}US{/it}) She angrily accused the other coach of deliberately {phrase}running up the score{/phrase}. [=continuing to try to score more points even though they are not needed to win a game]"
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "c",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to increase the amount of (something) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "These extras will {it}run{/it} the bill {it}up{/it} another $100."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "d",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to get (a large bill, debt, etc.) by buying many things without making payments "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "She {it}ran up{/it} a large phone bill."
                                                    },
                                                    {
                                                        "t": "He {it}ran up{/it} a lot of debt on his credit cards."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "phrasev": [
                                            {
                                                "pva": "run up against (something)"
                                            }
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to experience (something difficult) {bc}{sx|encounter||} "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "She has {it}run up against{/it} a lot of opposition."
                                                    },
                                                    {
                                                        "t": "He has {it}run up against{/it} a bug in his computer program."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run with",
                "gram": "phrasal verb",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sphrasev": {
                                            "phrs": [
                                                {
                                                    "pva": "run with (something)"
                                                }
                                            ]
                                        },
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to use (something) in a very energetic, enthusiastic, and effective way "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He took the idea and {it}ran with{/it} it."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "run your mouth",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}to talk too much and in a foolish way "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He's always {it}running his mouth{/it} about what a great athlete he is."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "walk before you (can) run",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "text",
                                                "{dx}see {dxt|walk:1||}{/dx}"
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            }
        ],
        "shortdef": [
            "to move with your legs at a speed that is faster than walking —often used figuratively",
            "to leave a place quickly by running —often + away —often + off",
            "to run as part of a sport, for exercise, or in a race"
        ]
    },
    {
        "meta": {
            "id": "run:2",
            "uuid": "4dc24536-a0a6-4455-8db3-1e943ff12d7d",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "0063a6fd-9154-458e-9917-dfa1ffd1aa92",
                "tsrc": "collegiate"
            },
            "highlight": "yes",
            "stems": [
                "run",
                "on the run",
                "run for one's money",
                "run for her money",
                "run for his money",
                "run for their money",
                "runless",
                "runs",
                "ladder",
                "a run for your money",
                "the run of",
                "broke into a run",
                "made a run for it",
                "at a run",
                "making a run",
                "made an unsuccessful run",
                "take a run at it",
                "average/normal/general/usual run of",
                "average run of",
                "general run of",
                "normal run of",
                "usual run of",
                "school run",
                "bomb/bombing run",
                "bomb run",
                "bombing run",
                "run on the bank",
                "gives you a (good) run for your money",
                "gives you a good run for your money",
                "gives you a run for your money"
            ],
            "app-shortdef": {
                "hw": "run:2",
                "fl": "noun",
                "def": [
                    "{bc} an act of running",
                    "{bc} a continuous series of similar things",
                    "{bc} a continuous series of performances or showings"
                ]
            },
            "offensive": false
        },
        "hom": 2,
        "hwi": {
            "hw": "run",
            "altprs": [
                {
                    "ipa": "ˈrʌn"
                }
            ]
        },
        "fl": "noun",
        "ins": [
            {
                "il": "plural",
                "if": "runs"
            }
        ],
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}an act of running "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He goes for a six-mile {it}run{/it} every evening."
                                            },
                                            {
                                                "t": "She took the dogs out for a {it}run{/it}."
                                            },
                                            {
                                                "t": "When they realized they might miss the train, they {phrase}broke into a run{/phrase}. [=started running]"
                                            },
                                            {
                                                "t": "The robbers heard the police sirens and {phrase}made a run for it{/phrase}. [=ran away to avoid being captured]"
                                            },
                                            {
                                                "t": "The dog was coming toward us {phrase}at a run{/phrase}. [=the dog was running toward us]"
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{dx}see also {dxt|hit-and-run||}{/dx}"
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "2",
                                "sgram": "count"
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a continuous series of similar things"
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often + {it}of{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "We had a long {it}run of{/it} cloudy days."
                                                        },
                                                        {
                                                            "t": "a {it}run of{/it} good/bad luck"
                                                        },
                                                        {
                                                            "t": "a long {it}run of{/it} wins/losses"
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a continuous series of performances or showings "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The play had a {it}run{/it} of six months on Broadway. = The play had a six-month {it}run{/it} on Broadway."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "3",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}the amount of a product that is produced at one time"
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "often + {it}of{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "The book had a print {it}run of{/it} 10,000 copies. [=10,000 copies of the book were printed at one time]"
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "4",
                                "sgram": "count",
                                "sls": [
                                    "US"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}an attempt to win or do something "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The team is {phrase}making a run{/phrase} at the championship. [=the team is playing well and has a chance to win the championship]"
                                            },
                                            {
                                                "t": "She {phrase}made an unsuccessful run{/phrase} for a seat in the Senate. [=she tried to be elected to a seat in the Senate, but she lost the election]"
                                            },
                                            {
                                                "t": "({it}informal{/it}) {ldquo}I can't solve this math problem.{rdquo} {ldquo}Let me {phrase}take a run at it{/phrase}.{rdquo} [=let me try it]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "5",
                                "sgram": "singular",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}the usual or normal kind of person or thing "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She's not like the {phrase}average/normal/general/usual run of{/phrase} students. [=she's not like most students]"
                                            },
                                            {
                                                "t": "The place is different from the {it}usual run of{/it} restaurants."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sen",
                            {
                                "sn": "6",
                                "sgram": "count"
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a score made in baseball when a player reaches home plate after going around the bases "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The home team took the lead with three {it}runs{/it} in the bottom of the fifth (inning)."
                                            },
                                            {
                                                "t": "a three-{it}run{/it} lead"
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{dx}see also {dxt|home run||}{/dx}"
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a score made in cricket"
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "7",
                                "sgram": "count",
                                "sls": [
                                    "American football"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a play in which a player tries to move the ball forward by running with it "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "He scored on a 25-yard {it}run{/it}."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "8 a",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a regular journey that is made by a bus, train, etc. "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "The bus makes four {it}runs{/it} daily."
                                            },
                                            {
                                                "t": "a delivery {it}run{/it}"
                                            },
                                            {
                                                "t": "({it}Brit{/it}) the {phrase}school run{/phrase} [=a regular trip in which parents take their children to or from school each day]"
                                            },
                                            {
                                                "t": "The planes were sent out on a {phrase}bomb/bombing run{/phrase}."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "sgram": "singular",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a short trip in a vehicle "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "I have to make a quick {it}run{/it} to the store."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "9",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a track that slopes down and that is used for skiing, sledding, etc. "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a ski {it}run{/it} [={it}slope{/it}]"
                                            },
                                            {
                                                "t": "a bobsled {it}run{/it}"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "10",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a path that is used regularly by animals "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a deer {it}run{/it}"
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{dx}see also {dxt|rat run||}{/dx}"
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "11",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}an enclosed area for animals where they feed and exercise "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a chicken {it}run{/it}"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "12",
                                "sgram": "count",
                                "sls": [
                                    "US"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a long hole in a stocking "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She had a {it}run{/it} in her stocking/nylons."
                                            }
                                        ]
                                    ],
                                    [
                                        "ca",
                                        {
                                            "intro": "called also ({it}British{/it})",
                                            "cats": [
                                                {
                                                    "cat": "ladder"
                                                }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "13",
                                "sgram": "count",
                                "sls": [
                                    "music"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a series of notes that are sung or played quickly up or down a scale"
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "14",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a situation in which many people want to have, get, or do something at the same time"
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "usually singular"
                                                ]
                                            ],
                                            [
                                                [
                                                    "text",
                                                    "usually + {it}on{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "There's been a big {it}run on{/it} tickets for the game. [=a lot of people have been trying to get tickets for the game]"
                                                        },
                                                        {
                                                            "t": "There was a {phrase}run on the bank{/phrase}. [=a lot of people were taking their money out of the bank because they were afraid that the bank would fail]"
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "15",
                                "sgram": "count",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}the general way in which something is moving or changing "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "Investors are anxiously watching the {it}run{/it} of the stock market. [=are watching to see if the stock market is going up or down]"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "16",
                                "bnote": "the runs",
                                "sls": [
                                    "informal"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}{sx|diarrhea||} "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a bad case of {it}the runs{/it}"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "17",
                                "sgram": "count",
                                "sls": [
                                    "technical"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}an occurrence in which a large number of fish (such as salmon) swim up a river to return to the place where they were hatched and produce young "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a salmon {it}run{/it}"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "dros": [
            {
                "drp": "a run for your money",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "snote",
                                                [
                                                    [
                                                        "t",
                                                        "Someone who {phrase}gives you a (good) run for your money{/phrase} in a game or contest makes it difficult for you to win by trying hard and playing or performing well."
                                                    ],
                                                    [
                                                        "vis",
                                                        [
                                                            {
                                                                "t": "Though they lost, they {it}gave{/it} last year's champions {it}a run for their money{/it}."
                                                            }
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "on the run",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "1 a",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}running away from someone in order to avoid being captured "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "an escaped convict {it}on the run{/it}"
                                                    },
                                                    {
                                                        "t": "He is {it}on the run{/it} from the cops."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ],
                                [
                                    "sense",
                                    {
                                        "sn": "b",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}running away because you are about to be defeated "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "The army had the enemy {it}on the run{/it}."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "2",
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}while going somewhere or while doing something else "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "We ate lunch {it}on the run{/it}."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ],
                            [
                                [
                                    "sense",
                                    {
                                        "sn": "3",
                                        "sls": [
                                            "informal"
                                        ],
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}continuously busy "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "He's always {it}on the run{/it}."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            },
            {
                "drp": "the run of",
                "def": [
                    {
                        "sseq": [
                            [
                                [
                                    "sense",
                                    {
                                        "dt": [
                                            [
                                                "text",
                                                "{bc}the freedom to go anywhere or do anything you want in (a place) "
                                            ],
                                            [
                                                "vis",
                                                [
                                                    {
                                                        "t": "With his parents gone, he had {it}the run of{/it} the house."
                                                    }
                                                ]
                                            ]
                                        ]
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            }
        ],
        "dxnls": [
            "see also {dxt|dry run||} {dxt|dummy run||} {dxt|long run||} {dxt|short run||} {dxt|trial run||}"
        ],
        "shortdef": [
            "an act of running",
            "a continuous series of similar things—often + of",
            "a continuous series of performances or showings"
        ]
    },
    {
        "meta": {
            "id": "ran",
            "uuid": "c402722a-dee9-4067-8519-0b4e2c47e540",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "790febbd-5f7c-4b77-8147-dcac6c6b11a4",
                "tsrc": "collegiate"
            },
            "stems": [
                "ran",
                "run"
            ],
            "app-shortdef": null,
            "offensive": false
        },
        "hwi": {
            "hw": "ran"
        },
        "cxs": [
            {
                "cxl": "past tense of",
                "cxtis": [
                    {
                        "cxt": "run:1"
                    }
                ]
            }
        ],
        "shortdef": []
    },
    {
        "meta": {
            "id": "run batted in",
            "uuid": "0e31d907-b670-48a8-bc9e-dc3bf5ce0d74",
            "src": "learners",
            "section": "alpha",
            "stems": [
                "run batted in",
                "runs batted in"
            ],
            "app-shortdef": {
                "hw": "run batted in",
                "fl": "noun",
                "def": [
                    "{it}baseball{/it}"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "run batted in"
        },
        "fl": "noun",
        "ins": [
            {
                "il": "plural",
                "if": "runs batted in"
            }
        ],
        "gram": "count",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sls": [
                                    "baseball"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}{sx|rbi||}"
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "rbi"
        ]
    },
    {
        "meta": {
            "id": "run-down",
            "uuid": "86ffb185-b55f-4816-98d5-590aa267e01a",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "8082df6b-102b-48d6-99df-015765670ed5",
                "tsrc": "collegiate"
            },
            "stems": [
                "run-down"
            ],
            "app-shortdef": {
                "hw": "run-down",
                "fl": "adjective",
                "def": [
                    "{bc} in very bad condition because of age or lack of care",
                    "{bc} in poor health or physical condition {bc} worn-out or exhausted"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "run-down",
            "prs": [
                {
                    "ipa": "ˈrʌnˈdaʊn",
                    "sound": {
                        "audio": "rundow02"
                    }
                }
            ]
        },
        "fl": "adjective",
        "gram": "more ~; most ~",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}in very bad condition because of age or lack of care "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "They lived in a {it}run-down{/it} farmhouse in rural Maine."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2",
                                "lbs": [
                                    "not used before a noun"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}in poor health or physical condition {bc}worn-out or exhausted "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "You look {it}run-down{/it}."
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "in very bad condition because of age or lack of care",
            "in poor health or physical condition : worn-out or exhausted"
        ]
    },
    {
        "meta": {
            "id": "run-in",
            "uuid": "a7df84f2-b112-4669-84e6-6dd0c592cccd",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "9ce75793-0f62-49e4-b9c1-ffab8676fbc1",
                "tsrc": "collegiate"
            },
            "stems": [
                "run-in",
                "run-ins"
            ],
            "app-shortdef": {
                "hw": "run-in",
                "fl": "noun",
                "def": [
                    "{it}informal{/it} {bc} an angry argument"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "run-in",
            "prs": [
                {
                    "ipa": "ˈrʌnˌɪn",
                    "sound": {
                        "audio": "runin001"
                    }
                }
            ]
        },
        "fl": "noun",
        "ins": [
            {
                "il": "plural",
                "ifc": "-ins",
                "if": "run-ins"
            }
        ],
        "gram": "count",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sls": [
                                    "informal"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}an angry argument"
                                    ],
                                    [
                                        "uns",
                                        [
                                            [
                                                [
                                                    "text",
                                                    "usually + {it}with{/it} "
                                                ],
                                                [
                                                    "vis",
                                                    [
                                                        {
                                                            "t": "He had a {it}run-in with{/it} the cops."
                                                        }
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "an angry argument—usually + with"
        ]
    },
    {
        "meta": {
            "id": "run-of-the-mill",
            "uuid": "4825462f-2e6f-46d9-a41d-ff9d61eef866",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "ad6630db-33c8-4ce1-8d51-05c6bbdb61d3",
                "tsrc": "collegiate"
            },
            "stems": [
                "run-of-the-mill"
            ],
            "app-shortdef": {
                "hw": "run-of-the-mill",
                "fl": "adjective",
                "def": [
                    "{it}often disapproving{/it} {bc} average or ordinary"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "run-of-the-mill",
            "prs": [
                {
                    "ipa": "ˌrʌnɚvðəˈmɪl",
                    "sound": {
                        "audio": "runoft01"
                    }
                }
            ]
        },
        "fl": "adjective",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sls": [
                                    "often disapproving"
                                ],
                                "dt": [
                                    [
                                        "text",
                                        "{bc}average or ordinary "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a {it}run-of-the-mill{/it} performance"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "average or ordinary"
        ]
    },
    {
        "meta": {
            "id": "run-through",
            "uuid": "ec2e2ef5-c83c-45ef-b886-9ff9cd7f4bd4",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "b6367219-a035-4e19-bbac-2f2f0cb7bb52",
                "tsrc": "collegiate"
            },
            "stems": [
                "run-through",
                "run-throughs"
            ],
            "app-shortdef": {
                "hw": "run-through",
                "fl": "noun",
                "def": [
                    "{bc} an activity in which you quickly do or read all the different parts of something especially in order to practice or prepare for something (such as a performance)"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "run-through",
            "prs": [
                {
                    "ipa": "ˈrʌnˌθruː",
                    "sound": {
                        "audio": "runthr01"
                    }
                }
            ]
        },
        "fl": "noun",
        "ins": [
            {
                "il": "plural",
                "ifc": "-throughs",
                "if": "run-throughs"
            }
        ],
        "gram": "count",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "{bc}an activity in which you quickly do or read all the different parts of something especially in order to practice or prepare for something (such as a performance) "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "She gave her lines/notes a quick {it}run-through{/it}."
                                            },
                                            {
                                                "t": "They did a {it}run-through{/it} [={it}rehearsal{/it}] of the play."
                                            }
                                        ]
                                    ],
                                    [
                                        "text",
                                        "{dx}see also {it}run through{/it} at {dxt|run:1||}{/dx}"
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "an activity in which you quickly do or read all the different parts of something especially in order to practice or prepare for something (such as a performance)"
        ]
    },
    {
        "meta": {
            "id": "run-up",
            "uuid": "c173172c-a836-4956-885b-a6d4257b2160",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "844fd54e-46fd-4adc-a1ad-566611057309",
                "tsrc": "collegiate"
            },
            "stems": [
                "run-up",
                "run-ups"
            ],
            "app-shortdef": {
                "hw": "run-up",
                "fl": "noun",
                "def": [
                    "{bc} a usually sudden increase in price",
                    "{bc} the period immediately before an action or event"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "run-up",
            "prs": [
                {
                    "ipa": "ˈrʌnˌʌp",
                    "sound": {
                        "audio": "runup001"
                    }
                }
            ]
        },
        "fl": "noun",
        "ins": [
            {
                "il": "plural",
                "ifc": "-ups",
                "if": "run-ups"
            }
        ],
        "gram": "count",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a usually sudden increase in price "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a {it}run-up{/it} in stock prices"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}the period immediately before an action or event "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "during the {it}run-up{/it} to the war/election"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "a usually sudden increase in price",
            "the period immediately before an action or event"
        ]
    },
    {
        "meta": {
            "id": "dry run",
            "uuid": "26c5e4e3-e857-47d8-9bbe-cd1f0895f5f6",
            "src": "learners",
            "section": "alpha",
            "target": {
                "tuuid": "c9498723-cb78-415e-8671-17f91fd82311",
                "tsrc": "collegiate"
            },
            "stems": [
                "dry run",
                "dry runs",
                "dummy run"
            ],
            "app-shortdef": {
                "hw": "dry run",
                "fl": "noun",
                "def": [
                    "{bc} a practice event that is done to prepare for the actual event that will happen in the future"
                ]
            },
            "offensive": false
        },
        "hwi": {
            "hw": "dry run"
        },
        "fl": "noun",
        "ins": [
            {
                "il": "plural",
                "ifc": "~ runs",
                "if": "dry runs"
            }
        ],
        "gram": "count",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "{bc}a practice event that is done to prepare for the actual event that will happen in the future "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "We did a {it}dry run{/it} of the experiment."
                                            },
                                            {
                                                "t": "After several {it}dry runs{/it}, she was ready to give the speech."
                                            }
                                        ]
                                    ],
                                    [
                                        "ca",
                                        {
                                            "intro": "called also ({it}British{/it})",
                                            "cats": [
                                                {
                                                    "cat": "dummy run"
                                                }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "a practice event that is done to prepare for the actual event that will happen in the future —called also (British) dummy run"
        ]
    }
]`)
