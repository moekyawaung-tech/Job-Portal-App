const jobs = [
    { id:1, title:"Frontend Developer", company:"Google Myanmar", category:"tech", salary:"1,200,000 Kyats", desc:"React, JavaScript, Tailwind" },
    { id:2, title:"Financial Analyst", company:"KBZ Bank", category:"finance", salary:"800,000 Kyats", desc:"Excel, Financial Modeling" },
    { id:3, title:"Digital Marketing", company:"Coca-Cola", category:"marketing", salary:"650,000 Kyats", desc:"Social Media, SEO" },
    { id:4, title:"UI/UX Designer", company:"Grab", category:"design", salary:"950,000 Kyats", desc:"Figma, User Research" }
];

function renderJobs(filteredJobs) {
    const container = document.getElementById('jobList');
    container.innerHTML = filteredJobs.map(job => `
        <div class="job-card" onclick="showJob(${job.id})">
            <h3>${job.title}</h3>
            <p class="company">${job.company} • ${job.salary}</p>
        </div>
    `).join('');
}

window.showJob = function(id) {
    const job = jobs.find(j => j.id === id);
    document.getElementById('modalTitle').textContent = job.title;
    document.getElementById('modalCompany').textContent = job.company + " - " + job.salary;
    document.getElementById('modalDesc').textContent = job.desc;
    document.getElementById('modal').style.display = 'flex';
};

window.closeModal = function() {
    document.getElementById('modal').style.display = 'none';
};

window.applyJob = function() {
    alert("✅ Application submitted successfully! (Demo)");
    closeModal();
};

document.getElementById('search').addEventListener('input', filterJobs);
document.getElementById('category').addEventListener('change', filterJobs);

function filterJobs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category').value;
    
    let filtered = jobs;
    if (searchTerm) {
        filtered = filtered.filter(j => 
            j.title.toLowerCase().includes(searchTerm) || 
            j.company.toLowerCase().includes(searchTerm)
        );
    }
    if (category) {
        filtered = filtered.filter(j => j.category === category);
    }
    renderJobs(filtered);
}

renderJobs(jobs);
