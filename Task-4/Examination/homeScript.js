
            function signOut() {
                if (confirm('Are you sure you want to sign out?')) {
                    window.location.href = 'signout'; 
                }
            }

            function openUpdateProfile() {
                document.getElementById('overlay').style.display = 'block';
                document.getElementById('iframeContainer').style.display = 'block';
            }

            function closeUpdateProfile() {
                document.getElementById('overlay').style.display = 'none';
                document.getElementById('iframeContainer').style.display = 'none';
            }

            function startTest() {
                const chapter = document.getElementById('chapterSelect').value;
                if (chapter) {
                    window.location.href = `exam.html?chapter=${chapter}`;
                }
            }

            window.onload = function() {
                fetch('getUsername') 
                    .then(response => response.text())
                    .then(username => {
                        document.getElementById('username').textContent = username;
                    });
            };