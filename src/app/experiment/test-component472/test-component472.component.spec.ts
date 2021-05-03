import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent472Component } from './test-component472.component';

describe('TestComponent472Component', () => {
  let component: TestComponent472Component;
  let fixture: ComponentFixture<TestComponent472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent472Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
