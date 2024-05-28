import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router"

export const canActiviate=()=>{

  const authservice :AuthService=inject(AuthService)
  const router :Router=inject(Router)
  if(authservice.isAuthorize()){
    return true
  }
  else{
    router.navigate(['/Login'])
    return false
  }
}

export const canActiviateChild=()=>{

  return canActiviate()
}
