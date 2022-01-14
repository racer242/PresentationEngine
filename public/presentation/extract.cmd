del tmp.b64
del content.js
certutil -encode content.xlsx tmp.b64
echo window.content=` >> content.js
findstr /v /c:- tmp.b64 >> content.js
echo `; >>content.js
del tmp.b64