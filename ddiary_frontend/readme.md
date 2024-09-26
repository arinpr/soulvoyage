installaion steps in AWS:

https://vanu-verma.medium.com/publish-a-vitejs-react-web-app-to-production-using-ec2-and-apache2-ec86a61c5e17

# update ubuntu system packages
sudo apt-get update


# install git
sudo apt install git -y


# install nvm, this url is the latest version of nvm
# at the time of writing this document
# may need to be updated for other versions accordingly
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash



# adding nvm paths, so that the bash can identity `nvm ...` commands
# below commands are separate commands
# and need to be executed separately

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# install latest version of NodeJS
sudo nvm install --lts


# install Apache2 http server
sudo apt install apache2 -y

# check if apache2 http server is already enabled or not
sudo systemctl is-enabled apache2


# start the apache2 http server
sudo systemctl start apache2

# cloning using the ssh url from github
git clone git@github.com:<your_user_name>/<your_repo_name>.git


# navigate inside your repo folder
cd your_repo_name


# install all project dependencies
npm install


# build project
npm run build

in your /var/html/www folder:
# rename the existing index.html file to index.html.backup
sudo mv index.html index.html.backup


# copy over every file and folder from your project dist folder
# into the /var/www/html folder
# /var/www/html is the folder apache2 http server uses to serve a website
sudo cp /home/ubuntu/<your_repo_name>/dist/* . -r


# restart the apache2 http server to take effect of the changes
sudo systemctl restart apache2



to add the changes in a different repo:
git stash clean
git stash
git checkout -b <branch_name>
git stash apply
