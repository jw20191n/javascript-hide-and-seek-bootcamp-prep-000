function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector('#nested .target')

}

function increaseRankBy(n){
  let rank = document.querySelectorAll('ul.ranked-list li')
  for(let i=0;i<rank.length;i++){
    rank[i].innerHTML = i+n.parseInt();
    
  } 
}