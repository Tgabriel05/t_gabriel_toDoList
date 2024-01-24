
let noteText = document.getElementById('note-text');
let listContainer = document.getElementById('listContainer');

function addNote(){

  if(noteText.value === ''){
    noteText.classList.add('error');
    setTimeout(()=>{
      noteText.classList.remove('error')
    },500)
  } else{
    let li = document.createElement('li')
    li.innerHTML = noteText.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  noteText.value = ''
}

listContainer.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
  }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
  }
}, false)


noteText.addEventListener('keydown', function(e){

  if(e.key === 'Enter'){
    e.preventDefault();

    addNote();
  }

})