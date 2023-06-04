import Swal, { SweetAlertIcon } from 'sweetalert2'

export function toastMessage(icon: SweetAlertIcon, message: string) {
  Swal.fire({
    position: 'center',
    icon,
    title: message,
    showConfirmButton: false,
    timer: 1300,
  })
}
