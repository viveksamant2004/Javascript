<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />

    <title> RESUME </title>

    <!-- <meta
      name="description"
      content="Freebie 62 - Resume Alternate (Tailwind CSS). Check out more at https://pixelcave.com"
    />
    <meta name="author" content="pixelcave" /> -->

    <!-- Icons -->
    <!-- <link
      rel="icon"
      href="https://cdn.pixelcave.com/favicon.svg"
      sizes="any"
      type="image/svg+xml"
    />
    <link
      rel="icon"
      href="https://cdn.pixelcave.com/favicon.png"
      type="image/png"
    /> -->

    <!-- Inter web font from bunny.net (GDPR compliant) -->
    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link
      href="https://fonts.bunny.net/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />

    <!-- Tailwind CSS Play CDN (mainly for development/testing purposes) -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio"></script>

    <!-- Tailwind CSS v3 Configuration -->
    <script>
      const defaultTheme = tailwind.defaultTheme;
      const colors = tailwind.colors;
      const plugin = tailwind.plugin;

      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
          },
        },
      };
    </script>

    <!-- Alpine.js -->
    <script
      defer
      src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
    ></script>

    <!-- Alpine.js (x-cloak - https://alpinejs.dev/directives/cloak) -->
    <style>
      [x-cloak] {
        display: none !important;
      }
    </style>
  </head>
  <body>
    <!-- Page Container -->
    <div
      x-data="{
        darkMode: false,
        toggleDarkMode() {
          this.darkMode = ! this.darkMode;

          // Toggle dark class on html element
          if (this.darkMode) {
            document.body.parentNode.classList.add('dark');
          } else {
            document.body.parentNode.classList.remove('dark');
          }
        }
      }"
      class="min-h-dvh min-w-[320px] bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100"
    >
      <!-- Toggle Dark Mode -->
      <div
        class="fixed right-0 top-0 z-50 flex size-12 items-center justify-center"
      >
        <button
          x-on:click="toggleDarkMode()"
          type="button"
          class="inline-block size-9 text-gray-600 hover:opacity-75 dark:text-gray-400"
        >
          <svg
            x-show="!darkMode"
            x-cloak
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="inline-block size-6"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <svg
            x-show="darkMode"
            x-cloak
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="inline-block size-6"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
      </div>
      <!-- END Toggle Dark Mode -->

      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-12">
          <!-- Info -->
          <div
            class="bg-gray-100 p-5 text-left dark:bg-gray-900 md:col-span-4 lg:p-14"
          >
            <h1
              class="leading-tighter mt-5 text-4xl font-extrabold lg:text-6xl"
            >
              Vivek<br />
              Samant
            </h1>
            <h2 class="mt-3 text-xl text-purple-600 dark:text-purple-500">
              Web Developer
            </h2>
            <!-- <div class="-mx-5 mt-10 lg:-mx-16">
              <img
                src="assets/christian-buehner-DItYlc26zVI-unsplash.jpg"
                class="inline-block lg:rounded-sm"
                alt="Vivek Samant photo"
              />
            </div> -->
            <p
              class="mt-10 text-balance leading-relaxed text-gray-700 dark:text-gray-300"
            >
              I am a skilled web developer, proficient in HTML, CSS, and
              JavaScript, who combines technical expertise with a passion for
              creating visually appealing and user-friendly websites.
            </p>
            <div class="mt-10 space-y-5">
              <div class="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"
                >
                  <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path
                    d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"
                  />
                </svg>
                <span class="truncate font-medium">Noida, India</span>
              </div>
              <div class="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                <span class="truncate font-medium">+91 7895020182</span>
              </div>
              <div class="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"
                >
                  <path
                    d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
                  />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  <path d="M19 16v6" />
                  <path d="M16 19h6" />
                </svg>
                <a
                  href="viveksamant2004@gmail.com"
                  class="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
                >
                viveksamant2004@gmail.com
                </a>
              </div>
              <div class="flex items-center gap-5">
               
              </div>
            </div>
          </div>
          <!-- END Info -->

          <!-- Bio -->
          <div class="mx-auto max-w-2xl space-y-16 p-5 md:col-span-8 md:p-10">
            <!-- Education -->
            <div>
              <div
                class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900"
              >
                <h3 class="text-xl font-medium">Education</h3>
              </div>
              <ul
                class="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950"
              >
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                  <h4
                    class="text-sm font-semibold text-purple-600 dark:text-purple-500"
                  >
                    2020-2021
                  </h4>
                  <h5 class="mb-2 font-bold">
                    High School
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                    I passed from a CBSE based school by obtaining 64%
                  </p>
                </li>
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                  <h4
                    class="text-sm font-semibold text-purple-600 dark:text-purple-500"
                  >
                    2022-2023
                  </h4>
                  <h5 class="mb-2 font-bold">
                    Intermediate
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                    I passed from a CBSE based school by obtaining 81%
                  </p>
                </li>
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                  <h4
                    class="text-sm font-semibold text-purple-600 dark:text-purple-500"
                  >
                   2023-2026
                  </h4>
                  <h5 class="mb-2 font-bold">
                    Bachelor in Computer Science, Galgotias University, India
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                    I developed the skills and knowledge that serve as the foundation for my expertise in web development and programming with a degree in computer science from Galgotias University in India.
                  </p>
                </li>
              </ul>
            </div>
            <!-- END Education -->

            <!-- Certification -->
            <div>
              <div
                class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900"
              >
                <h3 class="text-xl font-medium">Certification</h3>
              </div>
              <ul
                class="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950"
              >
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                
                  <h5 class="mb-2 font-bold">
                 Web development Certificate from Aviraj Infotech 
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                    As a Web Designer I enhanced my skills and worked on different projects at Aviraj Infotech for 6 months, and used my abilities to create beautiful and user-focused websites for improved digital engagement, I was able to combine my passion of functionality and knowledge by working in projects.
                  </p>
                </li>
                
              </ul>
            </div>
            <!-- END Work Experience -->
             <!-- skills -->
             <div>
              <div
                class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900"
              >
                <h3 class="text-xl font-medium">SKills</h3>
              </div>
              <ul
                class="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950"
              >
                  <h5 class="mb-2 font-bold">
                    HTML and CSS                   
                  </h5>                  
                                               
                  <h5 class="mb-2 font-bold">
                  JavaScript                   
                  </h5>                                 
                  <h5 class="mb-2 font-bold">
                  Python                   
                  </h5>                                  
                  <h5 class="mb-2 font-bold">
                  C++                   
                  </h5>
                  <h5 class="mb-2 font-bold">
                   Good Communication skills                    
                  </h5>
                  <h5 class="mb-2 font-bold">
                  Team work              
                   </h5>
 

              
                
              </ul>
            </div>
            <!-- Projects -->
            <div>
              <div
                class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900"
              >
                <h3 class="text-xl font-medium">Projects</h3>
              </div>
              <ul
                class="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950"
              >
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                  
                  <h5 class="mb-2 font-bold">
                   Weather application
                   
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                    Developed a weather application in which user inputs the temperature and the app tells the weather based on the temperature by using my knowledge of HTML, CSS and JavaScrpipt.
                  </p>
                </li>
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                 
                  <h5 class="mb-2 font-bold">
                    Quiz applicaion
                
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                	Developed a quiz platform by exploring my knowledge in JavaScript and HTML of general knowledge with over 5 questions with 4 multiple choice answers	where only the correct answer is counted as 1 while the wrong or unanswered is counted as 0 and at last the total score is displayed.

                  </p>
                  <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                 
                  <h5 class="mb-2 font-bold">
                  Calculator
                  </h5>
                  <p class="text-sm/relaxed text-gray-700 dark:text-gray-300">
                  Developed a basic calculator using HTML and Basic CSS which calculates the required number as per the user's request.

                  </p>
                </li>
              </ul>
            </div>
            <!-- END Projects -->

            <!-- Social -->
            <div>
              <div
                class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900"
              >
                <h3 class="text-xl font-medium">Social</h3>
              </div>
              <ul
                class="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950"
              >
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                  <h4
                    class="text-sm font-semibold text-purple-600 dark:text-purple-500"
                  >
                    LinkedIn
                  </h4>
                  <h5 class="mb-2 font-bold">Work Profile</h5>
                  <p>
                    <a
                      href="javascript:void(0)"
                      class="text-sm font-medium text-gray-600 underline hover:text-gray-600/75 dark:text-gray-400 dark:hover:text-gray-400/75"
                    >
                     
                    </a>
                  </p>
                </li>
                <li
                  class="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
                >
                  <h4
                    class="text-sm font-semibold text-purple-600 dark:text-purple-500"
                  >
                    GitHub
                  </h4>
                  <h5 class="mb-2 font-bold">Work Profile</h5>
                  <p>
                    <a
                      href=" https://github.com/viveksamant2004"
                      class="text-sm font-medium text-gray-600 underline hover:text-gray-600/75 dark:text-gray-400 dark:hover:text-gray-400/75"
                    >
                    https://github.com/viveksamant2004
                    </a>
                  </p>
                </li>
               
                  
                  </p>
                </li>
              </ul>
            <!-- </div> -->
            <!-- END Social -->
          </div>
          <!-- END Bio -->
        </div>
      </div>
    </div>
    <!-- END Page Container -->
  </body>
</html>
