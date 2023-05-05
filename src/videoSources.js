// condition:
// age group: < 8, 8-18, 18-28, 28-40, 40-60 --> get age index
// gender: Male, Female --> get gender index
// emotion: --> understand effectiveness

const videoSources = {
    "0-10": {
        "Male": [
            "https://www.youtube.com/watch?v=ShKPG3AOaNc",
            "https://www.youtube.com/watch?v=2sJVse25j0g"
        ],
        "Female":  [
            "https://www.youtube.com/watch?v=W6BvGtY8XQs",
            "https://www.youtube.com/watch?v=zSsj2aR5Y3Y"
        ],
        "Couple": [
            "https://www.youtube.com/watch?v=ShKPG3AOaNc",
            "https://www.youtube.com/watch?v=2sJVse25j0g",
            "https://www.youtube.com/watch?v=W6BvGtY8XQs",
            "https://www.youtube.com/watch?v=zSsj2aR5Y3Y"
        ]
    },
    "10-40": {
        "Male": [
            "https://www.youtube.com/watch?v=WnGZoZo8k64",
            "https://www.youtube.com/watch?v=_w5bl2Djit8",
            "https://www.youtube.com/watch?v=2IqiJB263mY",
            "https://www.youtube.com/watch?v=fgk5vQ4FQUA",
            "https://www.youtube.com/watch?v=unlyqcXsyss",
            "https://www.youtube.com/watch?v=rO8jgwW4z08"
        ],
        "Female":  [
            "https://www.youtube.com/watch?v=hmhY6H6gBBE",
            "https://www.youtube.com/watch?v=8bMZUNEiGLI",
            "https://www.youtube.com/watch?v=D2AQO2ITX9A",
            "https://www.youtube.com/watch?v=Xj3i6bbRBio",
            "https://www.youtube.com/watch?v=I10XB1-IIbA",
            "https://www.youtube.com/watch?v=uM99m-OU4mM",
            "https://www.youtube.com/watch?v=TKb_V8PrRf4",
            "https://www.youtube.com/watch?v=Fhhn8P3j4zM",
            "https://www.youtube.com/watch?v=izVsq0SeaNY"
        ],
        "Couple": [
            "https://www.youtube.com/watch?v=Uh_eFBIBkAs",
            "https://www.youtube.com/watch?v=FNNJX714vUo",

        ]
    },
    "40-80": {
        "Male": [
            "https://www.youtube.com/watch?v=vAyMim3QRYs",
            "https://www.youtube.com/watch?v=Uh_eFBIBkAs",
            "https://www.youtube.com/watch?v=kqtoeB4eumw",


        ],
        "Female":  [
            "https://www.youtube.com/watch?v=XTEwdvneMNw",
            "https://www.youtube.com/watch?v=ufhQARvN-5E",
            "https://www.youtube.com/watch?v=HAgWDS8JYmI"

        ],
        "Couple": [
            "https://www.youtube.com/watch?v=Uh_eFBIBkAs",
            "https://www.youtube.com/watch?v=FNNJX714vUo",
            
        ]
    },

}

export default videoSources;