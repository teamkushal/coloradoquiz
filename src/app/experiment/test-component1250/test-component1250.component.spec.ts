import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1250Component } from './test-component1250.component';

describe('TestComponent1250Component', () => {
  let component: TestComponent1250Component;
  let fixture: ComponentFixture<TestComponent1250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
