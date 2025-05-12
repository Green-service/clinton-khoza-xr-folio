"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'xr' | 'software' | 'game';
  image?: string;
  technologies: string[];
  link?: string;
  longDescription: string;
};

const Carousel = memo(
  ({
    handleClick,
    controls,
    projects,
    isCarouselActive,
  }: {
    handleClick: (project: Project, index: number) => void
    controls: any
    projects: Project[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = projects.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {projects.map((project, i) => (
            <motion.div
              key={`key-${project.id}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(project, i)}
            >
              <motion.div
                layoutId={`project-${project.id}`}
                className="bg-xr-dark-purple rounded-xl p-3 w-full h-[180px] flex flex-col hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-xr-primary-purple/20"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-xr-primary-purple/10 text-xr-primary-purple">
                    {project.category === 'xr' ? 'XR' : 
                     project.category === 'web' ? 'Web' : 
                     project.category === 'game' ? 'Game' : 'Software'}
                  </span>
                </div>
                
                <h3 className="font-orbitron text-base font-semibold mb-1 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="font-inter text-xs text-white/70 mb-2 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 rounded bg-xr-primary-purple/10 text-xr-primary-purple"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-xr-primary-purple/10 text-xr-primary-purple">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xr-primary-purple hover:text-xr-vivid-purple transition-colors text-xs font-medium group"
                    >
                      View Project
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  <button
                    onClick={() => handleClick(project, i)}
                    className="text-xs font-medium text-xr-primary-purple hover:text-xr-vivid-purple transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

export function ThreeDPhotoCarousel({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = (project: Project) => {
    setActiveProject(project)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveProject(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`project-container-${activeProject.id}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div
              layoutId={`project-${activeProject.id}`}
              className="bg-xr-dark-purple rounded-xl p-6 max-w-xl w-full border border-xr-primary-purple/20 relative"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-xr-primary-purple/10 text-xr-primary-purple hover:bg-xr-primary-purple/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm uppercase tracking-wider font-medium px-3 py-1 rounded-full bg-xr-primary-purple/10 text-xr-primary-purple">
                  {activeProject.category === 'xr' ? 'XR' : 
                   activeProject.category === 'web' ? 'Web' : 
                   activeProject.category === 'game' ? 'Game' : 'Software'}
                </span>
              </div>
              
              <h3 className="font-orbitron text-xl font-semibold mb-3">
                {activeProject.title}
              </h3>
              
              <p className="font-inter text-sm text-white/70 mb-4">
                {activeProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded bg-xr-primary-purple/10 text-xr-primary-purple"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xr-primary-purple hover:text-xr-vivid-purple transition-colors text-sm font-medium group"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[400px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          projects={projects}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
} 