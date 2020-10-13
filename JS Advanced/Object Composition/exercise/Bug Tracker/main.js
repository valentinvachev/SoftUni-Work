function solve() {
    const bugs = new Map();
    let id = 0;
    let element = document.getElementsByTagName('body')[0];

    function report(author,description,reproducible,severity) {
        let bug = {ID: id++,
            author,
            description,
            reproducible,
            severity,
            status: 'Open'};

        bugs.set(bug.ID,bug);
        renderHTML('ID');    
    }

    function setStatus(id,newStatus) {
        bugs.get(id).status = newStatus;
        renderHTML('ID'); 
    }

    function remove(id) {
        bugs.delete(id);
        renderHTML('ID');
    }

    function sort(method) {
      renderHTML(method);
    }

    function output(selector) {
        element = document.querySelector(`${selector}`);
    }

    function renderHTML(method) {
        element.innerHTML = '';
        Array.from(bugs.values())
        .sort((a,b)=> {
           if (method.localeCompare('author')===0) {
               return a.author.localeCompare(b.author);
           } else if (method.localeCompare('severity')===0) {
               return a.severity-b.severity;
           } else if (method.localeCompare('ID')===0) {
               return a.ID - b.ID;
           }})
        .forEach(e=>{
            element.innerHTML += HTMLCreator(e);
        });
    }


    function HTMLCreator(obj) {
        return `<div id="report_${obj.ID}" class="report">
        <div class="body">
            <p>${obj.description}</p>
        </div>
        <div class="title">
            <span class="author">Submitted by: ${obj.author}</span>
            <span class="status">${obj.status} | ${obj.severity}</span>
        </div>
    </div>`;
}

    return {
        report,
        setStatus,
        remove,
        sort,
        output
    };

}

