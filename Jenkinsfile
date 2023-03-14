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
                        sh "docker build -t venkatasaikumar9/openkart:${env.BUILD_ID} ."
                        echo "Openkart:3.0 image is successfully built"
                    }
                }
            }

            stage('Docker Deploy'){
                steps{
                    script{
                        sh "docker run --name angular -p 9999:4200 venkatasaikumar9/openkart:${env.BUILD_ID}"
                        echo "Openkart angular project is running on localhost ip address with port map of 4200"
                    }
                }
            }
           
                                           




    }
}
