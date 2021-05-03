import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1368Component } from './test-component1368.component';

describe('TestComponent1368Component', () => {
  let component: TestComponent1368Component;
  let fixture: ComponentFixture<TestComponent1368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1368Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
