document.addEventListener("DOMContentLoaded", function() {
const photos = [
{ src: 'img/02_Junyawatanabe_2001_commedesgarcons2.png', description: 'Junya Watanabe 2001', tags: 'Junya Watanabe, Junya Watanabe 2001, Junya Watanabe CDG, Junya Watanabe 2000s collections, Junya Watanabe for Comme Des Garcons, Junya Watanabe runway collections, archive Junya Watanabe, archival fashion, commedesgarcons' },																									
{ src: 'img/03_032c.png', description: '', tags: '032c, fashion magazine, fashion research, fashion magazine scans, rare magazine scans, where to find magazine scans' },																																																		
{ src: 'img/05_032c.png', description: '', tags: '032c, fashion magazine, fashion research' },																									
{ src: 'img/06_anothermagazine 1.png', description: 'Another Magazine', tags: 'Another Magazine, Another Magazine Issue 1, Another Magazine First Issue, Another Magazine 2000s, fashion magazine, fashion research' },																																																	
{ src: 'img/08_anothermagazine 4.png', description: 'Another Magazine', tags: 'Another Magazine, fashion magazine, fashion research' },																									
{ src: 'img/09_anothermagazine 3.png', description: 'Another Magazine', tags: 'Another Magazine, fashion magazine, fashion research' },																																																	
{ src: 'img/107_JPG.png', description: '', tags: 'fashion research, archive fashion, found media' },																									
{ src: 'img/11_john galliano for i-d the specator issue.png', description: 'John Galliano for I-D', tags: 'John Galliano, John Galliano for ID, Galliano early 2000s, I-D magazine 2000s, fashion research' },																																																		
{ src: 'img/12_jeanpaukgaultier.png', description: 'Jean Paul Gaultier', tags: 'Jean Paul Gaultier, fashion history' },																									
{ src: 'img/119_AlexanderMcqueen.jpg', description: 'Alexander McQueen', tags: 'Alexander McQueen, fashion research, archive fashion' },
{src: 'img/111_AlexanderMcqueen.jpg', description: 'Alexander McQueen', tags: 'Alexander McQueen, fashion research, archive fashion' },
{src: 'img/117_AlexanderMcqueen_AW2009.jpg', description: 'Alexander McQueen AW 2009', tags: 'Alexander McQueen, Lee McQueen 2009, The Horn of Plenty McQueen, The Horn of Plenty 2009, fashion research, archive fashion' },
{src: 'img/118_AlexanderMcqueen_AW2009.jpg', description: 'Alexander McQueen AW 2009', tags: 'Alexander McQueen, fashion research, archive fashion' },	
{ src: 'img/13_junyawatanabe_SS2002_commedesgarcons.jpg', description: 'Junya Watanabe SS2002', tags: 'Junya Watanabe, SS2002, commedesgarcons' },																									
{ src: 'img/14_anothermagazine 2.png', description: 'Another Magazine', tags: 'Another Magazine, fashion magazine, fashion research' },																									
{ src: 'img/14_dazed the drenched issue 4.png', description: 'Dazed: The Drenched Issue', tags: 'Dazed Magazine, fashion research, archive fashion' },																									
{ src: 'img/16_junyawatanabe_AW1998_commedesgarcons2.png', description: 'Junya Watanabe AW1998', tags: 'Junya Watanabe, AW1998, commedesgarcons' },																									
{ src: 'img/18_michele Lamy for I-D.png', description: '', tags: 'Michele Lamy, I-D magazine, fashion research' },																									
{ src: 'img/19_michele Lamy for I-D 2.png', description: '', tags: 'Michele Lamy, I-D magazine, fashion research' },																									
{ src: 'img/20_omnipel technologies2.png', description: '', tags: 'omnipel technologies, fashion research' },																									
{ src: 'img/21_omnipel technologies.png', description: '', tags: 'omnipel technologies, fashion research' },																									
{ src: 'img/22_vogue the jewelry5.png', description: 'Vogue Jewelry', tags: 'Vogue, jewelry, fashion magazine' },																									
{ src: 'img/25_reikawakubo_AW2004_commedesgarcons2.jpg', description: 'Rei Kawakubo AW2004', tags: 'Rei Kawakubo, AW2004, commedesgarcons' },																									
{ src: 'img/26_reikawakubo_AW1997_commedesgarcons2.jpg', description: 'Rei Kawakubo AW1997', tags: 'Rei Kawakubo, AW1997, commedesgarcons' },																									
{ src: 'img/23_shaun leane.png', description: 'Shaun Leane', tags: 'Shaun Leane, Alexander McQueen Shaun Leane, archive jewelry, archive jewellery, lee mcqueen jewelry' },																									
{ src: 'img/27_reikawakubo_AW1984_commedesgarcons2.png', description: 'Rei Kawakubo AW1984', tags: 'Rei Kawakubo, AW1984, commedesgarcons' },																									
{ src: 'img/28_reikawakubo_1983_commedesgarcons2.png', description: 'Rei Kawakubo 1983', tags: 'Rei Kawakubo, 1983, commedesgarcons' },																									
{ src: 'img/29_vogue the jewelry jpg.png', description: 'Vogue Jewelry', tags: 'Vogue, jewelry, fashion magazine' },																									
{ src: 'img/30_reikawakubo_AW1997_commedesgarcons3.jpg', description: 'Rei Kawakubo AW1997', tags: 'Rei Kawakubo, AW1997, commedesgarcons' },																									
{ src: 'img/31_reikawakubo_AW1990_commedesgarcons2.png', description: 'Rei Kawakubo AW1990', tags: 'Rei Kawakubo, Comme Des Garcons 1990, AW1990, comme des garcons 90s, Autumn Winter 1990, comme des garcons archive fashion, commedesgarcons' },																									
{ src: 'img/32_thedrenchedissue_IDMArch2020.png', description: 'The Drenched Issue', tags: 'fashion magazine, fashion research, archive fashion' },																									
{ src: 'img/33_vogue the jewelry4.png', description: 'Vogue Jewelry', tags: 'Vogue, jewelry, fashion magazine' },																									
{ src: 'img/34_HussienChalayan_2.png', description: 'Hussein Chalayan', tags: 'Hussein Chalayan, fashion research, archive fashion' },																									
{ src: 'img/35_FutureBeauty_30YearsOfJapaneseFashion_Cover.jpg', description: '', tags: 'fashion magazine, japanese fashion, archive fashion' },																									
{ src: 'img/37_anothermagazine 5.png', description: 'Another Magazine', tags: 'Another Magazine, fashion magazine, fashion research' },																									
{ src: 'img/38_anothermagazine raf balenci riot.png', description: 'Another Magazine', tags: 'Another Magazine, fashion magazine, fashion research' },																									
{ src: 'img/39_Diesel Ads_Page_2.jpg', description: '', tags: 'fashion ads, archive fashion, fashion research' },																									
{ src: 'img/40_michele Lamy for I-D 3.png', description: 'Michele Lamy shot by Rick Owens', tags: 'Rick Owens, Owens Corp, Tyrone Dylan, ID Magazine archives, Rick Owens archive fashion, fashion research' },																									
{ src: 'img/41_vogue the jewelry.png', description: 'Vogue Jewelry', tags: 'Vogue, jewelry, fashion magazine' },																									
{ src: 'img/42_HussienChalayan.png', description: 'Hussein Chalayan', tags: 'Hussein Chalayan, fashion research, archive fashion' },																									
{ src: 'img/52_Chalayan_AW2003.jpg', description: 'Chalayan AW2003', tags: 'Chalayan, Hussein Chalayan 2004, Chalayan runway collections, rare fashion scans, fashion research' },																									
{ src: 'img/53_Chalayan_SS2004.png', description: 'Chalayan SS2004', tags: 'Chalayan, Hussein Chalayan 2004, Chalayan runway collections, rare fashion scans, fashion research' },																									
{ src: 'img/55_Chalayan_SS2000.png', description: 'Chalayan SS2000', tags: 'Chalayan, Hussein Chalayan, Chalayan AW2000, Autumn Winter 2000, UK Fashion Designers, runway collections' },																									
{ src: 'img/56_Chalayan_AW2000.png', description: 'Chalayan AW2000', tags: 'Chalayan, AW2000, runway collections' },																									
{ src: 'img/57_Chalayan.jpeg', description: 'Chalayan', tags: 'Chalayan, fashion research, archive fashion' },																									
{ src: 'img/58_Chalayan_SS2000.png', description: 'Chalayan SS2000', tags: 'Chalayan, SS2000, runway collections' },																									
{ src: 'img/59_Chalayan_1999.jpg', description: 'Chalayan 1999', tags: 'Chalayan, 1999, fashion research' },																									
{ src: 'img/60_Chalayan_SS1999.jpg', description: 'Chalayan SS1999', tags: 'Chalayan, SS1999, runway collections' },																									
{ src: 'img/61_Chalayan_SS1999.jpg', description: 'Chalayan SS1999', tags: 'Chalayan, SS1999, runway collections' },																									
{ src: 'img/62_Chalayan_SS1999.jpg', description: 'Chalayan SS1999', tags: 'Chalayan, SS1999, runway collections' },																									
{ src: 'img/65_Chalayan_SS1999.png', description: 'Chalayan SS1999', tags: 'Chalayan, SS1999, runway collections' },																									
{ src: 'img/66_Chalayan_SS1999.jpg', description: 'Chalayan SS1999', tags: 'Chalayan, SS1999, runway collections' },																									
{ src: 'img/67_Chalayan_AW1998.jpg', description: 'Chalayan AW1998', tags: 'Chalayan, AW1998, runway collections' },																									
{ src: 'img/68_Chalayan_SS1995.jpg', description: 'Chalayan SS1995', tags: 'Chalayan, SS1995, runway collections' },																									
{ src: 'img/69_AlexanderMcQueen.jpg', description: 'Alexander McQueen', tags: 'archive research, Lee McQueen, runway collections' },																									
{ src: 'img/69_Chalayan_SS1996.jpg', description: 'Chalayan SS1996', tags: 'Chalayan, SS1996, runway collections' },																									
{ src: 'img/71_.jpg', description: '', tags: 'archive research' },																									
{ src: 'img/72_Margiela_AW19971998.jpg', description: 'Margiela AW1997/1998', tags: 'Margiela, AW1997/1998, runway collections' },																									
{ src: 'img/73_Margiela_1989.jpg', description: 'Margiela 1989', tags: 'Margiela, 1989, fashion history' },																									
{ src: 'img/74_Margiela.jpg', description: 'Margiela', tags: 'Margiela, fashion history' },																									
{ src: 'img/75_AntwerpAcademy_ShowPoster.jpg', description: '', tags: 'Antwerp Academy, fashion research, runway collections' },																									
{ src: 'img/77_Margiela_1996.jpg', description: 'Margiela', tags: 'Margiela, fashion history' },																									
{ src: 'img/78_AnnD_1992.jpg', description: 'Ann Demeulemeester 1992', tags: 'Ann Demeulemeester, 1992, fashion history' },																									
{ src: 'img/79_Margiela_1989.jpg', description: 'Margiela', tags: 'Margiela 1989, fashion history, archive research, maison martin margiela 1980s' },																									
{ src: 'img/78_AnnD_1992.jpg', description: 'Ann Demeulemeester', tags: 'Ann Demeulemeester 1992, Ann d, Antwerp 6, Belgian Fashion Designers, Ann Demeulemeester 90s, fashion history, archive research, maison martin margiela 1989' },																									
{ src: 'img/83_JeanPaulGaultier_AW1995.jpg', description: 'Jean Paul Gaultier AW1995', tags: 'Jean Paul Gaultier, AW1995, runway collections' },																									
{ src: 'img/84_PierreCardin_1979.jpg', description: 'Pierre Cardin 1979', tags: 'Pierre Cardin, 1979, fashion history' },																									
{ src: 'img/85_.jpg', description: '', tags: 'fashion research, archive fashion, found media' },																									
{ src: 'img/89_AlexanderMcqueenSS1999.jpg', description: 'Alexander McQueen', tags: 'Alexander McQueen, fashion research, archive fashion' },																									
{ src: 'img/90_AlexanderMcqueen.jpg', description: 'Alexander McQueen', tags: 'Alexander McQueen, fashion research, archive fashion' },																									
{ src: 'img/91_AlexanderMcqueen_AW2001.jpg', description: 'Alexander McQueen AW2001', tags: 'Alexander McQueen, AW2001, runway collections' },																									
{ src: 'img/92_AlexanderMcqueen_SS2009.jpg', description: 'Alexander McQueen SS2009', tags: 'Alexander McQueen, SS2009, runway collections' }																																																	
																									
																			
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
