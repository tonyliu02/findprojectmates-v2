import React from 'react'
// importing statements use relative paths
import '../../styles/index.css'
import gettingStartedVec from '../../assets/getting-started-resized.png'

function GetStartedPage() {
  return (
    <div id="getStartedFormContainer">
      {/* progress bar which is fixed on top of the page */}
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="needs-validation" noValidate>
              <div className="postingQuestionnaireTitleBlock">
                <h1 className="questionnaireTitle align-middle">
                  Getting Started
                </h1>
                <img src={gettingStartedVec} alt="getting started" />
              </div>
              <div className="postingQuestionnaireBlock">
                <label htmlFor="projectName" className="form-label"><h5>What is the name of the project?</h5></label>
                <input type="text" className="form-control" id="projectName" required />
                <div className="invalid-feedback">
                  Please provide a project name
                </div>
              </div>
              <div className="postingQuestionnaireBlock">
                <label htmlFor="category"><h5>What kind(s) of project is this?</h5></label><br />
                <div className="d-grid gap-2 col-3">
                  <div className="form-check">
                    <input className="form-check-input projectTypeCheck" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      iOS App
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input projectTypeCheck" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Android App
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input projectTypeCheck" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Web App
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input projectTypeCheck" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Engineering Project
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input projectTypeCheck" type="checkbox" name="projectTypeCheckBox" defaultValue id="otherProjectCheck" />
                    <label className="form-check-label" htmlFor="otherProjectCheck">
                      <div className="row">
                        <span className="col-sm-2 otherProject">Other</span>
                        <div className="col-sm-10 invisible" id="otherProjectType">
                          <input className="form-control form-control-sm otherProject" id="otherSpec" type="text" name="otherProjectTypeName" aria-label=".form-control-sm" />
                          <div className="invalid-feedback">
                            Please provide a valid project type
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="invalid-feedback">
                      Please select at least one of the above
                    </div>
                  </div>
                </div>
              </div>
              <div className="postingQuestionnaireBlock">
                <label htmlFor="dl" className="form-label"><h5>Application Deadline</h5></label>
                <div>
                  <input type="date" id="dl" name="dl" required />
                  <div className="invalid-feedback">
                    Please provide an application deadline
                  </div>
                </div>
              </div>
              <div className="postingQuestionnaireBlock">
                <label htmlFor="projectDescription" className="form-label"><h5>Project Description</h5></label>
                <textarea className="form-control textarea" id="projectDescription" rows={3} required defaultValue={""} />
                <div className="invalid-feedback">
                  Please provide a project description
                </div>
              </div>
              <div className="postingQuestionnaireBlock postingQuestionnaireLastBlock">
                {/* right justify the save and continue button */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <input className="btn btn-primary postBtn" type="submit" name="saveBtn1" defaultValue="Save and Continue" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;