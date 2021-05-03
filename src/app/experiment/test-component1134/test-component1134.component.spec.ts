import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1134Component } from './test-component1134.component';

describe('TestComponent1134Component', () => {
  let component: TestComponent1134Component;
  let fixture: ComponentFixture<TestComponent1134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
