import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1796Component } from './test-component1796.component';

describe('TestComponent1796Component', () => {
  let component: TestComponent1796Component;
  let fixture: ComponentFixture<TestComponent1796Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1796Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
