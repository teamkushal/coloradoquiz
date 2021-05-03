import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1515Component } from './test-component1515.component';

describe('TestComponent1515Component', () => {
  let component: TestComponent1515Component;
  let fixture: ComponentFixture<TestComponent1515Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1515Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
