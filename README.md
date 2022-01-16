# demo_app_node_cci
Pasos:
1. EN el servidor: ssh-keygen -t rsa -C "my_email@gmail.com", sin passphrase
2. en el Servidor: cd /home/ubuntu/.ssh
3. en el Servidor: cat id_rsa.pub >> authorized_keys
4. en el Servidor: cat id_rsa y copiar y pegar en circle ci en las opciones del proyecto > SSH key > Add SSH Key 
5. en el Servidor: eval "$(ssh-agent -s)"
6. en el Servidor: nano ~/.bashrc y comentar la linea 
```
# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac
```
7. en el archivo config.yml de circle ci: cambiar la ip del servidor