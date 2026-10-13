import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { inquiryOptions, tracks } from "../content/site";
import type { InquiryType } from "../content/site";

type Props = {
  request: { type: InquiryType; track?: string } | null;
  onClose: () => void;
};

export function InquiryDialog({ request, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [saved, setSaved] = useState(false);
  const [type, setType] = useState<InquiryType>("Free demo");
  useEffect(() => {
    if (request) {
      setType(request.type);
      setSaved(false);
      dialog.current?.showModal();
    } else dialog.current?.close();
  }, [request]);
  const business = type === "College training" || type === "Corporate training";
  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const content = [
      "CHIPRION — INQUIRY DRAFT",
      "Not submitted. No demo has been booked.",
      "",
      ...Array.from(data.entries())
        .filter(([key]) => key !== "consent")
        .map(([key, value]) => `${key}: ${value}`),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "chiprion-inquiry-draft.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  }
  return (
    <dialog
      ref={dialog}
      className="inquiry-dialog"
      aria-labelledby="inquiry-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
    >
      <div className="inquiry-inner">
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close inquiry"
        >
          ×
        </button>
        <p className="cyber-label text-xs text-[var(--accent)]">
          Your next step
        </p>
        <h2
          id="inquiry-title"
          className="cyber-heading mt-3 text-3xl font-semibold"
        >
          Let’s plan your learning.
        </h2>
        <p className="inquiry-notice">
          Preview only: the booking and submission service is not connected.
          This form saves a draft on your device; it does not send your details
          or book a demo.
        </p>
        {request && (
          <form
            key={`${request.type}-${request.track}`}
            onSubmit={save}
            onChange={() => setSaved(false)}
            className="inquiry-form"
          >
            <label>
              Interested in
              <select
                aria-label="Interested in"
                name="Request type"
                value={type}
                onChange={(event) => setType(event.target.value as InquiryType)}
              >
                {inquiryOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <label>
                Full name
                <input
                  name="Name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  name="Email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label>
              Phone number
              <input
                name="Phone"
                type="tel"
                autoComplete="tel"
                required
                pattern={"[+0-9\\s\\(\\)\\.\\-]{7,20}"}
                title="Enter 7–20 characters using digits, spaces, +, parentheses, or hyphens."
                maxLength={20}
              />
            </label>
            {business ? (
              <>
                <div className="form-row">
                  <label>
                    Designation
                    <input name="Designation" required maxLength={100} />
                  </label>
                  <label>
                    Organization
                    <input name="Organization" required maxLength={150} />
                  </label>
                </div>
                <label>
                  Requirement type
                  <select
                    name="Requirement type"
                    aria-label="Requirement type"
                    key={type}
                    defaultValue={
                      type === "Corporate training"
                        ? "Corporate training"
                        : "Workshop"
                    }
                  >
                    <option>Workshop</option>
                    <option>Corporate training</option>
                    <option>Partnership</option>
                    <option>Faculty development</option>
                    <option>Student project support</option>
                  </select>
                </label>
                <label>
                  Preferred delivery format
                  <select
                    name="Preferred delivery format"
                    aria-label="Preferred delivery format"
                  >
                    <option>No preference</option>
                    <option>Online</option>
                    <option>Onsite</option>
                    <option>Hybrid</option>
                  </select>
                  <span className="field-note">
                    Format and availability are agreed per requirement.
                  </span>
                </label>
                <label>
                  Number of participants
                  <input
                    name="Participants"
                    type="number"
                    min={1}
                    max={10000}
                    required
                  />
                </label>
              </>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    Highest qualification
                    <input name="Qualification" required maxLength={100} />
                  </label>
                  <label>
                    College / company
                    <input name="College or company" maxLength={150} />
                  </label>
                </div>
                <label>
                  Interested track
                  <select
                    name="Learning track"
                    defaultValue={request.track ?? "Help me choose"}
                  >
                    <option>Help me choose</option>
                    {tracks.map((track) => (
                      <option key={track.id}>{track.name}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Preferred learning mode
                  <select name="Preferred mode">
                    <option>No preference</option>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                  <span className="field-note">
                    Preference only; availability is not confirmed.
                  </span>
                </label>
              </>
            )}
            <label>
              {business ? "Training requirement" : "Your goals or questions"}
              <textarea name="Message" required rows={3} maxLength={2000} />
            </label>
            <label className="consent">
              <input name="consent" type="checkbox" required />I understand this
              is a local draft, not a submitted inquiry or confirmed booking.
            </label>
            <button type="submit" className="cyber-panel-sm cyber-button">
              Save inquiry draft ↓
            </button>
            {saved && (
              <p role="status" className="text-sm text-[var(--accent)]">
                Draft downloaded. Nothing was submitted to Chiprion and no demo
                has been booked.
              </p>
            )}
          </form>
        )}
      </div>
    </dialog>
  );
}
