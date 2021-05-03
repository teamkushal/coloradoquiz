import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2597Component } from './test-component2597.component';

describe('TestComponent2597Component', () => {
  let component: TestComponent2597Component;
  let fixture: ComponentFixture<TestComponent2597Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2597Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
