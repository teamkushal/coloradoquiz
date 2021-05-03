import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1532Component } from './test-component1532.component';

describe('TestComponent1532Component', () => {
  let component: TestComponent1532Component;
  let fixture: ComponentFixture<TestComponent1532Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1532Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
