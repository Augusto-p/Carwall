from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive
from pydrive2.files import FileNotUploadedError

directorio_credenciales = 'credentials_module.json'

# INICIAR SESION
def login():
    GoogleAuth.DEFAULT_SETTINGS['client_config_file'] = directorio_credenciales
    gauth = GoogleAuth()
    gauth.LoadCredentialsFile(directorio_credenciales)
    
    if gauth.credentials is None:
        gauth.LocalWebserverAuth(port_numbers=[8092])
    elif gauth.access_token_expired:
        gauth.Refresh()
    else:
        gauth.Authorize()
        
    gauth.SaveCredentialsFile(directorio_credenciales)
    credenciales = GoogleDrive(gauth)
    return credenciales

def bajar_archivo_por_id(id_drive,ruta_descarga):
    credenciales = login()
    archivo = credenciales.CreateFile({'id': id_drive}) 
    nombre_archivo = archivo['title']
    archivo.GetContentFile(ruta_descarga + nombre_archivo)

# BUSCAR ARCHIVOS
def busca(query):
    resultado = []
    credenciales = login()
    lista_archivos = credenciales.ListFile({'q': "'1Supy-uhzhw2DnjOQ3fka0pFtgtc0SNRl' in parents and trashed=false"}).GetList()
    for f in lista_archivos:
        resultado.append([f['title'], f['id']])
    
    return resultado
