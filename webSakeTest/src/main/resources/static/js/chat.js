/**
 * 
 */

const popup = document.querySelector('.chat-popup');		//彈出的div
const chatBtn = document.querySelector('.chat-btn');		//右下角聊天按鈕
const submitBtn = document.querySelector('.submit');	//送訊息
const chatArea = document.querySelector('.chat-area');	//訊息顯示
const inputElm = document.querySelector('input');	//輸入欄位
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// // send msg 
// submitBtn.addEventListener('click', ()=>{
//     let userInput = inputElm.value;

//     let temp = `<div class="out-msg">
//     <span class="my-msg">${userInput}</span>
//     <img src="img/me.jpg" class="avatar">
//     </div>`;

//     chatArea.insertAdjacentHTML("beforeend", temp);
//     inputElm.value = '';

// })