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

            stage('DockerSetup'){
                steps{
                    script{
                        def dockerHome = tool 'myDocker'
                        echo ">>>>>>>>>${dockerHome}"
                        env.PATH = "${dockerHome}/bin:${env.PATH}"
                    }
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

            stage('Docker Build'){
                steps{
                    script{
                        def customImage = docker.build("venkatasaikumar9/openkart_jenkins:1.1")
                        echo "pushing the image verion 1.1"

                        withCredentials([usernamePassword(credentialsId: 'venkatasaikumar9dockerid', usernameVariable:'venkatasaikumar9dockeridUser', passwordVariable:'venkatasaikumar9dockeridPassword')])
                        {
                            sh "docker login -u ${env.venkatasaikumar9dockeridUser} -p ${env.venkatasaikumar9dockeridPassword}"
                            sh "docker push venkatasaikumar9/openkart_jenkins:1.1"
                        }
                    }
                }
            }






    }
}
