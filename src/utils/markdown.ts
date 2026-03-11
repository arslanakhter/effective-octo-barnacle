function parseFrontmatter(text: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = text.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: text };
  }

  const frontmatterText = match[1];
  const content = match[2];

  const frontmatter: Record<string, any> = {};
  const lines = frontmatterText.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      value = value.replace(/^["']|["']$/g, '');

      if (!isNaN(Number(value))) {
        frontmatter[key] = Number(value);
      } else {
        frontmatter[key] = value;
      }
    }
  }

  return { frontmatter, content };
}

export async function loadMarkdown(path: string) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    const text = await response.text();
    const { frontmatter, content } = parseFrontmatter(text);
    return { frontmatter, content };
  } catch (error) {
    console.error('Error loading markdown:', error);
    return { frontmatter: {}, content: '' };
  }
}

export async function loadAllServices() {
  const services = [
    'root-canal',
    'crowns-bridges',
    'nightguard',
    'composite-filling',
    'implant-dentistry',
    'extractions',
    'veneers',
    'exam-cleaning'
  ];

  const serviceData = await Promise.all(
    services.map(async (service) => {
      const { frontmatter, content } = await loadMarkdown(`/content/services/${service}.md`);
      return { slug: service, frontmatter, content };
    })
  );

  return serviceData.sort((a, b) => 
    (a.frontmatter.order || 999) - (b.frontmatter.order || 999)
  );
}
