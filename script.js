
function showExam(exam) {
    const examBox = document.getElementById("exam-box");

    const activities = {
        prelim: {
            title: "Prelim Activities",
            images: [
                {
                    src: "classschedule.jpg",
                    alt: "Class Schedule HTML code"
                },
                {
                    src: "classschedule.jpg",
                    alt: "Class Schedule"
                }
            ]
        },

        midterms: {
            title: "Midterm Activities",
            images: [
                {
                    src: "studentcardprofile_code.jpg",
                    alt: "Student Card Profile HTML code"
                },
                {
                    src: "studentcardprofile_output.jpg",
                    alt: "Student Card Profile output"
                }
            ]
        },

        finals: {
            title: "Final Activities",
            links: [
                {
                    title: "Happy Teacher's Month",
                    url: "https://kailalala18-source.github.io/HappyTeacher-sMonth-/"
                },
                {
                    title: "Miks and Match's Enchanted Pages",
                    url: "https://kailalala18-source.github.io/Miks-and-Match-s-Enchanted_Pages/#stories"
                }
            ]
        }
    };

    const selectedExam = activities[exam];

    if (!selectedExam) {
        examBox.innerHTML = "<h3>Invalid Selection</h3>";
        return;
    }

    examBox.innerHTML = `
        <h3>${selectedExam.title}</h3>

        ${selectedExam.images ? `
            <div class="exam-images">
                ${selectedExam.images.map(image => `
                    <img
                        src="${image.src}"
                        alt="${image.alt}"
                        class="exam-image"
                        onclick="openFullImage(this.src, this.alt)"
                        title="Click to view full image"
                    >
                `).join("")}
            </div>
        ` : ""}

        ${selectedExam.links ? `
            <div class="exam-links">
                ${selectedExam.links.map(link => `
                    <a
                        href="${link.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="exam-link"
                    >
                        ${link.title} ↗
                    </a>
                `).join("")}
            </div>
        ` : ""}
    `;

    window.scrollTo({
        top: examBox.offsetTop,
        behavior: "smooth"
    });
}


// Open image in full view
function openFullImage(src, alt) {
    const viewer = document.getElementById("image-viewer");
    const fullImage = document.getElementById("full-image");

    if (!viewer || !fullImage) {
        window.open(src, "_blank");
        return;
    }

    fullImage.src = src;
    fullImage.alt = alt;
    viewer.style.display = "flex";
}


// Close full image
function closeFullImage() {
    const viewer = document.getElementById("image-viewer");
    const fullImage = document.getElementById("full-image");

    if (viewer) {
        viewer.style.display = "none";
    }

    if (fullImage) {
        fullImage.src = "";
    }
}


// Close image viewer using Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeFullImage();
    }
});
