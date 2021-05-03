import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1131Component } from './test-component1131.component';

describe('TestComponent1131Component', () => {
  let component: TestComponent1131Component;
  let fixture: ComponentFixture<TestComponent1131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
