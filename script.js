/* =========================================================
   HAPPY BIRTHDAY BROTHER
   BIRTHDAY MAILBOX WEBSITE
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. GET HTML ELEMENTS
========================================================= */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const mailboxScreen =
    document.getElementById("mailboxScreen");

const letterScreen =
    document.getElementById("letterScreen");


const openMailboxBtn =
    document.getElementById("openMailboxBtn");

const backToWelcome =
    document.getElementById("backToWelcome");

const closeLetter =
    document.getElementById("closeLetter");


const letterTitle =
    document.getElementById("letterTitle");

const letterContent =
    document.getElementById("letterContent");


const envelopes =
    document.querySelectorAll(".envelope");


/* =========================================================
   2. BIRTHDAY LETTERS
========================================================= */

const letters = {


    /* =====================================================
       LETTER 1
    ====================================================== */

    1: {

        title:
            "Happy Birthday, Brother! 🎂",

        content: `

            <p>
                Happy Birthday to you! 🎂
            </p>

            <p>
                It's actually funny how we haven't known
                each other for that long, yet somehow you've
                become someone I'm really close to.
            </p>

            <p>
                I never expected that in such a short time,
                I'd feel this comfortable talking to you
                and sharing so many little things with you.
                Some people take years to become this close,
                and somehow with you, it just happened naturally.
                we have such great energy u r a go to person for me 
                like when ever i feel like im happy or sad i can just 
                share that withh uuu....
            </p>

            <p>
                I'm genuinely really glad that I met you.
                I hope you have the happiest birthday and
                an amazing year ahead.
            </p>

        `
    },


    /* =====================================================
       LETTER 2
    ====================================================== */

    2: {

        title:
            "Happy Birthday — Look How Close We Got! 🥳",

        content: `

            <p>
                Happy Birthday, brother! 🥳
            </p>

            <p>
                I feel really comfortable around,belive me 
                or not but then u r a person i have trusted 
                very much in a very short period of time
           </p>

            <p>
                Our conversations, random talks and all those
                little moments somehow brought us closer without
                us even realizing it.
            </p>

            <p>
                On your birthday, I just want you to know that
                I'm really grateful for this bond we have.
                Happy Birthday once again!
            </p>

        `
    },


    /* =====================================================
       LETTER 3
    ====================================================== */

    3: {

        title:
            "Happy Birthday — And Thank You! 🎉",

        content: `

            <p>
                Happy Birthday to one of the kindest people
                I've met! 🎉
            </p>

            <p>
                One thing I really appreciate about you is how
                easy it is to talk to you. I don't feel like I
                have to think too much before saying something
                or pretend to be someone I'm not . I'm really open 
                with u and thankkk you brotherrrr for being uuu
                i just want u to always be happy for ever... 
    
            </p>

            <p>
                you've become someone I can genuinely connect
                with. That's not something that happens with
                everyone, and I really value it.
            </p>

            <p>
                So on your birthday, thank you for simply being
                the person you are.
            </p>

        `
    },


    /* =====================================================
       LETTER 4
    ====================================================== */

    4: {

        title:
            "Happy Birthday — I'm Glad I Met You! 🎂",

        content: `

            <p>
                Happiest Birthday to you! 🎂
            </p>

            <p>
                ur a cutie patotoie i have never jugded based on 
                how u look but geniunely u look good it self 
                and how ever u look u will still be my brotherrr 
                dont ever forget that okaiiee...
            </p>

            <p>
                 😄
                It's actually ur birthday todayyy more years ahead 
                hope so our bond gets stronger and stronger and it 
                never breaks ...
            </p>

            <p>
                I'm really thankful for all the conversations,
                laughs and little moments we've shared so far.
                And honestly, I hope there are many more to come.
            </p>

            <p>
                Happy Birthday, brother!
            </p>

        `
    },


    /* =====================================================
       LETTER 5 — FINAL
    ====================================================== */

    5: {

        title:
            "HAPPIEST BIRTHDAY, BROTHER! 🎂❤️",

        content: `

            <p>
                HAPPIEST BIRTHDAY TO YOU! 🎂✨
            </p>

            <p>
                I don't know what the future holds or how much
                things will change with time, but I'm genuinely
                glad that our paths crossed and that we became
                close.
            </p>

            <p>
                I hope this birthday marks the beginning of an
                amazing year for you — filled with happiness,
                success, peace, good people and countless reasons
                to smile.
            </p>

            <p>
                I hope you achieve everything you're working
                towards and get all the happiness you truly
                deserve.
            </p>

            <p>
                ur one of those people in my life whom i trust the most , just know
                that you've become someone very special to me.
            </p>

            <p>
                Happy Birthday once again, brother. 🎂
                I really feel like ur my ownnn cutie patotie brother.
            </p>

        `
    }

};


/* =========================================================
   3. OPEN BIRTHDAY MAILBOX
========================================================= */

openMailboxBtn.addEventListener(
    "click",
    function () {

        welcomeScreen.classList.remove(
            "active"
        );

        mailboxScreen.classList.add(
            "active"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   4. BACK TO WELCOME
========================================================= */

backToWelcome.addEventListener(
    "click",
    function () {

        mailboxScreen.classList.remove(
            "active"
        );

        letterScreen.classList.remove(
            "active"
        );

        welcomeScreen.classList.add(
            "active"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   5. OPEN LETTER
========================================================= */

envelopes.forEach(
    function (envelope) {

        envelope.addEventListener(
            "click",
            function () {

                const letterNumber =
                    envelope.getAttribute(
                        "data-letter"
                    );


                const selectedLetter =
                    letters[letterNumber];


                if (!selectedLetter) {
                    return;
                }


                /* -----------------------------------------
                   PUT TITLE INTO LETTER
                ------------------------------------------ */

                letterTitle.textContent =
                    selectedLetter.title;


                /* -----------------------------------------
                   PUT MESSAGE INTO LETTER
                ------------------------------------------ */

                letterContent.innerHTML =
                    selectedLetter.content;


                /* -----------------------------------------
                   CHANGE SCREEN
                ------------------------------------------ */

                mailboxScreen.classList.remove(
                    "active"
                );

                letterScreen.classList.add(
                    "active"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);


/* =========================================================
   6. CLOSE LETTER
========================================================= */

closeLetter.addEventListener(
    "click",
    function () {

        letterScreen.classList.remove(
            "active"
        );

        mailboxScreen.classList.add(
            "active"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   7. ESCAPE KEY
   Allows user to close a letter with keyboard
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            letterScreen.classList.contains("active")
        ) {

            letterScreen.classList.remove(
                "active"
            );

            mailboxScreen.classList.add(
                "active"
            );

        }

    }
);