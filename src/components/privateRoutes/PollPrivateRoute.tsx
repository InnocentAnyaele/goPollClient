import {Outlet, Navigate} from 'react-router-dom'


export default function PrivateRoutes() {
  // const history = useNavigate()
    let userEmail = localStorage.getItem('email') == null ? false : true
    let link = localStorage.getItem('link') == null ? false : true

  if (!userEmail) {
    return (<Navigate to="/"/>)
  }
  else{
    if (link) {
      const newLink = `../${localStorage.getItem('link')}`
      // history(newLink)
      return (<Navigate  to={newLink} />)
    }
    else {
      return (<Outlet/>)
    }
  }

  // return (!userEmail ? <Navigate to="/"/> : <Outlet/> )
}
