# Git Commands

git init - Create a new git repo
git status - View the changes to the project code
git add - Add files to staging area
git commit - Creates a new commit with files from the staging area
git push - To push the commited changes to github
git log - View recent commits

# SSH
ls -a ~/.ssh 			 :- To check if SSH keys present.
eval "$(ssh-agent -s)"   :- To check if SSH agent running.
ssh-add ~/.ssh/id_rsa    :- To add identity
clip < ~/.ssh/id_rsa.pub :- To copy SSH key to the clipboard

git remote add origin git@github.com:nikhilc94/Expensify-app.git
git push -u origin master