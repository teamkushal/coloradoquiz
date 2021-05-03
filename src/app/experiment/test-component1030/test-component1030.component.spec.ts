import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1030Component } from './test-component1030.component';

describe('TestComponent1030Component', () => {
  let component: TestComponent1030Component;
  let fixture: ComponentFixture<TestComponent1030Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1030Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
