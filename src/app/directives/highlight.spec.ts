import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Highlight } from './highlight';

@Component({
  template: ` <div appHighlight>Test Element</div> `,
  imports: [Highlight],
})
class TestHostComponent {}

describe('Highlight', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const directive = fixture.debugElement.query(By.directive(Highlight));

    expect(directive).toBeTruthy();
  });
});
