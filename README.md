# first-project
## 新建仓库、首次与本地仓库关联并提交
#### git init
#### git add
#### git commit
#### git remote add origin <link>
#### git push -u origin master

## 版本回退
#### git commit @1  git commit @2 git commit @3（git log[--pretty=oneline]）
#### git reset [--hard] HEAD~^(^表示回退至上个版本，^^表示上个版本， 较多时可写为HEAD～100)

### 如果需要撤销回退，回到之前的版本号
#### git reflog（找到上一次的commit_id）
#### git reset --hard commit_id

## 撤销修改
#### 1.尚未添加到缓冲区
#### git checkout -- <file>
#### 2.修改add到了暂存区，还未commit
#### git reset HEAD <file>

## 删除文件
### 1.误删(尚未add)
#### git checkout -- <file>
### 2.需要删除
#### git add / git rm <file>(rm：将文件从版本库中删除)
#### git commit

## 新建分支
#### git branch <name>
#### git checkout <name>
#### 等价于 git checkout -b <name>
### 1.本地先开好分支然后推送到远程(先本地后远程)
#### git checkout -b <localBranch>
#### git push origin <localBranch>:<remoteBranch>（git push -u可以使远程分支与本地分支关联起来）
### 2.远程先开好分支然后拉到本地(先远程后本地)
#### git checkout -b branchName origin/<remoteBranch>

## 关联分支
<!-- #### git branch --set-upstream your_branch origin/remote_branch -->
#### git branch --set-upstream-to=origin/remote_branch  your_branch
<!-- #### git branch --track your_branch origin/remote_branch ??? -->

## 删除分支
### 本地分支
#### git branch -d <name>
#### git branch -D <name>(强制删)
### 本地的远程分支
#### git branch -r -D/-d origin/<name>
### 远程删除git服务器上的分支
#### 1. git push origin -d branchName
#### 2. git branch -r -D/-d origin/<name>
#### 2. git push origin :branchName


## 合并分支
#### git merge <branchName>
#### git merge --abort取消本次merge

## 解决冲突
#### git log --graph 查看分支合并图


## 其它
#### git fetch 更新本地远程分支使其与远程分支同步，但不会merge到本地分支（-p表示删除远程不存在的分支）
