现在得到的既不是A也不是B
目前添加了对main的push保护
使用git commit -m "test: try pushing to protected main"进行测试

第一次尝试失败，原因在于私有仓库只有付费成团队账号才能使用保护功能
现在更新成了公开仓库
使用git commit -m "test: try pushing to protected main again"进行测试

还是失败，原因在于规则并没有应用到main分支
git commit -m "test: verify branch protection on public repo"
