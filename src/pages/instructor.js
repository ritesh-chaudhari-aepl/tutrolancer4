 

const Instructor = () => {
 
  return (
    <section
      aria-label="instructors"
      class="bg-normalbg sm:pb-24 pb-20"
    >
      <div class="mx-auto max-w-screen-xl py-8 sm:py-16">
        <div class="flex px-6 flex-col items-center gap-3 sm:gap-6 sm:justify-center lg:flex-row sm:ml-0">
          <div class="card1">
            <div
              class="redbg card rounded-md w-[310px] sm:w-[480px] sm:h-80 p-4 sm:p-6 flex justify-center flex-col gap-0 sm:gap-2"
              
            >
              <span class="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
                build your career
              </span>
              <h3 class="font-medium font-Inter text-xl mt-2">
                Become An <span class="text-red-400">Instructor</span>{" "}
              </h3>
              <p class="capitalize text-sm mt-4 mb-6 text-[#ccc] font-Inter">
                learn at you own pace, move the
                <br /> between multiple courses
              </p>

              <button class="bg-btnColor text-normalbg text-white font-bold ring-0 rounded px-4 sm:px-2 sm:py-4 py-4 w-1/2">
                Apply Now
              </button>
            </div>
          </div>
          <div class="card2">
            <div
              class="greenbg card rounded-md w-[310px] sm:w-[480px] sm:h-80 p-4 sm:p-6 flex justify-center flex-col gap-0 sm:gap-2"
              
            >
              <span class="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
                build your career
              </span>
              <h3 class="font-medium font-Inter text-xl mt-2">
                Get Free <span class="text-red-400">Courses</span>{" "}
              </h3>
              <p class="capitalize text-sm mt-4  mb-6 text-[#ccc] font-Inter">
                learn at you own pace, move the
                <br /> between multiple courses
              </p>

              <button class="bg-dark text-normalbg text-white font-bold ring-0 rounded px-4 sm:px-3 sm:py-4 py-4 w-1/2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;