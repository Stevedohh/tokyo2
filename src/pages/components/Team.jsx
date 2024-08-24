import { useTranslation } from "next-i18next";
import { FaJs, FaReact, FaPython, FaDocker, FaNode, FaAws, FaFigma, FaSearch, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus } from 'react-icons/si';

export default function Team() {
  const { t } = useTranslation('team');

  const iconComponents = {
    FaJs: FaJs,
    FaReact: FaReact,
    FaPython: FaPython,
    FaDocker: FaDocker,
    FaNode: FaNode,
    FaAws: FaAws,
    FaFigma: FaFigma,
    FaSearch: FaSearch,
    FaHtml5: FaHtml5,
    SiTailwindcss: SiTailwindcss,
    SiCplusplus: SiCplusplus
  };

  return (
    <>
      {/* Team Start */}
      <div className="container-fluid team pb-5" style={{ background: '#000000' }}>
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4
              className="text-primary"
              style={{
                background: 'linear-gradient(135deg, #333333, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('our_team')}
            </h4>
            <h1
              className="display-4 mb-4"
              style={{
                background: 'linear-gradient(135deg, #666666, #111111)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('meet_our_team')}
            </h1>
            <p className="mb-0 text-light">
              {t('team_description')}
            </p>
          </div>
          <div className="row g-4">
            {t('members', { returnObjects: true }).map((member, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay={`${0.2 * (index + 1)}s`}
              >
                <div className="team-item text-light p-4">
                  <div className="team-img">
                    <img
                      src={`/assets/img/pr${index + 1}.png`}
                      className="img-fluid rounded-top w-100"
                      alt={member.name}
                    />
                  </div>
                  <div className="team-icon">
                    {member.skills.map((skill, skillIndex) => {
                      const IconComponent = iconComponents[skill.icon];
                      return (
                        <div key={skillIndex} className="skill-icon">
                          <IconComponent className={skill.color} />
                          <p className="mb-0">{skill.skill}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="team-title p-4">
                    <h4 className="mb-0 text-light">{member.name}</h4>
                    <p className="mb-0 text-light">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}
