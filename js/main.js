document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        // Simple logic for a typing effect on the tagline
        const text = typingElement.textContent;
        typingElement.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Speed of typing
            }
        }
        typeWriter();
    }
});