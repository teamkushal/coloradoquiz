import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent884Component } from './test-component884.component';

describe('TestComponent884Component', () => {
  let component: TestComponent884Component;
  let fixture: ComponentFixture<TestComponent884Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent884Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
