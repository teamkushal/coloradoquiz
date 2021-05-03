import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3122Component } from './test-component3122.component';

describe('TestComponent3122Component', () => {
  let component: TestComponent3122Component;
  let fixture: ComponentFixture<TestComponent3122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
