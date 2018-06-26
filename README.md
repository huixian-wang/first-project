# first-project
## 新建仓库、首次与本地仓库关联并提交
#### git init
#### git add
#### git commit
#### git remote add origin <link>
#### git push -u origin master

#### 版本回退
#### git commit @1  git commit @2 git commit @3（git log[--pretty=oneline]）
#### git reset [--hard] HEAD~^(^表示回退至上个版本，^^表示上个版本， 较多时可写为HEAD～100)

#### 如果需要撤销回退，回到之前的版本号
#### git reflog（找到上一次的commit_id）
#### git reset --hard commit_id
test
test2
