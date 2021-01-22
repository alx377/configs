## Install

- `sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
- `git clone https://github.com/pyenv/pyenv.git ~/.pyenv`
- `pyenv install 3.8.3`
- `pyenv global 3.8.3`
- No need to install virtualenvwrapper
- `git clone https://github.com/pyenv/pyenv-virtualenvwrapper.git $(pyenv root)/plugins/pyenv-virtualenvwrapper`
- `sudo ~/.pyenv/plugins/pyenv-virtualenvwrapper/install.sh`
- Copy `virtualenvwrapper.plugin.zsh` to `~/.oh-my-zsh/plugins/virtualenvwrapper`
- `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting`
- `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions`
