// vim: filetype=groovy
// variables
def version
@Library(value='jenkins-shared-library', changelog=false) _
pipeline {
    options {
        timestamps()
        ansiColor('xterm')
        disableConcurrentBuilds()
    }
    agent {
        kubernetes {
            label shared.getNodeLabel(env.JOB_NAME)
            yaml shared.getPodTemplate(env.JOB_NAME)
        }
    }
    environment {
        NPM_LOGIN = credentials('npm-access')
        NPM_TOKEN = "${env.NPM_LOGIN_PSW}"
    }
    stages {
        stage ("Test") {
            steps {
                container('cdflow') {
                    sh """
                    docker run -v ${env.WORKSPACE}:/usr/src/app -w /usr/src/app node sh CI/test.sh
                    """
                }
            }
        }
        stage ("Deploy") {
            when { branch 'master' }
            steps {
                container('cdflow') {
                    sh """
                    docker run -e NPM_TOKEN -v ${env.WORKSPACE}:/usr/src/app -w /usr/src/app node sh CI/deploy.sh
                    """
                }
            }
        }
    }
}