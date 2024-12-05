  // document.getElementById('alwi').onclick = function () {
  //   let lists = document.querySelectorAll('.item');
  //   document.getElementById('slide').appendChild(lists[0]);
  // };
  // document.getElementById('gabriel').onclick = function () {
  //   let lists = document.querySelectorAll('.item');
  //   document.getElementById('slide').appendChild(lists[1]);
  // };
  // document.getElementById('faleh').onclick = function () {
  //   let lists = document.querySelectorAll('.item');
  //   document.getElementById('slide').appendChild(lists[0]);
  // };


  document.getElementById('selection').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };
  document.getElementById('info').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };
  document.getElementById('pesan').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };


  
document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
};
