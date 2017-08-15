function changeColor() {
  var letters='ABCDE'.split('');
  var color='#';
  for (var i = 0; i < 3 ;i++) {
    color+=letters[Math.floor(Math.random()*(letters.length))];
  }
  document.body.style.backgroundColor=color;
  document.getElementById('mainQuote').style.color=color;
}

function newQuote() {
  var quotes=['There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.- C.A.R. Hoare',
  'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. -Martin Golding',
  'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. -Linus Torvalds',
  'To iterate is human, to recurse divine.- L. Peter Deutsch',
  'The trouble with programmers is that you can never tell what a programmer is doing until it is too late.- Seymour Cray',
  'Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.- Alan Kay',
  'Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.- Larry Wall',
  'First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.- George Carrette',
  'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.- Donald Knuth',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.- Brian W. Kernighan.'
  ];
  var randomNumber=Math.floor(Math.random()*(quotes.length))
  rq=document.getElementById('mainQuote').innerHTML=quotes[randomNumber];
  changeColor();
}

function tweet(){
  var page='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+rq;
  window.open(page,'_blank');
}
