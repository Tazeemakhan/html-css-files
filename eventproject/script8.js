 function showExitDialog() {
        var dialog = document.getElementById('exitDialog');
        dialog.style.display = 'block';
    }

    function hideExitDialog() {
        var dialog = document.getElementById('exitDialog');
        dialog.style.display = 'none';
    }

    function exitPage() {
        // Perform exit action
        window.open('', '_self', '');
    window.close();
    }

    function cancelExit() {
        // No action needed, just hide the dialog
        hideExitDialog();
    }
