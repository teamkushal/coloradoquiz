import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1803Component } from './test-component1803.component';

describe('TestComponent1803Component', () => {
  let component: TestComponent1803Component;
  let fixture: ComponentFixture<TestComponent1803Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1803Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
