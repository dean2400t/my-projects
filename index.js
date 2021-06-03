let prevColsInRow;
function addRowClass(){
    let colsInRow;
    if (window.innerWidth<992)
        colsInRow=1;
    else if (window.innerWidth<1200)
        colsInRow=2;
    else
        colsInRow=3;
    
    if (prevColsInRow!==colsInRow)
    {
        const projects = document.getElementsByClassName("project");
        let projectNumber=0;
        for(var i = 0; i < projects.length; i++)
        {
            const project=projects[i];
            if (prevColsInRow){
                const prevRow=$(project).attr('data-projNum');
                $(project).removeClass('rowNum'+prevRow);
            }
            const newRow=parseInt(parseInt(projectNumber)/colsInRow)+1;
            $(project).attr('data-projNum', newRow);
            $(project).addClass('rowNum'+newRow);
            projectNumber++;
        }
        prevColsInRow=colsInRow;
    }
}

function mouseOverDemo(idOfProject){
    addRowClass();
    const rowNum=$('#'+idOfProject).attr("data-projNum");
    $('.demoPass:not(#'+idOfProject+')').removeClass('demoPass');
    $('.demoPassHidden.rowNum'+rowNum+':not(#'+idOfProject+')').addClass('demoPassBlank');
    $('#'+idOfProject).addClass('demoPass');
}



function mouseOutCard(){
    $('.demoPass').removeClass('demoPass');
    $('.demoPassHidden').removeClass('demoPassBlank');
}

