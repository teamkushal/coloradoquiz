import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1167Component } from './test-component1167.component';

describe('TestComponent1167Component', () => {
  let component: TestComponent1167Component;
  let fixture: ComponentFixture<TestComponent1167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
