from lala import *
bd = busca("id = '1C_ofiQg8x8lTVo9-azi0MI0YaMbbM9bY'")

cont = 0
ruta = "data/Base64/"
for f in bd:
    name = ruta + f[0]
    id_ = f[1]
    bajar_archivo_por_id(id_, name)
    print(cont)
    cont = cont +1

