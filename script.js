let username = document.getElementById('username');
let start = document.getElementById('start');
let sec1 = document.getElementById('sec1');
let sec2 = document.getElementById('sec2');
let sec3 = document.getElementById('sec3');
let left = document.getElementById('left');
let welcomeuser = document.getElementById('welcomeuser');
let category = document.getElementById('category');
let anime = document.getElementById('anime');
let videogames = document.getElementById('videogames');
let sport = document.getElementById('sport');
let history = document.getElementById('history');
let play = document.getElementById('play');

let Name; // declare Name variable outside event listener functions

start.style.display = 'none';
username.onkeyup= function(){
  start.style.display = 'inline';
  if(username.value == ""){
    start.style.display = 'none';
  
  }
  
}
if(username.value == ""){
  start.style.display = 'none';

}


start.addEventListener('click', function(){
    Name = username.value; // assign value to Name variable
    sec1.style.display = 'none';
    sec2.style.display = 'block';
    welcomeuser.innerHTML = Name;
});

anime.addEventListener('click', function(){
    category.innerHTML = "ANIME";
})

videogames.addEventListener('click', function(){
    category.innerHTML = "VIDEO GAMES";
})

sport.addEventListener('click', function(){
    category.innerHTML = "SPORT";
})

history.addEventListener('click', function(){
    category.innerHTML = "MOVIES/SERIES";
})





play.addEventListener('click', function(){
  if(category.innerHTML == "VIDEO GAMES"){
    sec2.style.display = "none";
    left.style.display = "none";
    sec3.style.display = "block";
    let numCorrectAnswers = 0; // initialize number of correct answers to 0
  
    let questionIndex = 0; // initialize index for the first question
    let score = 0; // initialize score to 0
    const timerElement = document.querySelector('#timer');
const countElement = document.querySelector('#count');
let remainingTime = 90;
let timerInterval;

function startTimer() {
  const startTime = performance.now();
  timerInterval = setInterval(() => {
    const elapsedTime = Math.floor((performance.now() - startTime) / 1000);
    remainingTime = Math.max(0, 90 - elapsedTime);
    countElement.textContent = remainingTime;
    timerElement.innerHTML = `Time Remaining: ${remainingTime}s`;

    if (remainingTime === 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000); // update timer every 250 milliseconds
}

function stopTimer() {
  clearInterval(timerInterval);
}

startTimer();


    const quizData = [
      {
        question: "What is the Name of This Character?",
        image: "quizgame/leon.jpg",
        answers: {
          a: "Albert Wesker",
          b: "Leon S. Kennedy",
          c: "Jack Krauser",
          d: "Jake Muller",
        },
        correctAnswer: "b",
      },
      {
        question: "Who won game of the year 2019?",
        image: "quizgame/game of th year.jpg",
        answers: {
          a: "Sekiro: Shadows Die Twice",
          b: "Control",
          c: "Devil May Cry 5",
          d: "A Plague Tale: Innocence",
        },
        correctAnswer: "a",
      },
      {
        question: "What game is this character from?",
        image: "quizgame/jinx.jpg",
        answers: {
          a: "Valorant",
          b: "Genshin Impact",
          c: "League of legends",
          d: "Dota 2",
        },
        correctAnswer: "c",
      },
      {
        question: "What is the Name of This Character?",
        image: "quizgame/deluc.jpg",
        answers: {
          a: "Kazuha",
          b: "Zhongli",
          c: "Ayato",
          d: "Diluc",
        },
        correctAnswer: "d",
      },
      {
        question: "which year was the game released lost ark?",
        image: "quizgame/Lost-Ark.jpg",
        answers: {
          a: "2017",
          b: "2018",
          c: "2019",
          d: "2020",
        },
        correctAnswer: "c",
      },
      {
        question: "what is the name of the final boss in dark souls 3?",
        image: "quizgame/dark_souls_3_soul_of_cinder.jpg",
        answers: {
          a: "Nameless King",
          b: "Soul of Cinder",
          c: "Ancient Wyvern",
          d: "Oceiros, the Consumed King",
        },
        correctAnswer: "b",
      },
      {
        question: "What is the Name of This Character?",
        image: "quizgame/Jett_1920x1080.jpg",
        answers: {
          a: "Jett",
          b: "Sage",
          c: "Katarina",
          d: "Viper",
        },
        correctAnswer: "a",
      },
      {
        question: "In the first game, CJ said a quote.What is it",
        image: "quizgame/CJ-Quotes-Featured.jpg",
        answers: {
          a: "hehe siuuuuuuuuuuuuuuuuuuuuuu",
          b: "Ah Shit Here We Go Again",
          c: "You watch your tone, boy",
          d: "Come Here Son",
        },
        correctAnswer: "b",
      },
      {
        question: "What is the Name of This Character?",
        image: "quizgame/aphelios-splash.jpg",
        answers: {
          a: "Ezreal",
          b: "Kindred",
          c: "Varus",
          d: "Aphelios",
        },
        correctAnswer: "d",
      },
      {
        question: "which year was the game released zelda breath of the wild?",
        image: "quizgame/zelda.jpg",
        answers: {
          a: "2016",
          b: "2017",
          c: "2018",
          d: "2019",
        },
        correctAnswer: "b",
      },
    ];

   

    function showResults() {
      const resultElement = document.querySelector('#sec4 h1 span');
      const playAgainButton = document.querySelector('#sec4 button');
      const showname = document.getElementById('showname');
      const note = document.getElementById('note');
      const cat = document.getElementById('cat');
    
      const test = username.value;
    
      resultElement.textContent = score + "/" + quizData.length;
      showname.textContent = test;
      sec3.style.display = "none";
      sec4.style.display = "block";
      if(score ==1 ||score ==0 || score ==2 || score== 3 || score==4){
        note.textContent = "Malk Noob Asa7bi Malk?"
        cat.src = "meme/low.jpg";

      }else if(score == 5 || score == 6 || score == 7){
        note.textContent = "Not Bad Not Bad"
        cat.src = "meme/not bad.jpg";
      }else{
        note.textContent = "Papapa Ta Kidrti liha Asa7bi"
        cat.src = "meme/happy.jpg";
      }
      stopTimer();
    
      playAgainButton.addEventListener('click', function() {
        remainingTime = 90; // reset remaining time
        sec4.style.display = "none";
        sec2.style.display = "block";
        left.style.display = "block";
        category.innerHTML = "Select Category";
        score = 0; // reset score
        questionIndex = 0; // reset question index
        answerButtons.forEach((button) => { // enable all answer buttons and reset their styles
          button.disabled = false;
          button.classList.remove('correct', 'incorrect');
        });
        displayQuestion(questionIndex); // display the first question again
      
        // stop the existing timer interval, if it exists
        if (timerInterval) {
          clearInterval(timerInterval);
        }
        play.addEventListener('click', function() {
          startTimer();

        })
      
      });
      
      
    }
    

    function displayQuestion(index) {
      const currentQuestion = quizData[index];
      const questionElement = document.querySelector('#sec3 h3');
      const imageElement = document.querySelector('#sec3 img');
      const answerButtons = document.querySelectorAll('#sec3 button');

      questionElement.textContent = currentQuestion.question;
      imageElement.src = currentQuestion.image;

      let answerIndex = 0;
      for (const answerLetter in currentQuestion.answers) {
        answerButtons[answerIndex].textContent = currentQuestion.answers[answerLetter];
        answerButtons[answerIndex].dataset.answerLetter = answerLetter;
        answerIndex++;
      }
    }

    const answerButtons = document.querySelectorAll('#sec3 button');
    answerButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const selectedAnswer = button.dataset.answerLetter;
        const correctAnswer = quizData[questionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
          numCorrectAnswers++;
          score++;
          button.classList.add('correct');
          } else {
          button.classList.add('incorrect');
          }
          
              // disable all [answer buttons](poe://www.poe.com/_api/key_phrase?phrase=answer%20buttons&prompt=Tell%20me%20more%20about%20answer%20buttons.)
              answerButtons.forEach((button) => {
                button.disabled = true;
              });
          
              // move to the next question after a 1 second delay
              setTimeout(() => {
                questionIndex++;
          
                // if all questions have been answered, show results
                if (questionIndex === quizData.length) {
                  clearInterval(timer);
                  showResults();
                } else {
                  // otherwise, display the next question
                  displayQuestion(questionIndex);
          
                  // re-enable all answer buttons
                  answerButtons.forEach((button) => {
                    button.disabled = false;
                    button.classList.remove('correct', 'incorrect');
                  });
                }
              }, 1000);
            });
          });
          
          // display the first question
          displayQuestion(questionIndex);
          }else if(category.innerHTML == "ANIME"){

            sec2.style.display = "none";
            left.style.display = "none";
            sec3.style.display = "block";
            let numCorrectAnswers = 0; // initialize number of correct answers to 0
          
            let questionIndex = 0; // initialize index for the first question
            let score = 0; // initialize score to 0
            const timerElement = document.querySelector('#timer');
        const countElement = document.querySelector('#count');
        let remainingTime = 90;
        let timerInterval;
        
        function startTimer() {
          const startTime = performance.now();
          timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((performance.now() - startTime) / 1000);
            remainingTime = Math.max(0, 90 - elapsedTime);
            countElement.textContent = remainingTime;
            timerElement.innerHTML = `Time Remaining: ${remainingTime}s`;
        
            if (remainingTime === 0) {
              clearInterval(timerInterval);
              showResults();
            }
          }, 1000); // update timer every 250 milliseconds
        }
        
        function stopTimer() {
          clearInterval(timerInterval);
        }
        
        startTimer();
        
        
            const quizData = [
              {
                question: "What is the Name of This Character?",
                image: "quizanime/kaiji.jpg",
                answers: {
                  a: "Lelouch",
                  b: "Kaiji",
                  c: "Ryuzaki",
                  d: "Sobaru",
                },
                correctAnswer: "b",
              },
              {
                question: "In what year was the first episode of the anime Detective Conan released?",
                image: "quizanime/detective-conan-1.jpg",
                answers: {
                  a: "1994",
                  b: "1995",
                  c: "1996",
                  d: "1998",
                },
                correctAnswer: "c",
              },
              {
                question: "What Anime is this Logo from?",
                image: "quizanime/Fullmetall_Alchemist_anime-logo-59840B9E1F-seeklogo.com.png",
                answers: {
                  a: "Fullmetall Alchemist",
                  b: "Fairy Tail",
                  c: "attack on titan",
                  d: "Black Clover",
                },
                correctAnswer: "a",
              },
              {
                question: "In this scene, why was Gon angry?",
                image: "quizanime/gon.jpg",
                answers: {
                  a: "because killua death",
                  b: "because Kite loses his arm",
                  c: "Hisoka provoke him",
                  d: "he find his dad dead",
                },
                correctAnswer: "b",
              },
              {
                question: "In Fullmetal Alchemist, who did Edward and Alphonse Elric try to revive?",
                image: "quizanime/fullmetal.jpg",
                answers: {
                  a: "Their Brother",
                  b: "Their Sister",
                  c: "Their Father",
                  d: "Their Mother",
                },
                correctAnswer: "d",
              },
              {
                question: "What is the Name of This Character?",
                image: "quizanime/black clover.jpg",
                answers: {
                  a: "Yami sukehiro",
                  b: "Julius Nova Chrono",
                  c: "luck voltia",
                  d: "fuegoleon vermillion",
                },
                correctAnswer: "a",
              },
              {
                question: "What is the Name of This Character?",
                image: "quizanime/demon slayer.jpg",
                answers: {
                  a: "Tengen Uzui",
                  b: "Kyōjurō Rengoku",
                  c: "giyu tomioka",
                  d: "obanai iguro",
                },
                correctAnswer: "c",
              },
              {
                question: "who said this quote i don't care if no one likes me. i wasn't created in this world to entertain everyone",
                image: "quizanime/hyouka.jpg",
                answers: {
                  a: "Kiyotaka Ayanokoji",
                  b: "Itachi Utchiha",
                  c: "Houtarou Oreki",
                  d: "Killua Zoldyck",
                },
                correctAnswer: "C",
              },
              {
                question: "who won best anime in 2021?",
                image: "quizanime/anime awards.png",
                answers: {
                  a: "	Dorohedorol",
                  b: "Appare-Ranman!",
                  c: "Beastars",
                  d: "Jujutsu Kaisen",
                },
                correctAnswer: "d",
              },
              {
                question: "What Anime is this Character from??",
                image: "quizanime/LG_Akashi.png",
                answers: {
                  a: "Kuroku No Basket",
                  b: "Haikyuu",
                  c: "Blue Lock",
                  d: "Slum Dunk ",
                },
                correctAnswer: "a",
              },
            ];
        
           
        
            function showResults() {
              const resultElement = document.querySelector('#sec4 h1 span');
              const playAgainButton = document.querySelector('#sec4 button');
              const showname = document.getElementById('showname');
              const note = document.getElementById('note');
              const cat = document.getElementById('cat');
            
              const test = username.value;
            
              resultElement.textContent = score + "/" + quizData.length;
              showname.textContent = test;
              sec3.style.display = "none";
              sec4.style.display = "block";
              if(score ==1 ||score ==0 || score ==2 || score== 3 || score==4){
                note.textContent = "Malk Noob Asa7bi Malk?"
                cat.src = "meme/low.jpg";
        
              }else if(score == 5 || score == 6 || score == 7){
                note.textContent = "Not Bad Not Bad"
                cat.src = "meme/not bad.jpg";
              }else{
                note.textContent = "Papapa Ta Kidrti liha Asa7bi"
                cat.src = "meme/happy.jpg";
              }
              stopTimer();
            
              playAgainButton.addEventListener('click', function() {
                remainingTime = 90; // reset remaining time
                sec4.style.display = "none";
                sec2.style.display = "block";
                left.style.display = "block";
                category.innerHTML = "Select Category";
                score = 0; // reset score
                questionIndex = 0; // reset question index
                answerButtons.forEach((button) => { // enable all answer buttons and reset their styles
                  button.disabled = false;
                  button.classList.remove('correct', 'incorrect');
                });
                displayQuestion(questionIndex); // display the first question again
              
                // stop the existing timer interval, if it exists
                if (timerInterval) {
                  clearInterval(timerInterval);
                }
                play.addEventListener('click', function() {
                  startTimer();
        
                })
              
              });
              
              
            }
            
        
            function displayQuestion(index) {
              const currentQuestion = quizData[index];
              const questionElement = document.querySelector('#sec3 h3');
              const imageElement = document.querySelector('#sec3 img');
              const answerButtons = document.querySelectorAll('#sec3 button');
        
              questionElement.textContent = currentQuestion.question;
              imageElement.src = currentQuestion.image;
        
              let answerIndex = 0;
              for (const answerLetter in currentQuestion.answers) {
                answerButtons[answerIndex].textContent = currentQuestion.answers[answerLetter];
                answerButtons[answerIndex].dataset.answerLetter = answerLetter;
                answerIndex++;
              }
            }
        
            const answerButtons = document.querySelectorAll('#sec3 button');
            answerButtons.forEach((button) => {
              button.addEventListener('click', function () {
                const selectedAnswer = button.dataset.answerLetter;
                const correctAnswer = quizData[questionIndex].correctAnswer;
        
                if (selectedAnswer === correctAnswer) {
                  numCorrectAnswers++;
                  score++;
                  button.classList.add('correct');
                  } else {
                  button.classList.add('incorrect');
                  }
                  
                      // disable all [answer buttons](poe://www.poe.com/_api/key_phrase?phrase=answer%20buttons&prompt=Tell%20me%20more%20about%20answer%20buttons.)
                      answerButtons.forEach((button) => {
                        button.disabled = true;
                      });
                  
                      // move to the next question after a 1 second delay
                      setTimeout(() => {
                        questionIndex++;
                  
                        // if all questions have been answered, show results
                        if (questionIndex === quizData.length) {
                          clearInterval(timer);
                          showResults();
                        } else {
                          // otherwise, display the next question
                          displayQuestion(questionIndex);
                  
                          // re-enable all answer buttons
                          answerButtons.forEach((button) => {
                            button.disabled = false;
                            button.classList.remove('correct', 'incorrect');
                          });
                        }
                      }, 1000);
                    });
                  });
                  
                  // display the first question
                  displayQuestion(questionIndex);
          }else if(category.innerHTML=="SPORT"){
            sec2.style.display = "none";
            left.style.display = "none";
            sec3.style.display = "block";
            let numCorrectAnswers = 0; // initialize number of correct answers to 0
          
            let questionIndex = 0; // initialize index for the first question
            let score = 0; // initialize score to 0
            const timerElement = document.querySelector('#timer');
        const countElement = document.querySelector('#count');
        let remainingTime = 90;
        let timerInterval;
        
        function startTimer() {
          const startTime = performance.now();
          timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((performance.now() - startTime) / 1000);
            remainingTime = Math.max(0, 90 - elapsedTime);
            countElement.textContent = remainingTime;
            timerElement.innerHTML = `Time Remaining: ${remainingTime}s`;
        
            if (remainingTime === 0) {
              clearInterval(timerInterval);
              showResults();
            }
          }, 1000); // update timer every 250 milliseconds
        }
        
        function stopTimer() {
          clearInterval(timerInterval);
        }
        
        startTimer();
        
        
            const quizData = [
              {
                question: "Who Won World Cup 1998?",
                image: "quiz sport/1998_FIFA_World_Cup.svg.png",
                answers: {
                  a: "Bresil",
                  b: "Germany",
                  c: "France",
                  d: "Italy",
                },
                correctAnswer: "c",
              },
              {
                question: "what is the nationality of Rafael Nadal",
                image: "quiz sport/nadal.jpg",
                answers: {
                  a: "France",
                  b: "Espagne",
                  c: "Serbie",
                  d: "Switzerland",
                },
                correctAnswer: "b",
              },
              {
                question: "who have the highest record in 100m sprint?",
                image: "quiz sport/100m.jpg",
                answers: {
                  a: "Christian COLEMAN",
                  b: "Asafa POWELL",
                  c: "Yohan BLAKE",
                  d: "Usain BOLT",
                },
                correctAnswer: "d",
              },
              {
                question: "who won ballon d'or 2018?",
                image: "quiz sport/ballon d'or.jpg",
                answers: {
                  a: "Cristiano Ronaldo",
                  b: "Lionel Messi",
                  c: "Luka Modrić",
                  d: "Mohamed Salah",
                },
                correctAnswer: "c",
              },
              {
                question: "how many goals has morocco in world cup?",
                image: "quiz sport/morocco.jpg",
                answers: {
                  a: "20",
                  b: "18",
                  c: "22",
                  d: "19",
                },
                correctAnswer: "a",
              },
              {
                question: "which year muhammad ali died",
                image: "quiz sport/mohamed ali.jpg",
                answers: {
                  a: "2016",
                  b: "2017",
                  c: "2018",
                  d: "2019",
                },
                correctAnswer: "a",
              },
              {
                question: "Who won the NBA 2019 championship?",
                image: "quiz sport/nba.jpg",
                answers: {
                  a: "Warriors Golden State",
                  b: "Toronto Raptors",
                  c: "Mavericks de Dallas",
                  d: "Lakers de Los Angeles",
                },
                correctAnswer: "b",
              },
              {
                question: "who won champion league in 2004?",
                image: "quiz sport/champions league.jpg",
                answers: {
                  a: "Real Madrid",
                  b: "Liverpool",
                  c: "Ac Milan",
                  d: "Fc Porto",
                },
                correctAnswer: "d",
              },
              {
                question: "What is the name of this tennis player?",
                image: "quiz sport/Roger-Federer.jpg",
                answers: {
                  a: "Roger Federer",
                  b: "Fafael Nadal",
                  c: "Novak Djokovic",
                  d: "Carlos Alcaraz",
                },
                correctAnswer: "a",
              },
              {
                question: "guess the player by their transfer history",
                image: "quiz sport/david beckham.jpg",
                answers: {
                  a: "Cristiano Ronaldo",
                  b: "David Beckham",
                  c: "Roberto Carlos",
                  d: "Sergio Ramos",
                },
                correctAnswer: "b",
              },
            ];
        
           
        
            function showResults() {
              const resultElement = document.querySelector('#sec4 h1 span');
              const playAgainButton = document.querySelector('#sec4 button');
              const showname = document.getElementById('showname');
              const note = document.getElementById('note');
              const cat = document.getElementById('cat');
            
              const test = username.value;
            
              resultElement.textContent = score + "/" + quizData.length;
              showname.textContent = test;
              sec3.style.display = "none";
              sec4.style.display = "block";
              if(score ==1 ||score ==0 || score ==2 || score== 3 || score==4){
                note.textContent = "Malk Noob Asa7bi Malk?"
                cat.src = "meme/low.jpg";
        
              }else if(score == 5 || score == 6 || score == 7){
                note.textContent = "Not Bad Not Bad"
                cat.src = "meme/not bad.jpg";
              }else{
                note.textContent = "Papapa Ta Kidrti liha Asa7bi"
                cat.src = "meme/happy.jpg";
              }
              stopTimer();
            
              playAgainButton.addEventListener('click', function() {
                remainingTime = 90; // reset remaining time
                sec4.style.display = "none";
                sec2.style.display = "block";
                left.style.display = "block";
                category.innerHTML = "Select Category";
                score = 0; // reset score
                questionIndex = 0; // reset question index
                answerButtons.forEach((button) => { // enable all answer buttons and reset their styles
                  button.disabled = false;
                  button.classList.remove('correct', 'incorrect');
                });
                displayQuestion(questionIndex); // display the first question again
              
                // stop the existing timer interval, if it exists
                if (timerInterval) {
                  clearInterval(timerInterval);
                }
                play.addEventListener('click', function() {
                  startTimer();
        
                })
              
              });
              
              
            }
            
        
            function displayQuestion(index) {
              const currentQuestion = quizData[index];
              const questionElement = document.querySelector('#sec3 h3');
              const imageElement = document.querySelector('#sec3 img');
              const answerButtons = document.querySelectorAll('#sec3 button');
        
              questionElement.textContent = currentQuestion.question;
              imageElement.src = currentQuestion.image;
        
              let answerIndex = 0;
              for (const answerLetter in currentQuestion.answers) {
                answerButtons[answerIndex].textContent = currentQuestion.answers[answerLetter];
                answerButtons[answerIndex].dataset.answerLetter = answerLetter;
                answerIndex++;
              }
            }
        
            const answerButtons = document.querySelectorAll('#sec3 button');
            answerButtons.forEach((button) => {
              button.addEventListener('click', function () {
                const selectedAnswer = button.dataset.answerLetter;
                const correctAnswer = quizData[questionIndex].correctAnswer;
        
                if (selectedAnswer === correctAnswer) {
                  numCorrectAnswers++;
                  score++;
                  button.classList.add('correct');
                  } else {
                  button.classList.add('incorrect');
                  }
                  
                      // disable all [answer buttons](poe://www.poe.com/_api/key_phrase?phrase=answer%20buttons&prompt=Tell%20me%20more%20about%20answer%20buttons.)
                      answerButtons.forEach((button) => {
                        button.disabled = true;
                      });
                  
                      // move to the next question after a 1 second delay
                      setTimeout(() => {
                        questionIndex++;
                  
                        // if all questions have been answered, show results
                        if (questionIndex === quizData.length) {
                          clearInterval(timer);
                          showResults();
                        } else {
                          // otherwise, display the next question
                          displayQuestion(questionIndex);
                  
                          // re-enable all answer buttons
                          answerButtons.forEach((button) => {
                            button.disabled = false;
                            button.classList.remove('correct', 'incorrect');
                          });
                        }
                      }, 1000);
                    });
                  });
                  
                  // display the first question
                  displayQuestion(questionIndex);
          }else if(category.innerHTML=="MOVIES/SERIES"){
            sec2.style.display = "none";
            left.style.display = "none";
            sec3.style.display = "block";
            let numCorrectAnswers = 0; // initialize number of correct answers to 0
          
            let questionIndex = 0; // initialize index for the first question
            let score = 0; // initialize score to 0
            const timerElement = document.querySelector('#timer');
        const countElement = document.querySelector('#count');
        let remainingTime = 90;
        let timerInterval;
        
        function startTimer() {
          const startTime = performance.now();
          timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((performance.now() - startTime) / 1000);
            remainingTime = Math.max(0, 90 - elapsedTime);
            countElement.textContent = remainingTime;
            timerElement.innerHTML = `Time Remaining: ${remainingTime}s`;
        
            if (remainingTime === 0) {
              clearInterval(timerInterval);
              showResults();
            }
          }, 1000); // update timer every 250 milliseconds
        }
        
        function stopTimer() {
          clearInterval(timerInterval);
        }
        
        startTimer();
        
        
            const quizData = [
              {
                question: "what year was matrix made?",
                image: "quizmovie/matrix2.jpg",
                answers: {
                  a: "1999",
                  b: "2000",
                  c: "2001",
                  d: "2002",
                },
                correctAnswer: "a",
              },
              {
                question: "what is the name of this actor?",
                image: "quizmovie/joker.jpeg",
                answers: {
                  a: "Jared Leto",
                  b: "Joaquin Phoenix",
                  c: "Mark Hamill",
                  d: "Troy Baker",
                },
                correctAnswer: "b",
              },
              {
                question: "What is the name of this Character?",
                image: "quizmovie/tokyo.jpg",
                answers: {
                  a: "Madrid",
                  b: "Lesbon",
                  c: "Paris",
                  d: "Tokyo",
                },
                correctAnswer: "d",
              },
              {
                question: "How many seasons of game of thrones?",
                image: "quizmovie/game-of-thrones.jpg",
                answers: {
                  a: "9",
                  b: "8",
                  c: "10",
                  d: "7",
                },
                correctAnswer: "b",
              },
              {
                question: "Who Said This Quote : I AM NOT IN DANGER,SKYLER, I AM THE DANGER?",
                image: "quizmovie/breaking bad.jpg",
                answers: {
                  a: "Walter White",
                  b: "Gustavo 'GUS",
                  c: "Saul GoodMan",
                  d: "Hank Schrader",
                },
                correctAnswer: "a",
              },
              {
                question: "Who won movie of the year 2020?",
                image: "quizmovie/movies award.jpg",
                answers: {
                  a: "Six Underground",
                  b: "In the Shadow of the Moon",
                  c: "El Camino",
                  d: "Parasite",
                },
                correctAnswer: "d",
              },
              {
                question: "what year was Rush Hour3 made??",
                image: "quizmovie/rush hour.jpg",
                answers: {
                  a: "2006",
                  b: "2007",
                  c: "2005",
                  d: "2008",
                },
                correctAnswer: "b",
              },
              {
                question: "What is the name of this Movie?",
                image: "quizmovie/fight club.jpg",
                answers: {
                  a: "The Matrix",
                  b: "the joker",
                  c: "The Shawshank Redemption",
                  d: "Fight Club",
                },
                correctAnswer: "d",
              },
              {
                question: "What is the name of this Movie?",
                image: "quizmovie/the_shawshank_redemption_-_h_-_1994.jpg",
                answers: {
                  a: "The Shawshank Redemption",
                  b: "The Joker",
                  c: "Fight Club",
                  d: "The Dark Knight",
                },
                correctAnswer: "a",
              },
              {
                question: "Who is the actor that played the hero in Inception?",
                image: "quizmovie/inception.jpg",
                answers: {
                  a: "Joseph Gordon-Levitt",
                  b: "Leonardo DiCaprio",
                  c: "Tom Berenger",
                  d: "Elliot Page",
                },
                correctAnswer: "b",
              },
            ];
        
           
        
            function showResults() {
              const resultElement = document.querySelector('#sec4 h1 span');
              const playAgainButton = document.querySelector('#sec4 button');
              const showname = document.getElementById('showname');
              const note = document.getElementById('note');
              const cat = document.getElementById('cat');
            
              const test = username.value;
            
              resultElement.textContent = score + "/" + quizData.length;
              showname.textContent = test;
              sec3.style.display = "none";
              sec4.style.display = "block";
              if(score ==1 ||score ==0 || score ==2 || score== 3 || score==4){
                note.textContent = "Malk Noob Asa7bi Malk?"
                cat.src = "meme/low.jpg";
        
              }else if(score == 5 || score == 6 || score == 7){
                note.textContent = "Not Bad Not Bad"
                cat.src = "meme/not bad.jpg";
              }else{
                note.textContent = "Papapa Ta Kidrti liha Asa7bi"
                cat.src = "meme/happy.jpg";
              }
              stopTimer();
            
              playAgainButton.addEventListener('click', function() {
                remainingTime = 90; // reset remaining time
                sec4.style.display = "none";
                sec2.style.display = "block";
                left.style.display = "block";
                category.innerHTML = "Select Category";
                score = 0; // reset score
                questionIndex = 0; // reset question index
                answerButtons.forEach((button) => { // enable all answer buttons and reset their styles
                  button.disabled = false;
                  button.classList.remove('correct', 'incorrect');
                });
                displayQuestion(questionIndex); // display the first question again
              
                // stop the existing timer interval, if it exists
                if (timerInterval) {
                  clearInterval(timerInterval);
                }
                play.addEventListener('click', function() {
                  startTimer();
        
                })
              
              });
              
              
            }
            
        
            function displayQuestion(index) {
              const currentQuestion = quizData[index];
              const questionElement = document.querySelector('#sec3 h3');
              const imageElement = document.querySelector('#sec3 img');
              const answerButtons = document.querySelectorAll('#sec3 button');
        
              questionElement.textContent = currentQuestion.question;
              imageElement.src = currentQuestion.image;
        
              let answerIndex = 0;
              for (const answerLetter in currentQuestion.answers) {
                answerButtons[answerIndex].textContent = currentQuestion.answers[answerLetter];
                answerButtons[answerIndex].dataset.answerLetter = answerLetter;
                answerIndex++;
              }
            }
        
            const answerButtons = document.querySelectorAll('#sec3 button');
            answerButtons.forEach((button) => {
              button.addEventListener('click', function () {
                const selectedAnswer = button.dataset.answerLetter;
                const correctAnswer = quizData[questionIndex].correctAnswer;
        
                if (selectedAnswer === correctAnswer) {
                  numCorrectAnswers++;
                  score++;
                  button.classList.add('correct');
                  } else {
                  button.classList.add('incorrect');
                  }
                  
                      // disable all [answer buttons](poe://www.poe.com/_api/key_phrase?phrase=answer%20buttons&prompt=Tell%20me%20more%20about%20answer%20buttons.)
                      answerButtons.forEach((button) => {
                        button.disabled = true;
                      });
                  
                      // move to the next question after a 1 second delay
                      setTimeout(() => {
                        questionIndex++;
                  
                        // if all questions have been answered, show results
                        if (questionIndex === quizData.length) {
                          clearInterval(timer);
                          showResults();
                        } else {
                          // otherwise, display the next question
                          displayQuestion(questionIndex);
                  
                          // re-enable all answer buttons
                          answerButtons.forEach((button) => {
                            button.disabled = false;
                            button.classList.remove('correct', 'incorrect');
                          });
                        }
                      }, 1000);
                    });
                  });
                  
                  // display the first question
                  displayQuestion(questionIndex);
          }else{
            alert("Please select a category first")
          }
          
          });