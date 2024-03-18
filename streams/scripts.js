document.getElementById('addStream').addEventListener('click', function() {
    const streamLink = document.getElementById('streamLink').value;
    if (streamLink) {
        const streamContainer = document.getElementById('streamContainer');
        const streamDiv = document.createElement('div');
        streamDiv.classList.add('stream');

        const iframe = document.createElement('iframe');
        iframe.src = streamLink;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.classList.add('stream-iframe');
        streamDiv.appendChild(iframe);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('close-btn');
        closeButton.onclick = function() {
            streamDiv.remove();
            updateGridLayout();
        };
        streamDiv.appendChild(closeButton);

        streamContainer.appendChild(streamDiv);

        // Reset input field
        document.getElementById('streamLink').value = '';

        // Update the grid layout
        updateGridLayout();
    }
});

function updateGridLayout() {
    const streamContainer = document.getElementById('streamContainer');
    const streams = streamContainer.querySelectorAll('.stream');
    const numStreams = streams.length;
    let columns;

    if (numStreams === 1) {
        columns = 1;
    } else if (numStreams === 2) {
        columns = 2;
    } else if (numStreams === 3) {
        streamContainer.style.gridTemplateAreas = `"a b" "c c"`;
        streamContainer.style.gridTemplateColumns = '1fr 1fr';
        streams[0].style.gridArea = 'a';
        streams[1].style.gridArea = 'b';
        streams[2].style.gridArea = 'c';
    } else {
        columns = Math.ceil(Math.sqrt(numStreams));
    }

    if (numStreams !== 3) {
        streamContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        streamContainer.style.gridTemplateAreas = '';
        streams.forEach(stream => stream.style.gridArea = '');
    }
}
