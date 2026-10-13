export function PreviewNotices() {
  return (
    <div className="preview-notices">
      <details id="privacy">
        <summary>
          Privacy notice <span>Preview</span>
        </summary>
        <div>
          <p>
            The inquiry form prepares a text-file draft on your device. The form
            does not send your name, email, phone number, or message to Chiprion
            or store those details on a server. Saving a draft creates a
            downloaded file that you control.
          </p>
          <p>
            No analytics, advertising, CRM, or booking integration is configured
            in this frontend. The hosting environment may still process
            technical requests to serve the website. Do not enter sensitive
            information in this preview.
          </p>
          <p>
            A complete, owner-approved privacy policy and communication-consent
            process are required before live lead collection is enabled.
          </p>
        </div>
      </details>
      <details id="terms">
        <summary>
          Terms & information notice <span>Preview</span>
        </summary>
        <div>
          <p>
            This website preview describes Chiprion’s intended VLSI and
            semiconductor training areas. Track descriptions and introductory
            guides are informational drafts, not a final syllabus, enrollment
            offer, or contractual commitment.
          </p>
          <p>
            Confirm prerequisites, duration, fees, tools, delivery format,
            certification, and mentor details before enrollment. Preparing an
            inquiry or downloading an overview does not reserve a demo, enroll a
            learner, or guarantee employment.
          </p>
          <p>
            Approved terms, enrollment conditions, cancellation/refund policies,
            and legal company details have not been supplied and must be added
            before launch.
          </p>
        </div>
      </details>
    </div>
  );
}
