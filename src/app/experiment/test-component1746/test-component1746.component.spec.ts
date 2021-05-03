import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1746Component } from './test-component1746.component';

describe('TestComponent1746Component', () => {
  let component: TestComponent1746Component;
  let fixture: ComponentFixture<TestComponent1746Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1746Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
