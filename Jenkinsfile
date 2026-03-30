@Library('bawadev/kamal-deployment@main') _

deployStaticApp(
    appName:       'softx',
    sourceRepo:    'bawadev/soft-tech-website',
    dockerImage:   'bawadev/softx-website',
    containerPort: '3200',
    kamalConfig:   'apps/softx/deploy.yml',
    domains:       [
        dev:  'dev.softx.world',
        prod: 'softx.world'
    ]
)
