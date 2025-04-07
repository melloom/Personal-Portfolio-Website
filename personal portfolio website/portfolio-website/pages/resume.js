import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Melvin Peralta | Resume</title>
        <meta name="description" content="Professional resume of Melvin Peralta" />
      </Head>

      <div className="pt-20 pb-16 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-light transition-colors">
              <FiArrowLeft className="mr-2" /> Back to Home
            </Link>
            <a 
              href="/resume.pdf" 
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
                Experienced Customer Service & Claims Specialist
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
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Professional Summary</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Experienced Customer Service & Claims Specialist with expertise in fleet insurance claims, call
                center operations, and sales. Proficient in Microsoft Office, CRM systems, and data management,
                with a strong ability to handle high-volume calls, process claims efficiently, and generate leads.
                Skilled in team leadership, problem-solving, and customer relations, with a proven track record of
                optimizing processes and exceeding performance targets. Adaptable, detail-oriented, and
                committed to delivering excellent service in fast-paced environments.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Microsoft Office Suite</li>
                  <li>CRM & Data Entry</li>
                  <li>Call Center Systems</li>
                  <li>Outbound Sales</li>
                </ul>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Claims Management</li>
                  <li>Remote Work Tools</li>
                  <li>Business Administration</li>
                  <li>Order Processing</li>
                </ul>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Leadership</li>
                  <li>Problem-Solving</li>
                  <li>Communication</li>
                  <li>Attention to Detail</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Work Experience</h2>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Sales Development Representative (SDR)</h3>
                  <span className="text-gray-600 dark:text-gray-300">June 2022 - Present</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">Long Home, Savage, MD</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Top Sales Performer: Led in sales and demo appointments, consistently exceeding targets.</li>
                  <li>Outbound Texting Lead: Managed a team of 8, overseeing all outbound text campaigns to engage and convert leads.</li>
                  <li>High-Volume Sales & Lead Generation: Successfully scheduled and closed deals through calls and texts, optimizing customer engagement.</li>
                  <li>Leadership at 20: Took on a leadership role early, driving team success in outbound sales strategies.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Customer Service & Claims Specialist</h3>
                  <span className="text-gray-600 dark:text-gray-300">June 2021 - June 2022</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">Aerotek-Contracted for Kaiser Perm & Element Fleet, Remote</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Handled up to 80 calls per day, assisting clients, vendors, and healthcare professionals.</li>
                  <li>Liaised with 50+ vendors, contractors, and service providers for order processing.</li>
                  <li>Processed fleet insurance claims for leased company vehicles, ensuring accurate documentation.</li>
                  <li>Served as a liaison between clients, insurance adjusters, and fleet vendors for claim coordination.</li>
                  <li>Optimized claim workflows to reduce downtime and improve fleet operation efficiency.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">Baltimore City Health Department – COVID Response</h3>
                  <span className="text-gray-600 dark:text-gray-300">September 2020 - October 2021</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">Baltimore City Health Department, Baltimore, MD</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Provided public health guidance to residents, ensuring compliance with safety protocols.</li>
                  <li>Managed data entry and reporting for COVID cases, tracking trends and assisting in policy implementation.</li>
                  <li>Collaborated with healthcare professionals and government agencies on community health initiatives.</li>
                  <li>Educated the public on resources and assistance programs during the pandemic.</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary-light">Education</h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">MBA in Business Administration And Management</h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Anne Arundel Community College, Arnold, MD</div>
                <p className="text-gray-600 dark:text-gray-300">Gaining skills in leadership, strategic planning, and organizational development.</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1 flex-wrap">
                  <h3 className="font-semibold">High School Diploma</h3>
                  <span className="text-gray-600 dark:text-gray-300">June 2020</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Meade Senior High School, Fort Meade, MD</div>
                <p className="text-gray-600 dark:text-gray-300">Honor Roll Student – Maintained high academic performance throughout high school.</p>
                <p className="text-gray-600 dark:text-gray-300">Attended Center of Applied Technology North (CAT North)</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-light">References</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold">Melissa Cuesta</h3>
                  <p className="text-gray-600 dark:text-gray-300">Manager, Baltimore City Health Department</p>
                  <p className="text-gray-600 dark:text-gray-300">MelissaM.Cuesta@baltimorecity.gov</p>
                  <p className="text-gray-600 dark:text-gray-300">917-549-5653</p>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Nunez</h3>
                  <p className="text-gray-600 dark:text-gray-300">Manager, Baltimore City Health Department</p>
                  <p className="text-gray-600 dark:text-gray-300">Michael.nunezlopez@baltimorecity.gov</p>
                  <p className="text-gray-600 dark:text-gray-300">503-840-5532</p>
                </div>
                <div>
                  <h3 className="font-semibold">Cynthia Mendi</h3>
                  <p className="text-gray-600 dark:text-gray-300">Supervisor, Long Home Products</p>
                  <p className="text-gray-600 dark:text-gray-300">mendicynthia0@gmail.com</p>
                  <p className="text-gray-600 dark:text-gray-300">240-614-6360</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
