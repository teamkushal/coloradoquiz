import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1101Component } from './test-component1101.component';

describe('TestComponent1101Component', () => {
  let component: TestComponent1101Component;
  let fixture: ComponentFixture<TestComponent1101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
