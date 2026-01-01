/**
 * CRD Blog Domination Strategy - Article Templates
 * 
 * Standardized article structures following the SOP
 */

export interface ArticleTemplate {
  type: 'site-specific' | 'emotional-long-tail' | 'comparison-failure' | 'guide';
  structure: {
    h1: string;
    intro: string;
    sections: string[];
  };
}

/**
 * Site-Specific Article Template
 * TITLE: [SITE NAME] : comment fonctionne le site et comment faire retirer vos contenus
 */
export const siteSpecificTemplate: ArticleTemplate = {
  type: 'site-specific',
  structure: {
    h1: '[SITE NAME] : comment fonctionne le site et comment faire retirer vos contenus',
    intro: `Si votre contenu apparaît sur [SITE], ce n'est pas un hasard.
Ce site est conçu pour ignorer les demandes classiques de retrait et exploiter les créatrices le plus longtemps possible.

[Add 2-3 more lines of fear/reality/authority]`,
    sections: [
      '## Qu\'est-ce que [SITE] ?',
      '## Comment votre contenu arrive sur [SITE]',
      '## Pourquoi les DMCA classiques échouent',
      '## Qui héberge [SITE] et comment il se cache',
      '## Ce qui fonctionne réellement',
      '## Comment CRD gère [SITE] spécifiquement',
      '## Que faire maintenant',
    ],
  },
};

/**
 * Emotional Long-Tail Article Template
 * TITLE: Quelqu'un a leak mon OnlyFans : que faire (guide clair)
 */
export const emotionalLongTailTemplate: ArticleTemplate = {
  type: 'emotional-long-tail',
  structure: {
    h1: 'Quelqu\'un a leak mon OnlyFans : que faire (guide clair)',
    intro: `[First person pain - normalize panic]
[What you're feeling is normal]
[Give structure and hope]`,
    sections: [
      '## Ce que vous ressentez (panique, honte, colère)',
      '## Ce qu\'il NE faut PAS faire',
      '## Ce qu\'il faut faire immédiatement (24h)',
      '## Ce qui fonctionne à long terme',
      '## Pourquoi gérer cela seul échoue',
      '## CRD comme solution structurée',
    ],
  },
};

/**
 * Comparison/Failure Article Template
 * TITLE: Pourquoi les DMCA gratuits échouent
 */
export const comparisonFailureTemplate: ArticleTemplate = {
  type: 'comparison-failure',
  structure: {
    h1: 'Pourquoi les DMCA gratuits échouent',
    intro: `[What people think works]
[Why it fails in reality]
[What professionals do differently]`,
    sections: [
      '## Ce que les gens pensent qui fonctionne',
      '## Pourquoi cela échoue en réalité',
      '## Ce que les professionnels font différemment',
      '## Quand CRD devient nécessaire',
    ],
  },
};

/**
 * Standard Guide Template
 */
export const guideTemplate: ArticleTemplate = {
  type: 'guide',
  structure: {
    h1: '[Main Keyword]',
    intro: `[Short emotional intro - 4-6 lines]
[Fear/Urgency/Confusion]`,
    sections: [
      '## Quel est le problème',
      '## Pourquoi cela arrive',
      '## Pourquoi la plupart des méthodes échouent',
      '## Ce qui fonctionne réellement',
      '## Comment CRD gère cela',
      '## Que faire maintenant',
    ],
  },
};

/**
 * Get template by article type
 */
export const getTemplate = (type: ArticleTemplate['type']): ArticleTemplate => {
  switch (type) {
    case 'site-specific':
      return siteSpecificTemplate;
    case 'emotional-long-tail':
      return emotionalLongTailTemplate;
    case 'comparison-failure':
      return comparisonFailureTemplate;
    default:
      return guideTemplate;
  }
};

/**
 * Validate article structure against template
 */
export const validateArticleStructure = (
  content: string,
  template: ArticleTemplate
): { valid: boolean; missing: string[] } => {
  const missing: string[] = [];
  const contentLower = content.toLowerCase();

  // Check if main sections exist
  template.structure.sections.forEach(section => {
    const sectionTitle = section.replace(/^##\s+/, '').toLowerCase();
    if (!contentLower.includes(sectionTitle)) {
      missing.push(section);
    }
  });

  return {
    valid: missing.length === 0,
    missing,
  };
};

