var express = require('express');
var router = express.Router();


const datalist = [
  { 'id': 1, 'term': "CI/CD", 'description':"In CI, work completed by the developers is merged frequently into the main branch, rather than waiting until the end of the day or until the end of the sprint. This practice of merging fewer changes at a time allows developers to resolve merge conflicts earlier and address regression defects more efficiently and quickly.", 'Reference':"P.P. Dingare, CI/CD pipeline using Jenkins Unleashed: solutions while setting up CI/CD processes, Apress L.P., 2022. " },
  { 'id': 2, 'term': "Chaos Engineering", 'description':"The identification of security control failures through proactive experimentation to build confidence in the system’s ability to defend against malicious conditions in production", 'Reference':"Aaron Rinehart, “Security Chaos Engineering: A New Paradigm for Cybersecurity,” Opensource.com, January 24, 2018," },
  { 'id': 3, 'term': "Application Release Automation(ARA)", 'description':"Application release automation (ARA) is a process that automatically packages and deploys an application, or application updates, through the stages of development to production. To do this, ARA software features include deployment automation, release coordination, and environment management and modeling tools", 'Reference':" A. S. Gillis, “What is Application Release Automation (ARA)?: Definition from TechTarget,” IT Operations, https://www.techtarget.com/searchitoperations/definition/application-release-automation-ARA [accessed Jul. 19, 2023]. " },
  { 'id': 4, 'term': "Containers", 'description':"Containers also provide a virtual environment that packages the application processes, metadata, and file system—everything that is required by an application to run.", 'Reference':"P.S. Kocher, Microservices and Containers, Addison-Wesley, 2018. [Online]. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b4087635&site=eds-live&scope=site. [Accessed: July 19, 2023]." },
  { 'id': 5, 'term': "Docker", 'description':"Docker is a tool that promises to easily encapsulate the process of creating a distributable artifact for any application, deploying it at scale into any environment, and streamlining the workflow and responsiveness of agile software organizations.", 'Reference':"K. Matthias, Docker: Up and Running, First edition, Edited by S.P. Kane, O’Reilly, 2015. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b4062596&site=eds-live&scope=site. [Accessed: July 19, 2023]." },
  { 'id': 6, 'term': "GitOps", 'description':"GitOps is a framework to automate infrastructure processes using DevOps tools and concepts. With version control you can manage infrastructure and environment definitions with existing tooling.", 'Reference':"N. Vinto and A. Soto Bueno, GitOps Cookbook: Kubernetes Automation in Practice, First edition, O'Reilly Media, 2023. [Online]. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b5084939&site=eds-live&scope=site. [Accessed: July 19, 2023]." },
  { 'id': 7, 'term': "Infrastructure as a Code", 'description':"Infrastructure as code (IaC) uses DevOps methodology and versioning with a descriptive model to define and deploy infrastructure, such as networks, virtual machines, load balancers, and connection topologies.", 'Reference':"jacob m, juliakm, thepet v, and Kaim Ed, What is infrastructure as a Code (IaC), Microsoft Learn AI Skills Challenge,https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code,[Accesses: July 17, 2023]" },
  { 'id': 8, 'term': "Platform Engineering", 'description':"Platform engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud-native era", 'Reference':"Luca Galante, What is Platform Engineering, Platform Engineering, https://platformengineering.org/blog/what-is-platform-engineering,[Accessed July 20, 2023] " },
  { 'id': 9, 'term': "version control", 'description':"A version control system records changes to files stored in the system. These files can be source code, assets, or other documents that might be part of a software development project.", 'Reference':"Google cloud, DevOps Tech: Version Control, GoogleCloud.org, https://cloud.google.com/architecture/devops/devops-tech-version-control#:~:text=A%20version%20control%20system%20records,groups%20called%20commits%20or%20revisions.[Accessed July 16,2023] " },
  { 'id': 10, 'term': "Tenant", 'description':"A tenant is a group of users who share a common access with specific privileges to the software instance.", 'Reference':"Rajesh Kumar, What is tenant, Devops School, https://www.devopsschool.com/blog/what-is-a-tenant-multi-tenant-in-computing-and-software-domain/#:~:text=A%20tenant%20is%20a%20group,is%20known%20as%20a%20tenant.[Accessed July 19, 2023]" },
  { 'id': 11, 'term': "Branching", 'description': "Branching occurs when an object under review in source control is duplicated so that other developers can work on it concurrently.", 'Reference':"Valerii G. Grytsenko and Oksana M. Podolyan, 2014. 'Application of Git-Branching for the Organization of Teamwork on IT Projects', Information Technologies and Learning Tools, 39(1), pp. 250–263. Available at: https://search.ebscohost.com/login.aspx?direct=true&db=edsdoj&AN=edsdoj.1556c992934748f9ac3a618510d42c1c&site=eds-live&scope=site [Accessed: 4 August 2023]."},
  { 'id': 12, 'term': "Agile Software Development", 'description':"A lightweight framework that promotes iterative development and incremental delivery using self-organizing cross-functional teams.", 'Reference':"Stober, T. and Hansmann, U.  Agile software development : best practices for large software development projects. Springer.(2009), Available at: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b2620092&site=eds-live&scope=site [Accessed: 4 August 2023]."},
  { 'id': 13, 'term': "Clusters", 'description':"A set of connected computers that work together to enable load balancing, auto scaling and high availability.", 'Reference':"Farcic, V. (2018) The DevOps 2.2 Toolkit : Self-Sufficient Docker Clusters. Packt Publishing. Available at: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b5181845&site=eds-live&scope=site (Accessed: 4 August 2023)."},
  { 'id': 14, 'term': "Containers-as-a-Service (CaaS)", 'description':"A cloud service model that offers container-based virtualization with container engines, orchestration and compute resources", 'Reference':"Mohamed K. Hussein, Mohamed H. Mousa and Mohamed A. Alqarni (2019) ‘A placement architecture for a container as a service (CaaS) in a cloud environment’, Journal of Cloud Computing: Advances, Systems and Applications, 8(1), pp. 1–15. doi:10.1186/s13677-019-0131-1.[Accessed: 4 August 2023"},
  { 'id': 15, 'term': "Integration Testing", 'description':"The testing of a component or module of code to ensure it integrates correctly with other components or modules of code.", 'Reference':"Jin Li et al. (2018) ‘An integration testing framework and evaluation metric for vulnerability mining methods’, China Communications, Communications, China, China Commun, 15(2), pp. 190–208. doi:10.1109/CC.2018.8300281.[Accessed: 5 August 2023"},
  { 'id': 16, 'term': "Mean Time to Recovery (MTTR)", 'description':"MTTR is the average time that a device will take to recover from a failure, i.e. going from “down” to “available”.", 'Reference':"Alex Circei, Mean Time To Recovery—A DORA Metric Explained,Forbes, Apr 4, 2023, Available: https://www.forbes.com/sites/theyec/2023/04/04/mean-time-to-recovery-a-dora-metric-explained/?sh=4fa92b1a60b4.[Accessed: 5 August 2023]"},
  { 'id': 17, 'term': "Production", 'description':"Production, also known as live, is an environment where the application or feature is accessible to users.", 'Reference':"Hoffmann, A. et al. (2001) ‘Generating production quality software development tools using a machine description language’, Proceedings Design, Automation and Test in Europe. Conference and Exhibition 2001, Design, Automation and Test in Europe, 2001. Conference and Exhibition 2001. Proceedings, Design, automation and test in Europe, pp. 674–678. doi:10.1109/DATE.2001.915097.[Accessed: 5 August 2023]"},
  { 'id': 18, 'term': "Rollback", 'description':"The process of returning a product or application back to a previous version. Usually this is done when the current version experiences problems or issues.", 'Reference':"Sathre, J. and Zambreno, J. (2023) ‘Automated software attack recovery using rollback and huddle’, Design Automation for Embedded Systems, (Preprints), pp. 1–18. doi:10.1007/s10617-008-9020-4.[Accessed: 8 August 2023]"},
  { 'id': 19, 'term': "Staging Environment", 'description':"A staging environment (stage) is a nearly exact replica of a production environment for software testing. Staging environments are made to test codes, builds, and updates to ensure quality under a production-like environment before application deployment.", 'Reference':"Alexander S. Gillis, staging environment, TechTarget,2018, Available: https://www.techtarget.com/searchsoftwarequality/definition/staging-environment#:~:text=A%20staging%20environment%20(stage)%20is,like%20environment%20before%20application%20deployment.[Accessed: 5 August 2023]"},
  { 'id': 20, 'term': "User Acceptance Testing (UAT)", 'description':"A type of software testing that verifies that a given application works for the user. During this process, actual users test the software to make sure it behaves as expected in real-world scenarios.", 'Reference':"Gordon, S. et al.  ‘Best Practice Recommendations: User Acceptance Testing for Systems Designed to Collect Clinical Outcome Assessment Data Electronically’, Therapeutic Innovation & Regulatory Science, ,(2022)56(3), pp. 442–453. doi:10.1007/s43441-021-00363-z.[Accessed: 5 August 2023]"},
  { 'id': 21, 'term': "Capacity Test", 'description': "Capacity Testing ensures that the application and environment can smoothly handle the maximum number of users or transactions according to the performance requirements defined in your Service-Level Agreement (SLA). Capacity Testing is aimed at testing the maximum capacity of your system in terms of traffic, while still being able to deliver optimal user experience. ", 'Reference': "Radview, All You Need To Know About Capacity Testing, Radview, Blog, https://www.radview.com/blog/all-you-need-to-know-about-capacity-testing/#:~:text=What%20is%20Capacity%20Testing%3F,%2DLevel%20Agreement%20(SLA).[Accessed: 26 August 2023 ] " },
  { 'id': 22, 'term': "Deployment Pipeline", 'description': "A Deployment pipeline is the process of taking code from version control and making it readily available to users of your application in an automated fashion. When a team of developers are working on projects or features they need a reliable and efficient way to build, test and deploy their work. Historically, this would have been a manual process involving lots of communication and a lot of human error.", 'Reference': "Dan Merron, Deployment Pipeline (CI/CD) in Software Engineering, BMC, DevOps Blog, https://www.bmc.com/blogs/deployment-pipeline/. [Accessed: 26 August 2023]" },
  { 'id': 23, 'term': "Microservices", 'description': "Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.", 'Reference': "AWS, What are Microservice, AWS,Blog, https://aws.amazon.com/microservices/. [Accessed: 26 August 2023]" },
  { 'id': 24, 'term': "Source Control", 'description': "Source control tools enable development teams to effectively manage changes and version code in their codebases. Here we cover what source control is and how to choose tools.", 'Reference': "Chuck Gehman, What is Source Control? Exploring Source Control Management Tool, Perforce, September 12, 2019, https://www.perforce.com/blog/vcs/what-source-control. [Accessed: 26 August 2023]" },
  { 'id': 25, 'term': "Unit Testing", 'description': "Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.", 'Reference': "Thomas hamilton, Unit Testing Tutorial – What is, Types & Test Example, GURU99, August 5, 2023, https://www.guru99.com/unit-testing-guide.html.[Accessed: 26 August 2023] " },
  { 'id': 26, 'term': "Jenkins", 'description': "Jenkins offers a simple way to set up a continuous integration or continuous delivery (CI/CD) environment for almost any combination of languages and source code repositories using pipelines, as well as automating other routine development tasks.", 'Reference': "Martin Heller, What is Jenkins? The CI server explained, InfoWorl, Blog, March 15, 2023, https://www.infoworld.com/article/3239666/what-is-jenkins-the-ci-server-explained.html. [Accessed: 26 August 2023]" },
  { 'id': 27, 'term': "Artifact", 'description': "DevOps artifacts are referenced in a pipeline stage for automated deployment to the target environment. They are used to specify software package versions for deployment. DevOps artifacts can be a container image, a generic artifact, helm chart, or they can be defined inline.", 'Reference': "Oracle, Managing DevOps Artifacts, Oracle, Blog, https://docs.oracle.com/en-us/iaas/Content/devops/using/artifacts.htm#:~:text=DevOps%20artifacts%20are%20referenced%20in,they%20can%20be%20defined%20inline. [Accessed: 26 August 2023]" },
  { 'id': 28, 'term': "Virtual Machine", 'description': "Virtualization is the process of creating several virtual systems on a single server. This practice maximizes a physical machine’s capacity by distributing its resources between multiple users and environments. DevOps teams use virtualization to create virtual machines (VMs), emulations of hardware and software configurations", 'Reference': "Andreja Velimirovic, DevOps and Virtualization: The Effect of VMs on Software Development, PhoneixNAP, Blog, https://phoenixnap.com/blog/devops-virtualization#:~:text=DevOps%20teams%20use%20virtualization%20to,CPU. [Accessed: 26 August 2023]" },
  { 'id': 29, 'term': "Image", 'description': "Images are read-only templates containing instructions for creating a container. A Docker image creates containers to run on the Docker platform. Think of an image like a blueprint or snapshot of what will be in a container when it runs.", 'Reference': "Jacob Schmitt, Docker image vs container: What are the differences?, Circleci Blog, March 30, 2023, Blog, https://circleci.com/blog/docker-image-vs-container/. [Accessed: 26 August 2023]" },
  { 'id': 30, 'term': "Snapshot", 'description': "Snapshots are an instantaneous 'picture' of your server's file system at a certain period of time. This picture captures the entire file system as it was when the snapshot is taken. When a snapshot is used to restore the server, the server will revert to exactly how it was at the time of the snapshot.", 'Reference': "Pair, Snapshots and Backups: What is the Difference?, Pair, Blog, MArch 27, 2023, https://www.pair.com/support/kb/snapshots-and-backups-what-is-the-difference/. [Accessed: 26 August 2023]" },
  { 'id': 31, 'term': "Black Box Testing", 'description': "A type of functional testing that involves testing the internal structure, design, and coding of software. It is distinguished from white box testing in that the internal design of the software is not known to the tester, and is therefore a “black box”.", 'Reference': "D. Corradini, M. Pasqua, and M. Ceccato, Automated Black-Box Testing of Mass Assignment Vulnerabilities in RESTful APIs, in 2023 IEEE/ACM 45th International Conference on Software Engineering (ICSE), pp. 2553–2564, 2023. doi: 10.1109/ICSE48619.2023.00213.[Accessed: 9 September 2023]" },
  { 'id': 32, 'term': "Cloud Computing", 'description': "Cloud computing is the delivery of compute power, database, storage, applications, and other IT resources via the internet (as opposed to your computer’s hard drive).", 'Reference': "T. Erl, Cloud Computing: Concepts, Technology, Security & Architecture, 2nd ed., Ed. E. Barcelo, Pearson, 2023. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b5270713&site=eds-live&scope=site. [Accessed: 10 September 2023]" },
  { 'id': 33, 'term': "Configuration Management", 'description': "Configuration management is the discipline of continuously monitoring and ensuring that organizational infrastructure is configured to the correct specifications. This maintains the integrity and consistency of a system or product throughout its lifetime.", 'Reference': "J.M. Quigley and K.L. Robertson, Configuration Management: Theory and Application for Engineers, Managers, and Practitioners, 2nd ed., Auerbach Publications, 2019. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b4250366&site=eds-live&scope=site. [Accessed: 8 September 2023]." },
  { 'id': 34, 'term': "Exploratory Testing", 'description': "A type of testing that emphasizes testers freely discovering the capabilities of the software rather than following fixed methodologies.", 'Reference': "D. Westerveld, Software Testing: Exploratory Testing, LinkedIn.com, 2019. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b4831400&site=eds-live&scope=site. [Accessed: 10 September 2023]." },
  { 'id': 35, 'term': "Model-Based Testing", 'description': "Model-based testing is a software testing technique where the run time behavior of the software under test is checked against predictions made by a model. A model is a description of a system’s behavior. Behavior can be described in terms of input sequences, actions, conditions, output, and flow of data from input to output.", 'Reference': "Thomas. Hamilton, What is Model Base Testing, Guru99, Website,July 29, 2023,Avialable: guru99.com/model-based-testing-tutorial.html. [Accessed:9 Septemeber 2023]" },
  { 'id': 36, 'term': "Open Source", 'description': "Open source software is software with source code that anyone can inspect, modify, and enhance.", 'Reference': "A. Rahman, et al., Security Misconfigurations in Open Source Kubernetes Manifests: An Empirical Study, ACM Transactions on Software Engineering & Methodology, vol. 32, no. 4, pp. 1–36, 2023. doi: 10.1145/3579639.[Accessed: 8 Septemeber 2023]" },
  { 'id': 37, 'term': "Root Cause Analysis", 'description': "Root cause analysis (RCA) is the process of discovering the root causes of problems in order to identify appropriate solutions. RCA assumes that it is much more effective to systematically prevent and solve for underlying issues rather than just treating ad hoc symptoms and putting out fires. ", 'Reference': "Tableu, Root Cause Analysis Explained: Defination, Example, and Methods, Tableau, Available:https://www.tableau.com/learn/articles/root-cause-analysis#:~:text=Root%20cause%20analysis%20(RCA)%20is,symptoms%20and%20putting%20out%20fires.[Accessed: 9 September 2023] " },
  { 'id': 38, 'term': "Serverless Computing", 'description': " A type of service that provides access to computing resources on demand, without requiring users to configure or manage an entire server environment. AWS Lambda is the most famous serverless computing product currently, but a number of competitors have arisen recently, including Azure Serverless Functions and IBM OpenWhisk.", 'Reference': "K. Chowhan, Hands-On Serverless Computing: Build, Run and Orchestrate Serverless Applications Using AWS Lambda, Microsoft Azure Functions, and Google Cloud Functions, Packt Publishing Ltd, 2018. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b5183976&site=eds-live&scope=site. [Accessed: 10 September 2023]." },
  { 'id': 39, 'term': "Elasticity", 'description': "Cloud Elasticity is the property of a cloud to grow or shrink capacity for CPU, memory, and storage resources to adapt to the changing demands of an organization. Cloud Elasticity can be automatic, without need to perform capacity planning in advance of the occasion, or it can be a manual process ", 'Reference': "Vmare, What is Cloud Elasticity, Vmare, Blog, Available:https://www.vmware.com/au/topics/glossary/content/cloud-elasticity.html#:~:text=Cloud%20Elasticity%20can%20refer%20to,by%20a%20cloud%2Dbased%20application.[Accessed: 8 September 2023]" },
  { 'id': 40, 'term': "Jenkins", 'description': "Jenkins is an automation server written in Java. Jenkins helps to automate the software development process, with continuous integration and aids with continuous delivery. It supports various version control tools and it can integrate with Github, Maven, Gradle, and other build utilities and can be extended by a wide range of plugins", 'Reference': "J. McAllister, Mastering Jenkins: Configure and Extend Jenkins to Architect, Build, and Automate Efficient Software Delivery Pipelines, Packt Publishing, 2015. Available: https://search.ebscohost.com/login.aspx?direct=true&db=cat00097a&AN=deakin.b3943997&site=eds-live&scope=site.[Accessed: 10 September 2023]." },

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 Software Development', name: datalist });
});

module.exports = router;
