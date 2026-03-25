let allJobs = [];
let interviewJobs = [];
let rejectedJobs = [];

document.querySelectorAll('.interview').forEach(btn => {
    btn.addEventListener('click', () => {
        const job = btn.closest('.job');
        console.log(job);
        const jobTitle = job.querySelector('.card-title').innerText;
        const jobPosition = job.querySelector('.title-descript').innerText;
        const jobLocation = job.querySelector('.location-salary').innerText;
        const jobDescription = job.querySelector('.description').innerText;

        const jobObject = {
            jobTitle,
            jobPosition,
            jobLocation,
            jobDescription,
        }
        interviewJobs.push(jobObject);
        updateInterviewJobs();
    })
})

document.querySelectorAll('.rejected').forEach(btn => {
    btn.addEventListener('click', () => {
        rejectedJobs.push(btn);
        updateRejectedJobs();
    })
})

function updateAvailableJobs() {
    const availableJobs = document.getElementById('available-jobs');
    availableJobs.innerText = `${allJobs.length} jobs`;
    document.getElementById('total-value').innerText = allJobs.length;
}



function updateInterviewJobs() {
    document.getElementById('interview-value').innerText = interviewJobs.length;
}


function updateRejectedJobs() {
    document.getElementById('rejected-value').innerText = rejectedJobs.length;
}


function allJobsObject() {
    const jobsContainer = document.getElementById('jobs-container');
    const jobs = jobsContainer.querySelectorAll('.job');
    jobs.forEach(job => {
        const jobTitle = job.querySelector('.card-title').innerText;
        const jobPosition = job.querySelector('.title-descript').innerText;
        const jobLocation = job.querySelector('.location-salary').innerText;
        const jobDescription = job.querySelector('.description').innerText;

        const jobObject = {
            jobTitle,
            jobPosition,
            jobLocation,
            jobDescription,
        }
        allJobs.push(jobObject);

    });


}

allJobsObject();
updateAvailableJobs();
updateInterviewJobs();
updateRejectedJobs();
