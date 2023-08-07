pipeline {
    agent any

    tools { nodejs 'Node18' }

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
