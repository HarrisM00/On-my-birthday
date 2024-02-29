function updateContent(date) {
    // Get the paragraph and image elements
    var paragraphElement = document.getElementById("paragraph");
    var imageElement = document.getElementById("image");

    // Update the paragraph content based on the date
    switch (date) {
        case 'Sep 4, 1893':
            paragraphElement.textContent = "Beatrix Potter, the celebrated English author, penned the enchanting story of Peter Rabbit, specifically crafted for 5-year-old readers. In this endearing tale, Peter Rabbit, a mischievous and adventurous character, embarks on whimsical journeys through Mr. McGregor's garden. Through vivid illustrations and charming prose, Potter beckons young readers to accompany Peter as he explores the wonders of the natural world. The story imparts valuable lessons about curiosity, friendship, and the joy of discovery. ";
            imageElement.src = "Peter_Rabbit_first_edition_1902a.jpg"; // Replace with the actual path to your image
            break;
        case 'Sep 4, 1918':
            paragraphElement.textContent = "In a pivotal moment during the tumultuous years following the First World War, United States troops found themselves landing in Archangel, Russia. The date was crucial, the historical backdrop intense. The year was 1918, and the Polar Bear Expedition unfolded as American forces disembarked on the frigid shores of Archangel, thrust into the complex theater of the Russian Civil War. Their mission, aligned with Allied forces, aimed to safeguard critical supply lines and support the White Russian forces against the burgeoning Red Army. The Arctic landscape, with its biting cold and unforgiving terrain, bore witness to the resilience and sacrifice of these American troops as they navigated unfamiliar territory, contributing their efforts to a complex and far-reaching chapter in global history.";
            imageElement.src = "Arkhangelsk.jpg";
            break;
        case 'Sep 4, 1923':
            paragraphElement.textContent = "The maiden voyage of the first U.S. airship marked a momentous leap into the age of aviation. On September 9, 1923, the USS Shenandoah (ZR-1) gracefully ascended into the skies, pioneering a new era in aeronautics. Designed as a rigid airship, the Shenandoah represented a remarkable fusion of technology and ambition. Commanded by Lieutenant Commander Zachary Lansdowne, the airship embarked on a historic journey, soaring through the clouds with a sense of awe and anticipation. Its flight symbolized the United States' entry into the evolving realm of air travel, promising new possibilities and capturing the collective imagination of a nation on the brink of transformative technological progress. The USS Shenandoah's inaugural flight marked a significant milestone in aviation history, setting the stage for the continued exploration of the boundless skies.";
           imageElement.src = "US airship.jpg";
            break;
        case 'Sep 4, 1933':
            paragraphElement.textContent = "The pioneering era of aviation witnessed a monumental leap in speed with the introduction of the Messerschmitt Me 163 Komet. On October 2, 1941, test pilot Fritz Wendel achieved an astonishing milestone as he piloted the rocket-powered Me 163 to an unprecedented speed of 624 mph (1,004 km/h). This groundbreaking achievement marked the first time in history that an aircraft had exceeded the remarkable speed threshold of 400 mph. Developed by the German engineer Alexander Lippisch, the Me 163 was a marvel of cutting-edge technology, harnessing the power of a liquid-fueled rocket engine. Its unmatched velocity and innovative design represented a significant leap forward in aeronautics, albeit within the challenging context of World War II. The Messerschmitt Me 163 Komet's historic flight laid the foundation for future high-speed aviation developments, leaving an indelible mark on the quest for faster and more advanced aircraft.";
           imageElement.src = "US airship.jpg";
            break;
        case 'Sep 4, 1960':
            paragraphElement.textContent = "In September 1960, Hurricane Donna, a formidable Category 4 storm, wreaked havoc across the Caribbean and the United States, leaving a trail of destruction and claiming the lives of 148 people. The ferocious hurricane, known for its sheer intensity and widespread impact, battered islands such as Puerto Rico, the Bahamas, and Cuba before making landfall on the eastern coast of the United States. The powerful winds, torrential rains, and storm surges caused catastrophic flooding and extensive damage to infrastructure. In the midst of the devastation, the unfortunate loss of lives underscored the relentless force of nature and the vulnerability of coastal communities to the destructive power of hurricanes. The aftermath of Hurricane Donna prompted increased awareness and efforts in hurricane preparedness and mitigation, as communities sought to better protect themselves against the unpredictable and potentially deadly forces of these natural disasters.";
            imageElement.src = "Hurricane_Donna.jpg"; // Replace with the actual path to your image
            break;
        default:
            // Handle unknown date
            break;
    }

    // Update the image alt text based on the date
    imageElement.alt = "Image for " + date;
}
