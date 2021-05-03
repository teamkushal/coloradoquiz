import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1800Component } from './test-component1800.component';

describe('TestComponent1800Component', () => {
  let component: TestComponent1800Component;
  let fixture: ComponentFixture<TestComponent1800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
