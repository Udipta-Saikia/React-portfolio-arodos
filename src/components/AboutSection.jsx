import React from 'react'
import { ChartSpline, Code, Users } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Curious & A Learner
            </h3>

            <p className="text-muted-foreground">
              Fairly novice and indulged in development, I aspire to create
              responsive, accessible, and goal-driven web applications using modern
              web technologies.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about building meaningful digital experiences with web
              technologies and purpose. I enjoy teamwork, leadership, and exploring
              the ever-evolving world of web development while continuously learning
              and growing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/assets/GeneralResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic websites using modern frameworks and clean UI design.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartSpline className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics</h4>
                  <p className="text-muted-foreground">
                    Analyzing data to uncover insights and support informed decision-making & ensuring results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Professional Goal</h4>
                  <p className="text-muted-foreground">
                   Effectively collaborating and supporting others,
                   while continuously learning and growing as a professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
