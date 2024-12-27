document.addEventListener("DOMContentLoaded", () => {
  // Burger Menu and Navigation Toggle
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("header nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Toggle Dropdowns on Mobile View
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 968) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });

  // Carousel Functionality
  const slides = document.querySelectorAll('.carousel-slide');
  const navBtns = document.querySelectorAll('.carousel-nav-btn');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    navBtns[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    navBtns[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => showSlide(index));
  });

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
// Free Trial Form Handling
const freeTrialForm = document.getElementById('freeTrialForm');
const successMessage = document.getElementById('successMessage');
const claimButton = document.querySelector('#freeTrialForm button[type="submit"]');

// Initialize elements
freeTrialForm.style.display = 'block';
freeTrialForm.style.opacity = 1;
successMessage.style.display = 'none';
successMessage.style.opacity = 0;

freeTrialForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Disable the button to prevent multiple submissions
  claimButton.disabled = true;
  
  // 1. Animate form out
  gsap.to(freeTrialForm, {
    duration: 0.5,
    opacity: 0,
    y: -20,
    ease: 'power2.inOut',
    onComplete: () => {
      // 2. Hide form and show success message
      freeTrialForm.style.display = 'none';
      successMessage.style.display = 'block';
      
      // 3. Animate success message in
      gsap.to(successMessage, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      });

      // 4. Wait before starting exit animation
      setTimeout(() => {
        // 5. Animate success message out
        gsap.to(successMessage, {
          duration: 0.5,
          opacity: 0,
          y: -20,
          ease: 'power2.inOut',
          onComplete: () => {
            // 6. Hide success message and show form
            successMessage.style.display = 'none';
            freeTrialForm.style.display = 'block';
            freeTrialForm.style.opacity = 0;
            freeTrialForm.style.transform = 'translateY(20px)';
            
            // 7. Animate form back in
            gsap.to(freeTrialForm, {
              duration: 0.5,
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              onComplete: () => {
                // 8. Reset form and re-enable button
                freeTrialForm.reset();
                claimButton.disabled = false;
              }
            });
          }
        });
      }, 3000);
    }
  });
});
  // Schedule and Plan Animations
  const animateElements = document.querySelectorAll('.animate-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });

  animateElements.forEach(el => observer.observe(el));
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animation for the title
  gsap.from(".elite-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power4.out",
    delay: 0.5
  });

  // GSAP Animation for the line under the title
  gsap.to(".elite-title::after", {
    duration: 0.6,
    css: { transform: "translateX(0)", opacity: 1 },
    ease: "power4.out",
    delay: 1.2
  });

  // GSAP Animation for trainer cards with ScrollTrigger
  gsap.utils.toArray(".elite-trainer-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Parallax background effect
  gsap.to("#elite-layer1", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".elite-trainers-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to("#elite-layer2", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".elite-trainers-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to("#elite-layer3", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".elite-trainers-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // Filter functionality for trainers
  const trainerFilterButtons = document.querySelectorAll(".et-filter-btn");
  const trainerCards = document.querySelectorAll(".et-trainer-card");

  // Set initial active state for "All Trainers" button
  document.querySelector('.et-filter-btn[data-filter="all"]')?.classList.add('active');

  trainerFilterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from current active button
      document.querySelector(".et-filter-btn.active")?.classList.remove("active");
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute('data-filter');
      
      trainerCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = "block";
          // Optional: Add animation for appearing cards
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out"
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Modal functionality for booking sessions
  const bookingModal = document.querySelector(".elite-modal");
  const closeBookingModal = document.querySelector(".elite-close");
  const bookSessionButtons = document.querySelectorAll(".elite-book-session-btn");

  bookSessionButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      bookingModal.style.display = "block";
    });
  });

  closeBookingModal?.addEventListener("click", () => {
    bookingModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
      bookingModal.style.display = "none";
    }
  });

  // Class Filtering (Schedule)
  const classFilterButtons = document.querySelectorAll('.nf-filter-button');
  const classItems = document.querySelectorAll('.nf-class-item');

  classFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      classFilterButtons.forEach(btn => btn.classList.remove('nf-active'));
      button.classList.add('nf-active');

      classItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'inline-block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // GSAP Animations for Schedule and Features
  gsap.from(".nf-schedule-wrapper", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".nf-schedule-wrapper",
      start: "top 80%"
    }
  });

  gsap.from(".nf-feature-card", {
    duration: 0.5,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".nf-feature-grid",
      start: "top 80%"
    }
  });

  // Progress Bar Animation (Optional)
  const progressBar = document.querySelector('.nf-progress');
  let progress = 0;

  function updateProgress() {
    progress += 1;
    if (progress > 100) progress = 0;
    progressBar.style.width = `${progress}%`;
    requestAnimationFrame(updateProgress);
  }

  // Uncomment the line below if you have a progress bar element
  updateProgress();

  // Highlight Random Class Item
  function highlightRandomClass() {
    const randomIndex = Math.floor(Math.random() * classItems.length);
    classItems[randomIndex].classList.add('nf-highlight');
    setTimeout(() => {
      classItems[randomIndex].classList.remove('nf-highlight');
    }, 3000);
  }

  setInterval(highlightRandomClass, 5000);

  // Modal functionality for classes
  const classModal = document.getElementById('nf-classModal');
  const modalTitle = document.getElementById('nf-modalTitle');
  const modalDescription = document.getElementById('nf-modalDescription');
  const closeClassModal = document.querySelector('.nf-close');

  classItems.forEach(item => {
    item.addEventListener('click', () => {
      modalTitle.textContent = item.querySelector('.nf-class-name').textContent;
      modalDescription.textContent = item.querySelector('.nf-class-tooltip').textContent;
      classModal.style.display = 'block';
    });
  });

  closeClassModal?.addEventListener('click', () => {
    classModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === classModal) {
      classModal.style.display = 'none';
    }
  });
});

const testimonials = [
  {
      content: "Fitness Club's free trial was a game-changer! I discovered my passion for fitness and haven't looked back since. The trainers are incredibly supportive, and the atmosphere is electric. I'm now on the Starter membership and loving every minute of it!",
      author: "Sarah Johnson",
      membership: "Starter Member",
      icon: "🏋️‍♀️"
  },
  {
      content: "As an Achiever member, I've seen incredible progress in my fitness journey. The personalized workout plans and nutrition advice have helped me surpass my goals. Fitness Club isn't just a gym; it's a community that pushes you to be your best self!",
      author: "Mike Thompson",
      membership: "Achiever Member",
      icon: "💪"
  },
  {
      content: "The Transformer membership at Fitness Club has truly transformed my life! I've lost 50 pounds and gained a ton of confidence. The trainers here are world-class, and the 24/7 access fits perfectly with my busy schedule. Best decision I've ever made!",
      author: "Emily Rodriguez",
      membership: "Transformer Member",
      icon: "🏃‍♂️"
  },
  {
      content: "Being an Elite member at Fitness Club is like having a personal fitness team at your disposal. From advanced training techniques to exclusive classes and recovery sessions, every aspect of my fitness is covered. If you're serious about your health, this is the place to be!",
      author: "David Chen",
      membership: "Elite Member",
      icon: "🥇"
  }
];
document.getElementById("calculate-bmi").addEventListener("click", function() {
    // Get input values
    const height = parseFloat(document.getElementById("height-bmi").value);
    const weight = parseFloat(document.getElementById("weight-bmi").value);
    const age = parseInt(document.getElementById("age-bmi").value);
    const gender = document.getElementById("gender-bmi").value;

    // Check if the inputs are valid
    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert("Please fill out all fields with valid numbers.");
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display results
    document.getElementById("bmi-value").textContent = bmi;
    document.getElementById("bmi-category").textContent = category;
});



 function calculateBiometrics() {
        const height = document.getElementById('height').value / 100;
        const weight = document.getElementById('weight').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const activityLevel = parseFloat(document.getElementById('activityLevel').value);

        if (height && weight && age && gender && activityLevel) {
            const calculateBtn = document.querySelector('.calculate-btn');
            calculateBtn.classList.add('loading', 'active');
            calculateBtn.disabled = true;

            setTimeout(() => {
                const bmi = weight / (height * height);
                const bmiValue = document.getElementById('bmiValue');
                const weightStatus = document.getElementById('weightStatus');

                bmiValue.textContent = bmi.toFixed(1);
                weightStatus.textContent = getBmiCategory(bmi);

                let bmr;
                if (gender === 'male') {
                    bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
                } else {
                    bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
                }

                const tdee = bmr * activityLevel;

                document.getElementById('bmrValue').textContent = Math.round(bmr);
                document.getElementById('tdeeValue').textContent = Math.round(tdee);

                calculateBtn.classList.remove('loading', 'active');
                calculateBtn.disabled = false;

                animateResults();
            }, 1000);
        } else {
            alert('Please fill in all fields');
        }
    }

    function getBmiCategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }

    function animateResults() {
        const results = document.querySelectorAll('.result-value');
        results.forEach((result, index) => {
            setTimeout(() => {
                result.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    result.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    }