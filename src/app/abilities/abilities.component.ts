import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  readonly skills: Array<ISkill>;
  readonly starColumns: Array<number>;

  constructor() {
    this.skills = [];
    this.starColumns = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
    this.skills.push(new Skill('Java', 5, 'PROGRAMMING_LANGUAGE'));
    this.skills.push(new Skill('Groovy', 4, 'PROGRAMMING_LANGUAGE'));
    this.skills.push(new Skill('Javascript', 4, 'PROGRAMMING_LANGUAGE'));
    this.skills.push(new Skill('Typescript', 3, 'PROGRAMMING_LANGUAGE'));
    this.skills.push(new Skill('SQL', 3, 'PROGRAMMING_LANGUAGE'));
    this.skills.push(new Skill('OSGi', 4, 'FRAMEWORK'));
    this.skills.push(new Skill('JUnit', 5, 'FRAMEWORK'));
    this.skills.push(new Skill('Spock', 5, 'FRAMEWORK'));
    this.skills.push(new Skill('Maven', 5, 'BUILD_TOOL'));
    this.skills.push(new Skill('Gradle', 3, 'BUILD_TOOL'));
    this.skills.push(new Skill('Git', 5, 'VERSION_CONTROL'));
    this.skills.push(new Skill('XML', 5, 'MARKUP_LANGUAGE'));
    this.skills.push(new Skill('XSLT', 5, 'MARKUP_LANGUAGE'));
    this.skills.push(new Skill('Apache CXF', 3, 'FRAMEWORK'));
    this.skills.push(new Skill('Spring', 5, 'FRAMEWORK'));
    this.skills.push(new Skill('jQuery', 4, 'LIBRARY'));
    this.skills.push(new Skill('MySQL', 3, 'DATABASE'));
    this.skills.push(new Skill('Mongo', 4, 'DATABASE'));
    this.skills.push(new Skill('Angular', 3, 'PLATFORM'));
    this.skills.push(new Skill('React', 3, 'LIBRARY'));
    this.skills.push(new Skill('Eclipse', 5, 'IDE'));
    this.skills.push(new Skill('IntellijIDEA', 5, 'IDE'));
  }
}

export interface ISkill {
  name: string;
  rating: number;
  category: string;
}

export class Skill implements ISkill {

  constructor(public name: string,
              public rating: number,
              public category: string) {
  }
}
