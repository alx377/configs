# If you come from bash you might have to change your $PATH.
#export PYENV_ROOT="$HOME/.pyenv"
#export PATH="$PYENV_ROOT/bin:$PATH"
#if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi
#eval "$(pyenv init -)"
#pyenv init -
export WORKON_HOME="/home/alx/.virtualenvs"
#export VIRTUALENVWRAPPER_PYTHON="/home/alx/.pyenv/versions/3.8.6/bin/python"
export TILLER_NAMESPACE=integrations

# Path to your oh-my-zsh installation.
export ZSH=/home/alx/.oh-my-zsh

ZSH_THEME="murilasso"

export NVM_DIR="$HOME/.nvm"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
	[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git pyenv virtualenvwrapper django docker docker-compose kubectl zsh-syntax-highlighting zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh
#source /home/alx/.pyenv/versions/3.8.6/bin/virtualenvwrapper.sh

export TZ=UTC
alias vnc=~/VNC-Viewer-6.17.1113-Linux-x64
alias dcu="docker-compose up"
alias dcd="docker-compose down"
alias sp="python manage.py shell_plus --ipython"
alias pmr="python manage.py runserver"
alias pm="python manage.py"
alias ll="ls -la"
