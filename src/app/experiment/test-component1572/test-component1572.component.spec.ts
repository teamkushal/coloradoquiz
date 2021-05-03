import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1572Component } from './test-component1572.component';

describe('TestComponent1572Component', () => {
  let component: TestComponent1572Component;
  let fixture: ComponentFixture<TestComponent1572Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1572Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
