import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function TechResume() {
  return (
    <>
      <Head>
        <title>Melvin Peralta | Tech Resume</title>
        <meta name="description" content="Technical resume of Melvin Peralta" />
      </Head>

      <div className="pt-20 pb-16 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-light transition-colors">
              <FiArrowLeft className="mr-2" /> Back to Home
            </Link>
            <a 
              href="/tech-resume.pdf" 
              download
              className="flex items-center px-4 py-2 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <FiDownload className="mr-2" /> Download PDF
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-4xl mx-auto"
          >
            <div className="mb-8 border-b pb-6 dark:border-gray-700">
              <h1 className="text-3xl font-bold mb-2">Melvin Peralta</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Technical Professional & Applied Technology Specialist
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span>Laurel, MD 20708</span>
                <span>|</span>
                <span>667-200-9784</span>
                <span>|</span>
                <span>Melvin.a.p.cruz@gmail.com</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Technical Summary</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Detail-oriented technical professional with hands-on experience in data management systems, CRM platforms, 
                and digital communication tools. Background in applied technology from CAT North combined with practical 
                experience managing high-volume technical systems in fleet management and healthcare environments. 
                Strong analytical skills with a focus on process optimization and efficiency improvements through 
                technology implementation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Software & Systems</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Microsoft Office Suite (Excel, Word, PowerPoint, Outlook)</li>
                    <li>CRM Systems & Database Management</li>
                    <li>Call Center Operating Systems</li>
                    <li>Remote Collaboration Tools</li>
                    <li>Fleet Management Software</li>
                    <li>Data Tracking & Reporting Systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Abilities</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Data Analysis & Reporting</li>
                    <li>Technical Documentation</li>
                    <li>Process Automation</li>
                    <li>System Integration</li>
                    <li>Applied Technology Implementation</li>
                    <li>Technical Problem-Solving</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Technical Experience</h2>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Sales Development Representative - Technical Systems</h3>
                  <span className="text-gray-600 dark:text-gray-300">June 2022 - Present</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">Long Home, Savage, MD</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Implemented and managed automated text campaign systems, integrating with existing CRM to boost engagement rates by 35%</li>
                  <li>Administered customer data across various platforms, ensuring data integrity and compliance with system protocols</li>
                  <li>Analyzed performance metrics through technical dashboards to optimize outreach strategies and team performance</li>
                  <li>Developed technical documentation for sales systems and trained team members on platform utilization</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Fleet Management Systems Specialist</h3>
                  <span className="text-gray-600 dark:text-gray-300">June 2021 - June 2022</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">Element Fleet Management (via Aerotek), Remote</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Operated specialized fleet management software to track vehicle claims, maintenance schedules, and asset utilization</li>
                  <li>Integrated data across multiple technical platforms to create comprehensive fleet status reports</li>
                  <li>Implemented workflow improvements to the claims processing system, reducing processing time by 22%</li>
                  <li>Managed digital documentation systems, ensuring proper data classification and retrieval capabilities</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Data Management Technician - COVID Response</h3>
                  <span className="text-gray-600 dark:text-gray-300">September 2020 - October 2021</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">Baltimore City Health Department, Baltimore, MD</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Operated specialized data tracking systems to monitor COVID case trends and vaccination distribution</li>
                  <li>Generated technical reports using data visualization tools to inform policy decisions</li>
                  <li>Maintained database integrity across multiple platforms during high-volume data processing periods</li>
                  <li>Collaborated with IT staff to troubleshoot system issues and implement improvements to data collection methods</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Technical Education</h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Center of Applied Technology North (CAT North)</h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Technical Program Participant</div>
                <p className="text-gray-600 dark:text-gray-300">Specialized training in applied technology with focus on practical implementation and technical problem-solving skills</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">MBA in Business Administration And Management</h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Anne Arundel Community College, Arnold, MD</div>
                <p className="text-gray-600 dark:text-gray-300">Technical coursework in data analytics, business information systems, and technology management</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Technical Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Call Center System Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300">Analyzed call flow patterns and implemented technical changes to reduce call waiting times by 18% and improve data capture accuracy</p>
                </div>
                <div>
                  <h3 className="font-semibold">Automated Reporting Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300">Developed an automated reporting system that consolidated data from multiple sources into a centralized dashboard for real-time decision making</p>
                </div>
                <div>
                  <h3 className="font-semibold">Document Management System Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Coordinated the implementation of a digital document management system, including setting up user access protocols and workflow automation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
