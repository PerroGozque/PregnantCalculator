const babySizeImages = [
    "https://assets.babycenter.com/ims/2015/01/pregnancy-week-2-fertilization.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-2-fertilization.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-3-blastocycst_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-4-yolk-sac_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-5-amniotic-sac_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-6-webbed-hands_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-7-tailbone_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-8-brain-nerve-cells_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-9-finger-touch-pads.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-10-fingernails_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-11-tooth-buds_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-12-eyelids_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-13-fingerprints_4x3.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-week-13-mom_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-14-face-muscles_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-15-lung-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-16-heart-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-17-skeleton_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-18-ears_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-19-hair_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-20-fetal-movement_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-21-eyelid_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-22-eyes_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-23-hearing_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-24-lung-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-25-baby-fat_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-26-ear-nerves_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-27-sleep.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-week-27-mom_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-28-eyelashes_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-29-brain-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-30-amniotic-fluid_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-31-taste-buds_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-32-fingernails_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-33-skull_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-34-lung-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-35-fetal-weight_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-36-vernix-caseosa_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-37-hair-growth_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-38-eye-color_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-39-mature-lungs_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-40-soft-spots.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-week-40-mom_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-41-amniotic-fluid_4x3.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-labor-and-delivery-mom.jpg"
];

const fruitSizeImages = [
    "https://assets.babycenter.com/ims/2015/01/pregnancy-week-2-fertilization.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-2-fertilization.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-3-blastocycst_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-4-yolk-sac_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-5-amniotic-sac_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-6-webbed-hands_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-7-tailbone_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-8-brain-nerve-cells_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-9-finger-touch-pads.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-10-fingernails_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-11-tooth-buds_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-12-eyelids_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-13-fingerprints_4x3.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-week-13-mom_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-14-face-muscles_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-15-lung-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-16-heart-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-17-skeleton_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-18-ears_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-19-hair_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-20-fetal-movement_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-21-eyelid_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-22-eyes_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-23-hearing_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-24-lung-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-25-baby-fat_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-26-ear-nerves_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-27-sleep.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-week-27-mom_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-28-eyelashes_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-29-brain-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-30-amniotic-fluid_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-31-taste-buds_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-32-fingernails_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-33-skull_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-34-lung-development_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-35-fetal-weight_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-36-vernix-caseosa_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-37-hair-growth_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-38-eye-color_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-39-mature-lungs_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-40-soft-spots.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-week-40-mom_4x3.jpg",
"https://assets.babycenter.com/ims/2015/01/pregnancy-week-41-amniotic-fluid_4x3.jpg",
"https://assets.babycenter.com/ims/2015/07/pregnancy-labor-and-delivery-mom.jpg"
];

function calcularDuracion(event) {
    event.preventDefault();

    const inputDate = document.getElementById('lastMenstruationDate').value;
    const lastMenstruationDate = new Date(inputDate);
    const today = new Date();
    const diffInMilliseconds = today - lastMenstruationDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffInDays / 7);
    const days = diffInDays % 7;

    document.getElementById('durationText').innerText = ` ${weeks} semanas y ${days} días.`;
    document.getElementById('result').style.display = 'block';

    if (weeks >= 1 && weeks <= 40) {
        document.getElementById('babySizeImage').src = babySizeImages[weeks - 1];
        document.getElementById('fruitSizeImage').src = fruitSizeImages[weeks - 1];
    } else {
        document.getElementById('babySizeImage').src = '';
        document.getElementById('fruitSizeImage').src = '';
    }

    document.querySelectorAll('img.cursor-pointer').forEach(image => {
        image.classList.add('show');
        image.addEventListener('click', () => abrirFullscreen(image.src));
    });
}

function abrirFullscreen(src) {
    const fullscreenView = document.getElementById('fullscreenView');
    const fullscreenImage = document.getElementById('fullScreenImage');
    fullscreenImage.src = src;
    fullscreenView.classList.remove('hidden');
    fullscreenImage.classList.add('show');
}

function closeFullScreen() {
    const fullscreenView = document.getElementById('fullscreenView');
    const fullscreenImage = document.getElementById('fullScreenImage');
    fullscreenImage.classList.add('slide-out');
    setTimeout(() => {
        fullscreenView.classList.add('hidden');
        fullscreenImage.classList.remove('show', 'slide-out');
    }, 500);
}

window.onload = () => {
    document.querySelectorAll('img.cursor-pointer').forEach(image => {
        image.classList.add('show');
    });
};
