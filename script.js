let allJobs = [];
let interviewJobs = [];
let rejectedJobs = [];

const jobsContainer = document.getElementById('jobs-container');
const interviewJobsContainer = document.getElementById('interview-jobs-container');
const rejectedJobsContainer = document.getElementById('rejected-jobs-container');


const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

let availableJobs = document.getElementById('available-jobs');
let text = document.getElementById('text');


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
        const match = interviewJobs.find(job => job.jobTitle === jobObject.jobTitle);
        if (!match) {
            interviewJobs.push(jobObject);
            job.querySelector('#hidden-btn').classList.remove('hidden');
            job.querySelector('#hidden-btn').innerText = 'Interview';
            job.querySelector('#hidden-btn').className = 'btn btn-soft btn-success bg-green-100 uppercase';
            job.querySelector('.rejected').disabled = true;


        }
        else {
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
            job.querySelector('#hidden-btn').className = 'btn btn-soft btn-error bg-red-100 uppercase';
            job.querySelector('.interview').disabled = true;

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
    allJobs = [];
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


document.querySelectorAll('#remove').forEach(removeBtn => {
    removeBtn.addEventListener('click', function () {
        const job = removeBtn.closest('.job');
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

allBtn.addEventListener('click', function () {
    text.innerText = 'Available Jobs';
    availableJobs.innerText = `${allJobs.length} jobs`;
    jobsContainer.classList.remove('hidden');
    interviewJobsContainer.classList.add('hidden');
    rejectedJobsContainer.classList.add('hidden');
    allBtn.classList.add('bg-blue-500', 'text-white');
    interviewBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedBtn.classList.remove('bg-blue-500', 'text-white');

});

interviewBtn.addEventListener('click', function () {
    text.innerText = 'Interview Jobs';
    availableJobs.innerText = `${interviewJobs.length} of ${allJobs.length} jobs`;
    jobsContainer.classList.add('hidden');
    rejectedJobsContainer.classList.add('hidden');
    interviewJobsContainer.classList.remove('hidden');

    allBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedBtn.classList.remove('bg-blue-500', 'text-white');
    interviewBtn.classList.add('bg-blue-500', 'text-white');
    interviewJobsContainer.innerHTML = '';



    interviewJobs.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job card w-full bg-base-100 card-md shadow-xl';
        div.innerHTML = `<div class="card-body space-y-5 border-0 px-6 pt-6 pb-[52px]">

                    <div class="flex justify-between items-center">
                        <div class="left-part">
                            <h2 class="card-title text-[#002C5C] text-xl">${job.jobTitle}</h2>
                            <p class="title-descript text-[#323B49] font-medium">${job.jobPosition}</p>
                        </div>

                        <div
                            class="right w-14 h-14 rounded-full border-2 border-gray-300 bg-[#F4F4F5] flex items-center justify-center  hover:text-red-500 hover:bg-red-100 hover:translate-y-0.25" onclick="removeJob(this, '${job.jobTitle}')">
                            <i class="fa-solid fa-trash-can cursor-pointer " id="remove"></i>
                        </div>

                    </div>

                    <p class="text-[#64748B] text-sm location-salary">${job.jobLocation}</p>

                    <div class="space-y-2">
                        <div class="card-actions">
                            <button class="btn  btn-soft btn-success bg-green-100 uppercase hidden" id="hidden-btn"></button>
                        </div>
                        <p class="text-[#323B49] text-sm description">${job.jobDescription}</p>
                    </div>

                    <div class="btns space-x-3">
                        <button class="interview btn btn-outline btn-success font-bold uppercase">Interview</button>
                        <button class="rejected btn btn-outline btn-error font-bold uppercase" disabled>Rejected</button>
                    </div>

                </div>
        `

        interviewJobsContainer.appendChild(div);


        });

        

    });


    rejectedBtn.addEventListener('click',function(){
        text.innerText = 'Rejected Jobs';
        availableJobs.innerText = `${rejectedJobs.length} of ${allJobs.length} jobs`;
        jobsContainer.classList.add('hidden');
        interviewJobsContainer.classList.add('hidden');
        rejectedJobsContainer.classList.remove('hidden');

        allBtn.classList.remove('bg-blue-500', 'text-white');
        interviewBtn.classList.remove('bg-blue-500', 'text-white');
        rejectedBtn.classList.add('bg-blue-500', 'text-white');
        rejectedJobsContainer.innerHTML = '';



        rejectedJobs.forEach(job => {
            const div = document.createElement('div');
            div.className = 'job card w-full bg-base-100 card-md shadow-xl';
            div.innerHTML = `<div class="card-body space-y-5 border-0 px-6 pt-6 pb-[52px]">

                    <div class="flex justify-between items-center">
                        <div class="left-part">
                            <h2 class="card-title text-[#002C5C] text-xl">${job.jobTitle}</h2>
                            <p class="title-descript text-[#323B49] font-medium">${job.jobPosition}</p>
                        </div>

                        <div
                            class="right w-14 h-14 rounded-full border-2 border-gray-300 bg-[#F4F4F5] flex items-center justify-center  hover:text-red-500 hover:bg-red-100 hover:translate-y-0.25" onclick="removeJob(this, '${job.jobTitle}')">
                            <i class="fa-solid fa-trash-can cursor-pointer " id="remove"></i>
                        </div>

                    </div>

                    <p class="text-[#64748B] text-sm location-salary">${job.jobLocation}</p>

                    <div class="space-y-2">
                        <div class="card-actions">
                            <button class="btn  btn-soft btn-success bg-green-100 uppercase hidden" id="hidden-btn"></button>
                        </div>
                        <p class="text-[#323B49] text-sm description">${job.jobDescription}</p>
                    </div>

                    <div class="btns space-x-3">
                        <button class="interview btn btn-outline btn-success font-bold uppercase" disabled>Interview</button>
                        <button class="rejected btn btn-outline btn-error font-bold uppercase">Rejected</button>
                    </div>

                </div>
        `

            rejectedJobsContainer.appendChild(div);


            });

        });
    

function removeJob(element, jobTitle) {
    const jobCard = element.closest('.job');
    jobCard.remove();

    interviewJobs = interviewJobs.filter(job => job.jobTitle !== jobTitle);
    rejectedJobs = rejectedJobs.filter(job => job.jobTitle !== jobTitle);

   
    const allJobsInContainer = jobsContainer.querySelectorAll('.job');
    allJobsInContainer.forEach(j => {
        if (j.querySelector('.card-title').innerText === jobTitle) {
            j.remove();
        }
    });

    
    allJobsObject();
    updateAvailableJobs();
    updateInterviewJobs();
    updateRejectedJobs();

    
    if (!interviewJobsContainer.classList.contains('hidden')) {
        availableJobs.innerText = `${interviewJobs.length} of ${allJobs.length} jobs`;

    } 
    
    else if (!rejectedJobsContainer.classList.contains('hidden')) {
        availableJobs.innerText = `${rejectedJobs.length} of ${allJobs.length} jobs`;
    }
}

