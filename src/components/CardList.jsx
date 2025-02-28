import { useState } from "react";
import Card from "./Card";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";
import event7 from "../assets/event7.jpeg";
import event8 from "../assets/event8.png";
import event9 from "../assets/event9.png";
import event10 from "../assets/event10.png";

const events = [
  {
    title: "Hackathon 2025",
    date: "2025-03-10",
    description: "Join the biggest hackathon on campus!",
    link: "https://devpost.com/hackathons",
    image: event1,
  },
  {
    title: "AI Workshop",
    date: "2025-03-15",
    description: "Learn the basics of AI and ML.",
    link: "https://www.coursera.org/learn/machine-learning",
    image: event2,
  },
  {
    title: "Startup Pitch Night",
    date: "2025-03-20",
    description: "Pitch your startup idea to investors.",
    link: "https://www.startupgrind.com/",
    image: event3,
  },
  {
    title: "Art Exhibition",
    date: "2025-04-02",
    description:
      "Showcase your creative works and explore stunning art pieces.",
    link: "https://www.metmuseum.org/",
    image: event4,
  },
  {
    title: "Music Fest",
    date: "2025-04-10",
    description: "Enjoy live performances by student bands and artists.",
    link: "https://www.bonnaroo.com/",
    image: event5,
  },
  {
    title: "Coding Bootcamp",
    date: "2025-04-18",
    description:
      "An intensive one-day coding workshop for beginners and pros alike.",
    link: "https://www.codecademy.com/catalog/all",
    image: event6,
  },
  {
    title: "Sports Tournament",
    date: "2025-05-01",
    description:
      "Compete in basketball, soccer, and volleyball with your peers.",
    link: "https://www.ncaa.com/",
    image: event7,
  },
  {
    title: "Career Fair",
    date: "2025-05-12",
    description:
      "Meet recruiters from top companies and explore job opportunities.",
    link: "https://www.linkedin.com/jobs/",
    image: event8,
  },
  {
    title: "Gaming Night",
    date: "2025-05-20",
    description:
      "Compete in popular games like Valorant, FIFA, and Smash Bros!",
    link: "https://www.twitch.tv/",
    image: event9,
  },
  {
    title: "Mental Health Awareness Seminar",
    date: "2025-05-25",
    description:
      "Learn about mental wellness and coping strategies from experts.",
    link: "https://www.nami.org/",
    image: event10,
  },
];

const CardList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // filter events by keyword and date
  const filteredEvents = events.filter(
    (event) =>
      (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedDate === "" || event.date === selectedDate)
  );

  return (
    <div>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="card-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => <Card key={index} {...event} />)
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default CardList;
