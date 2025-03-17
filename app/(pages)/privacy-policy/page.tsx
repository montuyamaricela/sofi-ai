/* eslint-disable react/no-unescaped-entities */
'use client';

import type React from 'react';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const ExpandableSection = ({
  title,
  children,
  defaultExpanded = false,
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className='border-b border-gray-200 py-4'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='flex w-full items-center justify-between text-left font-medium'
      >
        <h3 className='text-lg font-semibold'>{title}</h3>
        {isExpanded ? (
          <ChevronUp className='h-5 w-5 text-gray-100' />
        ) : (
          <ChevronDown className='h-5 w-5 text-gray-100' />
        )}
      </button>
      {isExpanded && <div className='mt-4 text-gray-100'>{children}</div>}
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <div className='container mx-auto px-8 py-5 lg:py-16'>
      <h1 className=' text-3xl font-bold text-gray-100 text-center  mb-5 lg:mb-10'>
        Privacy Policy of <span className='font-extrabold'>SOFI AI</span>
      </h1>
      <div className='mx-auto max-w-4xl p-10 rounded-lg bg-[#1a1a1a]'>
        <div className='mb-8 text-center'>
          <p className='text-gray-100'>
            This Application collects some Personal Data from its Users.
          </p>
          <p className='mt-2 text-gray-100'>
            This document contains{' '}
            <a
              href='#california_info'
              className='text-gray-100 hover:underline'
            >
              a section dedicated to Californian consumers and their privacy
              rights
            </a>
            .
          </p>
          <p className='text-gray-100'>
            This document contains{' '}
            <a href='#brazil_info' className='text-gray-100 hover:underline'>
              a section dedicated to Brazilian Users and their privacy rights
            </a>
            .
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='mb-4 text-2xl font-bold text-gray-100'>
            Owner and Data Controller
          </h2>
          <p className='text-gray-100'>
            SOFI AI TECH SOLUTION INC. - 117 Mother Ignacia Ave., Brgy South
            Triangle, Quezon City, Philippines 1103
          </p>
          <p className='text-gray-100'>
            <strong>Owner contact email:</strong> admin@sofitech.ai
          </p>
        </div>

        <ExpandableSection title='Types of Data collected'>
          <p className='mb-4'>
            Among the types of Personal Data that we collect, by itself or
            through third parties, there are: Tracker; Usage Data; email
            address; first name; last name; phone number; payment info; Data
            communicated while using the service; various types of Data.
          </p>
          <p className='mb-4'>
            Complete details on each type of Personal Data collected are
            provided in the dedicated sections of this privacy policy or by
            specific explanation texts displayed prior to the Data collection.
            Personal Data may be freely provided by the User, or, in case of
            Usage Data, collected automatically when using this Application.
          </p>
          <p className='mb-4'>
            Unless specified otherwise, all Data requested by this Application
            is mandatory and failure to provide this Data may make it impossible
            for this Application to provide its services. In cases where this
            Application specifically states that some Data is not mandatory,
            Users are free not to communicate this Data without consequences to
            the availability or the functioning of the Service.
          </p>
          <p>
            Users are responsible for any third-party Personal Data obtained,
            published or shared through this Application and confirm that they
            have the third party's consent to provide the Data to the Owner.
          </p>
        </ExpandableSection>

        <ExpandableSection title='Mode and place of processing the Data'>
          <h3 className='mb-2 text-xl font-semibold'>Methods of processing</h3>
          <p className='mb-4'>
            The Owner takes appropriate security measures to prevent
            unauthorized access, disclosure, modification, or unauthorized
            destruction of the Data. The Data processing is carried out using
            computers and/or IT enabled tools, following organizational
            procedures and modes strictly related to the purposes indicated.
          </p>

          <h3 className='mb-2 mt-4 text-xl font-semibold'>
            Legal basis of processing
          </h3>
          <p className='mb-2'>
            The Owner may process Personal Data relating to Users if one of the
            following applies:
          </p>
          <ul className='mb-4 list-disc pl-6'>
            <li className='mb-1'>
              Users have given their consent for one or more specific purposes.
            </li>
            <li className='mb-1'>
              Provision of Data is necessary for the performance of an agreement
              with the User and/or for any pre-contractual obligations thereof.
            </li>
            <li className='mb-1'>
              Processing is necessary for compliance with a legal obligation to
              which the Owner is subject.
            </li>
            <li className='mb-1'>
              Processing is related to a task that is carried out in the public
              interest or in the exercise of official authority vested in the
              Owner.
            </li>
            <li className='mb-1'>
              Processing is necessary for the purposes of the legitimate
              interests pursued by the Owner or by a third party.
            </li>
          </ul>

          <h3 className='mb-2 mt-4 text-xl font-semibold'>Place</h3>
          <p className='mb-4'>
            The Data is processed at the Owner's operating offices and in any
            other places where the parties involved in the processing are
            located. Depending on the User's location, data transfers may
            involve transferring the User's Data to a country other than their
            own.
          </p>

          <h3 className='mb-2 mt-4 text-xl font-semibold'>Retention time</h3>
          <p className='mb-2'>
            Personal Data shall be processed and stored for as long as required
            by the purpose they have been collected for.
          </p>
          <p className='mb-2'>Therefore:</p>
          <ul className='mb-4 list-disc pl-6'>
            <li className='mb-1'>
              Personal Data collected for purposes related to the performance of
              a contract between the Owner and the User shall be retained until
              such contract has been fully performed.
            </li>
            <li className='mb-1'>
              Personal Data collected for the purposes of the Owner's legitimate
              interests shall be retained as long as needed to fulfill such
              purposes.
            </li>
          </ul>
        </ExpandableSection>

        <ExpandableSection title='The purposes of processing'>
          <p className='mb-4'>
            The Data concerning the User is collected to allow the Owner to
            provide its Service, comply with its legal obligations, respond to
            enforcement requests, protect its rights and interests (or those of
            its Users or third parties), detect any malicious or fraudulent
            activity, as well as the following: Access to third-party accounts,
            Analytics, Contacting the User, Hosting and backend infrastructure,
            Handling payments, Remarketing and behavioral targeting,
            Advertising, Registration and authentication, Tag Management and
            Interaction with live chat platforms.
          </p>
          <p>
            For specific information about the Personal Data used for each
            purpose, the User may refer to the section "Detailed information on
            the processing of Personal Data".
          </p>
        </ExpandableSection>

        <ExpandableSection title='Google API Services User Data Policy'>
          <p className='mb-4'>
            Our app complies with the Google API Services User Data Policy,
            including the Limited Use requirements. We understand the importance
            of protecting user data and have implemented measures to ensure
            compliance with the policy. We only use user data for the purposes
            outlined in our privacy policy and do not share or sell user data to
            third parties. By using our app, you acknowledge and agree to our
            compliance with the Google API Services User Data Policy.
          </p>
          <p className='mb-2'>
            <strong>Google Sheets</strong>: We allow you to get data and update
            your Spreadsheet.
          </p>
          <p className='mb-4'>
            <strong>Google Calendar</strong>: We read the list of events on your
            calendar to avoid overbooking. Also, we add events to your Calendar
            when a customer book an appointment.
          </p>
          <p className='mb-4'>
            This Application's use and transfer of information received from
            Google APIs to any other app will adhere to{' '}
            <a
              href='https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes'
              target='_blank'
              rel='noreferrer noopener'
              className='text-gray-100 hover:underline'
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
          <p>
            <strong>Important</strong>: We explicitly affirm that we do not use
            data obtained through Google Workspace APIs to develop, improve, or
            train generalized AI and/or ML models. All data accessed through
            Google Workspace APIs is used solely for the specific purposes
            outlined in this privacy policy and in accordance with Google's
            Limited Use requirements.
          </p>
        </ExpandableSection>

        <ExpandableSection title='Facebook permissions asked by this Application'>
          <p className='mb-4'>
            This Application may ask for some Facebook permissions allowing it
            to perform actions with the User's Facebook account and to retrieve
            information, including Personal Data, from it. This service allows
            this Application to connect with the User's account on the Facebook
            social network, provided by Facebook Inc.
          </p>
          <p className='mb-4'>
            For more information about the following permissions, refer to the{' '}
            <a
              href='https://developers.facebook.com/docs/facebook-login/permissions'
              target='_blank'
              rel='noreferrer noopener'
              className='text-gray-100 hover:underline'
            >
              Facebook permissions documentation
            </a>{' '}
            and to the{' '}
            <a
              href='https://www.facebook.com/about/privacy/'
              target='_blank'
              rel='noreferrer noopener'
              className='text-gray-100 hover:underline'
            >
              Facebook privacy policy
            </a>
            .
          </p>
          <p className='mb-2'>The permissions asked are the following:</p>

          <h3 className='mb-1 mt-3 text-lg font-semibold'>Basic information</h3>
          <p className='mb-3'>
            By default, this includes certain User's Data such as id, name,
            picture, gender, and their locale. Certain connections of the User,
            such as the Friends, are also available. If the User has made more
            of their Data public, more information will be available.
          </p>

          <h3 className='mb-1 mt-3 text-lg font-semibold'>About Me</h3>
          <p className='mb-3'>
            Provides access to the 'About Me' section of the profile.
          </p>

          <h3 className='mb-1 mt-3 text-lg font-semibold'>
            Business Management API
          </h3>
          <p className='mb-3'>Read and write with Business Management API.</p>

          <h3 className='mb-1 mt-3 text-lg font-semibold'>Contact email</h3>
          <p className='mb-3'>Access the User's contact email address.</p>

          <h3 className='mb-1 mt-3 text-lg font-semibold'>Instagram basic</h3>
          <p className='mb-3'>
            Allows reading an Instagram account profile information and media.
          </p>

          {/* Additional permissions would be listed here */}
        </ExpandableSection>

        <ExpandableSection title='Detailed information on the processing of Personal Data'>
          <p className='mb-4'>
            Personal Data is collected for the following purposes and using the
            following services:
          </p>

          <div className='mb-6 rounded-lg border border-gray-200 p-4'>
            <h3 className='mb-2 text-xl font-semibold'>
              Access to third-party accounts
            </h3>
            <p className='mb-4'>
              This type of service allows this Application to access Data from
              your account on a third-party service and perform actions with it.
              These services are not activated automatically, but require
              explicit authorization by the User.
            </p>

            <h4 className='mb-1 text-lg font-medium'>
              Facebook account access (Facebook, Inc.)
            </h4>
            <p className='mb-2'>
              This service allows this Application to connect with the User's
              account on the Facebook social network, provided by Facebook, Inc.
            </p>
            <p className='mb-2'>
              Permissions asked: About Me; Business Management API; Contact
              email; Instagram basic; Instagram manage comments; Manage Pages;
              Managing Page Advertisements; Page Messaging; Pages manage
              engagement; Pages manage metadata; Pages manage posts; Pages read
              engagement; Pages User locale; Pages User timezone; Show List of
              Managed Pages.
            </p>
            <p className='text-sm text-gray-100'>
              Place of processing: United States –{' '}
              <a
                href='https://www.facebook.com/policy.php'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:underline'
              >
                Privacy Policy
              </a>
              .
            </p>
            <p className='mt-2 text-sm text-gray-100'>
              Category of personal information collected according to CCPA:
              identifiers; internet information; inferred information.
            </p>
          </div>

          <div className='mb-6 rounded-lg border border-gray-200 p-4'>
            <h3 className='mb-2 text-xl font-semibold'>Advertising</h3>
            <p className='mb-4'>
              This type of service allows User Data to be utilized for
              advertising communication purposes. These communications are
              displayed in the form of banners and other advertisements on this
              Application, possibly based on User interests.
            </p>

            <h4 className='mb-1 text-lg font-medium'>
              Google Ad Manager (Google Ireland Limited)
            </h4>
            <p className='mb-2'>
              Google Ad Manager is an advertising service provided by Google
              Ireland Limited that allows the Owner to run advertising campaigns
              in conjunction with external advertising networks that the Owner,
              unless otherwise specified in this document, has no direct
              relationship with.
            </p>
            <p className='mb-2'>
              Users may decide to disable all the DoubleClick Cookies by going
              to:{' '}
              <a
                href='https://adssettings.google.com/authenticated?hl=en'
                target='_blank'
                rel='noreferrer noopener'
                className='text-gray-100 hover:underline'
              >
                Google Ad Settings
              </a>
              .
            </p>
            <p className='text-sm text-gray-100'>
              Place of processing: Ireland –{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:underline'
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Additional services would be listed here */}
        </ExpandableSection>

        <ExpandableSection title='The rights of Users'>
          <p className='mb-4'>
            Users may exercise certain rights regarding their Data processed by
            the Owner.
          </p>
          <p className='mb-2'>
            In particular, Users have the right to do the following:
          </p>

          <ul className='mb-6 list-disc pl-6'>
            <li className='mb-2'>
              <strong>Withdraw their consent at any time.</strong> Users have
              the right to withdraw consent where they have previously given
              their consent to the processing of their Personal Data.
            </li>
            <li className='mb-2'>
              <strong>Object to processing of their Data.</strong> Users have
              the right to object to the processing of their Data if the
              processing is carried out on a legal basis other than consent.
            </li>
            <li className='mb-2'>
              <strong>Access their Data.</strong> Users have the right to learn
              if Data is being processed by the Owner, obtain disclosure
              regarding certain aspects of the processing and obtain a copy of
              the Data undergoing processing.
            </li>
            <li className='mb-2'>
              <strong>Verify and seek rectification.</strong> Users have the
              right to verify the accuracy of their Data and ask for it to be
              updated or corrected.
            </li>
            <li className='mb-2'>
              <strong>Restrict the processing of their Data.</strong> Users have
              the right, under certain circumstances, to restrict the processing
              of their Data.
            </li>
            <li className='mb-2'>
              <strong>
                Have their Personal Data deleted or otherwise removed.
              </strong>{' '}
              Users have the right, under certain circumstances, to obtain the
              erasure of their Data from the Owner.
            </li>
            <li className='mb-2'>
              <strong>
                Receive their Data and have it transferred to another
                controller.
              </strong>{' '}
              Users have the right to receive their Data in a structured,
              commonly used and machine readable format.
            </li>
            <li className='mb-2'>
              <strong>Lodge a complaint.</strong> Users have the right to bring
              a claim before their competent data protection authority.
            </li>
          </ul>

          <h3 className='mb-2 text-xl font-semibold'>
            Details about the right to object to processing
          </h3>
          <p className='mb-4'>
            Where Personal Data is processed for a public interest, in the
            exercise of an official authority vested in the Owner or for the
            purposes of the legitimate interests pursued by the Owner, Users may
            object to such processing by providing a ground related to their
            particular situation to justify the objection.
          </p>

          <h3 className='mb-2 text-xl font-semibold'>
            How to exercise these rights
          </h3>
          <p>
            Any requests to exercise User rights can be directed to the Owner
            through the contact details provided in this document. These
            requests can be exercised free of charge and will be addressed by
            the Owner as early as possible and always within one month.
          </p>
        </ExpandableSection>

        <ExpandableSection title='Cookie Policy'>
          <p>
            This Application uses Trackers. To learn more, the User may consult
            the{' '}
            <a
              href='https://app.chatgptbuilder.io/legal/cookie-policy.html'
              title='Cookie Policy'
              className='text-gray-100 hover:underline'
            >
              Cookie Policy
            </a>
            .
          </p>
        </ExpandableSection>

        <div id='california_info' className='my-8 scroll-mt-16'>
          <h2 className='mb-4 text-2xl font-bold text-gray-100'>
            Information for Californian consumers
          </h2>
          <p className='mb-4'>
            This part of the document integrates with and supplements the
            information contained in the rest of the privacy policy and is
            provided by the business running this Application and, if the case
            may be, its parent, subsidiaries and affiliates (for the purposes of
            this section referred to collectively as "we", "us", "our").
          </p>
          <p className='mb-4'>
            The provisions contained in this section apply to all Users who are
            consumers residing in the state of California, United States of
            America, according to "The California Consumer Privacy Act of 2018"
            (Users are referred to below, simply as "you", "your", "yours"),
            and, for such consumers, these provisions supersede any other
            possibly divergent or conflicting provisions contained in the
            privacy policy.
          </p>

          <ExpandableSection title='Categories of personal information collected, disclosed or sold'>
            <h4 className='mb-2 text-lg font-semibold'>
              Information we collect: the categories of personal information we
              collect
            </h4>
            <p className='mb-4'>
              We have collected the following categories of personal information
              about you: identifiers, commercial information, internet
              information and inferred information.
            </p>

            <h4 className='mb-2 text-lg font-semibold'>
              How we collect information: what are the sources of the personal
              information we collect?
            </h4>
            <p className='mb-4'>
              We collect the above mentioned categories of personal information,
              either directly or indirectly, from you when you use this
              Application.
            </p>

            <h4 className='mb-2 text-lg font-semibold'>
              Sale of Personal Information
            </h4>
            <p className='mb-4'>
              For purposes of compliance with certain privacy laws (such as the
              California Consumer Privacy Act - CCPA), we provide information
              about how we handle the "sale" of personal information.
            </p>
            <p className='mb-4'>
              <strong>Important Note Regarding Google User Data</strong>: We do
              not sell, rent, release, disclose, disseminate, make available,
              transfer, or otherwise communicate orally, in writing, or by
              electronic means, any personal information obtained through Google
              APIs to another business or a third party for monetary or other
              valuable consideration.
            </p>
          </ExpandableSection>
        </div>

        <div id='brazil_info' className='mb-8 scroll-mt-16'>
          <h2 className='mb-4 text-2xl font-bold text-gray-100'>
            Information for users residing in Brazil
          </h2>
          <p className='mb-4'>
            This part of the document integrates with and supplements the
            information contained in the rest of the privacy policy and is
            provided by the entity running this Application and, if the case may
            be, its parent, subsidiaries and affiliates (for the purposes of
            this section referred to collectively as "we", "us", "our").
          </p>
          <p className='mb-4'>
            The provisions contained in this section apply to all Users who
            reside in Brazil, according to the "Lei Geral de Proteção de Dados"
            (Users are referred to below, simply as "you", "your", "yours"). For
            such Users, these provisions supersede any other possibly divergent
            or conflicting provisions contained in the privacy policy.
          </p>
        </div>
        <ExpandableSection title='The grounds on which we process your personal information'>
          <p className='mb-2'>
            We can process your personal information solely if we have a legal
            basis for such processing. Legal bases are as follows:
          </p>
          <ul className='mb-4 list-disc pl-6'>
            <li className='mb-1'>
              your consent to the relevant processing activities;
            </li>
            <li className='mb-1'>
              compliance with a legal or regulatory obligation that lies with
              us;
            </li>
            <li className='mb-1'>
              the carrying out of public policies provided in laws or
              regulations or based on contracts, agreements and similar legal
              instruments;
            </li>
            <li className='mb-1'>
              studies conducted by research entities, preferably carried out on
              anonymized personal information;
            </li>
            <li className='mb-1'>
              the carrying out of a contract and its preliminary procedures, in
              cases where you are a party to said contract;
            </li>
            <li className='mb-1'>
              the exercising of our rights in judicial, administrative or
              arbitration procedures;
            </li>
            <li className='mb-1'>
              protection or physical safety of yourself or a third party;
            </li>
            <li className='mb-1'>
              the protection of health – in procedures carried out by health
              entities or professionals;
            </li>
            <li className='mb-1'>
              our legitimate interests, provided that your fundamental rights
              and liberties do not prevail over such interests; and
            </li>
            <li className='mb-1'>credit protection.</li>
          </ul>
        </ExpandableSection>
        <ExpandableSection title='Definitions and legal references'>
          <h4 className='mb-2 text-lg font-semibold'>
            Personal Data (or Data)
          </h4>
          <p className='mb-4'>
            Any information that directly, indirectly, or in connection with
            other information — including a personal identification number —
            allows for the identification or identifiability of a natural
            person.
          </p>

          <h4 className='mb-2 text-lg font-semibold'>Usage Data</h4>
          <p className='mb-4'>
            Information collected automatically through this Application (or
            third-party services employed in this Application), which can
            include: the IP addresses or domain names of the computers utilized
            by the Users who use this Application, the URI addresses (Uniform
            Resource Identifier), the time of the request, the method utilized
            to submit the request to the server, the size of the file received
            in response, the numerical code indicating the status of the
            server's answer (successful outcome, error, etc.), the country of
            origin, the features of the browser and the operating system
            utilized by the User, the various time details per visit (e.g., the
            time spent on each page within the Application) and the details
            about the path followed within the Application with special
            reference to the sequence of pages visited, and other parameters
            about the device operating system and/or the User's IT environment.
          </p>

          <h4 className='mb-2 text-lg font-semibold'>User</h4>
          <p className='mb-4'>
            The individual using this Application who, unless otherwise
            specified, coincides with the Data Subject.
          </p>

          <h4 className='mb-2 text-lg font-semibold'>Data Subject</h4>
          <p className='mb-4'>
            The natural person to whom the Personal Data refers.
          </p>

          <h4 className='mb-2 text-lg font-semibold'>
            Data Processor (or Data Supervisor)
          </h4>
          <p className='mb-4'>
            The natural or legal person, public authority, agency or other body
            which processes Personal Data on behalf of the Controller, as
            described in this privacy policy.
          </p>

          <h4 className='mb-2 text-lg font-semibold'>
            Data Controller (or Owner)
          </h4>
          <p className='mb-4'>
            The natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of Personal Data, including the security
            measures concerning the operation and use this Application. The Data
            Controller, unless otherwise specified, is the Owner this
            Application.
          </p>
        </ExpandableSection>

        <div className='mt-8 text-center text-sm text-gray-100'>
          <p>Latest update: May 29, 2024</p>
        </div>
      </div>
    </div>
  );
}
