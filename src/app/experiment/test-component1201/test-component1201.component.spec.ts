import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1201Component } from './test-component1201.component';

describe('TestComponent1201Component', () => {
  let component: TestComponent1201Component;
  let fixture: ComponentFixture<TestComponent1201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
