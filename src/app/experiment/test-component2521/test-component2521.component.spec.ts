import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2521Component } from './test-component2521.component';

describe('TestComponent2521Component', () => {
  let component: TestComponent2521Component;
  let fixture: ComponentFixture<TestComponent2521Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2521Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
