document.addEventListener("DOMContentLoaded", function() {
    const photos = [
        { src: 'img/anothermagazine 2.png', description: 'Another Magazine', tags: ['gecsa'] },
        { src: 'img/anothermagazine 1.png', description: 'Another Magazine' },
        { src: 'img/maisonmargiela.png', description: 'Maison Margiela', tags: ['tag4'] },
        { src: 'img/anothermagazine 3.png', description: 'Another Magazine' },
        { src: 'img/vogue the jewelry5.png', description: 'Vogue the Jewelry', tags: ['tag1', 'tag2'] },
        { src: 'img/anothermagazine 5.png', description: 'Another Magazine' },
        { src: 'img/jeanpaukgaultier.png', description: 'Jean Paul Gaultier' },
        { src: 'img/anothermagazine 4.png', description: 'Another Magazine', tags: ['tag1', 'tag2'] },
        { src: 'img/omnipel technologies.png', description: 'Gecsa 2', tags: ['tag1', 'tag2'] },
        { src: 'img/omnipel technologies2.png', description: 'Gecsa 2', tags: ['tag1', 'tag2'] },
        { src: 'img/shaun leane.png', description: 'Shaun Leane', tags: ['tag1', 'tag2'] },
        { src: 'img/032c.png', description: '032c', tags: ['tag1', 'tag2'] },
        { src: 'img/anothermagazine raf balenci riot.png', description: 'Another Magazine', tags: ['tag1', 'tag2'] },
        { src: 'img/michele Lamy for I-D 3.png', description: 'Michele Lamy', tags: ['tag1', 'tag2'] },
        { src: 'img/michele Lamy for I-D.png', description: 'Michele Lamy', tags: ['tag1', 'tag2'] },
        { src: 'img/thedrenchedissue_IDMArch2020.png', description: 'I-D Magazine', tags: ['tag1', 'tag2'] },
        { src: 'img/vogue the jewelry4.png', description: 'Gecsa 2', tags: ['tag1', 'tag2'] }
    ];

    const gallery = document.getElementById('photo-gallery');
    const photoModal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');

    function displayPhotos(photoList) {
        gallery.innerHTML = '';
        photoList.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.description;

            const description = document.createElement('p');
            description.classList.add('description');
            description.textContent = photo.description;

            photoItem.appendChild(img);
            photoItem.appendChild(description);
            gallery.appendChild(photoItem);

            // Add click event to show modal
            photoItem.addEventListener('click', () => {
                modalImage.src = photo.src;
                modalImage.alt = photo.description;
                modalDescription.textContent = photo.description;
                photoModal.style.display = 'flex'; // Show the modal
            });
        });
    }

    // Close the modal when clicking the close button
    closeModal.addEventListener('click', () => {
        photoModal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking outside the modal image
    window.addEventListener('click', (event) => {
        if (event.target === photoModal) {
            photoModal.style.display = 'none'; // Hide the modal
        }
    });

    // Display all photos initially
    displayPhotos(photos);
});
