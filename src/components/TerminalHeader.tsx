type TerminalHeaderProps = {
  title: string;
};

/** Shared terminal chrome; decorative dots stay out of the accessibility tree. */
export function TerminalHeader({ title }: TerminalHeaderProps) {
  return (
    <div className="cyber-terminal-header">
      <span className="cyber-terminal-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <p className="cyber-label">{title}</p>
      <span className="cyber-terminal-status" aria-hidden="true">
        SYS // 01
      </span>
    </div>
  );
}
