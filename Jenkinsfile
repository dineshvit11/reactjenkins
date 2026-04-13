pipeline {
    agent any

    tools {
        nodejs 'node 18'
    }

    environment {
        IMAGE_NAME = 'reactapp-shop'
        CONTAINER_NAME = 'react-container'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                '''
            }
        }

        stage('Run Container (Deploy)') {
            steps {
                bat 'docker run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }
    }
}