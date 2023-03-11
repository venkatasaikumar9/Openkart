#!groovy

pipeline{
    
    agent any

    stages{
            stage('CheckOutGit'){
                steps{
                    echo "Cloning the openkart project from github to container"
                    checkout scm
                    echo "successfully cloned the openkart project"
                    sh "ls -lrth"
                }
            
            }

            stage('Docker Check'){
                steps{
                    script{
                        echo "checking docker ............."
                        sh "docker --version"
                        sh "whoami"
                    }
                }
            }
    }
}
   