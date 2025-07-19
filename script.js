const skillAreas = [
  {
    label: 'Web Development',
    color: '#a08c85',
    details: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'AngularJS', 'ReactJS', 'ExpressJS', 'MongoDB', 'REST APIs'],
    projects: [
      {
        title: 'DeepSeaDive',
        url: 'https://github.com/sanjanarawald/DeepSeaDive',
        description: 'Enjoy the beautifully immersive UI while you take a deep dive into the seas'
      },
      {
        title: 'VirtualStylist',
        url: 'https://github.com/sanjanarawald/virtualStylist',
        description: 'Ever wondered what make-up, dresses and fashion suits your body type? Well wonder no more!'
      }
    ]
  },
  {
    label: 'Android Development',
    color: '#cbbab3',
    details: ['Java', 'Kotlin', 'Android Studio', 'Flutter'],
    projects: [
      {
        title: 'Mario',
        url: 'https://github.com/sanjanarawald/mario',
        description: 'Enjoy this classic old-school mario game from the 90s inspired by Nintendo with an added twist!'
      },
      {
        title: 'SkinSens',
        url: 'https://github.com/sanjanarawald/SkinSens',
        description: 'An assistant to dermatologists to quick detect skin diseases using the power of a custom trained CNN'
      }
    ]
  },
  {
    label: 'iOS Development',
    color: '#ede6e4',
    details: ['Swift', 'Xcode']
  },
  {
    label: 'Network Programming',
    color: '#e7dddb',
    details: ['Python (sockets)', 'REST APIs', 'WebSockets'],
    projects: [
      {
        title: 'Customized Web Search Server',
        url: 'https://github.com/sanjanarawald/customServer',
        description: 'Customise your HTTP requests using RAG to retrieve data more specific to your requirements'
      }
    ]
  },
  {
    label: 'Machine Learning',
    color: '#b8a9a1',
    details: ['Python', 'TensorFlow Lite', 'scikit-learn', 'pandas', 'numpy'],
    projects: [
      {
        title: 'SkinSens',
        url: 'https://github.com/sanjanarawald/SkinSens',
        description: 'An assistant to dermatologists to quick detect skin diseases using the power of a custom trained CNN'
      },
      {
        title: 'FontDetection',
        url: 'https://github.com/sanjanarawald/FontDetection',
        description: 'Teaching machines to read between the lines - literally! Detecting fonts with the precision of a typography detective'
      }
    ]
  },
  {
    label: 'Computer Vision',
    color: '#d6cfc9',
    details: ['OpenCV', 'Python'],
    projects: [
      {
        title: 'FacialRecognition',
        url: 'https://github.com/sanjanarawald/FacialRecognition',
        description: 'Real time, insane-fast facial recognition and masking'
      }
    ]
  },
  {
    label: 'Cryptography',
    color: '#b6a6a0',
    details: ['Python (cryptography, PyCrypto)']
  }
];

const ctx = document.createElement('canvas');
document.getElementById('skills-pie-container').appendChild(ctx);

const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: skillAreas.map(s => s.label),
    datasets: [{
      data: skillAreas.map(() => 1),
      backgroundColor: skillAreas.map(s => s.color),
      borderWidth: 2,
      borderColor: '#fff',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false // Hide default legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label;
          }
        }
      }
    },
    onClick: (e, elements) => {
      if (elements.length > 0) {
        const idx = elements[0].index;
        showSkillDetail(idx);
      }
    }
  }
});

// Custom left-aligned legend
const skillsPieContainer = document.getElementById('skills-pie-container');

// Subtle prompt above the legend
const promptDiv = document.createElement('div');
promptDiv.textContent = 'Curious? Open a section to see some fascinating projects.';
promptDiv.style.fontFamily = 'Montserrat, Arial, sans-serif';
promptDiv.style.fontSize = '1.05rem';
promptDiv.style.color = '#a08c85';
promptDiv.style.marginBottom = '12px';
promptDiv.style.opacity = '0.85';
skillsPieContainer.appendChild(promptDiv);

const legendDiv = document.createElement('div');
legendDiv.id = 'skills-pie-legend';
legendDiv.style.marginTop = '18px';
legendDiv.style.textAlign = 'left';
legendDiv.style.fontFamily = 'Montserrat, Arial, sans-serif';
legendDiv.style.fontSize = '1rem';
legendDiv.style.display = 'flex';
legendDiv.style.flexDirection = 'column';
legendDiv.style.gap = '8px';

skillAreas.forEach((area, idx) => {
  const item = document.createElement('div');
  item.style.display = 'flex';
  item.style.alignItems = 'center';
  item.style.cursor = 'pointer';
  item.onclick = () => showSkillDetail(idx);
  const colorBox = document.createElement('span');
  colorBox.style.display = 'inline-block';
  colorBox.style.width = '18px';
  colorBox.style.height = '18px';
  colorBox.style.background = area.color;
  colorBox.style.borderRadius = '4px';
  colorBox.style.marginRight = '12px';
  item.appendChild(colorBox);
  const label = document.createElement('span');
  label.textContent = area.label;
  label.style.fontWeight = '600';
  label.style.letterSpacing = '1px';
  item.appendChild(label);
  legendDiv.appendChild(item);
});

document.getElementById('skills-pie-container').appendChild(legendDiv);

function showSkillDetail(idx) {
  document.getElementById('skills-pie-container').style.display = 'none';
  const detailDiv = document.getElementById('skills-detail');
  const area = skillAreas[idx];
  
  let projectsHtml = '';
  if (area.projects && area.projects.length > 0) {
    projectsHtml = `
      <div style="margin-top: 24px;">
        <h4 style="font-family:Montserrat;text-transform:uppercase;letter-spacing:1px;color:#a08c85;margin-bottom:12px;font-size:0.9rem;">Projects</h4>
        ${area.projects.map(project => `
          <div style="margin-bottom: 16px;">
            <a href="${project.url}" target="_blank" style="color:#a08c85;text-decoration:none;font-weight:600;font-family:Montserrat;">${project.title}</a>
            <div style="font-family:Lora,serif;font-style:italic;font-size:0.9rem;color:#6d6d6d;margin-top:4px;">${project.description}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  detailDiv.innerHTML = `
    <button id="back-to-pie" style="background:#a08c85;color:#fff;border:none;padding:8px 18px;border-radius:8px;font-family:Montserrat;margin-bottom:24px;cursor:pointer;">← Back</button>
    <h3>${area.label}</h3>
    <div>
      ${area.details.map(skill => `<span class='edu-detail'>${skill}</span>`).join('')}
    </div>
    ${projectsHtml}
  `;
  detailDiv.style.display = '';
  document.getElementById('back-to-pie').onclick = () => {
    detailDiv.style.display = 'none';
    document.getElementById('skills-pie-container').style.display = '';
  };
} 