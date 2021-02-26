import React, {useContext} from 'react'
import {store} from '../redux/provider'

function Dashboard(props){
    const {user,logout} = useContext(store);
    if(user==null){
        props.history.push('/login')
    }
    return(
        <body id="page-top">
        <head>
        <title>Results</title>
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"/>
        <link href="css/sb-admin-2.min.css" rel="stylesheet"/>
        </head>
        <div id="wrapper">


            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">

                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Results</h1>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-primary shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Name
                                                </div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{user?user.name:'Please login'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Username</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{user?user.username:'Please login'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-info shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Email
                                                </div>
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col-auto">
                                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{user?user.email:'Please login'}</div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="progress progress-sm mr-2">
                                                            <div class="progress-bar bg-info" role="progressbar"
                                                                style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-warning shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Internal Id.. shh.. keep it a secret</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{user?user.id:'Please login'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-warning shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Your hashed password</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{user?user.password:'Please login'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
  
                    </div>

                </div>

            </div>

        </div>
            <button type="submit" class="btn btn-primary btn-user btn-block"href="/login" id="userDropdown" onClick={logout} role="button"
                aria-haspopup="true" aria-expanded="false">Logout
             </button>


    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    <script src="vendor/jquery/jquery.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.js"></script>
    <script src="js/sb-admin-2.js"></script>
    </body>
    )
}

export default Dashboard;