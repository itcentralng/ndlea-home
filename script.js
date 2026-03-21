// Background Audio and Welcome Screen
let backgroundAudio = null;
let welcomeScreen = null;

// Initialize welcome screen and audio on page load
window.addEventListener('DOMContentLoaded', () => {
    backgroundAudio = document.getElementById('backgroundAudio');
    welcomeScreen = document.getElementById('welcomeScreen');
    const enterButton = document.getElementById('enterButton');
    
    // Handle enter button click
    enterButton.addEventListener('click', () => {
        // Play audio
        backgroundAudio.play().then(() => {
            console.log('Background audio started');
        }).catch(error => {
            console.log('Audio playback failed:', error);
        });
        
        // Hide welcome screen with fade out animation
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 500);
    });
});

// Commander data
const commanders = [
    {
        id: 1,
        name: "DIG FIDELIS OYAKHILOME mni",
        image: "images/fidelis.jpg",
        yearOfService: "12th January, 1990 – 10th March, 1991",
        decorations: "mni",
        biography: "DIG Fidelis Oyakhilome mni was the pioneer Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA). He was appointed to lead the newly established Agency following its creation by Decree No. 48 of December 1989 during the administration of General Ibrahim Babangida, GCFR. As the founding Chairman, he was instrumental in building the institutional framework and operational structures that would define NDLEA's approach to drug law enforcement in Nigeria.\n\nUnder his leadership, the Agency established its initial command and control structures, embarked on nationwide sensitization campaigns, and commenced operations at key entry points across the country. He recruited the pioneer workforce of the Agency and facilitated the establishment of its headquarters and offices nationwide.\n\nDIG Oyakhilome's pioneering efforts laid the solid foundation upon which subsequent administrations would build. His commitment to the ideals of drug-free Nigeria set the tone for the Agency's institutional culture of professionalism and public service."
    },
    {
        id: 2,
        name: "CP. FULANI KWAJAFA (Rtd)",
        image: "images/fulani.jpg",
        yearOfService: "10th March, 1991 – 25th October, 1993",
        decorations: "",
        biography: "CP Fulani Kwajafa (Rtd) served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) from March 1991 to October 1993. A distinguished police officer of considerable experience, CP Kwajafa brought significant law enforcement expertise to the Agency's leadership during a formative period in its institutional development.\n\nUnder his leadership, the Agency significantly expanded its operational reach across Nigeria, strengthening enforcement capabilities at airports, seaports, and land border posts. He championed inter-agency collaboration with the Nigeria Police Force, Nigerian Customs Service, and other security agencies, laying the groundwork for a coordinated national anti-drug strategy.\n\nHis tenure was marked by increased seizures of illicit substances and the establishment of NDLEA's presence in additional states across the country. CP Kwajafa also deepened the Agency's public awareness programmes, reaching out to schools, communities, and religious institutions to educate Nigerians on the dangers of drug abuse."
    },
    {
        id: 3,
        name: "AIG. BA'PPA JAMA'RE mni",
        image: "images/bappa.jpg",
        yearOfService: "25th October, 1993 – 13th February, 1994",
        decorations: "mni",
        biography: "AIG Ba'ppa Jama're mni served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) from October 1993 to February 1994. A senior police officer of distinction, he brought considerable law enforcement experience to the Agency's leadership.\n\nThough his tenure was brief, he maintained the professional standards and operational tempo established by his predecessors, ensuring continuity in the Agency's mandate to rid Nigeria of illicit drug trafficking and abuse. He oversaw the smooth administration of the Agency during this transitional period and ensured the uninterrupted execution of ongoing enforcement operations.\n\nHis administrative acumen and law enforcement experience contributed significantly to the stability and direction of the Agency during his period in office. AIG Jama're's dedication to the Agency's ideals and his personal commitment to professionalism in public service left a lasting mark on NDLEA's institutional character."
    },
    {
        id: 4,
        name: "MAJ. GEN. MUSA BAMAIYI mni",
        image: "images/musa.jpg",
        yearOfService: "26th April, 1994 – 23rd December, 1998",
        decorations: "mni",
        biography: "Maj. Gen. Musa Bamaiyi mni served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) for over four years — one of the longest tenures in the Agency's history at that time. A senior military officer of distinction, General Bamaiyi brought operational discipline and strategic vision to the Agency during a critical period of its development.\n\nUnder his tenure, NDLEA substantially increased its capacity for drug interdiction, recorded landmark seizures of hard drugs at all major points of entry into Nigeria, and expanded its intelligence-gathering and analysis capabilities. He oversaw the recruitment and training of additional personnel, and modernised the Agency's operational infrastructure.\n\nGeneral Bamaiyi also strengthened NDLEA's bilateral and multilateral relationships with international anti-drug agencies, positioning Nigeria as a key partner in the global war against narcotics. He deepened collaboration with the United Nations Drug Control Programme (UNDCP), INTERPOL, and bilateral partners across Africa, Europe, and the Americas.\n\nHis administration was widely commended for its firmness, professionalism, and the significant operational successes recorded during his tenure. General Bamaiyi's leadership is credited with elevating NDLEA to a higher level of operational effectiveness and institutional maturity."
    },
    {
        id: 5,
        name: "AIG. OGBONNAYA ONOVO",
        image: "images/ogbonnaya.jpg",
        yearOfService: "23rd December, 1998 – 3rd May, 2000",
        decorations: "",
        biography: "AIG Ogbonnaya Onovo served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) from December 1998 to May 2000. A distinguished police officer, AIG Onovo brought significant law enforcement expertise and operational experience to the Agency's leadership.\n\nHis tenure was marked by a sustained crackdown on drug trafficking networks operating across Nigeria's borders and within the country's major cities. He prioritised intelligence-driven operations and strengthened cooperation between NDLEA and the Nigeria Police Force, resulting in several high-profile arrests and prosecutions of major drug syndicates.\n\nAIG Onovo also championed demand reduction initiatives, working with state governments and civil society organisations to address the root causes of drug abuse among the Nigerian populace. He expanded the Agency's treatment and rehabilitation outreach, ensuring that drug-dependent individuals had access to support and care.\n\nHis commitment to professionalism and his emphasis on building a results-driven culture within NDLEA contributed meaningfully to the Agency's continued growth during his period of leadership."
    },
    {
        id: 6,
        name: "AIG. ILIYA LOKADANG mni",
        image: "images/iliya.jpg",
        yearOfService: "3rd May, 2000 – 4th September, 2000",
        decorations: "mni",
        biography: "AIG Iliya Lokadang mni served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) from May 2000 to September 2000. A senior police officer of distinction, he was appointed to lead the Agency during an important transitional period in its institutional history.\n\nThough his tenure was brief, AIG Lokadang maintained the operational efficiency and high professional standards of the Agency. He ensured the continuity of institutional programmes and operational strategies during the transition, sustaining the momentum of enforcement activities at all commands.\n\nHis professional conduct and unwavering commitment to the Agency's mandate during this period of transition demonstrated his dedication to the ideals for which NDLEA was established. AIG Lokadang's tenure is remembered for its stability and the smooth handover of leadership that followed."
    },
    {
        id: 7,
        name: "ALHAJI BELLO YUSUF LAFIAJI OON, OFR.",
        image: "images/bello.jpg",
        yearOfService: "10th October, 2000 – 24th November, 2005",
        decorations: "OON OFR",
        biography: "Alhaji Bello Yusuf Lafiaji OON, OFR served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) for over five years, from October 2000 to November 2005. A seasoned administrator and public servant of exceptional calibre, Alhaji Lafiaji's tenure was one of the most transformative periods in the Agency's history.\n\nHe initiated wide-ranging reforms that modernised NDLEA's operational and administrative structures. Under his leadership, the Agency recorded significant increases in drug seizures at all points of entry and within the country's hinterland. He intensified the Agency's public awareness and demand reduction programmes, reaching millions of Nigerians through schools, community outreach, and media campaigns.\n\nAlhaji Lafiaji also expanded NDLEA's engagement with the international drug control community and strengthened the Agency's presence in all states of the federation. He commissioned new zonal offices and ensured the equipping of commands with modern enforcement tools and facilities.\n\nHis distinguished service to the nation earned him the national honours of Officer of the Order of the Niger (OON) and Officer of the Order of the Federal Republic (OFR) — a testament to his exemplary contribution to public service and drug law enforcement in Nigeria."
    },
    {
        id: 8,
        name: "CP AHMADU GIADE",
        image: "images/ahmadu.jpg",
        yearOfService: "24th November, 2005 – 22nd November, 2015",
        decorations: "",
        biography: "CP Ahmadu Giade served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) for a decade — from November 2005 to November 2015 — making his tenure the longest in the Agency's history. A distinguished and highly experienced police officer, CP Giade's decade-long leadership brought remarkable stability, transformation, and institutional growth to NDLEA.\n\nUnder his stewardship, the Agency achieved record-breaking seizures of cocaine, heroin, cannabis (marijuana), and other illicit substances at Nigerian airports, seaports, and land borders. He oversaw the expansion of NDLEA's operational capacity through the establishment of new commands, the acquisition of modern drug detection equipment, enhanced laboratory capabilities, and the training of thousands of personnel.\n\nCP Giade also significantly strengthened NDLEA's treatment and rehabilitation programmes, establishing drug treatment centres and counselling units across the country. His administration was deeply committed to demand reduction, launching several nationwide campaigns targeting youth, students, and vulnerable communities.\n\nHis tenure saw a significant enhancement of the Agency's international profile through robust partnerships with the United States Drug Enforcement Administration (DEA), INTERPOL, the United Nations Office on Drugs and Crime (UNODC), the International Narcotics Control Board (INCB), and numerous bilateral anti-drug cooperation frameworks. CP Giade is widely regarded as one of the most consequential leaders in NDLEA's history."
    },
    {
        id: 9,
        name: "COL. MUHAMMAD MUSTAPHA ABDALLAH (Rtd)",
        image: "images/muhammad.jpg",
        yearOfService: "11th January, 2016 – 15th January, 2021",
        decorations: "",
        biography: "Col. Muhammad Mustapha Abdallah (Rtd) served as Chairman/Chief Executive of the National Drug Law Enforcement Agency (NDLEA) from January 2016 to January 2021. A retired military officer of distinguished record, Col. Abdallah brought military discipline, strategic focus, and operational excellence to the Agency's leadership.\n\nHis tenure was characterised by intensified seizure operations at Nigerian airports, seaports, and land borders. He championed significant reforms in NDLEA's internal governance, initiating a comprehensive restructuring of the Agency's administrative and operational structures to improve efficiency, accountability, and results.\n\nUnder his leadership, NDLEA maintained a sustained campaign against drug trafficking syndicates and deepened its engagement in drug demand reduction among Nigerian youth. He launched several anti-drug campaigns targeting tertiary institutions and strengthened NDLEA's collaboration with the Ministry of Education and other relevant MDAs.\n\nCol. Abdallah also prioritised the welfare of NDLEA operatives and invested in the Agency's human capital development, sending officers for training at home and abroad and improving working conditions across all commands. His steady hand at the helm of NDLEA over five years laid the groundwork for the transformation that would follow under his successor."
    },
    {
        id: 10,
        name: "BRIG. GEN. MB MARWA (RTD) CON, OFR",
        image: "images/marwa.jpg",
        yearOfService: "January 2021 – Present",
        decorations: "CON OFR DSS",
        biography: `PROFILE OF BRIG. GEN. MB MARWA (RTD) CON, OFR

Brig. Gen. Mohamed Buba Marwa (rtd) CON, OFR, is a retired Nigerian Brigadier General, Diplomat, Administrator, Politician and Author. Marwa is a reliable, dependable and straight talk leader who means exactly what he says, steeped in hard work and discretion; sincere, committed to the cause and gives unwavering loyalty to his leader(s) and the nation. He was born in Kaduna and lived all his childhood years in military barracks.

Marwa had a meritorious, outstanding and distinguished military career, earning him the award of DISTINGUISHED SERVICE STAR (DSS). Coming from a background of FOUR generations of soldiers and an epitome of military discipline, he belongs to the old school of the quintessential soldier; an Officer and a Gentleman, who avoids controversy but does not shy away from taking hard decisions on matters that call for it.


FAMILY MILITARY BACKGROUND
Marwa was born in Kaduna on September 9, 1953 into a military family whose service in the Nigerian Army spanned four generations, from his grandfather, Buba Yola, to his father, Buba Marwa, to himself and his younger brother, Maj Gen Adamu B. Marwa, who before his death was GOC 3 DIV and now, his son, Col Mohamed Marwa, a paratrooper of the SPECIAL FORCES and former Commanding Officer, 65 Battalion Nigerian Army, Bonny Camp Lagos.


PROFESSIONAL BACKGROUND
Marwa began his military career in the Nigeria Military School, NMS, Zaria (1966–70) and went on to the Nigerian Defence Academy, NDA, Kaduna (1971–73) and was commissioned into the Nigerian Army Recce Corps (NARC) in June 1973.

Military courses he attended in Nigeria and overseas include:
— Communication Instructors course — School of Armour Nowshera, Pakistan.
— Regimental Signal Officers (RSO) course — Nigerian Army Signals School, Apapa.
— RSO (All Arms) — Military College of Telecommunication Engineering, Mhow, India.
— Armour Officers Basic Course — Fort Knox, Kentucky, USA.
— Advanced Armour Officers Course — Armoured Corps Centre and School, Ahmednagar, India.
— Junior and Senior Staff College courses — Command and Staff College (CSC), Jaji.

Marwa served in several command and staff appointments including foreign service. He was at one time the Commanding Officer of the Armoured Corps premier Tank Battalion, T212 Tank Battalion, which had a full complement of 41 gun tanks, Two Armoured Vehicles Launched Bridges (AVLBs) and Two Armoured Recovery Vehicles (ARVs). He was also the first armour officer to deploy in command of a tank company (T-55 tanks) in support of the infantry brigade during the Chadian incursion into Nigeria in 1980 in Baga frontier of the North East.

He is the only military officer (serving and retired) in the history of the Nigerian Army who held all three of the following foreign service appointments: Deputy Defense Adviser (Nigerian Embassy, Washington DC), Defense Adviser (Permanent Mission of Nigeria to the United Nations, New York) and Ambassador (Republic of South Africa, with concurrent accreditation to the Kingdoms of Swaziland and Lesotho).


ACADEMIC QUALIFICATIONS
Marwa has two postgraduate degrees:
— Master of Public and International Affairs (1983–85) – University of Pittsburgh, USA
— Master of Public Administration (1985–86) – Harvard University, USA

He is the author of 3 books: Nigerian Army Dictionary, Appreciation, and Grand Tactics — and co-author of Nigeria in Peace Keeping Operations.


PUBLIC ADMINISTRATION
Military Governor of Borno State (June 1990 to 1992). He effectively tackled insecurity and provided infrastructure and other developmental needs of the people.

Military Administrator of Lagos State (1996–1999). His time in Lagos was renowned for the restoration of law and order through Operation Sweep, and characterised by developmental projects including the construction and commissioning of 8 Housing Estates; construction and rehabilitation of over 700 roads mainly through direct labour; rehabilitation of street urchins popularly called area boys; construction of Lagos State University College of Medicine (LASUCOM) from scratch and free treatment of malaria and admission of children; and notably the introduction of the now-ubiquitous three-wheeler vehicle, popularly called Marwa. In 1999, he handed over to democratically elected Governor Asiwaju Bola Ahmed Tinubu (now President and Commander-in-Chief of the Federal Republic of Nigeria).


POST MILITARY SERVICE
2000–2006 — Chairman, Defence Industries Corporation of Nigeria (DICON). Prototypes of 60mm and 81mm mortars and RPG-7 were manufactured from scratch using local materials.
2008–2010 — High Commissioner, Republic of South Africa, with concurrent accreditation to the Kingdoms of Swaziland and Lesotho.


RECENT ENGAGEMENT
2018–2020 — Chairman, Presidential Advisory Committee on the Elimination of Drug Abuse (PACEDA).
2021–Present — Chairman/CEO, National Drug Law Enforcement Agency, NDLEA.


NATIONAL AWARDS & HONOURS
2022 — Commander of the Order of the Niger, CON.
2022 — Excellence in Drug Law Enforcement, Nigeria Excellence in Public Service Awards.
2003 — Officer of the Order of the Federal Republic, OFR.
1998 — Nigerian Armed Forces Honour — Distinguished Service Star, DSS.


ACADEMIC AWARDS
— Doctor of Science (Honoris Causa), Abubakar Tafawa Balewa University, Bauchi
— Doctor of Public Administration (Honoris Causa), University of Nigeria, Nsukka (UNN)
— Doctor of Management Technology (Honoris Causa), Federal University of Technology, Owerri

Based on his outstanding performances in the Nigerian Army promotion exams, the Army instituted and named an award — the Marwa Award — after him. He is also decorated with over 30 chieftaincy titles across Nigeria.

General Marwa, an avid lover of sports, is happily married to Hajiya Munira Marwa with children.`
    }
];

// DOM elements
const historyLink = document.getElementById('historyLink');
const commandersGrid = document.getElementById('commandersGrid');
const biographyContent = document.getElementById('biographyContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize color transition system
    initializeColorTransitions();
    
    // Initialize home page
    initializeHomePage();
    
    // Initialize history page components (but keep hidden)
    initializeMascotGallery();
});

// Initialize home page
function initializeHomePage() {
    // Add event listener for history card
    const historyCard = document.querySelector('.history-card');
    if (historyCard) {
        historyCard.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
    }
    
    // Populate current GOC biography and commanders grid
    populateCurrentGocBiography();
    if (commandersGrid) {
        populateCommanders();
        startCardAnimation();
    }
}

// Start staggered card animations
function startCardAnimation() {
    const cards = document.querySelectorAll('.commander-card-inner');
    
    // Add staggered animation delays to each card
    cards.forEach((card, index) => {
        const delay = index * 0.5; // 0.5 second delay between each card
        card.style.animationDelay = `${delay}s`;
    });
}

// Initialize infinite scrolling for commanders grid
function initializeInfiniteScroll() {
    if (!commandersGrid) return;
    
    const wrapper = commandersGrid.parentElement;
    
    // Enable manual scrolling on the wrapper
    wrapper.style.overflowY = 'auto';
    
    // Start automatic scrolling after a brief delay
    setTimeout(() => {
        startInfiniteScroll();
    }, 3000);
    
    // Pause auto-scroll on user interaction (mouse wheel or touchpad scroll)
    if (wrapper) {
        wrapper.addEventListener('wheel', pauseAndResumeScroll, { passive: true });
        wrapper.addEventListener('touchmove', pauseAndResumeScroll, { passive: true });
        wrapper.addEventListener('keydown', handleGridKeyboard);
        
        // Pause on mouse enter/leave for better UX
        wrapper.addEventListener('mouseenter', pauseInfiniteScroll);
        
        // Resume scrolling when user stops interacting
        let scrollTimeout;
        wrapper.addEventListener('mouseleave', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                resumeInfiniteScroll();
            }, 1000);
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', handleInfiniteScrollResize);
}

// Pause and resume scroll (for user interactions)
function pauseAndResumeScroll() {
    pauseInfiniteScroll();
    
    // Resume after user stops scrolling
    let scrollTimeout;
    const wrapper = commandersGrid.parentElement;
    
    if (wrapper) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            resumeInfiniteScroll();
        }, 3000); // Resume after 3 seconds of inactivity
    }
}

// Handle keyboard controls for grid scrolling
function handleGridKeyboard(event) {
    if (currentView !== 'home') return;
    
    const wrapper = commandersGrid.parentElement;
    if (!wrapper) return;
    
    const scrollAmount = 300; // pixels to scroll per keypress
    
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        wrapper.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        wrapper.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    } else if (event.key === 'Home') {
        event.preventDefault();
        wrapper.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    } else if (event.key === 'End') {
        event.preventDefault();
        wrapper.scrollTo({
            top: wrapper.scrollHeight,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    }
}

// Handle resize events for infinite scroll
function handleInfiniteScrollResize() {
    pauseInfiniteScroll();
    setTimeout(() => {
        if (!isScrolling) {
            startInfiniteScroll();
        }
    }, 1000);
}

// Start infinite scrolling animation using native scroll
function startInfiniteScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    const wrapper = commandersGrid.parentElement;
    const scrollSpeed = 5; // pixels per frame
    let scrollTimeout;
    
    function scrollStep() {
        if (!isScrolling) {
            clearTimeout(scrollTimeout);
            return;
        }
        
        wrapper.scrollBy({
            top: scrollSpeed,
            left: 0,
            behavior: 'auto'
        });
        
        // Check if we've scrolled to the bottom
        const isAtBottom = wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight < 1;
        
        if (isAtBottom) {
            // Reset to top for seamless loop
            wrapper.scrollTop = 0;
        }
        
        scrollTimeout = setTimeout(scrollStep, 30); // Update every 30ms
    }
    
    scrollTimeout = setTimeout(scrollStep, 30);
}

// Pause infinite scrolling
function pauseInfiniteScroll() {
    isScrolling = false;
}

// Resume infinite scrolling
function resumeInfiniteScroll() {
    if (!isScrolling) {
        startInfiniteScroll();
    }
}

// ============================================
// SPA NAVIGATION SYSTEM
// ============================================

let currentView = 'home';
let isTransitioning = false;

// Show Home View
function showHomeView() {
    if (isTransitioning || currentView === 'home') return;
    transitionToView('homeView', 'home');
}

// Show History View
function showHistoryView() {
    if (isTransitioning || currentView === 'history') return;
    transitionToView('historyView', 'history', () => {
        // Update GOCs count dynamically
        const gocsCountElement = document.getElementById('gocsCount');
        if (gocsCountElement) {
            gocsCountElement.textContent = commanders.length;
        }
    });
}

// Show Biography View
function showBiographyView(commanderId) {
    if (isTransitioning) return;
    transitionToView('biographyView', 'biography', () => {
        displayBiography(commanderId);
    });
}

// Core transition function
function transitionToView(targetViewId, viewName, callback = null) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Get current and target views
    const currentViewElement = document.querySelector('.page-view.active');
    const targetViewElement = document.getElementById(targetViewId);
    
    if (!targetViewElement) {
        isTransitioning = false;
        return;
    }
    
    // Trigger color transition
    triggerColorTransition(() => {
        // Hide current view
        if (currentViewElement) {
            currentViewElement.classList.remove('active');
            currentViewElement.classList.add('transitioning-out');
        }
        
        // Show target view
        targetViewElement.classList.add('transitioning-in');
        
        // Execute callback if provided
        if (callback) {
            callback();
        }
        
        // Complete transition after a brief moment
        setTimeout(() => {
            if (currentViewElement) {
                currentViewElement.classList.remove('transitioning-out');
            }
            targetViewElement.classList.remove('transitioning-in');
            targetViewElement.classList.add('active');
            
            currentView = viewName;
            isTransitioning = false;
            
            // Scroll to top of new view
            targetViewElement.scrollTop = 0;
        }, 50);
    });
}

// Initialize biography page
function initializeBiographyPage() {
    // Initialize reading progress bar
    initializeReadingProgress();
    
    // Add keyboard shortcuts
    initializeBiographyKeyboardShortcuts();
}

// Initialize reading progress bar
function initializeReadingProgress() {
    const textBox = document.querySelector('#biographyView .biography-text-box');
    const progressBar = document.querySelector('#biographyView .reading-progress-bar');
    
    if (!textBox || !progressBar) return;
    
    textBox.addEventListener('scroll', function() {
        const scrollTop = textBox.scrollTop;
        const scrollHeight = textBox.scrollHeight - textBox.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
}

// Add keyboard shortcuts for biography page
function initializeBiographyKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Only apply shortcuts when biography view is active
        if (currentView !== 'biography') return;
        
        // ESC key to go back
        if (event.key === 'Escape') {
            showHomeView();
        }
        
        // Arrow keys for scrolling the biography text
        const textBox = document.querySelector('#biographyView .biography-text-box');
        if (!textBox) return;
        
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            textBox.scrollBy({
                top: 100,
                behavior: 'smooth'
            });
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            textBox.scrollBy({
                top: -100,
                behavior: 'smooth'
            });
        } else if (event.key === 'Home') {
            event.preventDefault();
            textBox.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (event.key === 'End') {
            event.preventDefault();
            textBox.scrollTo({
                top: textBox.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize biography components on load
initializeBiographyPage();

// Navigation functions (fallbacks for backward compatibility)
function goToHistory() {
    showHistoryView();
}

function goHome() {
    showHomeView();
}

function goToBiography(commanderId) {
    showBiographyView(commanderId);
}

function goToHistoryWithTransition() {
    showHistoryView();
}

function goHomeWithTransition() {
    showHomeView();
}

function goToBiographyWithTransition(commanderId) {
    showBiographyView(commanderId);
}

// Populate current GOC biography section
function populateCurrentGocBiography() {
    const currentGocBiography = document.getElementById('currentGocBiography');
    if (!currentGocBiography) return;
    
    // Get the current (last) commander
    const currentCommander = commanders[commanders.length - 1];
    
    // Create decorations display if available
    const decorationsHtml = currentCommander.decorations && currentCommander.decorations.trim() !== '' 
        ? `<div class="commander-decorations">
            <div class="decorations-list">${currentCommander.decorations.toUpperCase()}</div>
           </div>` 
        : '';

    // Format biography text to preserve line breaks
    const formattedBiography = currentCommander.biography.replace(/\n/g, '<br>');
    
    // Create biography layout with name, service period, and decorations under portrait
    currentGocBiography.innerHTML = `
        <div class="portrait-container">
            <div class="portrait-frame">
                <img src="${currentCommander.image}" alt="${currentCommander.name}" class="commander-portrait" onerror="this.src='images/placeholder.jpg'">
                <div class="portrait-shine"></div>
            </div>
            <div class="portrait-info">
                <h2 class="commander-title">${currentCommander.name}</h2>
                ${decorationsHtml}
                <p class="commander-service-period">${currentCommander.yearOfService}</p>
            </div>
        </div>
        <div class="biography-text-container">
            <div class="biography-text-box">
                
                <div class="biography-text">${formattedBiography}</div>
            </div>
        </div>
    `;
    
    // Add click event to go to full biography page
    currentGocBiography.addEventListener('click', function() {
        showBiographyView(currentCommander.id);
    });
    
    // Add hover effect
    currentGocBiography.addEventListener('mouseenter', function() {
        triggerHoverColorEffect(this);
    });
    
    // Make it look clickable
    currentGocBiography.style.cursor = 'pointer';
}

// Infinite scroll variables
let commandersData = [];
let currentScrollPosition = 0;
let isScrolling = false;
let scrollInterval;

// Populate commanders grid with infinite scrolling
function populateCommanders() {
    commandersGrid.innerHTML = '';
    
    // Get all commanders except the current one (last in array)
    commandersData = commanders.slice(0, -1);
    
    // Create cards - show all commanders multiple times for seamless looping
    const cardsToShow = commandersData.length * 4; // Show 4 full cycles for smooth looping
    
    for (let i = 0; i < cardsToShow; i++) {
        const commanderIndex = i % commandersData.length;
        const commander = commandersData[commanderIndex];
        
        const commanderCard = document.createElement('div');
        commanderCard.className = 'commander-card';
        commanderCard.onclick = () => showBiographyView(commander.id);
        commanderCard.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
        
        // Add data attribute to help with scroll calculations
        commanderCard.setAttribute('data-commander-id', commander.id);
        commanderCard.setAttribute('data-cycle', Math.floor(i / commandersData.length));
        
        // Truncate biography for back of card
        const shortBio = commander.biography.length > 200 
            ? commander.biography.substring(0, 200) + '...' 
            : commander.biography;
        
        commanderCard.innerHTML = `
            <div class="commander-card-inner">
                <div class="commander-card-front">
                    <img src="${commander.image}" alt="${commander.name}" class="commander-image" onerror="this.src='images/placeholder.jpg'">
                    <div class="commander-name">${commander.name}</div>
                    <div class="commander-service">${commander.yearOfService}</div>
                </div>
                <div class="commander-card-back">
                    <h3 style="margin: 0 0 15px 0; font-family: 'Oswald', sans-serif; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; color: var(--cream); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);">${commander.name}</h3>
                    <p style="font-size: 0.9rem; line-height: 1.5; text-align: center; margin: 0; color: var(--cream); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);">${shortBio}</p>
                    <div style="margin-top: 15px; padding: 8px 16px; background: rgba(248, 230, 29, 0.2); border-radius: 15px; font-size: 0.8rem; font-weight: bold; color: var(--cream); text-transform: uppercase; letter-spacing: 1px;">Click for Full Biography</div>
                </div>
            </div>
        `;
        
        commandersGrid.appendChild(commanderCard);
    }
    
    // Initialize infinite scrolling
    initializeInfiniteScroll();
}

// Display biography with typing animation
function displayBiography(commanderId) {
    const commander = commanders.find(c => c.id === commanderId);
    
    if (!commander) {
        document.getElementById('biographyText').textContent = 'Commander not found.';
        return;
    }
    
    // Set the portrait and basic info
    const portraitImg = document.getElementById('commanderPortrait');
    const nameElement = document.getElementById('commanderName');
    const serviceElement = document.getElementById('commanderService');
    const biographyTextElement = document.getElementById('biographyText');
    const cursorElement = document.getElementById('typingCursor');
    
    if (portraitImg) {
        portraitImg.src = commander.image;
        portraitImg.alt = commander.name;
        portraitImg.onerror = function() { this.src = 'images/placeholder.jpg'; };
    }
    
    if (nameElement) {
        nameElement.textContent = commander.name;
    }
    
    if (serviceElement) {
        let serviceText = `${commander.yearOfService}`;
        if (commander.decorations && commander.decorations.trim() !== '') {
            serviceText += `\n${commander.decorations.toUpperCase()}`;
        }
        serviceElement.textContent = serviceText;
        // Preserve line breaks in service text
        serviceElement.style.whiteSpace = 'pre-line';
    }
    
    // Start typing animation for biography text
    if (biographyTextElement && cursorElement) {
        startBiographyTyping(commander.biography, biographyTextElement, cursorElement);
    }
}

// Navigation functions (fallbacks)
function goToHistory() {
    window.location.href = 'history.html';
}

function goHome() {
    window.location.href = 'index.html';
}

function goToBiography(commanderId) {
    window.location.href = `biography.html?id=${commanderId}`;
}

// Color Transition System
function initializeColorTransitions() {
    // Start automatic color cycling on load
    setTimeout(() => {
        startAutomaticColorCycle();
    }, 2000);
}

function startAutomaticColorCycle() {
    const container = document.querySelector('.color-transition-container');
    const strips = document.querySelectorAll('.color-strip');
    
    if (!container || !strips.length) return;
    
    // Add auto-cycle class to enable automatic animation
    strips.forEach(strip => {
        strip.classList.add('auto-cycle');
    });
}

function triggerColorTransition(callback = null) {
    const container = document.querySelector('.color-transition-container');
    const strips = document.querySelectorAll('.color-strip');
    
    if (!container || !strips.length) {
        if (callback) callback();
        return;
    }
    
    // Remove auto-cycle classes temporarily
    strips.forEach(strip => {
        strip.classList.remove('auto-cycle');
    });
    
    // Show container and trigger slide-in
    container.classList.add('active');
    
    strips.forEach((strip, index) => {
        setTimeout(() => {
            strip.classList.add('slide-in');
        }, index * 100);
    });
    
    // Wait for strips to fully cover the screen, then execute callback
    setTimeout(() => {
        // Execute callback (switch views) when screen is fully covered
        if (callback) {
            callback();
        }
        
        // Start sliding out
        setTimeout(() => {
            strips.forEach((strip, index) => {
                setTimeout(() => {
                    strip.classList.remove('slide-in');
                    strip.classList.add('slide-out');
                }, index * 50);
            });
            
            // Clean up and restart auto-cycle
            setTimeout(() => {
                container.classList.remove('active');
                strips.forEach(strip => {
                    strip.classList.remove('slide-in', 'slide-out');
                    strip.classList.add('auto-cycle');
                });
            }, 800);
        }, 200);
        
    }, 600);
}

function triggerHoverColorEffect(element) {
    const hoverStrip = document.createElement('div');
    hoverStrip.className = 'hover-color-strip';
    hoverStrip.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, 
            rgba(248, 230, 29, 0.3), 
            rgba(1, 135, 176, 0.3), 
            rgba(248, 229, 49, 0.3));
        pointer-events: none;
        z-index: 1;
        transition: left 0.6s ease;
        border-radius: inherit;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(hoverStrip);
    
    // Trigger animation
    setTimeout(() => {
        hoverStrip.style.left = '100%';
    }, 50);
    
    // Remove element after animation
    setTimeout(() => {
        if (hoverStrip.parentNode) {
            hoverStrip.parentNode.removeChild(hoverStrip);
        }
    }, 700);
}

// Biography typing animation variables
let currentTypingTimeout = null;
let isTyping = false;

// Biography typing animation function
function startBiographyTyping(text, textElement, cursorElement) {
    if (!text || !textElement) return;
    
    // Cancel any ongoing typing animation
    if (currentTypingTimeout) {
        clearTimeout(currentTypingTimeout);
        currentTypingTimeout = null;
    }
    isTyping = false;
    
    // Clear any existing content
    textElement.textContent = '';
    
    // Add typing class to text box
    const textBox = textElement.closest('.biography-text-box');
    if (textBox) {
        textBox.classList.remove('typing-complete');
        textBox.classList.add('typing-active');
        textBox.scrollTop = 0; // Reset scroll position
    }
    
    // Show cursor
    if (cursorElement) {
        cursorElement.style.display = 'inline';
    }
    
    let currentIndex = 0;
    const typingSpeed = 20; // Faster speed - 20ms instead of 30ms
    isTyping = true;
    
    function typeCharacter() {
        // Check if typing was cancelled
        if (!isTyping || currentIndex >= text.length) {
            if (currentIndex >= text.length) {
                // Finished typing normally
                if (textBox) {
                    textBox.classList.remove('typing-active');
                    textBox.classList.add('typing-complete');
                    
                    // Smooth scroll to top after completion
                    currentTypingTimeout = setTimeout(() => {
                        if (textBox.scrollTop > 0 && isTyping) {
                            textBox.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }
                    }, 1000);
                }
                
                currentTypingTimeout = setTimeout(() => {
                    if (cursorElement && isTyping) {
                        cursorElement.style.display = 'none';
                    }
                }, 2000);
            }
            return;
        }
        
        textElement.textContent = text.substring(0, currentIndex + 1);
        currentIndex++;
        
        // Variable speed for punctuation
        let delay = typingSpeed;
        const currentChar = text[currentIndex - 1];
        
        if (currentChar === '.' || currentChar === '!' || currentChar === '?') {
            delay = typingSpeed * 6; // Shorter pause at sentence endings
        } else if (currentChar === ',' || currentChar === ';' || currentChar === ':') {
            delay = typingSpeed * 2.5; // Shorter pause at commas
        } else if (currentChar === ' ') {
            delay = typingSpeed * 0.4; // Faster for spaces
        }
        
        // Auto-scroll to keep text visible
        if (textBox && textBox.scrollHeight > textBox.clientHeight && isTyping) {
            textBox.scrollTop = textBox.scrollHeight;
        }
        
        currentTypingTimeout = setTimeout(typeCharacter, delay);
    }
    
    // Start typing after a brief delay
    currentTypingTimeout = setTimeout(typeCharacter, 800);
}

// Add scroll-triggered color effects
function initScrollColorEffects() {
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            
            // Trigger subtle color effects based on scroll position
            if (scrollPercent > 0.2 && scrollPercent < 0.8) {
                const strips = document.querySelectorAll('.color-strip');
                strips.forEach((strip, index) => {
                    const delay = Math.random() * 200;
                    setTimeout(() => {
                        strip.style.transform = `translateX(-90%) skewX(-15deg) scale(1.02)`;
                        setTimeout(() => {
                            strip.style.transform = `translateX(-100%) skewX(-15deg) scale(1)`;
                        }, 300);
                    }, delay);
                });
            }
        }, 100);
    });
}

// Initialize scroll effects on all pages
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initScrollColorEffects, 3000);
    
    // Initialize mascot gallery if on history page
    if (window.location.pathname.includes('history.html')) {
        initializeMascotGallery();
    }
});

// Mascot Gallery Data
const mascotImages = [
    {
        src: 'images/fulani.jpg',
        title: 'CP. Fulani Kwajafa (Rtd)',
        description: '2nd Chairman/CEO of NDLEA — 10th March 1991 to 25th October 1993. Under his leadership, NDLEA expanded its operational reach across Nigeria.'
    },
    {
        src: 'images/musa.jpg',
        title: 'Maj. Gen. Musa Bamaiyi mni',
        description: '4th Chairman/CEO of NDLEA — 26th April 1994 to 23rd December 1998. One of the longest-serving Chairmen, credited with significantly strengthening the Agency.'
    },
    {
        src: 'images/ahmadu.jpg',
        title: 'CP Ahmadu Giade',
        description: '8th Chairman/CEO of NDLEA — 24th November 2005 to 22nd November 2015. Served for a decade, the longest tenure in NDLEA\'s history.'
    },
    {
        src: 'images/marwa.jpg',
        title: 'Brig. Gen. MB Marwa (rtd) CON, OFR',
        description: 'Current Chairman/CEO of NDLEA since January 2021. Under his leadership, NDLEA has recorded unprecedented drug seizures and operational successes.'
    }
];

let currentImageIndex = 0;

// Initialize Mascot Gallery
function initializeMascotGallery() {
    const mascotImageContainers = document.querySelectorAll('.mascot-image-container');
    
    mascotImageContainers.forEach((container, index) => {
        container.addEventListener('click', () => {
            openModal(index);
        });
        
        // Add hover effects
        container.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Open Modal with Image
function openModal(imageIndex) {
    currentImageIndex = imageIndex;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (!modal || !modalImage || !modalTitle || !modalDescription) return;
    
    // Set image data
    const imageData = mascotImages[imageIndex];
    modalImage.src = imageData.src;
    modalImage.alt = imageData.title;
    modalTitle.textContent = imageData.title;
    modalDescription.textContent = imageData.description;
    
    // Show modal with animation
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Trigger color transition effect
    triggerModalColorEffect();
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hide');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 300);
}

// Navigate to Previous Image
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + mascotImages.length) % mascotImages.length;
    updateModalImage();
}

// Navigate to Next Image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % mascotImages.length;
    updateModalImage();
}

// Update Modal Image
function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (!modalImage || !modalTitle || !modalDescription) return;
    
    const imageData = mascotImages[currentImageIndex];
    
    // Add transition effect
    modalImage.style.opacity = '0';
    modalImage.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        modalImage.src = imageData.src;
        modalImage.alt = imageData.title;
        modalTitle.textContent = imageData.title;
        modalDescription.textContent = imageData.description;
        
        modalImage.style.opacity = '1';
        modalImage.style.transform = 'scale(1)';
    }, 150);
    
    // Trigger color effect
    triggerModalColorEffect();
}

// Handle Keyboard Navigation
function handleKeyboardNavigation(event) {
    const modal = document.getElementById('imageModal');
    if (!modal || !modal.classList.contains('show')) return;
    
    switch(event.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
}

// Trigger Modal Color Effect
function triggerModalColorEffect() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    // Create a color pulse effect
    const colorPulse = document.createElement('div');
    colorPulse.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, 
            rgba(248, 230, 29, 0.1) 0%, 
            rgba(1, 135, 176, 0.05) 30%, 
            transparent 70%);
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        animation: colorPulse 1s ease-out;
    `;
    
    modal.appendChild(colorPulse);
    
    // Remove after animation
    setTimeout(() => {
        if (colorPulse.parentNode) {
            colorPulse.parentNode.removeChild(colorPulse);
        }
    }, 1000);
}

// Add CSS animation for color pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes colorPulse {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        50% {
            opacity: 1;
            transform: scale(1.1);
        }
        100% {
            opacity: 0;
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style);