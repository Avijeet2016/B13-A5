const allBtn = document.querySelectorAll('.btn');
const cardContainer = document.getElementById("card-container");
const currentPriority = {
    high: "bg-[#FEECEC] text-[#EF4444]",
    medium: "bg-[#FFF6D1] text-[#F59E0B]",
    low: "bg-[#EEEFF2] text-[#9CA3AF]"
}

const currentLabels = {
    
}


const loadIssues = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    displayAllIssues(data.data);
}

const displayAllIssues = (data) => {
    data.forEach(item => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="card  bg-[#FFFFFF] card-md shadow-sm border-t-4 border-green-400 space-y-4"> 
                <div class="flex justify-between items-center px-4 pt-4">
                    <img src="${item.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status .png"}" alt="Open/Closed Image">
                    <div class="badge ${currentPriority[item.priority]} font-bold px-5">${item.priority.toUpperCase()}</div>
                    </div>
                <h1 class="px-4 text-sm font-bold">${item.title}</h1>
                <p class="line-clamp-2 px-4 text-xs text-[#64748B]">${item.description}</p>
                <div class="px-4 flex gap-1">
                    <div class="badge badge-outline bg-[#FEECEC] font-semibold text-[#EF4444]"><i class="fa-solid fa-bug"></i> BUG</div>
                    <div class="badge badge-outline bg-[#FFF8DB] font-semibold text-[#D97706] whitespace-nowrap"><i class="fa-solid fa-life-ring"></i> HELP WANTED</div>
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

