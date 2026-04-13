pipeline {
    agent any

    tools {
        nodejs 'node 18'
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
    }
}