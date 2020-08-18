

$(document).ready(function ($) {


  //Меняющийся блок

  $('.wrap-animate__text').each(function () {
    let str = $(this).find('p').text();
    let arr = str.split('');
    let that = this;

    arr.forEach(function (item, i, arr) {
      $(that).find("p").append('<span class="">' + item + '</span>')
    });

  });

  function addClass() {
    $('.wrap-animate__text span').addClass("span-animate")
  }

  setTimeout(addClass,2500)


  function showElem_1() {
    $('.wrap-animate-1').fadeOut(500, "linear",function () {
      $('.wrap-animate-2').fadeIn(1000, "linear",function () {

      })
    })
  }
  function showElem_2() {
    $('.wrap-animate-2').fadeOut(500, "linear",function () {
      $('.wrap-animate-1').fadeIn(1000, "linear",function () {

      })
    })
  }
  // setTimeout(showElem_1,2500)
  // setTimeout(showElem_2,5000)
  setInterval(showElem_1,3000)
  setInterval(showElem_2,6000)






  //Меняющийся блок
  function we(e) {
    var words = document.getElementsByClassName(e)


    wordArray = [],
      currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

  }

  function wer(e) {
    var wordss = document.getElementsByClassName(e)


    wordArrayZ = [],
      currentWordR = 0;

    wordss[currentWordR].style.opacity = 1;
    for (var i = 0; i < wordss.length; i++) {
      splitLetters(wordss[i]);
    }

    function changeWord() {
      var cw = wordArrayZ[currentWordR];
      var nw = currentWordR == wordss.length-1 ? wordArrayZ[0] : wordArrayZ[currentWordR+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWordR = (currentWordR == wordArrayZ.length-1) ? 0 : currentWordR+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArrayZ.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

  }

  // we('word')
  // wer('word-2')




  //всплывающая подсказка в хедере

  $('.count__haniel')
    .popup({
      popup: $('.pop-help__haniel'),
      on: 'hover',
      position: 'bottom center',
    });
  $('.count__cup')
    .popup({
      popup: $('.pop-help__cup'),
      on: 'hover',
      position: 'bottom center',
    });
  //Высота заголовка
  $(window).resize(function(){
    // fun()
  });
  let fun = function () {
    let height_title = $('.wrap-title').height()
    $('.earth').css('top',height_title)
  }


});

