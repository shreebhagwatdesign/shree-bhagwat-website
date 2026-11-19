// EDIT THESE VALUES BEFORE PUBLISHING. Do not put private keys in this file.
const BUSINESS = {
  whatsapp: '', // e.g. '919876543210' (country code + number, no + or spaces)
  phone: '',
  email: '',
  address: ''
};
const $ = s => document.querySelector(s);
$('#year').textContent = new Date().getFullYear();
$('#menuBtn').addEventListener('click', () => $('#nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
$('#contactPhone').textContent = BUSINESS.phone || 'Number to be added';
$('#contactEmail').textContent = BUSINESS.email || 'Email to be added';
$('#contactAddress').textContent = BUSINESS.address || 'Address to be added';
$('#topContact').textContent = BUSINESS.phone ? `☎ ${BUSINESS.phone}` : 'Contact details coming soon';
let message='';
$('#quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const attachment=$('#referenceFile').files[0];
  message = `*Shree Bhagwat Design & Projection — Enquiry*\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nDetails: ${data.get('details')}${attachment ? `\nReference file selected (send separately): ${attachment.name}` : ''}`;
  $('#messageOutput').value=message;
  $('#formResult').hidden=false;
  if(/^\d{10,15}$/.test(BUSINESS.whatsapp)) {
    $('#whatsappBtn').href=`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
    $('#whatsappBtn').hidden=false;
  }else{$('#whatsappBtn').hidden=true;}
  $('#formResult').scrollIntoView({behavior:'smooth',block:'nearest'});
});
$('#copyBtn').addEventListener('click',async()=>{
  try {await navigator.clipboard.writeText(message);$('#copyBtn').textContent='Copied ✓';}
  catch {$('#messageOutput').focus();$('#messageOutput').select();$('#copyBtn').textContent='Select text and copy';}
});
