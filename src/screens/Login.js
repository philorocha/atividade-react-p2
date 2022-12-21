import reactlogo from '../assets/react-logo.png';
import { ReactDOM } from 'react';

function Login() {
    return (
        <div className='Login'>
            <html lang='pt_BR'>
                <head>
                    <meta charSet='utf-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Login</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                </head>
                <body>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <img src={reactlogo} class='img-fluid' />
                            </div>
                            <div class="col mt-auto mb-auto border border-dark pb-2">
                                <h1 class='text-center'>Login</h1>
                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="inputEmail" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" id="inputPassword" />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary">
                                            Acessar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
                </body>
            </html>
        </div>
    );
}

export default Login;