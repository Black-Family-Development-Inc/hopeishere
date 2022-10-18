import { Link } from "gatsby";
import React from "react";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { AssessmentLayout } from "../../layouts/AssessmentLayout";

const UniversalResultsPage = () => {
  return (
    <AssessmentLayout
      currentPage={stepperPages.universal}
      startingPage={stepperPages.universal}
    >
      <h1>Universal Results Page</h1>
      <Link
        to="/assessments/gad-7/"
        state={{ startingPage: stepperPages.universal }}
      >
        GAD-7
      </Link>
    </AssessmentLayout>
  );
};

export default UniversalResultsPage;