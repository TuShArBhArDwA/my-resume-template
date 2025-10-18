A single-page, one-column resume for software developers. It uses the base latex templates and fonts to provide ease of use and installation when trying to update the resume. The different sections are clearly documented and custom commands are used to provide consistent formatting. The three main sections in the resume are education, experience, and projects.

### Motivation

I created this template as managing a resume on Google Docs was hard and changing any formatting was too difficult since it had to be applied in multiple places.

Most currently available templates either focus on two columns, or are multiple pages long that didn't work well for career fairs or online applications.

### Quick start

Get started quickly using [Overleaf](https://www.overleaf.com/latex/templates/software-engineer-resume/gqxmqsvsbdjf) template.

### Build using Docker

```sh
docker build -t latex .
docker run --rm -i -v "$PWD":/data latex pdflatex tushar_resume.tex
```

### Preview

![Resume_page-0001](https://github.com/user-attachments/assets/0dd2ef59-67c3-4fea-b63b-02d00383a08b)



### License


This project is licensed under the [MIT License](./LICENSE).  
All data and datasets are owned by **Tushar Bhardwaj**.
