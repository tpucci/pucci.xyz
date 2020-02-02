import React from "react"
import { Link } from "gatsby"
import { codeToLanguage } from "../helpers/i18n"

export function Translations(props) {
  const { translations, lang, languageLink, editUrl } = props

  const readerTranslations = translations.filter(lang => lang !== "fr")
  const hasFrenchTranslation = translations.indexOf("fr") !== -1

  return (
    <div className="translations">
      <p>
        {translations.length > 0 && (
          <span>
            {hasFrenchTranslation && (
              <span>
                Originally written in:{" "}
                {"en" === lang ? (
                  <b>{codeToLanguage("en")}</b>
                ) : (
                  <Link to={languageLink("en")}>English</Link>
                )}
                {" • "}
                {"fr" === lang ? (
                  <b>Français</b>
                ) : (
                  <Link to={languageLink("fr")}>Français</Link>
                )}
                <br />
                <br />
              </span>
            )}
            {readerTranslations.length > 0 && (
              <>
                <span>Translated by readers into: </span>
                {readerTranslations.map((l, i) => (
                  <React.Fragment key={l}>
                    {l === lang ? (
                      <b>{codeToLanguage(l)}</b>
                    ) : (
                      <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                    )}
                    {i === readerTranslations.length - 1 ? "" : " • "}
                  </React.Fragment>
                ))}
              </>
            )}
          </span>
        )}
        {lang !== "en" && lang !== "fr" && (
          <>
            <br />
            <br />
            <Link to={languageLink("en")}>Read the original</Link>
            {" • "}
            <a href={editUrl} target="_blank" rel="noopener noreferrer">
              Improve this translation
            </a>
            {" • "}
            <Link to={`/${lang}`}>View all translated posts</Link>{" "}
          </>
        )}
      </p>
    </div>
  )
}
