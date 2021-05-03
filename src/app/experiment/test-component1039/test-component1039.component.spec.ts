import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1039Component } from './test-component1039.component';

describe('TestComponent1039Component', () => {
  let component: TestComponent1039Component;
  let fixture: ComponentFixture<TestComponent1039Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1039Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
