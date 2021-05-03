import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1507Component } from './test-component1507.component';

describe('TestComponent1507Component', () => {
  let component: TestComponent1507Component;
  let fixture: ComponentFixture<TestComponent1507Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1507Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
