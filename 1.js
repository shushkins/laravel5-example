<body>
    <a href="javascript:poptastic('https://accounts.google.com/o/oauth2/auth?scope=https://www.google.com/m8/feeds&client_id=21302922996.apps.googleusercontent.com&redirect_uri=https://www.example.com/back&response_type=token');">Try
    out that example URL now</a>
<script>
    function poptastic(url) {
      var newWindow = window.open(url, 'name', 'height=600,width=450');
      if (window.focus) {
        newWindow.focus();
      }
    }

</script>
</body>
