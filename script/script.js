const taskTitleList = [];
document.getElementById("add-btn").addEventListener('click', () => {
    addbuttonfunctionality();
});

document.addEventListener('keydown',(e)=>{
if(e.key=="Enter"){
    addbuttonfunctionality();
}
})

function addbuttonfunctionality (){
    const inputvalue = document.getElementById('task-input').value;
        if(!inputvalue ||inputvalue.trim()===""){
        alert("Please enter a task");
        return;
    }else{
    addingInList(inputvalue);
    generateTaskList(taskTitleList);
    }
}


function deletefromList(index) {
    taskTitleList.splice(index, 1);
    generateTaskList(taskTitleList);

}

function checkAnimation(ischecked, index) {
    console.log(ischecked, index);
    ischecked ? document.getElementById(`task-title-${index}`).style.textDecoration = "line-through" :
        document.getElementById(`task-title-${index}`).style.textDecoration = "none";
}

function addingInList(inputvalue) {
    taskTitleList.push(inputvalue);
}


function generateTaskList(taskTitleList) {
    let taskDetails = '';
    inputvalue = document.getElementById('task-input').value.value;
    taskTitleList.forEach((list, index) => {
        taskDetails += `<label id="task-title-${index}" data-index="${index}" class="font-bold flex  justify-between" for="${list}" ><input type="checkbox" data-index="${index}" onclick="checkAnimation(this.checked,this.dataset.index)" class="" id="${list}"><span class="">${list}</span> 
        <button  id="delete-btn-${list}" data-index="${index}" onclick="deletefromList(this.dataset.index)"
        class="p-1 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white rounded">
        <img src="/img/cross.png" alt="Delete Task" class="w-4 h-3">
    </button></label>    `
            ;
    });
    document.getElementById("task-details").innerHTML = taskDetails;
}

