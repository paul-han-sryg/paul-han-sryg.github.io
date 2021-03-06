document.addEventListener('DOMContentLoaded', () => {

    let activeCorp = 'None Selected';
    let activeLocation = 'None Selected';
    let allData = []
    const messageBlocks = {
        'Standard': [
            'Awesome! Ok, here’s the deal: we have several locations, positions and pay rates.\n\nHere you can apply for a position for the store located at LOCATION_NAME: HIRING_LINK\n\nI’ll check back in a day - once you complete the application I’ll send across a BUNCH of helpful info to help you get the job.',
            'No problem! If you’re ever interested, I wanted to make sure you had the inside scoop… here’s the application link:\nHIRING_LINK\n\nI may reach back out in a couple of months to check back in. But if you NEVER want to hear about this company or job again, reply “NEVER” and I’ll remove you from their list :)',
            'Hello! Just checking back in. Were you able to apply okay? If you\'re having any issues connecting with the manager you can feel free to call the store directly, STORE_PHONE\n\nJust ask for the hiring manager, they\'ll be able to help schedule your interview!',
            'Hey no worries! If you’re not interested OR are having trouble with the application, fill out this quick survey & we can help.\n\nIf you just have not had time, I’ll get back in touch in 2 days, don’t want to rush you. :)\n\nsyrg.io/help?i=[COPY THE APPLICANT ID FROM THE URL AND PUT IT HERE]'
        ],
        'Email': [
            'Awesome! Ok, here’s the deal: we have several locations, positions and pay rates.\n\nYou can send us an email directly to discuss working at our store at LOCATION_NAME. Our email is HIRING_LINK\n\nLooking forward to catching up!',
            'No problem! If you’re ever interested, I wanted to make sure you had the inside scoop… here’s the application link:\nHIRING_LINK\n\nI may reach back out in a couple of months to check back in. But if you NEVER want to hear about this company or job again, reply “NEVER” and I’ll remove you from their list :)',
            'Hello! Just checking back in. Were you able to apply okay? If you\'re having any issues connecting with the manager you can feel free to call the store directly, STORE_PHONE\n\nJust ask for the hiring manager, they\'ll be able to help schedule your interview!',
            'Hey no worries! If you’re not interested OR are having trouble with the application, fill out this quick survey & we can help.\n\nIf you just have not had time, I’ll get back in touch in 2 days, don’t want to rush you. :)\n\nsyrg.io/help?i=[COPY THE APPLICANT ID FROM THE URL AND PUT IT HERE]'
        ]
    }

    document.getElementById('searchInput').addEventListener('input', (e) => {
      setLocationOptions(e.target.value);
   });

    document.addEventListener('click', (e) => {
        let target = e.target;
        console.info(target)
        if (target.className == 'location-option-button') {

            if (document.querySelector('.location-option-button.active') != null) {
                document.querySelector('.location-option-button.active').className = 'location-option-button';
            }
            target.className = 'location-option-button active';

            let locName = target.innerHTML.split(' :(')[0]

            messageContainer = document.getElementById('message-container');
            console.info(locName)
            messageContainer.innerHTML = '';
            const data = allData.filter(x => x.fermValue == locName)[0]

            if (data.url && data.url.includes('@')) {
              messageBlock = messageBlocks['Email']
            } else {
              messageBlock = messageBlocks['Standard']
            }

            messageBlock.forEach((m) => {
                let messageDisplayBox = document.createElement('div'),
                    copyButton = document.createElement('div');

                messageDisplayBox.className = 'message-display-box';
                copyButton.className = 'copy-button';
                const address = data.address? data.address : data.fermValue
                messageDisplayBox.innerHTML = generateMessage(data.company, address, data.url, m);
                copyButton.innerHTML = 'Copy';

                messageContainer.appendChild(messageDisplayBox);
                messageContainer.appendChild(copyButton);
            });

        } else if (target.className == 'copy-button') {

            let copyMessage = target.previousElementSibling.innerHTML.replaceAll('<br>','\n');
              var textArea = document.createElement("textarea");
              textArea.value = copyMessage;

              // Avoid scrolling to bottom
              textArea.style.top = "0";
              textArea.style.left = "0";
              textArea.style.position = "fixed";
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();

            try {
               var successful = document.execCommand('copy');
               var msg = successful ? 'successful' : 'unsuccessful';
               target.className = 'copy-button toggled';
                    setTimeout(() => {
                        target.className = 'copy-button';
                    }, 500);
               console.log('Fallback: Copying text command was ' + msg);
            } catch (err) {
               console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);

        }
    });

    function setLocationOptions(locationFragment) {
        const url='http://backend.ferm.talents.getsyrg.com:5057/location?fermValue=' + locationFragment + '&limit=20';
        fetch(url)
       .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            allData = data;
            let locOptMenu = document.getElementById('location-options-menu')
            locOptMenu.innerHTML = '';
            document.getElementById('message-container').innerHTML = '';
            data.forEach((locName) => {
                if (locName != 'All') {
                    let locOptButton = document.createElement('div');
                    locOptButton.className = "location-option-button";
                    locOptButton.innerHTML = locName.fermValue +' :(' + locName.company + ')';
                    locOptMenu.appendChild(locOptButton);
                }
            });
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }

    function generateMessage(corp, loc, hiringLink, message) {
        message = message.replaceAll('LOCATION_NAME', loc);
        message = message.replaceAll('HIRING_LINK', hiringLink);
        message = message.replaceAll('STORE_PHONE', '');
        // message = message.replaceAll('ALL_LOCATIONS_LINK', corps[corp]['All']);
        return message.replaceAll('\n','<br>');
    }

});
