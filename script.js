function updateContent(date) {
    // Get the paragraph and image elements
    var paragraphElement = document.getElementById("paragraph");
    var imageElement = document.getElementById("image");

    // Update the paragraph content based on the date
    switch (date) {
        case 'Sep 4, 1893':
            paragraphElement.textContent = "Beatrix Potter, the celebrated English author, penned the enchanting story of Peter Rabbit, specifically crafted for 5-year-old readers. In this endearing tale, Peter Rabbit, a mischievous and adventurous character, embarks on whimsical journeys through Mr. McGregor's garden. Through vivid illustrations and charming prose, Potter beckons young readers to accompany Peter as he explores the wonders of the natural world. The story imparts valuable lessons about curiosity, friendship, and the joy of discovery. ";
            break;
        case 'Sep 4, 1918':
            paragraphElement.textContent = "In a pivotal moment during the tumultuous years following the First World War, United States troops found themselves landing in Archangel, Russia. The date was crucial, the historical backdrop intense. The year was 1918, and the "Polar Bear Expedition" unfolded as American forces disembarked on the frigid shores of Archangel, thrust into the complex theater of the Russian Civil War. Their mission, aligned with Allied forces, aimed to safeguard critical supply lines and support the White Russian forces against the burgeoning Red Army. The Arctic landscape, with its biting cold and unforgiving terrain, bore witness to the resilience and sacrifice of these American troops as they navigated unfamiliar territory, contributing their efforts to a complex and far-reaching chapter in global history.";
            break;
        case 'Sep 4, 1923':
            paragraphElement.textContent = "The maiden voyage of the first U.S. airship marked a momentous leap into the age of aviation. On September 9, 1923, the USS Shenandoah (ZR-1) gracefully ascended into the skies, pioneering a new era in aeronautics. Designed as a rigid airship, the Shenandoah represented a remarkable fusion of technology and ambition. Commanded by Lieutenant Commander Zachary Lansdowne, the airship embarked on a historic journey, soaring through the clouds with a sense of awe and anticipation. Its flight symbolized the United States' entry into the evolving realm of air travel, promising new possibilities and capturing the collective imagination of a nation on the brink of transformative technological progress. The USS Shenandoah's inaugural flight marked a significant milestone in aviation history, setting the stage for the continued exploration of the boundless skies.";
            break;
        case 'Sep 4, 1933':
            paragraphElement.textContent = "Updated paragraph for Sep 4, 1933.";
            break;
        case 'Sep 4, 1960':
            paragraphElement.textContent = "Updated paragraph for Sep 4, 1960.";
            break;
        default:
            // Handle unknown date
            break;
    }

    // Update the image alt text based on the date
    imageElement.alt = "Image for " + date;
}
