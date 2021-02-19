export function destroy() {
    return(
        localStorage.removeItem('auth'),
        localStorage.removeItem('id')
    ); 
}