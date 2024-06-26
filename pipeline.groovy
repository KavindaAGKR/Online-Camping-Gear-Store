pipeline {
    agent any
triggers{
    githubPush()
  }
    environment {
        REPO_URL = 'https://github.com/KavindaAGKR/Online-Camping-Gear-Store.git'
        BRANCH = 'main'
        DOCKER_REGISTRY = 'KavindaAGKR'
        APP_NAME = 'Online-Camping-Gear-Store'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }
        stage('Install Dependencies'){
            steps{
                echo 'Installing Dependencies...'

            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh '''
                    docker-compose push
                    '''
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}