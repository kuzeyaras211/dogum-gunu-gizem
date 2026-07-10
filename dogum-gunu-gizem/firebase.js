// Firebase Console'dan aldığın config'i buraya yapıştır.
// Daha sonra Firestore kodları eklenecek.
document.getElementById('send').onclick=()=>{
const n=document.getElementById('name').value;
const m=document.getElementById('msg').value;
const d=document.createElement('div');
d.className='card';
d.innerHTML='<b>'+n+'</b><br>'+m;
document.getElementById('list').prepend(d);
};