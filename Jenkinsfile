@Library('softx-cicd') _
deployApp(
    appName: 'softx',
    dockerImage: 'bawadev/softx-website',
    dockerfile: 'Dockerfile',
    containerPort: '3200',
    traefikLabels: [
        prod: [domain: 'softx.world'],
        prod2: [domain: 'softx.world']
    ]
)
