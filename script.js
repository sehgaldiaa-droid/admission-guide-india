function sendEnquiry(event){
  event.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const email=document.getElementById("email").value.trim();
  const course=document.getElementById("course").value.trim();
  const university=document.getElementById("university").value.trim();
  const message=`Admission Enquiry%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0APreferred Course: ${encodeURIComponent(course)}%0ACollege/University: ${encodeURIComponent(university)}`;
  window.open(`https://wa.me/919711970601?text=${message}`,"_blank");
}