<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Memo App!</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="shortcut icon" href="{{asset('images/icon1.png')}}">
        <style>
        body {
            animation: fadeIn 2s ease 0s 1 normal;
            -webkit-animation: fadeIn 2s ease 0s 1 normal;
        }

        @keyframes fadeIn {
            0% {opacity: 0}
            100% {opacity: 1}
        }

        @-webkit-keyframes fadeIn {
            0% {opacity: 0}
            100% {opacity: 1}
        }
    </style>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>