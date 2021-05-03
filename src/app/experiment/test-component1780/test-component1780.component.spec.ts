import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1780Component } from './test-component1780.component';

describe('TestComponent1780Component', () => {
  let component: TestComponent1780Component;
  let fixture: ComponentFixture<TestComponent1780Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1780Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
