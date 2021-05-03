import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1079Component } from './test-component1079.component';

describe('TestComponent1079Component', () => {
  let component: TestComponent1079Component;
  let fixture: ComponentFixture<TestComponent1079Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1079Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
