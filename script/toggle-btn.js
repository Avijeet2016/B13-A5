const allBtn = document.querySelectorAll('.btn');
document.getElementById("toggle-btn").addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        allBtn.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        if (e.target.id === "all-btn") {
            console.log("All Btn Clicked");
        }
    }
})
