 //var alltask = [];
        // this is insertClick function to insert data
        function insertClick() {
            var addtasks = document.getElementById("insert").value;
            var taskname = document.getElementById("addtask").value;



            if (taskname.length == 0) {
                //alltask.push(addtask);
                addtasks.innerHTML = alert("please enter the any task");
                // document.getElementById("addtask").innerHTML = "";
            } else {
                document.getElementById("addingtask").innerHTML = document.getElementById("addingtask").innerHTML +
                    ` 
                    <div class = "addingtext">
                        <i class="bi bi-star-fill"></i>
                        <span id = "tasknames"> ${document.getElementById("addtask").value}
                            

                </span>
                <button class="delete" onclick="deleteClick()"> <i class="bi bi-trash-fill"></i> </button> 
                
                    </div>
                    
            
                        `; //now action for delete button
                var currtask = document.querySelectorAll(".delete");

                var count = 0;
                for (var i = 0; i < currtask.length; i++) {
                    currtask[i].onclick = function() {
                        this.parentNode.remove();

                    }
                    count = currtask.length;


                    document.querySelector("#show").innerHTML = count;

                    //document.querySelector("h5")



                }



            }


        }
