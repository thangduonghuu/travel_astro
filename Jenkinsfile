pipeline {
    agent any

    tools { nodejs 'node' }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/thangduonghuu/portfolio_astro.git'
            }
        }

            stage('Build') {
                steps {
                    sh 'rm -rf node_modules'
                    sh 'npm install --legacy-peer-deps'
                    sh 'npm audit fix --force'
                    sh 'npm run build'
                    sh 'ls -l'
                }
            }

            stage('Deploy') {
                steps {
                    sh 'rm -rf /var/www/portfolio/html/*'
                    sh 'cp -r dist/* /var/www/portfolio/html/'
                    sh 'sudo /usr/sbin/nginx -s reload'
                }
            }
    }
}
