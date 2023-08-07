pipeline {
    agent any

    tools { nodejs 'Node20.5.0' }

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npx cypress run -b chrome'
            }
        }
    }
}
