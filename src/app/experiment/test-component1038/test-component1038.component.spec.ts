import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1038Component } from './test-component1038.component';

describe('TestComponent1038Component', () => {
  let component: TestComponent1038Component;
  let fixture: ComponentFixture<TestComponent1038Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1038Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
