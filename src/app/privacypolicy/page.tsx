import Image from "next/image";
import PrivacyImage from "/public/PrivacyImage.jpg";
import PrivacyText from "/public/privacytext.jpg";
export default function page() {
  return (
    <div className="flex flex-col  px-80 pt-16   ">
      <div className="flex text-bold text-6xl justify-center ">
        Privacy Policy
      </div>
      <div className="flex text-md  pt-8">
        Please see our privacy policy below which provides information on how we
        collect and process your personal data, your rights, and more. If you
        are unable to access or download this document, or you have any
        questions about it, or anything else, please don't hesitate to get in
        contact with us.
      </div>

      <div className="flex font-bold text-md pt-8">
        Welcome to LR Interior's privacy policy.
      </div>

      <div className="flex text-md pt-8">
        Last updated on 4 August 2022. Available at:
        https://www.lr-interiors.co.uk/privacy-policy
      </div>

      <div className="flex font-bold text-md pt-8">Introduction</div>
      <div className="flex text-md pt-2">
        LR Interiors respects your privacy and is committed to protecting your
        personal data. This privacy policy will inform you as to how we look
        after your personal data when you visit our website (regardless of where
        you visit it from) and tell you about your privacy rights and how the
        law protects you.
      </div>
      <div className="flex font-bold text-md pt-8">
        Important information and who we are
      </div>
      <div className="flex font-bold text-md pt-8">
        Purpose of this privacy policy
      </div>
      <div className="flex text-md pt-2">
        This privacy policy aims to give you information on how LR Interiors
        collects and processes your personal data through your use of this
        website, including any data you may provide through this website when
        you purchase a product or service, sign up to our newsletter or contact
        us.
      </div>
      <div className="flex text-md pt-8">
        This website is not intended for children and we do not knowingly
        collect data relating to children.
      </div>
      <div className="flex text-md pt-8">
        It is important that you read this privacy policy together with any
        other privacy policy or fair processing policy we may provide on
        specific occasions when we are collecting or processing personal data
        about you so that you are fully aware of how and why we are using your
        data. This privacy policy supplements other notices and privacy policies
        and is not intended to override them.
      </div>
      <div className="flex font-bold text-md pt-8">Controller</div>
      <div className="flex text-md pt-1">
        Lauren Roberts Interiors Ltd, trading as LR Interiors, of Studio 703,
        105 London St, Reading, Berkshire, RG1 4QD, United Kingdom, is the
        controller and responsible for your personal data (referred to as "LR
        Interiors", "we", "us" or "our" in this privacy policy).
      </div>
      <div className="flex  text-md pt-8">
        We have appointed a data privacy manager who is responsible for
        overseeing questions in relation to this privacy policy. If you have any
        questions about this privacy policy, including any requests to exercise
        your legal rights, please contact the data privacy manager using the
        details set out below.
      </div>
      <div className="flex font-bold text-md pt-8">Contact details</div>
      <div className="flex  text-md pt-1">
        If you have any questions about this privacy policy or our privacy
        practices, please contact our data privacy manager in the following
        ways:
      </div>
      <div className="flex  text-md pt-8">
        Full name of legal entity: LR Interiors
      </div>
      <div className="flex  text-md pt-1">
        Email address: hey@lr-interiors.co.uk
      </div>
      <div className="flex  text-md pt-1">
        Postal address: Studio 703, 105 London St, Reading, Berkshire, RG1 4QD
      </div>
      <div className="flex  text-md pt-8">
        You have the right to make a complaint at any time to the Information
        Commissioner's Office (ICO), the UK regulator for data protection issues
        (www.ico.org.uk). We would, however, appreciate the chance to deal with
        your concerns before you approach the ICO so please contact us in the
        first instance.
      </div>
      <div className="flex font-bold text-md pt-8">
        Changes to the privacy policy and your duty to inform us of changes
      </div>
      <div className="flex  text-md pt-1">
        We keep our privacy policy under regular review. We reserve the right to
        change it at any time and we encourage you to read it periodically to
        ensure that you are at all times fully aware of it. Any changes are
        effective immediately upon posting to
        https://www.lr-interiors.co.uk/privacy-policy .
      </div>
      <div className="flex  text-md pt-8">
        This version was last updated on the date first mentioned above.
      </div>
      <div className="flex  text-md pt-8">
        It is important that the personal data we hold about you is accurate and
        current. Please keep us informed if your personal data changes during
        your relationship with us.
      </div>
      <div className="flex font-bold text-md pt-8">Third-party links</div>
      <div className="flex  text-md pt-1">
        This website may include links to third-party websites, plug-ins and
        applications. Clicking on those links or enabling those connections may
        allow third parties to collect or share data about you. We do not
        control these third-party websites and are not responsible for their
        privacy statements. When you leave our website, we encourage you to read
        the privacy policy of every website you visit.
      </div>
      <Image
        className="flex-initial w-92 pt-8 "
        src={PrivacyImage}
        alt="Privacy Image"
      />
      <div className="flex font-bold text-md pt-12">
        1. The data we collect about you
      </div>
      <div className="flex  text-md pt-1">
        Personal data, or personal information, means any information about an
        individual from which that person can be identified. It does not include
        data where the identity has been removed (anonymous data). We may
        collect, use, store and transfer different kinds of personal data about
        you which we have grouped together as follows:
      </div>
      <ul className="flex flex-col list-disc pt-1 pl-10">
        <li>
          Identity Data includes first name, maiden name, last name, username or
          similar identifier, marital status, title, date of birth and gender.
        </li>
        <li>
          Contact Data includes billing address, delivery address, email address
          and telephone numbers.
        </li>
        <li>Financial Data includes bank account and payment card details.</li>

        <li>
          Transaction Data includes details about payments to and from you and
          other details of products and services you have purchased from us.
        </li>
        <li>
          Technical Data includes internet protocol (IP) address, your login
          data, browser type and version, time zone setting and location,
          browser plug-in types and versions, operating system and platform, and
          other technology on the devices you use to access this website.
        </li>
        <li>
          Profile Data includes your username and password, purchases or orders
          made by you, your interests, preferences, feedback and survey
          responses.
        </li>
        <li>
          Usage Data includes information about how you use our website,
          products and services.
        </li>
        <li>
          Marketing and Communications Data includes your preferences in
          receiving marketing from us and our third parties and your
          communication preferences.
        </li>
      </ul>
      <div className="flex text-md pt-8">
        We also collect, use and share Aggregated Data such as statistical or
        demographic data for any purpose. Aggregated Data could be derived from
        your personal data but is not considered personal data in law as this
        data will not directly or indirectly reveal your identity. For example,
        we may aggregate your
      </div>
      <div className="flex font-bold text-md pt-8">Usage</div>
      <div className="flex  text-md pt-1">
        Data to calculate the percentage of users accessing a specific website
        feature. However, if we combine or connect Aggregated Data with your
        personal data so that it can directly or indirectly identify you, we
        treat the combined data as personal data which will be used in
        accordance with this privacy policy. We do not collect any Special
        Categories of Personal Data about you (this includes details about your
        race or ethnicity, religious or philosophical beliefs, sex life, sexual
        orientation, political opinions, trade union membership, information
        about your health, and genetic and biometric data). Nor do we collect
        any information about criminal convictions and offences.
      </div>
      <div className="flex font-bold text-md pt-8">
        If you fail to provide personal data
      </div>
      <div className="flex  text-md pt-1">
        Where we need to collect personal data by law, or under the terms of a
        contract we have with you, and you fail to provide that data when
        requested, we may not be able to perform the contract we have or are
        trying to enter into with you (for example, to provide you with goods or
        services). In this case, we may have to cancel a product or service you
        have with us but we will notify you if this is the case at the time.
      </div>
      <div className="flex font-bold text-md pt-8">
        2. How is your personal data collected?
      </div>
      <div className="flex  text-md pt-1">
        We use different methods to collect data from and about you including
        through:
      </div>
      <ul className="flex flex-col list-disc pt-1 pl-10">
        <li>
          Direct interactions. You may give us your Identity, Contact, Financial
          and Profile Data by filling in forms or by corresponding with us by
          post, phone, email or otherwise. This includes personal data you
          provide when you:
        </li>
      </ul>
      <ul className="flex flex-col list-none pt-10 pl-1">
        <li>- apply for our products or services;</li>
        <li>- create an account on our website;</li>
        <li>- subscribe to our service or publications;</li>
        <li>- request marketing to be sent to you;</li>
        <li>- enter a competition, promotion or survey;</li>
        <li>- engage with us and our content on our sites;</li>
        <li>- give us feedback or contact us.</li>
      </ul>
      <ul className="flex flex-col list-disc pt-8 pl-10">
        <li>
          Automated technologies or interactions. As you interact with our
          website, we will automatically collect Technical Data about your
          equipment, browsing actions and patterns. We collect this personal
          data by using cookies, server logs and other similar technologies. We
          may also receive Technical Data about you if you visit other websites
          employing our cookies. Please see our cookie policy (which is
          available here: https://www.lr-interiors.co.uk/privacy-policy ) for
          further details.
        </li>
        <li>
          Third parties or publicly available sources. We will receive personal
          data about you from various third parties and public sources as set
          out below:
        </li>
      </ul>
      <ul className="flex flex-col list-none pt-10 pl-1">
        <li>- Technical Data from the following parties:</li>
        <li>
          a) analytics providers such as Google, Instapage or Unbounce based
          outside the UK;
        </li>
        <li>
          b) advertising networks such as Facebook, Google Adsense or LinkedIn
          based outside the UK;
        </li>
        <li>
          c)and search information providers such as Google based outside the
          UK.
        </li>
        <li className="pt-8">
          - Contact, Financial and Transaction Data from providers of technical,
          payment and delivery services such as Stripe based outside the UK.
        </li>
        <li className="pt-8">
          - Identity and Contact Data from data brokers or aggregators such as
          Experian based inside the UK and others based outside the UK.
        </li>
        <li className="pt-8">
          - Identity and Contact Data from publicly available sources such as
          Companies House and the Electoral Register based inside the UK.
        </li>
      </ul>
      <div className="flex font-bold text-md pt-8">
        3. How we use your personal data
      </div>
      <div className="flex  text-md pt-1">
        We will only use your personal data when the law allows us to. Most
        commonly, we will use your personal data in the following circumstances:
      </div>
      <ul className="flex flex-col list-disc pt-8 pl-10">
        <li>
          Where we need to perform the contract we are about to enter into or
          have entered into with you.
        </li>
        <li>
          Where it is necessary for our legitimate interests (or those of a
          third party) and your interests and fundamental rights do not override
          those interests.
        </li>
        <li>Where we need to comply with a legal obligation.</li>
      </ul>
      <div className="flex  text-md pt-8">
        Please read the Glossary to find out more about the types of lawful
        basis that we will rely on to process your personal data.
      </div>
      <div className="flex  text-md pt-8">
        Generally, we do not rely on consent as a legal basis for processing
        your personal data although we will get your consent before sending
        third party direct marketing communications to you via phone, email or
        text message. You have the right to withdraw consent to marketing at any
        time by contacting us.
      </div>
      <div className="flex font-bold text-md pt-8">
        Purposes for which we will use your personal data
      </div>
      <div className="flex  text-md pt-1">
        We have set out below, in a table format, a description of all the ways
        we plan to use your personal data, and which of the legal bases we rely
        on to do so. We have also identified what our legitimate interests are
        where appropriate.
      </div>
      <div className="flex  text-md pt-8">
        Note that we may process your personal data for more than one lawful
        ground depending on the specific purpose for which we are using your
        data. Please contact us if you need details about the specific legal
        ground we are relying on to process your personal data where more than
        one ground has been set out in the table below.
      </div>
      <Image
        className="flex-initial w-92 pt-2 "
        src={PrivacyText}
        alt="table text"
      />
      <div className="flex font-bold text-md pt-4">Marketing</div>
      <div className="flex text-md pt-1">
        We strive to provide you with choices regarding certain personal data
        uses, particularly around marketing and advertising. You can change your
        preferences by logging into the website and checking or unchecking
        relevant boxes, by following the opt-out links on any marketing message
        sent to you, or by contacting us at any time.
      </div>
      <div className="flex font-bold text-md pt-8">
        Promotional offers from us
      </div>
      <div className="flex  text-md pt-1">
        We may use your Identity, Contact, Technical, Usage and Profile Data to
        form a view on what we think you may want or need, or what may be of
        interest to you. This is how we decide which products, services and
        offers may be relevant for you (we call this marketing).
      </div>
      <div className="flex  text-md pt-8">
        You will receive marketing communications from us if you have requested
        information from us or purchased products or services from us and you
        have not opted out of receiving that marketing.
      </div>
      <div className="flex font-bold text-md pt-8">Third-party marketing</div>
      <div className="flex  text-md pt-1">
        We will get your express opt-in consent before we share your personal
        data with any third party for marketing purposes.
      </div>
      <div className="flex font-bold text-md pt-8">Opting out</div>
      <div className="flex  text-md pt-1">
        You can ask us or third parties to stop sending you marketing messages
        at any time by logging into the website and checking or unchecking
        relevant boxes to adjust your marketing preferences, by following the
        opt-out links on any marketing message sent to you, or by contacting us
        at any time.
      </div>
      <div className="flex  text-md pt-1">
        Where you opt out of receiving these marketing messages, this will not
        apply to personal data provided to us as a result of a product/service
        purchase, warranty registration, product/service experience or other
        transactions.
      </div>
      <div className="flex font-bold text-md pt-8"> Cookies</div>
      <div className="flex  text-md pt-1">
        You can set your browser to refuse all or some browser cookies, or to
        alert you when websites set or access cookies. If you disable or refuse
        cookies, please note that some parts of this website may become
        inaccessible or not function properly. For more information about the
        cookies we use, please see
        https://www.lr-interiors.co.uk/privacy-policy.
      </div>
      <div className="flex font-bold text-md pt-8">Change of purpose</div>
      <div className="flex  text-md pt-1">
        We will only use your personal data for the purposes for which we
        collected it, unless we reasonably consider that we need to use it for
        another reason and that reason is compatible with the original purpose.
        If you wish to get an explanation as to how the processing for the new
        purpose is compatible with the original purpose, please contact us. If
        we need to use your personal data for an unrelated purpose, we will
        notify you and we will explain the legal basis which allows us to do so.
        Please note that we may process your personal data without your
        knowledge or consent, in compliance with the above rules, where this is
        required or permitted by law.
      </div>
      <div className="flex font-bold text-md pt-8">
        4. Disclosures of your personal data
      </div>
      <div className="flex  text-md pt-1">
        We may share your personal data with the parties set out below for the
        purposes set out in the table 'Purposes for which we will use your
        personal data' above.
      </div>
      <ul className="flex flex-col list-disc pt-1 pl-10">
        <li>External Third Parties as set out in the Glossary.</li>
        <li>
          Third parties to whom we may choose to sell, transfer or merge parts
          of our business or our assets. Alternatively, we may seek to acquire
          other businesses or merge with them. If a change happens to our
          business, then the new owners may use your personal data in the same
          way as set out in this privacy policy.
        </li>
      </ul>
      <div className="flex  text-md pt-8">
        We require all third parties to respect the security of your personal
        data and to treat it in accordance with the law. We do not allow our
        third-party service providers to use your personal data for their own
        purposes and only permit them to process your personal data for
        specified purposes and in accordance with our instructions.
      </div>
      <div className="flex font-bold text-md pt-8">
        5. International transfers
      </div>
      <div className="flex text-md pt-1">
        We may share your personal data with Internal Third Parties or Specific
        Third Parties who are based outside the UK or are outside of the UK
        temporarily. This will involve transferring your data outside the UK.
      </div>
      <div className="flex text-md pt-6">
        Many of our External Third Parties are based outside the UK so their
        processing of your personal data will involve a transfer of data outside
        the UK.
      </div>
      <div className="flex text-md pt-6">
        Whenever we transfer your personal data out of the UK, we ensure a
        similar degree of protection is afforded to it by ensuring at least one
        of the following safeguards is implemented:
      </div>
      <div className="flex text-md pt-6">
        - We will only transfer your personal data to countries that have been
        deemed to provide an adequate level of protection for personal data.
      </div>
      <div className="flex text-md pt-6">
        - Where we use certain service providers, we may use specific contracts
        approved for use in the UK which give personal data the same protection
        it has in the UK.
      </div>
      <div className="flex text-md pt-6">
        Please contact us if you want further information on the specific
        mechanism used by us when transferring your personal data out of the UK.
      </div>
      <div className="flex font-bold text-md pt-8">6. Data security</div>
      <div className="flex  text-md pt-1">
        We have put in place appropriate security measures to prevent your
        personal data from being accidentally lost, used or accessed in an
        unauthorised way, altered or disclosed. In addition, we limit access to
        your personal data to those employees, agents, contractors and other
        third parties who have a business need to know. They will only process
        your personal data on our instructions and they are subject to a duty of
        confidentiality.
      </div>
      <div className="flex  text-md pt-8">
        We have put in place procedures to deal with any suspected personal data
        breach and will notify you and any applicable regulator of a breach
        where we are legally required to do so.
      </div>
      <div className="flex font-bold text-md pt-8">7. Data retention</div>
      <div className="flex font-bold text-md pt-1">
        How long will you use my personal data for?
      </div>
      <div className="flex  text-md pt-1">
        We will only retain your personal data for as long as reasonably
        necessary to fulfil the purposes we collected it for, including for the
        purposes of satisfying any legal, regulatory, tax, accounting or
        reporting requirements. We may retain your personal data for a longer
        period in the event of a complaint or if we reasonably believe there is
        a prospect of litigation in respect to our relationship with you.
      </div>
      <div className="flex  text-md pt-8">
        To determine the appropriate retention period for personal data, we
        consider the amount, nature and sensitivity of the personal data, the
        potential risk of harm from unauthorised use or disclosure of your
        personal data, the purposes for which we process your personal data and
        whether we can achieve those purposes through other means, and the
        applicable legal, regulatory, tax, accounting or other requirements.
      </div>
      <div className="flex  text-md pt-8">
        By law we have to keep basic information about our customers (including
        Contact, Identity, Financial and Transaction Data) for six years after
        they cease being customers for tax purposes. In some circumstances you
        can ask us to delete your data: see your legal rights below for further
        information.
      </div>
      <div className="flex  text-md pt-8">
        In some circumstances we will anonymise your personal data (so that it
        can no longer be associated with you) for research or statistical
        purposes, in which case we may use this information indefinitely without
        further notice to you.
      </div>
      <div className="flex font-bold text-md pt-8">8. Your legal rights</div>
      <div className="flex  text-md pt-1">
        Under certain circumstances, you have rights under data protection laws
        in relation to your personal data. Please see the Glossary to find out
        more about these rights:
      </div>
      <div className="flex  text-md pt-8">
        - Request access to your personal data.
      </div>
      <div className="flex  text-md pt-1">
        - Request correction of your personal data.
      </div>
      <div className="flex  text-md pt-1">
        - Request erasure of your personal data.
      </div>
      <div className="flex  text-md pt-1">
        - Object to processing of your personal data.
      </div>
      <div className="flex  text-md pt-1">
        - Request restriction of processing your personal data.
      </div>
      <div className="flex  text-md pt-1">
        - Request transfer of your personal data.
      </div>
      <div className="flex  text-md pt-1">- Right to withdraw consent.</div>
      <div className="flex  text-md pt-8">
        If you wish to exercise any of the rights set out above, please contact
        us.
      </div>
      <div className="flex font-bold text-md pt-8">No fee usually required</div>
      <div className="flex  text-md pt-8">
        You will not have to pay a fee to access your personal data (or to
        exercise any of the other rights). However, we may charge a reasonable
        fee if your request is clearly unfounded, repetitive or excessive.
        Alternatively, we could refuse to comply with your request in these
        circumstances.
      </div>
      <div className="flex font-bold text-md pt-8">
        What we may need from you
      </div>
      <div className="flex  text-md pt-8">
        We may need to request specific information from you to help us confirm
        your identity and ensure your right to access your personal data (or to
        exercise any of your other rights). This is a security measure to ensure
        that personal data is not disclosed to any person who has no right to
        receive it. We may also contact you to ask you for further information
        in relation to your request to speed up our response. Time limit to
        respond
      </div>
      <div className="flex  text-md pt-1">
        We try to respond to all legitimate requests within one month.
        Occasionally it could take us longer than a month if your request is
        particularly complex or you have made a number of requests. In this
        case, we will notify you and keep you updated.
      </div>
      <div className="flex font-bold text-md pt-8">9. Glossary</div>
      <div className="flex font-bold text-lg pt-8">LAWFUL BASIS</div>
      <div className=" text-md pt-8">
        <p className="font-bold">Legitimate Interest</p>
        <p>
          means the interest of our business in conducting and managing our
          business to enable us to give you the best service/product and the
          best and most secure experience. We make sure we consider and balance
          any potential impact on you (both positive and negative) and your
          rights before we process your personal data for our legitimate
          interests. We do not use your personal data for activities where our
          interests are overridden by the impact on you (unless we have your
          consent or are otherwise required or permitted to by law). You can
          obtain further information about how we assess our legitimate
          interests against any potential impact on you in respect of specific
          activities by contacting us.
        </p>
      </div>
      <div className=" text-md pt-8">
        Performance of Contract means processing your data where it is necessary
        for the performance of a contract to which you are a party or to take
        steps at your request before entering into such a contract.
      </div>
      <div className=" text-md pt-8">
        Comply with a legal obligation means processing your personal data where
        it is necessary for compliance with a legal obligation that we are
        subject to.
      </div>
      <div className="flex font-bold text-lg pt-8">THIRD PARTIES</div>
      <div className="flex font-bold text-md pt-8">External Third Parties</div>
      <div className="flex  text-md pt-1">
        - Service providers based in the United Kingdom and South Africa who
        provide IT and system administration services, business administration
        and support services, and associated services.
      </div>
      <div className="flex  text-md pt-1">
        - Professional advisers including lawyers, bankers, auditors and
        insurers based in the United Kingdom and South Africa who provide
        consultancy, banking, legal, insurance and accounting services.
      </div>
      <div className="flex  text-md pt-1">
        - HM Revenue & Customs, regulators and other authorities acting as
        processors or joint controllers based in the United Kingdom who require
        reporting of processing activities in certain circumstances.
      </div>
      <div className="flex font-bold text-lg pt-8">YOUR LEGAL RIGHTS</div>
      <div className="flex  text-md pt-8">You have the right to:</div>
      <div className="flex  text-md pt-8">
        Request access to your personal data (commonly known as a "data subject
        access request"). This enables you to receive a copy of the personal
        data we hold about you and to check that we are lawfully processing it.
      </div>
      <div className="flex  text-md pt-8">
        Request correction of the personal data that we hold about you. This
        enables you to have any incomplete or inaccurate data we hold about you
        corrected, though we may need to verify the accuracy of the new data you
        provide to us.
      </div>
      <div className="flex  text-md pt-8">
        Request erasure of your personal data. This enables you to ask us to
        delete or remove personal data where there is no good reason for us
        continuing to process it. You also have the right to ask us to delete or
        remove your personal data where you have successfully exercised your
        right to object to processing (see below), where we may have processed
        your information unlawfully or where we are required to erase your
        personal data to comply with local law. Note, however, that we may not
        always be able to comply with your request of erasure for specific legal
        reasons which will be notified to you, if applicable, at the time of
        your request.
      </div>
      <div className="flex  text-md pt-8">
        Object to processing of your personal data where we are relying on a
        legitimate interest (or those of a third party) and there is something
        about your particular situation which makes you want to object to
        processing on this ground as you feel it impacts on your fundamental
        rights and freedoms. You also have the right to object where we are
        processing your personal data for direct marketing purposes. In some
        cases, we may demonstrate that we have compelling legitimate grounds to
        process your information which override your rights and freedoms.
      </div>
      <div className="flex  text-md pt-8">
        Request restriction of processing of your personal data. This enables
        you to ask us to suspend the processing of your personal data in the
        following scenarios:
      </div>
      <div className="flex  text-md pt-1">
        - If you want us to establish the data's accuracy.
      </div>
      <div className="flex  text-md pt-1">
        - Where our use of the data is unlawful but you do not want us to erase
        it.
      </div>
      <div className="flex  text-md pt-1">
        - Where you need us to hold the data even if we no longer require it as
        you need it to establish, exercise or defend legal claims.
      </div>
      <div className="flex  text-md pt-1">
        - You have objected to our use of your data but we need to verify
        whether we have overriding legitimate grounds to use it.
      </div>
      <div className="flex  text-md pt-8">
        Request the transfer of your personal data to you or to a third party.
        We will provide to you, or a third party you have chosen, your personal
        data in a structured, commonly used, machine-readable format. Note that
        this right only applies to automated information which you initially
        provided consent for us to use or where we used the information to
        perform a contract with you.
      </div>
      <div className="flex  text-md pt-8 pb-12">
        Withdraw consent at any time where we are relying on consent to process
        your personal data. However, this will not affect the lawfulness of any
        processing carried out before you withdraw your consent. If you withdraw
        your consent, we may not be able to provide certain products or services
        to you. We will advise you if this is the case at the time you withdraw
        your consent.
      </div>
    </div>
  );
}
