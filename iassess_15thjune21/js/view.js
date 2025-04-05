/* https://api.countapi.xyz/create?namespace=counter&key=iassessdigital&value=0

https://api.countapi.xyz/get/counter/iassessdigital

https://api.countapi.xyz/update/counter/iassessdigital/?amount=1 */


function updateCounter(){
    fetch('https://api.countapi.xyz/update/counter/iassessdigital/?amount=1')
    .then(res => res.json())
    .then(data => counterElement.innerHTML = data.value)
} 

updateCounter()

counterElement = document.getElementsByClassName('view-count') [0];