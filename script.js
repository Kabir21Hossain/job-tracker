let allJobs = [];
let interviewJobs = [];
let rejectedJobs = [];

document.querySelectorAll('.interview').forEach(btn => {
    btn.addEventListener('click', () => {
        const job = btn.closest('.job');
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
        const match=interviewJobs.find(job => job.jobTitle === jobObject.jobTitle);
        if(!match){
            interviewJobs.push(jobObject);
            job.querySelector('#hidden-btn').classList.remove('hidden');
            job.querySelector('#hidden-btn').innerText='Interview';
            job.querySelector('#hidden-btn').className='btn btn-soft btn-success bg-green-100 uppercase';
            job.querySelector('.rejected').disabled=true;
            

        }
        else{
            alert("It's already in the interview list.");
        }
        
        updateInterviewJobs();
    })
})

document.querySelectorAll('.rejected').forEach(btn => {
    btn.addEventListener('click', () => {
        const job = btn.closest('.job');
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
        const match = rejectedJobs.find(job => job.jobTitle === jobObject.jobTitle);
        if (!match) {
            rejectedJobs.push(jobObject);
            job.querySelector('#hidden-btn').classList.remove('hidden');
            job.querySelector('#hidden-btn').innerText = 'Rejected';
            job.querySelector('#hidden-btn').className='btn btn-soft btn-error bg-red-100 uppercase';
            job.querySelector('.interview').disabled=true;

        }
        else {
            alert("It's already in the rejected list.");
        }

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
    allJobs=[]
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


document.querySelectorAll('#remove').forEach(removeBtn=>{
    removeBtn.addEventListener('click',function(){
        const job=removeBtn.closest('.job');
        job.remove();
        allJobsObject();
        updateAvailableJobs();
        updateInterviewJobs();
        updateRejectedJobs();

    });
});

allJobsObject();
updateAvailableJobs();
updateInterviewJobs();
updateRejectedJobs();
