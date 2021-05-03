import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3243Component } from './test-component3243.component';

describe('TestComponent3243Component', () => {
  let component: TestComponent3243Component;
  let fixture: ComponentFixture<TestComponent3243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
