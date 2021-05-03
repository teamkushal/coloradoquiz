import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1104Component } from './test-component1104.component';

describe('TestComponent1104Component', () => {
  let component: TestComponent1104Component;
  let fixture: ComponentFixture<TestComponent1104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
