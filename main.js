// Use Fetch API to asynchronously fetch the categorized data from JSON file 
async function fetchData() {
    const response = await fetch('./projects.json');
    const data = response.json();
    return data;
}

async function showProject(project) {

    const data = await fetchData();

    let header = "";
    let img = "";
    let description = "";

    for (let i = 0; i < data.length; i++) {

        if (data[i].Header === project) {
            header = data[i].Header;
            img = data[i].Image;
            description = data[i].Description;
        }
    }

    let projectHeader = document.getElementById("displayZoneHeader");
    let projectImage = document.getElementById("displayZoneImage");
    let projectParagraph = document.getElementById("displayZoneDescription");

    projectHeader.textContent = header;
    projectImage.src = img;
    projectParagraph.textContent = description;

    if(project === "8-Puzzle") {
        projectImage.style.width = "250px";
    }


}




