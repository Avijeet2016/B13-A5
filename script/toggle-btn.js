const allBtn = document.querySelectorAll('.btn');
const cardContainer = document.getElementById("card-container");
const totalIssues = document.getElementById("total-issue");
const cardDetails = document.getElementById("card-details");


const currentPriority = {
    high: "bg-[#FEECEC] text-[#EF4444]",
    medium: "bg-[#FFF6D1] text-[#F59E0B]",
    low: "bg-[#EEEFF2] text-[#9CA3AF]"
}


const labelStyle = {
  bug: {
    class:
      "badge badge-outline font-semibold text-xs bg-[#FEECEC] text-[#EF4444]",
    icon: "fa-solid fa-bug",
    text: "BUG",
  },
  "help wanted": {
    class:
      "badge badge-outline font-semibold text-xs bg-[#FFF8DB] text-[#D97706] whitespace-nowrap",
    icon: "fa-solid fa-life-ring",
    text: "HELP WANTED",
  },
  enhancement: {
    class:
      "badge badge-outline font-semibold text-xs bg-[#DEFCE8] text-[#00A96E]",
    icon: "fa-solid fa-star",
    text: "ENHANCEMENT",
  },
  documentation: {
    class:
      "badge badge-accent badge-outline font-semibold text-xs bg-[#F1FCF9]",
    icon: "fa-solid fa-book-medical", 
    text: "DOCUMENTATION",
  },
};


const loadIssues = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    displayAllIssues(data.data);
}

const displayAllIssues = (data) => {
    cardContainer.innerHTML = ""; 
    totalIssues.innerHTML = "";
    const newSpan = document.createElement('span');
    newSpan.innerHTML = `${data.length}`;
    totalIssues.appendChild(newSpan);

    data.forEach(item => { 
        const newDiv = document.createElement("div");

        let labelsHtml = "";
        item.labels.forEach(i => {
            if (labelStyle[i]) {
                labelsHtml += `<div class="${labelStyle[i].class}"><i class="${labelStyle[i].icon}"></i> ${labelStyle[i].text}</div>`;
            }
        });

        newDiv.innerHTML = `
        <div onclick="loadCardDetails(${item.id})" class="card  bg-[#FFFFFF] card-md shadow-sm ${item.status === "open" ? "border-t-4 border-[#00A96E]" : "border-t-4 border-[#A855F7]"} space-y-4"> 
                <div class="flex justify-between items-center px-4 pt-4">
                    <img src="${item.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status .png"}" alt="Open/Closed Image">
                    <div class="badge ${currentPriority[item.priority]} font-bold px-5">${item.priority.toUpperCase()}</div>
                    </div>
                <h1 class="px-4 text-sm font-bold">${item.title}</h1>
                <p class="line-clamp-2 px-4 text-xs text-[#64748B]">${item.description}</p>
                <div class="px-4 flex flex-wrap gap-1">
                    ${labelsHtml}
                </div>
                <hr class="text-gray-300 w-full">
                <div class="px-4 pb-4">
                    <p class="text-[#64748B]">#1 by ${item.author}</p>
                    <p class="text-[#64748B]">${new Date(item.createdAt).toLocaleDateString("en-US")}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(newDiv);
    });
    
}

const loadOpen = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    displayOpen(data.data);
}

const displayOpen = (data) => {
    const statusOpen = data.filter((item) => item.status === "open");
    cardContainer.innerHTML = "";
    totalIssues.innerHTML = "";
    const newSpan = document.createElement("span");
    newSpan.innerHTML = `${statusOpen.length}`;
    totalIssues.appendChild(newSpan);

    
    statusOpen.forEach((item) => {
        const newDiv = document.createElement("div");

        let labelsHtml = "";
        item.labels.forEach((i) => {
            if (labelStyle[i]) {
                labelsHtml += `<div class="${labelStyle[i].class}"><i class="${labelStyle[i].icon}"></i> ${labelStyle[i].text}</div>`;
            }
        });

        newDiv.innerHTML = `
                <div onclick="loadCardDetails(${item.id})" class="card bg-[#FFFFFF] card-md shadow-sm ${item.status === "open" ? "border-t-4 border-[#00A96E]" : "border-t-4 border-[#A855F7]"} space-y-4"> 
                        <div class="flex justify-between items-center px-4 pt-4">
                            <img src="${item.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status .png"}" alt="Open/Closed Image">
                            <div class="badge ${currentPriority[item.priority]} font-bold px-5">${item.priority.toUpperCase()}</div>
                            </div>
                        <h1 class="px-4 text-sm font-bold">${item.title}</h1>
                        <p class="line-clamp-2 px-4 text-xs text-[#64748B]">${item.description}</p>
                        <div class="px-4 flex flex-wrap gap-1">
                            ${labelsHtml}
                        </div>
                        <hr class="text-gray-300 w-full">
                        <div class="px-4 pb-4">
                            <p class="text-[#64748B]">#1 by ${item.author}</p>
                            <p class="text-[#64748B]">${new Date(item.createdAt).toLocaleDateString("en-US")}</p>
                        </div>
                    </div>
                `;
        cardContainer.appendChild(newDiv);
    });
}   


const loadClosed = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    displayClosed(data.data);
}

const displayClosed = (data) => {
    const statusClosed = data.filter((item) => item.status === "closed");
    cardContainer.innerHTML = "";
    totalIssues.innerHTML = "";
    const newSpan = document.createElement("span");
    newSpan.innerHTML = `${statusClosed.length}`;
    totalIssues.appendChild(newSpan);
    console.log(statusClosed);
    statusClosed.forEach((item) => {
    const newDiv = document.createElement("div");

    let labelsHtml = "";
    item.labels.forEach((i) => {
        if (labelStyle[i]) {
            labelsHtml += `<div class="${labelStyle[i].class}"><i class="${labelStyle[i].icon}"></i> ${labelStyle[i].text}</div>`;
        }
    });

    newDiv.innerHTML = `
                <div onclick="loadCardDetails(${item.id})" class="card bg-[#FFFFFF] card-md shadow-sm ${item.status === "open" ? "border-t-4 border-[#00A96E]" : "border-t-4 border-[#A855F7]"} space-y-4"> 
                        <div class="flex justify-between items-center px-4 pt-4">
                            <img src="${item.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status .png"}" alt="Open/Closed Image">
                            <div class="badge ${currentPriority[item.priority]} font-bold px-5">${item.priority.toUpperCase()}</div>
                            </div>
                        <h1 class="px-4 text-sm font-bold">${item.title}</h1>
                        <p class="line-clamp-2 px-4 text-xs text-[#64748B]">${item.description}</p>
                        <div class="px-4 flex flex-wrap gap-1">
                            ${labelsHtml}
                        </div>
                        <hr class="text-gray-300 w-full">
                        <div class="px-4 pb-4">
                            <p class="text-[#64748B]">#1 by ${item.author}</p>
                            <p class="text-[#64748B]">${new Date(item.createdAt).toLocaleDateString("en-US")}</p>
                        </div>
                    </div>
                `;
    cardContainer.appendChild(newDiv);
  });
};  

document.getElementById("toggle-btn").addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        allBtn.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        if (e.target.id === "all-btn") {
            loadIssues();
        }
        else if (e.target.id === "open-btn") {
            loadOpen();
        }
        else if (e.target.id === "closed-btn") {
            loadClosed();
        }
    }
})

const loadCardDetails = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCardDetails(data.data);
};

const displayCardDetails = (data) => {
    cardDetails.innerHTML = "";
    console.log(data);
    let labelsHtml = "";
    data.labels.forEach((i) => {
      if (labelStyle[i]) {
        labelsHtml += `<div class="${labelStyle[i].class}"><i class="${labelStyle[i].icon}"></i> ${labelStyle[i].text}</div>`;
      }
    });
    cardDetails.innerHTML = `
        <h1 class="text-2xl font-bold">${data.title}</h1>
                    <div class="flex items-center gap-5">
                        <div class="badge bg-[#00A96E] text-xs font-bold text-white px-5">${data.status.charAt(0).toUpperCase()+data.status.slice(1)}</div>
                        <div>
                            <ul class="list-disc text-gray-500 flex gap-5 text-xs">
                                <li>Opened by ${data.author}</li>
                                <li>${new Date(data.createdAt).toLocaleDateString("en-US")}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-4 flex flex-wrap gap-1">
                            ${labelsHtml}
                    </div>
                    <p class="line-clamp-2 text-md text-[#64748B]">${data.description}</p>
                    <div class="grid grid-cols-2 items-start bg-[#F8FAFC] p-4">
                        <div>
                            <p class="text-[#64748B]">Assignee:</p>
                            <p class="font-bold">${data.assignee? data.assignee : "N/A"}</p>
                        </div>
                        <div>
                            <p class="text-[#64748B]">Priority:</p>
                            <div class="badge bg-[#EF4444] font-semibold text-xs text-white">${data.priority.toUpperCase()}</div>
                        </div>
                    </div>
    `;
    document.getElementById("my_modal_5").showModal();
}


loadIssues();