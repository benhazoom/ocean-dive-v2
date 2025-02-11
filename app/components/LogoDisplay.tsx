import React from "react";

type CategoryType = {
  [key: string]: { name: string; logo: string }[];
};

const categories: CategoryType = {
  Frontend: [
    { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Redux", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Nuxt.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" },
    { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
  ],
  Backend: [
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "Jwt", logo: "https://jwt.io/img/pic_logo.svg" }
  ],
  Database: [
    { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Prisma", logo: "https://cdn.icon-icons.com/icons2/3914/PNG/512/prisma_logo_icon_248778.png" }
  ],
  Tools: [
    { name: "Postman", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" },
    { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Vsc", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" }
  ],
  Studying: [
    { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
    { name: "nestjs", logo: "https://nestjs.com/img/logo_text.svg" },
    { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png" },
  ]
};

const LogoDisplay = () => {
  return (
    <div className="p-8">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="flex flex-wrap gap-6">
            {categories[category].map((item) => (
              <div key={item.name} className="text-center w-24">
                <img src={item.logo} alt={item.name} className="w-16 h-16 object-contain mx-auto mb-2" />
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoDisplay;
