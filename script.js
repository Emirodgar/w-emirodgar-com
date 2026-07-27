document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = questionButton.querySelector('.faq-icon');

        questionButton.addEventListener('click', () => {
            const isActive = questionButton.classList.contains('active');

            // Cierra todos los demás items
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-question').classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = 0;
                otherItem.querySelector('.faq-icon').textContent = '+';
            });

            // Abre o cierra el item actual
            if (!isActive) {
                questionButton.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
});