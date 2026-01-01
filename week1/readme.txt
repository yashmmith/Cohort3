pwd
/Users/yashmmithsaiisamindla
cd Desktop/

ls
Cohort3			git_project		Githc			Practise and projects
cd Githc

;s
zsh: command not found: s
ls
gitone		gitthree	gittwo
cd ..

pwd
/Users/yashmmithsaiisamindla/Desktop
mkdir githri

cd githir
cd: no such file or directory: githir
cd githri

ls

mkdir git1 git2 git3

ls
git1	git2	git3
git -v
git version 2.52.0
git --version
git version 2.52.0
git status
fatal: not a git repository (or any of the parent directories): .git
git 
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]
           [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]
           [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   restore    Restore working tree files
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   diff       Show changes between commits, commit and working tree, etc
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   backfill   Download missing objects in a partial clone
   branch     List, create, or delete branches
   commit     Record changes to the repository
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   reset      Reset current HEAD to the specified state
   switch     Switch branches
   tag        Create, list, delete or verify tags

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
git status
fatal: not a git repository (or any of the parent directories): .git
git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: will change to "main" in Git 3.0. To configure the initial branch name
hint: to use in all of your new repositories, which will suppress this warning,
hint: call:
hint:
hint: 	git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /Users/yashmmithsaiisamindla/Desktop/githri/.git/
git status 
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
ls -la
total 0
drwxr-xr-x@ 6 yashmmithsaiisamindla  staff  192 28 Dec 18:55 .
drwx------+ 9 yashmmithsaiisamindla  staff  288 28 Dec 18:46 ..
drwxr-xr-x@ 9 yashmmithsaiisamindla  staff  288 28 Dec 18:55 .git
drwxr-xr-x@ 2 yashmmithsaiisamindla  staff   64 28 Dec 18:47 git1
drwxr-xr-x@ 2 yashmmithsaiisamindla  staff   64 28 Dec 18:47 git2
drwxr-xr-x@ 2 yashmmithsaiisamindla  staff   64 28 Dec 18:47 git3
cd .git

ls
config		description	HEAD		hooks		info		objects		refs
ls
config		description	HEAD		hooks		info		objects		refs
cd ..

ls
git1	git2	git3
pwd
/Users/yashmmithsaiisamindla/Desktop/githri
pwd
/Users/yashmmithsaiisamindla/Desktop/githri
git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
touch text1.txt text2.txt

git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	text1.txt
	text2.txt

nothing added to commit but untracked files present (use "git add" to track)
git add test1.txt
fatal: pathspec 'test1.txt' did not match any files
git add text1.txt

git status 
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   text1.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	text2.txt

git commit -m "text1 added to repo"
[master (root-commit) 2be5102] text1 added to repo
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 text1.txt
git status 
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	text2.txt

nothing added to commit but untracked files present (use "git add" to track)
git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	text2.txt

nothing added to commit but untracked files present (use "git add" to track)
git add .

git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   text2.txt

git commit -m "test2 file is added now"
[master e70c8d8] test2 file is added now
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 text2.txt
git status
On branch master
nothing to commit, working tree clean
git commit
On branch master
nothing to commit, working tree clean
pwd
/Users/yashmmithsaiisamindla/Desktop/githri
cat text3.txt
cat: text3.txt: No such file or directory
touch text3.txt

cat >> text3.txt
Hello My name Is Yashmmith.
  
:qwq
cat text3.txt
Hello My name Is Yashmmith.

:qwq
git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	text3.txt

nothing added to commit but untracked files present (use "git add" to track)
git add text3.txt 

git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   text3.txt

git commit -m "third file also commited"
[master 56292b3] third file also commited
 1 file changed, 3 insertions(+)
 create mode 100644 text3.txt
git status
On branch master
nothing to commit, working tree clean
cat >> text2.txt
Hello im yash from text file 2.%                                                                                           
cat text2.txt
Hello im yash from text file 2.%                                                                                           
git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   text2.txt

no changes added to commit (use "git add" and/or "git commit -a")
git add text2.txt 

git status 
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   text2.txt

git commit -m "new change in the text2 file commited"
[master ea4e20e] new change in the text2 file commited
 1 file changed, 1 insertion(+)
git status
On branch master
nothing to commit, working tree clean
git log
commit ea4e20ec9bef68a62cb9bc27fc65faa6ca1df3f4 (HEAD -> master)
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:38:08 2025 +0530

    new change in the text2 file commited

commit 56292b38970bd3acbc90df37c369d2c46ac151e2
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:36:40 2025 +0530

    third file also commited

commit e70c8d868eb4d51a06961b85b5c1b46fe18c33f6
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:28:56 2025 +0530

    test2 file is added now

commit 2be5102957953f9c5d83d4b833e1f42df0fc3fc0
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:25:04 2025 +0530

    text1 added to repo
git log --oneline
ea4e20e (HEAD -> master) new change in the text2 file commited
56292b3 third file also commited
e70c8d8 test2 file is added now
2be5102 text1 added to repo
git log --oneline
ea4e20e (HEAD -> master) new change in the text2 file commited
56292b3 third file also commited
e70c8d8 test2 file is added now
2be5102 text1 added to repo
git config --global user.name "Yashmmith saii samindla"

git config --global user.email "samindlayashmmithsaii3@gmail.com"

git config --global core.editor "code --wait"

touch .gitignore

ls
git1		git2		git3		text1.txt	text2.txt	text3.txt
git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore

nothing added to commit but untracked files present (use "git add" to track)
touch .env

git status 
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.env
	.gitignore

nothing added to commit but untracked files present (use "git add" to track)
cat > .gitignore
.env
git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore

nothing added to commit but untracked files present (use "git add" to track)
git add .

git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   .gitignore

git commit
[master b22cf33] this message is from inside the commit_editmsg fil e ie fourth commit
 1 file changed, 1 insertion(+)
 create mode 100644 .gitignore
git log
commit b22cf331ca1bdaac15df32fb04d0c5f413141762 (HEAD -> master)
Author: Yashmmith saii samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 20:32:55 2025 +0530

    this message is from inside the commit_editmsg fil
    e ie fourth commit

commit ea4e20ec9bef68a62cb9bc27fc65faa6ca1df3f4
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:38:08 2025 +0530

    new change in the text2 file commited

commit 56292b38970bd3acbc90df37c369d2c46ac151e2
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:36:40 2025 +0530

    third file also commited

commit e70c8d868eb4d51a06961b85b5c1b46fe18c33f6
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:28:56 2025 +0530

    test2 file is added now

commit 2be5102957953f9c5d83d4b833e1f42df0fc3fc0
Author: Yashmmith Saii Samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 19:25:04 2025 +0530

    text1 added to repo
git log --oneline
b22cf33 (HEAD -> master) this message is from inside the commit_editmsg fil e ie fourth commit
ea4e20e new change in the text2 file commited
56292b3 third file also commited
e70c8d8 test2 file is added now
2be5102 text1 added to repo
cd

pwd
/Users/yashmmithsaiisamindla
cat .gitconfig 
[user]
	name = Yashmmith saii samindla
	email = samindlayashmmithsaii3@gmail.com
[core]
	editor = code --wait
ls
Applications		Documents		iCloud Drive (Archive)	Movies			Pictures
Desktop			Downloads		Library			Music			Public
cd Desktop/

ls
Cohort3					Githc					Practise and projects
git_project				githri					Screenshot 2025-12-28 at 19.02.55.heic
cd githri

pwd
/Users/yashmmithsaiisamindla/Desktop/githri
ls
git1		git2		git3		text1.txt	text2.txt	text3.txt
cat .gitignore
.env%                                                                                                                      
cd ..

ls
Cohort3					githri					Screenshot 2025-12-28 at 20.53.20.heic
git_project				Practise and projects
Githc					Screenshot 2025-12-28 at 19.02.55.heic
mkdir githri2

cd githri2

ls

git status
fatal: not a git repository (or any of the parent directories): .git
git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: will change to "main" in Git 3.0. To configure the initial branch name
hint: to use in all of your new repositories, which will suppress this warning,
hint: call:
hint:
hint: 	git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /Users/yashmmithsaiisamindla/Desktop/githri2/.git/
git status 
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
touch index.html

git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	index.html

nothing added to commit but untracked files present (use "git add" to track)
git add .

git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   index.html

git commit -m "First commit"
[master (root-commit) c16ac1a] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
git status
On branch master
nothing to commit, working tree clean
git branch
* master
git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
git add index.html

git commit -m "second after that"
[master 6330ab1] second after that
 1 file changed, 11 insertions(+)
git branch 
* master
git branch nav-bar

git branch
* master
  nav-bar
git checkout nav-bar
Switched to branch 'nav-bar'
git branch
  master
* nav-bar
touch navbar.html

git status
On branch nav-bar
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	navbar.html

nothing added to commit but untracked files present (use "git add" to track)
git add navbar.html 

git commit -m "nav commited"
[nav-bar 911f9df] nav commited
 1 file changed, 7 insertions(+)
 create mode 100644 navbar.html
git status
On branch nav-bar
nothing to commit, working tree clean
git checkout master
Switched to branch 'master'
touch hero.html

git add hero.html 

git commit -m "hero commited"
[master 5cb0ade] hero commited
 1 file changed, 3 insertions(+)
 create mode 100644 hero.html
git checkout nav-bar 
Switched to branch 'nav-bar'
git checkout master 
Switched to branch 'master'
git log --oneline
5cb0ade (HEAD -> master) hero commited
6330ab1 second after that
c16ac1a First commit
git checkout nav-bar
Switched to branch 'nav-bar'
git branch 
  master
* nav-bar
git switch -c newgitbranch
Switched to a new branch 'newgitbranch'
git branch 
  master
  nav-bar
* newgitbranch
git switch master
Switched to branch 'master'
git log
commit 5cb0ade7dec9c46a776d808982e1703ff9fcaa01 (HEAD -> master)
Author: Yashmmith saii samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 22:19:33 2025 +0530

    hero commited

commit 6330ab1b7af93d949b3fa10e01296e205ebb7653
Author: Yashmmith saii samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 22:00:10 2025 +0530

    second after that

commit c16ac1acdf3a812226a8be1ddd63b1adc3e55ee7
Author: Yashmmith saii samindla <samindlayashmmithsaii3@gmail.com>
Date:   Sun Dec 28 21:49:58 2025 +0530

    First commit
git branch
* master
  nav-bar
  newgitbranch
git merge nav-bar
Merge made by the 'ort' strategy.
 navbar.html | 7 +++++++
 1 file changed, 7 insertions(+)
 create mode 100644 navbar.html
git log --oneline 
e9cfc6c (HEAD -> master) Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (newgitbranch, nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git branch -d newgitbranch 
Deleted branch newgitbranch (was 911f9df).
git banch
git: 'banch' is not a git command. See 'git --help'.

The most similar command is
	branch
git branch
* master
  nav-bar
git switch -c newbranch
Switched to a new branch 'newbranch'
git branch
  master
  nav-bar
* newbranch
git status
On branch newbranch
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	footer.html

nothing added to commit but untracked files present (use "git add" to track)
git add footer.html

git status
On branch newbranch
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   footer.html

git commit -m "footer added"
[newbranch 2ad2d03] footer added
 1 file changed, 3 insertions(+)
 create mode 100644 footer.html
git checkout master
Switched to branch 'master'
git merge footer
merge: footer - not something we can merge
git merge newbranch 
Updating e9cfc6c..2ad2d03
Fast-forward
 footer.html | 3 +++
 1 file changed, 3 insertions(+)
 create mode 100644 footer.html
git log --oneline
2ad2d03 (HEAD -> master, newbranch) footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git checkout master
M	index.html
Already on 'master'
git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
git add index.html

git commit -m "index edit 1"
[master c13bb58] index edit 1
 1 file changed, 1 insertion(+)
git switch newbranch
Switched to branch 'newbranch'
git add index.html

git commit -m "index edit 2"
[newbranch 9b8104a] index edit 2
 1 file changed, 1 insertion(+)
git switch master
Switched to branch 'master'
git status
On branch master
nothing to commit, working tree clean
git merge newbranch
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
git merge newbranch
error: Merging is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
git merge newbranch
error: Merging is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
git commit -m "Merge branch 'newbranch'
dquote> 

git commit -m "Merge branch 'newbranch'""
dquote> git commit -m "Merge branch 'newbranch'

git commit -m "Merge branch 'newbranch'"
[master 4ba7d63] Merge branch 'newbranch'
git branch
* master
  nav-bar
  newbranch
git branch -d newbranch 
Deleted branch newbranch (was 9b8104a).
git branch
* master
  nav-bar
git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
git add index.html 

git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   index.html

git diff

git diff --staged 
diff --git a/index.html b/index.html
index 43448de..f5f62b6 100644
--- a/index.html
+++ b/index.html
@@ -6,8 +6,8 @@
     <title>git learning</title>
 </head>
 <body>
-    <h1>looks good as a project </h1>
-
+    <nav>navbar 1</nav>
+    <h1>looks good  project </h1>
     <h1>footer added 2</h1>
 </body>
 </html>
\ No newline at end of file
git add footer.html 

git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   footer.html
	modified:   index.html

git diff --staged
diff --git a/footer.html b/footer.html
index 552b522..853d65b 100644
--- a/footer.html
+++ b/footer.html
@@ -1,3 +1,3 @@
 <footer>
-    Hello
+    Hello new footer
 </footer>
\ No newline at end of file
diff --git a/index.html b/index.html
index 43448de..f5f62b6 100644
--- a/index.html
+++ b/index.html
@@ -6,8 +6,8 @@
     <title>git learning</title>
 </head>
 <body>
-    <h1>looks good as a project </h1>
-
+    <nav>navbar 1</nav>
+    <h1>looks good  project </h1>
     <h1>footer added 2</h1>
 </body>
 </html>
\ No newline at end of file
git commit -m "changed index and footer"
[master e85b260] changed index and footer
 2 files changed, 3 insertions(+), 3 deletions(-)
git log --oneline
e85b260 (HEAD -> master) changed index and footer
4ba7d63 Merge branch 'newbranch'
9b8104a index edit 2
c13bb58 index edit 1
2ad2d03 footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git branch 4ba7d63 e85b260

git diff 4ba7d63 e85b260
warning: refname '4ba7d63' is ambiguous.
git diff e85b260 4ba7d63
warning: refname '4ba7d63' is ambiguous.
git add footer.html 

git commit -m "2"
[master 9c510b4] 2
 1 file changed, 2 insertions(+), 1 deletion(-)
git log --oneline
9c510b4 (HEAD -> master) 2
e85b260 (4ba7d63) changed index and footer
4ba7d63 Merge branch 'newbranch'
9b8104a index edit 2
c13bb58 index edit 1
2ad2d03 footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git diff e85b260 9c510b4
diff --git a/footer.html b/footer.html
index 853d65b..8e1420a 100644
--- a/footer.html
+++ b/footer.html
@@ -1,3 +1,4 @@
 <footer>
-    Hello new footer
+    Hello new footer 
+    2
 </footer>
\ No newline at end of file
git diff master nav-bar
diff --git a/footer.html b/footer.html
deleted file mode 100644
index 8e1420a..0000000
--- a/footer.html
+++ /dev/null
@@ -1,4 +0,0 @@
-<footer>
-    Hello new footer 
-    2
-</footer>
\ No newline at end of file
diff --git a/hero.html b/hero.html
deleted file mode 100644
index a209a2b..0000000
--- a/hero.html
+++ /dev/null
@@ -1,3 +0,0 @@
-<section>
-    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, labore.</h1>
-</section>
\ No newline at end of file
diff --git a/index.html b/index.html
index f5f62b6..0b3c765 100644
--- a/index.html
+++ b/index.html
@@ -6,8 +6,6 @@
     <title>git learning</title>
 </head>
 <body>
-    <nav>navbar 1</nav>
-    <h1>looks good  project </h1>
-    <h1>footer added 2</h1>
+    <h1>looks good as a project </h1>
 </body>
 </html>
\ No newline at end of file
git branch 
  4ba7d63
* master
  nav-bar
git status
On branch master
nothing to commit, working tree clean
git swiitch -c bugfix
git: 'swiitch' is not a git command. See 'git --help'.

The most similar command is
	switch
git switch -c bugfix
Switched to a new branch 'bugfix'
git status
On branch bugfix
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   footer.html

no changes added to commit (use "git add" and/or "git commit -a")
git switch master
M	footer.html
Switched to branch 'master'
git switch bugfix
M	footer.html
Switched to branch 'bugfix'
git branch
  4ba7d63
* bugfix
  master
  nav-bar
git switch nav-bar
error: Your local changes to the following files would be overwritten by checkout:
	footer.html
Please commit your changes or stash them before you switch branches.
Aborting
git stash
Saved working directory and index state WIP on bugfix: 9c510b4 2
git swiych nav-bar
git: 'swiych' is not a git command. See 'git --help'.

The most similar command is
	switch
git switch nav-bar
Switched to branch 'nav-bar'
git branch
  4ba7d63
  bugfix
  master
* nav-bar
git branch bugfix
fatal: a branch named 'bugfix' already exists
git switch bugfix 
Switched to branch 'bugfix'
git status
On branch bugfix
nothing to commit, working tree clean
git stash pop
On branch bugfix
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   footer.html

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (4c91f45aeb35bd5a0ed18769e484057213a18406)
git stash
Saved working directory and index state WIP on bugfix: 9c510b4 2
git switch master
Switched to branch 'master'
git stash pop
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   footer.html

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (38285edf7d16d24318c1152c0d3eaa8be9860ff4)
git stash list

git stash
Saved working directory and index state WIP on master: 9c510b4 2
git stash list
stash@{0}: WIP on master: 9c510b4 2
git log --oneline
9c510b4 (HEAD -> master, bugfix) 2
e85b260 (4ba7d63) changed index and footer
4ba7d63 Merge branch 'newbranch'
9b8104a index edit 2
c13bb58 index edit 1
2ad2d03 footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git checkout e9cfc6c
Note: switching to 'e9cfc6c'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at e9cfc6c Merge branch 'nav-bar'
git checkout master
Previous HEAD position was e9cfc6c Merge branch 'nav-bar'
Switched to branch 'master'
git log --oneline
9c510b4 (HEAD -> master, bugfix) 2
e85b260 (4ba7d63) changed index and footer
4ba7d63 Merge branch 'newbranch'
9b8104a index edit 2
c13bb58 index edit 1
2ad2d03 footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git checkout 9c510b4
Note: switching to '9c510b4'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 9c510b4 2
git checkout HEAD~2
Previous HEAD position was 9c510b4 2
HEAD is now at 4ba7d63 Merge branch 'newbranch'
git log --oneline
4ba7d63 (HEAD) Merge branch 'newbranch'
9b8104a index edit 2
c13bb58 index edit 1
2ad2d03 footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git checkout master
Previous HEAD position was 4ba7d63 Merge branch 'newbranch'
Switched to branch 'master'
git log --oneline
9c510b4 (HEAD -> master, bugfix) 2
e85b260 (4ba7d63) changed index and footer
4ba7d63 Merge branch 'newbranch'
9b8104a index edit 2
c13bb58 index edit 1
2ad2d03 footer added
e9cfc6c Merge branch 'nav-bar'
5cb0ade hero commited
911f9df (nav-bar) nav commited
6330ab1 second after that
c16ac1a First commit
git config --global user.name "yashmmith"

git config --global user.email "samindlayashmmithsaii3@gmail.com"

git statusa
git: 'statusa' is not a git command. See 'git --help'.

The most similar command is
	status
git status
On branch master
nothing to commit, working tree clean
pwd
/Users/yashmmithsaiisamindla/Desktop/githri2
