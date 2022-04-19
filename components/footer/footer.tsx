import Styles from "./footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <p>Made by @guilhermme-dev </p><p>This web application was made during the FrontExpert Immersion for study purposes only.</p>
      </div>
    </footer>
  );
}
