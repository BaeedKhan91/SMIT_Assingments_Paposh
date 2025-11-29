export default function Profile() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-10 text-(--text-main)">
      <div>
        <h2 className="text-xl font-semibold mb-3">About Me</h2>
        <p className="text-(--text-secondary) text-sm">
          I’m Baeed Khan, a frontend and React.js developer who loves creating 
          clean, responsive, and user-friendly web experiences.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Social Media Links</h2>
        <ul className="space-y-2 flex flex-col text-(--text-secondary) text-md">
          <a href="https://www.facebook.com"><li>• Facebook</li></a>
          <a href="https://www.linkedin.com/feed/"><li>• LinkedIn</li></a>
          <a href="https://github.com/"><li>• Github</li></a>
          <a href="https://www.fiverr.com/sellers/baeed_developer/edit"><li>• Fiverr</li></a>
        </ul>
      </div>
    </div>
  );
}
