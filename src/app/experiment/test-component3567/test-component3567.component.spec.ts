import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3567Component } from './test-component3567.component';

describe('TestComponent3567Component', () => {
  let component: TestComponent3567Component;
  let fixture: ComponentFixture<TestComponent3567Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3567Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
