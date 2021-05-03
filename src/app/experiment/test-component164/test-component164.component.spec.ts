import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent164Component } from './test-component164.component';

describe('TestComponent164Component', () => {
  let component: TestComponent164Component;
  let fixture: ComponentFixture<TestComponent164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
