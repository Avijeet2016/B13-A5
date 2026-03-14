const allBtn = document.querySelectorAll('.btn');
const cardContainer = document.getElementById("card-container");
const badgesContainer = document.getElementById("badges-container");
console.log(badgesContainer);

const currentPriority = {
    high: "bg-[#FEECEC] text-[#EF4444]",
    medium: "bg-[#FFF6D1] text-[#F59E0B]",
    low: "bg-[#EEEFF2] text-[#9CA3AF]"
}


const labelStyle = {
  bug: {
    class:
      "badge badge-outline font-semibold text-sm bg-[#FEECEC] text-[#EF4444]",
    icon: "fa-solid fa-bug",
    text: "BUG",
  },
  "help wanted": {
    class:
      "badge badge-outline font-semibold text-sm bg-[#FFF8DB] text-[#D97706] whitespace-nowrap",
    icon: "fa-solid fa-life-ring",
    text: "HELP WANTED",
  },
  enhancement: {
    class:
      "badge badge-outline font-semibold text-sm bg-[#DEFCE8] text-[#00A96E] whitespace-",
    icon: "fa-solid fa-star",
    text: "ENHANCEMENT",
  },
};


const loadIssues = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    displayAllIssues(data.data);
}

const displayAllIssues = (data) => {
    data.forEach(item => {
        const newDiv = document.createElement("div");

        let labelsHtml = "";
        item.labels.forEach(i => {
            if (labelStyle[i]) {
                labelsHtml += `<div class="${labelStyle[i].class}"><i class="${labelStyle[i].icon}"></i> ${labelStyle[i].text}</div>`;
            }
        });

        newDiv.innerHTML = `
        <div class="card  bg-[#FFFFFF] card-md shadow-sm ${item.status === "open" ? "border-t-4 border-[#00A96E]" : "border-t-4 border-[#A855F7]"} space-y-4"> 
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




document.getElementById("toggle-btn").addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        allBtn.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        if (e.target.id === "all-btn") {
            loadIssues();
        }
    }
})

