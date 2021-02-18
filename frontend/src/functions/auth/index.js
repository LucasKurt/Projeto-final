export default function auth() {
    const auth = localStorage.getItem('auth');
    if (auth) {
        if (auth === 'vendedor') {
            return auth
        } else {
            return auth
        }
        
    } else {
        return 'sem token' 
    }
    
}

export function destroy() {
    return localStorage.removeItem('auth');  
}